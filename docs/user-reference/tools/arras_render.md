---
title: Arras Render
---
# Arras Render

**arras_render** is a command-line and GUI tool for rendering scenes with MoonRay in a distributed single or multi-machine environment.  It is a client application which connects to backend Arras computation processes.   The arras_render client application does not do rendering on its own, rather it creates the scene information and sends that to backend computations.  All rendering is performed on these backend computations using <span class="define">moonray</span> and the rendered image is sent back to arras_render via socket communication.  More detailed information can be found in the [Arras overview documentation]({{ "/developer-reference/arras/" | absolute_url }})


There are three primary benefits to using this style of rendering:

1. Lightweight code dependency
	* The client application does not have a heavy dependency on <span class="define">moonray</span> itself.
	* The client only needs to think about a small set of dependencies.
2. Scalability
	* Performance can easily scale up by using more machines.
3. The frontend process can be isolated from unexpected backend termination.
	* Backend computations are separate processes, and so the frontend can restart backend to recover
from any unexpected backend termination.

**arras_render** is a developer's test tool of single and multi-machine distributed MoonRay rendering for interactive lighting sessions.  It is a good code example of how to write an Arras MoonRay client.  It takes in one or more input files using the `--rdl` option, the same as <span class="define">moonray</span>, and when the render is complete the resulting image is written to disk.  Note that the output image does not inculde all of the [RenderOutput]({{ "/user-reference/scene-objects/render-output/RenderOutput/" | absolute_url }}) AOVS, but only the `beauty` and `alpha`.


## Local mode
The frontend **arras_render** and the [backend Arras computation]({{ "/developer-reference/arras/" | absolute_url }}) process can be run on the same machine.  This execution style is referred to as "Local" mode.  In this mode, it is not needed to run the [*minicoord*]({{ "/developer-reference/arras/distributed-arras/#setup" | absolute_url }}) coordinator before starting arras_render.  It is only needed to run the arras_render process, having established 3 environment variables:


```bash
export PATH=${rel_root}/bin:${PATH}
export RDL2_DSO_PATH=${rel_root}/rdl2dso.proxy
export ARRAS_SESSION_PATH=${rel_root}/sessions

arras_render --rdl <scene>.rdla --dc local --current-env
```
**arras_render** automatically boots the backend MCRT computations and connects to them.  It is not necessary to specify `-s` or `--session` options, and arras_render automatically picks up "mcrt_progressive".  To make a specific configuration, create new sessiondef file based on `mcrt_progressive.sessiondef` and modify it.


## Multi-machine mode
**arras_render** can be run at one host and can connect to multiple backend MCRT computations on other hosts.  In this mode it is necessary to run the [*minicoord* coordinator]({{ "/developer-reference/arras/distributed-arras/#coordinator" | absolute_url }}) and manage multiple hosts before starting arras_render.

Three different [computations]({{ "/developer-reference/arras/" | absolute_url }}) are needed for multi-machine mode: "dispatch", "mcrt", and "merge".  The rendering task is done by the *mcrt* computation, and multiple *mcrt* computations can be used.  There are many variations on how to configure *dispatch*, *mcrt* and *merge* computation across multiple hosts.

This is a simple multi-node example with two *mcrt* computations, using 3 hosts in total; hostA and hostB for the *mcrt* computations, and hostC for the *dispatch* and *merge* computations. Additional client hosts will be needed as well.

In this example, each host has 96 hyperthreaded cores:


- Assign an mcrt computation each to hostA and hostB.
  - Assign all free cores to each mcrt computation by setting [maxCores]({{ "/developer-reference/arras/arras-session-definitions/#requirements" | absolute_url }}) = *.
- Assign a dispatch computation and merge computation to hostC.
  - This is a naive configuration and hostC is more lightweight than hostA and hostB.
  - The dispatch computation only needs a single core (the default is 1 core)
  - Assigning the remainder of the cores to the merge computations is desired.<br> 
    In this example, we assign 94 cores to the merge computation<br>
    94 (for merge) + 1 (for dispatch) + 1 (for arras-foundation) = 96 cores.

