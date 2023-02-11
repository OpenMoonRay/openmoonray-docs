---
title: arras_render
---
# arras_render

**arras_render** is the command-line tool for rendering scenes by moonray under distributed
single/multi machine environment.
**arras_render** is the client application and connects to the backend arras moonray processes.
arras_render itself does not do rendering itself.
it creates scene information and sends it to the backend computations.
All rendering job is performed on backend computations (moonray) and rendered image would send
back to the arras_render via socket communication.
(Detailed info is [here](../../../developers-guide/arras))<br>

There are 2 potential benefits to using this style of rendering.<br>
1. Light Weight Code Dependency<br>
The client application does not have a heavy dependency on moonray itself.
The client only needs to think about a small set of dependencies.
2. Scalability<br>
We can easily scale up performance by using more machines in a brute-force way.

**arras_render** is a developer's test tool of single/multi machine distributed moonray rendering
for interactive lighting sessions.
And, arras_render is a good code example of how to write arras moonray client by yourself.<br>

**arras_render** takes in one or more input files (--rdl option) as the same as **moonray**,
and when the render is complete the resulting rendered image is written to disk but this image
containts "**beauty**" and "**alpha**" only.
This output image does not include all of the [RenderOutputs](../../scene-objects/render-output/RenderOutput/)
AOVs.<br>


## LocalOnly mode
We can run arras_render and backend render process (we call this process "MCRT computation".
See more detail [here](../../../developpers-guide/arras)) on the same machine.
We call this execution style "**LocalOnly**" mode.
In this case, you do **NOT** need to run "**minicoord**" coordinator before starting arras_render.
You only need to run **arras_render** process with setup 3 environment variables.
```
export PATH=${rel_root}/bin:${PATH}
export RDL2_DSO_PATH=${rel_root}/rdl2dso.proxy
export ARRAS_SESSION_PATH=${rel_root}/sessions

arras_render --rdl <scene>.rdla --dc local
```
arras_render automatically boots backend mcrt computation and connect to them.
You don't need to specify -s or --session options.
arras_render automatically picks up "mcrt_progressive" for you.<br>
If you want to a specific configuration, it would be better to create new sessiondef file
based on "mcrt_progressive.sessiondef" and modify it.


## Multi-machine mode
We can run arras_render at one host and can run multiple backend computations on other multiple hosts.
In this case, we need to run "**minicoord**" and manage multiple hosts before start arras_render.
(Detail info is [here](../../../developers-guide/arras/distributed-arras/#coordinator))

We need 3 different computations. "dispatch", "mcrt", and "merge" computations for multi-machine
mode (Detail is [here](../../../developpers-guide/arras/)).<br>
Basically, rendering task is done by mcrt computation and we use multiple mcrt computations.
And, we need to run "dispatch" and "merge" computation.
There are many variations of how to configure "dispatch", "mcrt", and "merge" coputation on
multiple hosts.

This is a naive example of mcrt total = 2 configurations.
Using 3 hosts. hostA, hostB, and hostC for backend computations. (Also we need client hosts as well)
Each host has 96 HTcores for example.
- assign mcrt computation to hostA and hostB.
  - assign entire cores to mcrt computations
  ([maxCores](../../../developpers-guide/arras/arras-session-definitions/#requirements) = *).
- assign dispatch computation and merge computation to hostC.
  - This is a most naive configuration and hostC is more lightweight than hostA and hostB.
  - dispatch computation only needs single core (using defalt would be OK and it's 1)
  - Assigning the rest of the cores to merge computation would be nice.<br>
    In this case, assign 94 cores to the merge computation for example.<br>
    94(for merge) + 1(for dispatch) + 1(for arras-framework) = 96.

This is a sessiondef files example of the above configuration.
```
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
See "requirements" object of "dispatch", "mcrt", and "merge".
Actually, "dispatch" does not have "requirements" object and this means all requirement is default.<br>
We can use this sessiondef file from 32HTcore to 96HTcore hosts.
(We can use more cores hosts as well).<br>
Usually, merge computation is not a computational bottleneck if mcrt total is not so high (like around 6 or less).
This means fundamentally, we don't need so many cores for merge computation.
However, merge computation might become a bottleneck if mcrt total is 32 or more configurations for example.
It would be better to assign as many cores as possible to the merge computation under extreme configuration.

"message" object of "dispatch", "mcrt", and "merge" is not dependent on the mcrt total configuration.
This example of "message" object definition is recommended for all mutli-machine configurations.

In order to run arras_render by multi-machine mode, the typical procedure is like this.

run [minicoord](../../../developers-guide/arras/distributed-arras/#coordinator) on client host<br>
run [arras4_node](../../../developers-guide/arras/distributed-arras/#node) on hostA, hostB, and hostC.<br>

on client hosts, you need to set 3 environment variables and run arras_render as follows.
```
export PATH=${rel_root}/bin:${PATH}
export RDL2_DSO_PATH=${rel_root}/rdl2dso.proxy
export ARRAS_SESSION_PATH=${rel_root}/sessions

arras_render --host <minicoord-running-host> --port 8888 --rdl <scene.rdla> -s <sessiondef-name> --num-mcrt 2 --current-env
```
In this case, -s specified sessiondef file name of above sessiondef example (but without extension .sessiondef).<br>
This sessiondef file should be located in ${rel_root}/sessions/.<br>
Actually, --num-mcrt overwrite the "arrayExpand" field of "mcrt". So this sessiondef file can be used for
other --num-mcrt numbers as well.<br>
You can use multiple `--rdl` options. arras_render reads multiple rdl files by specified order.

## Scene Data for Multi-machine rendering
There are 2 important rules you should understand for multi-machine rendering.

The first one is related to the remote disk mount on the backend hosts.

We create sceneContext data at the client process and send it to the backend computation by message.
Backend computations receive them and try to reconstruct scenes based on the received message.
If this received message includes separate data located on the server and pointed by the filename path for example,
backend computation needs to open that file properly based on the filename path.
In order to do this, all the data need to locate at the same location from all backend computations.<br>
This is easy to achieve by locating the data to the remote disk which mount to each host by the same name.
For example, scene data is saved into a remote disk. and that remote disk is mounted to /work/scene on each host.

Under this environment, all backend computations can access the destination data by the same filename path.

The next tip is you should use an absolute path for file information in your scene and should **NOT** use a relative path.
If you use a relative path like "./geomA" in your scene, backend computation tries to open the file using "./geomA".
But probably the current directory is not the same and backend computation can not open the file and fail.
You should use an absolute path for all filename information in your scene.


## Command-line options
Use just execute **arras_render** without any command-line options to display the full list.
(The full command-line options include DWA-specific options but are not explained here.)<br>
The followings are the options we use with
[minicoord](../../../developers-guide/arras/distributed-arras/#coordinator) environment and **LocalOnly** mode.

```
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

`--dc local` is used for **LocalOnly** mode<br>

`--infoRec`, `--inforRecDisp`, and `--infoRecFile` options are used for statistical information dump purposes.<br>
`--debug-console` option is designed for debugging/developping purposes.

## Mouse / Hotkey Operation

`Left Mouse Botton` dragging rotates the camera direction.
There is no orbit camera mode like moonray_gui at this moment.

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