This is an example sessiondef file for the above configuration.
```lua
{
    "name": "mcrt_progressive_n_sample",
    "computations": {
        "(client)": {
            "messages": {
                "merge": "*"
            }
        },

        "dispatch": {
            "entry": "yes",
            "dso": "libcomputation_progmcrt_dispatch.so",
            "continuous": "false",
            "fps": 1,
            "numMachines": "$arrayNumber.mcrt",
            "requirements": {
                "computationAPI": "4.x",
                "context":"arras_moonray"
            },
            "messages": {
                "(client)": {
                    "accept": [
                        "RDLMessage",
                        "GenericMessage",
                        "ViewportMessage",
                        "JSONMessage",
                        "RenderSetupMessage"
                    ]
                },
                "merge": { "accept": ["GenericMessage"] }
            }
        },

        "mcrt": {
            "arrayExpand": 2,
            "dso": "libcomputation_progmcrt.so",
            "fps": 12,
            "machineId": "$arrayIndex",
            "numMachines": "$arrayNumber",
            "packTilePrecision": "auto16",
            "enableDepthBuffer": true,
            "requirements": {
                "computationAPI": "4.x",
                "context":"arras_moonray",
                "resources": {
                    "maxCores": "*",
                    "minCores": "*",
                    "memoryMB": 16384
                }
            },
            "messages": {
                "(client)": {
                    "accept": [
                        "GenericMessage",
                        "ViewportMessage"
                    ]
                },
                "dispatch": "*",
                "merge": {
                    "accept": [
                        "GenericMessage",
                        "CreditUpdate"
                    ]
                }
            }
        },

        "merge": {
            "dso": "libcomputation_progmcrt_merge.so",
            "fps": 1,
            "numMachines": "$arrayNumber.mcrt",
            "packTilePrecision": "auto16",
            "requirements": {
                "computationAPI": "4.x",
                "context":"arras_moonray",
                "resources": {
                    "maxCores": 94,
                    "minCores": 30.0
                }
            },
            "messages": {
                "(client)": {
                    "accept": [
                        "GenericMessage",
                        "ViewportMessage",
                        "CreditUpdate"
                    ]
                },
                "mcrt": {
                    "accept": [
                        "PartialFrame",
                        "ProgressiveFrame",
                        "GenericMessage",
                        "JSONMessage"
                    ]
                },
                "dispatch": "GenericMessage"
            }
        }
    }
}
```

### Example Notes
In the above example sessiondef file, look at the "requirements" object of "dispatch", "mcrt", and "merge".  Note that "dispatch" does not have "resources" defined in its "requirements" object, which means the default setting of all resources is used for "dispatch".

 We can use this same sessiondef file for from 32 HTcores machine to 96 HTcores machines. (This sessiondef file might be also OK for more than 96 HTcores machine).
 
Additionally, in the usual case the *merge* computation is not a computational bottleneck if the mcrt total is not too high; around 6 or less.  This means that not so many cores are needed for the for merge computation.  However, the merge computation may become a bottleneck if the mcrt total is 32 or more configurations, for example.  In this case, it would be better to assign as many cores as possible to the merge computation under extreme configuration.

The "message" object of "dispatch", "mcrt", and "merge" is not dependent on the mcrt total number.  The example "message" object definition in the above example is recommended for all multi-machine configurations.

In order to run arras_render in multi-machine mode, the typical procedure looks like the following.

- Run [minicoord]({{ "/developer-reference/arras/distributed-arras/#coordinator" | absolute_url }}) on the client host.
- Run [arras4_node]({{ "/developer-reference/arras/distributed-arras/#node" | absolute_url }}) on hostA, hostB, and hostC.
- On the client hosts, set 3 environment variables and run arras_render as follows:

```bash
export PATH=${rel_root}/bin:${PATH}
export RDL2_DSO_PATH=${rel_root}/rdl2dso.proxy
export ARRAS_SESSION_PATH=${rel_root}/sessions

arras_render --host <minicoord-running-host> --port 8888 --rdl <scene.rdla> -s <sessiondef-name> --num-mcrt 2 --current-env
```

In this example, the `-s` setting specified the sessiondef file name, but without the extension ".sessiondef".  The sessiondef file should be located in ${rel_root}/sessions/.

Additionally the `--num-mcrt` setting overwrites the "arrayExpand" field of "mcrt" object. So this sessiondef file can be used with other `--num-mcrt` numbers as well.

Multiple `--rdl` options can be set as well.  arras_render reads multiple rdl files in the order specified.

## Scene Data for Multi-machine rendering
There are two important rules to understand for multi-machine rendering.

The first one is related to the remote disk mount on the backend hosts.

SceneContext data is created at the client process and then sent to the backend computation via message.  Backend computations receive the message and try to reconstruct scenes based on the received message data.  If the received message includes separate data located on the server and pointed by a filename path, for example, then the backend computation needs to open that file properly based on the filename path.  In order to do this, all the data needs to be located at the same location from all the backend computations.  This is easy to achieve by locating the data to a remote disk which is mounted to each host with the same name.  For example, scene data is saved on to a remote disk which is mounted to /work/scene on each host.  With this example environment, all backend computations can access the destination data using the same filename path.

The next rule is to use an absolute path for file information in your scene and to **NOT** use a relative path.  If a relative path like "./geomA" is in the scene, the backend computation will try to to open the file using "./geomA".  However, it's likely that the current directory is *not* the same and therefore the backend computation cannot open the file and will fail.  Therefore it's recommended to use an absolute path for all filename information in the scene.


## Characteristic of Moonray multi-machine rendering
Current multi-machine implementation has several advantages as follows.
- Each machine does not need to sync to start the timing of rendering. Sometimes boot timing of backend computations is very different depending on the each machine's condition. The current multimachine implementation is very generous for boot backend timing difference.
Quick boot computation start rendering first and slow boot computation will join the later timing.
- We can use mixed situations of different performance spec machines for backend computations. We can achieve pretty much full utilization of computational resources  for each backend MCRT computation even though each hardware performance is very different.
We don't need to set up exact same spec machines.
- Render is finally can be finished even if some of the backend MCRT computation is dead during rendering sessions.
- Easy to achieve very scalable performance for MCRT calculation phase by multi-machine.

Especially in order to achieve good scalability by host count, inter-communication between backend MCRT computation is minimized.

One of the important tasks is how to properly stop rendering under multiple machine configuration.
Merge computation needs to evaluate merged image results and analyze whether entire pixels have enough samples or not. 
After that, merge computation sends a stop render message to all MCRT computations if the result merged image already includes enough samples. Each MCRT computation stops after receiving this STOP message from the merge computation. Usually, MCRT computation needs some interval to stop after receiving the STOP message and this is depending on the timing of which phase of rendering MCRT is processing at that time. 
Probably, you might see more than 100% final rendering progress percentage in some configurations and scenes. This overrun of progress percentage is related to the STOP logic of multi-machine implementation.

This solution works well for uniform sampling but does not work well for adaptive sampling at this moment. Please use uniform sampling if possible.

## Command-line options
Running `arras_render` without any command-line options will display the full list of options (including DWA-specific options which are not covered here).

The following described the options used with the [minicoord]({{ "/developer-reference/arras/distributed-arras/#coordinator" | absolute_url }}) environment and **Local** mode.

```bash
$ arras_render
At least one RDL file is required
  --help                            produce help message
  --dc arg (=gld)
  --host arg                        ACAP host name, if unspecified ACAP will be
                                    located using the studio's config service
  --port arg (=8087)                ACAP port number, ignored unless --host is
                                    specified
  -s [ --session ] arg              Name of Arras session to use
  -l [ --log-level ] arg (=2)       Log level [0-5] with 5 being the highest
  --gui                             Display frames in a gui window
  --no-gui                          Disable gui
  --overlay                         Display progress info in an overlay in the
                                    gui window
  --overlayFont arg (=Arial)        Font to use when overlay is enabled
  --overlaySize arg (=32)           Font size to use when overlay is enabled
  --rdl arg                         Path to RDL input file(s)
  --exr arg                         Path to output EXR file
  --num-mcrt arg (=1)               Number of MCRT computations to use (implies
                                    -s rdla_array).
  --num-cores arg                   Overrides the number of cores requested by
                                    the MCRT computation.
  --merge-cores arg                 Overrides the number of cores requested by
                                    the MERGE computation.
  --fps arg                         Overrides the frame rate for the MCRT
                                    computation.
  --aov-interval arg (=10)          Set the interval rate for sending AOVs, a
                                    value of 0 disables this feature.
  -t [ --con-timeout ] arg (=30)    Amount of time in seconds to wait for
                                    client connection.
  --auto-credit-off                 disable sending out credit after each frame
                                    is received
  --trace-level arg (=0)            trace threshold level (-1=none,5=max)
  --min-update-ms arg (=0)          minimum camera update interval
                                    (milliseconds)
  --infoRec arg (=0)                infoRec interval (sec). disable if set 0.0
  --infoRecDisp arg (=10)           infoRec display interval (sec)
  --infoRecFile arg (=./run_)       set infoRec filename
  --showStats                       Display clientReceiverFb's statistical info
                                    to the cerr
  --debug-console arg (=-1)         specify debug console port.
  --current-env                     Use current environment as computation
                                    environment
```

The `--dc local` option is used for **Local** mode.

The `--infoRec`, `--inforRecDisp`, and `--infoRecFile` options are used for statistical information purposes.

The `--debug-console` option is designed for debugging purposes.

## Mouse / Hotkey Operation

`Left Mouse Button` dragging rotates the camera direction.  There is no orbit camera mode like moonray_gui at this moment.

Key|Description
---|---
`q`|Slow down movement
`w`|Translate forward
`e`|Speed up movement
`r`|Reset camera to original start-up world location
`a`|Translate left
`d`|Translate right
`c`|Translate downward
`Space`|Translate upward
