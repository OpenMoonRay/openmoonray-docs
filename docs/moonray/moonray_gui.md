---
title: moonray_gui

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Using `moonray_gui`

The `moonray_gui` command opens a graphical window that enables you to
navigate a scene in real-time. There are two supported modes of
navigation: _orbit_ and _freecam_ (which are described below). 

Orbit is the default mode, but you can override this on the command line by specifying
`-free_cam`, or by using the `O` key to toggle between modes at run-time.

## Keyboard shortcuts (common to both modes)

| **Key**      | **Result**                                                                                                                |
|-----------------|---------------------------------------------------------------------------------------------------------------------------|
| Alt + LMB + RMB | Roll                                                                                                                      |
| R               | Reset camera to original start-up world location                                                                          |
| T               | Print current camera matrix to console                                                                                    |
| O               | Toggle between free camera and orbit camera                                                                               |
| U               | Upright camera (remove roll)                                                                                              |
| P               | Toggle bucket progress on/off                                                                                             |
| W               | Translate forward                                                                                                         |
| S               | Translate backward                                                                                                        |
| A               | Translate left                                                                                                            |
| D               | Translate right                                                                                                           |
| Space           | Translate upward                                                                                                          |
| C               | Translate downward                                                                                                        |
| Q               | Slow down movement                                                                                                        |
| E               | Speed up movement                                                                                                         |
| I               | Pickers (cycle pickers light contributions, geometry , geometry part , and material). Use the right mouse button to pick. |
| N               | Toggle Optix real-time denoising (requires nVidia GPU with drivers of 3.80 or above).                                     |
| B               | Select which additional (B)uffers to use for optix denoising (none, albeldo only, or albedo and normals).                 |
| \`              | Display RGB channels                                                                                                      |
| 1               | Display red channel                                                                                                       |
| 2               | Display green channel                                                                                                     |
| 3               | Display blue channel                                                                                                      |
| 4               | Display alpha channel                                                                                                     |
| 5               | Display luminance                                                                                                         |
| 6               | Display saturation (not implemented yet)                                                                                  |
| 7               | Display normalized RGB channels (0-1)                                                                                     |
| 8               | View heat map of number of samples rendered per pixel (mainly useful in conjunction with adaptive sampling).              |
| \<              | Display previous render output (or what normal people call AOVs)                                                          |
| \>              | Display next render output (or what normal people call AOVs)                                                              |

## Orbit mode

This mode is modeled on the current camera behavior in Torch. The mouse
does nothing by default unless you hold down the ALT key.

| **Action** | **Result**                                          |
|------------|-----------------------------------------------------|
| Alt + LMB  | Orbit around current pivot point                    |
| Alt + MMB  | Pan                                                 |
| Alt + RMB  | Zoom (dolly)                                        |
| Ctrl + LMB | Refocus orbit pivot to point under the mouse cursor |

## Freecam mode

This mode is modeled around the WASD scheme common in first person
shooters. The mouse control differs from the orbit mode in that LMB
rotates the camera around the current camera position, rather than that
of some world space location. The result is that it feels like how you
would look around in a typical FPS game. Used in conjunction with the
translation keys, this allow you to "fly" around the scene.

# Command line options for moonray_render/moonray_gui

Use the `-h` flag to display the command line options.

```
$\> raas_gui -h

$\> raas_render -h

-help  
Print this message.

-in scene.rdl{a\|b}  
Input RDL scene data. May appear more than once. Processes multiple  
files in order. Reapplies all files whenever any one changes.  
-deltas file.rdl{a\|b}  
Updates to apply to RDL scene data. May appear more than once.  
Applies deltas from a particular file whenever it changes.

-out scene.exr  
Output image name and type.

-threads n  
Number of threads to use (all by default).

-size 1920 1080  
Canonical frame width and height (in pixels).

-res 1.0  
Resolution divisor for frame dimensions.

-sub_viewport l b r t  
-sub_vp l b r t  
Clamp viewport render region.

-debug_pixel x y  
Only render this one pixel for debugging. Overrides viewport.

-dso_path dso/path  
Prepend to search path for RDL DSOs.

-texturesystem texsys  
Choose a specific texture system. Valid options are  
sony, dwaproduction, or dwarealtime. Default is dwaproduction.

-camera camera  
Camera to render from.

-layer layer  
Layer to render from.

-fast_geometry_update  
Turn on supporting fast geometry update for animation.

-record_rays .raydb/.mm  
Save ray database or mm for later debugging.

-primary_range 0 \[0\]  
Start and end range of primary ray(s) to debug. Only active with  
-record_rays.

-depth_range 0 \[0\]  
Start and end range of ray depths to debug. Only active with  
-record_rays.

-rdla_set "var name" "expression"  
Sets a global variable in the Lua interpreter before any RDLA is  
executed.

-scene_var "name" "value"  
Override a specific scene variable.

-attr_set "object" "attribute name" "value"  
Override the value of an attribute on a specific SceneObject.

-attr_bind "object" "attribute name" "bound object name"  
Override the binding on an attribute of a specific SceneObject.

-info  
enable verbose progress and statistics logging on stdout.

-\[not\]bundled  
Enable \[disable\] bundled rendering (disabled by default).

-ray_streaming  
Use the ray streaming approach to ray intersections (only applies to
bundled mode).

-stats filename.csv  
enable logging of statistics to a formatted file.

-pam_config ("path"\|"URI"\|"json text") "config name" "config site"  
Sets the PAM config file, uri, or explicit json text, as well as the
name and site  
Ex: -pam_config
/studio/igo/mstr/general/config/show_services_prod.config igo GLD

-pam_sandbox "sandbox URI"  
Sets the sandbox to use when reading PAM project files. If omitted, no
sandbox is used

-pam_file_page_size kb  
Specifies the chunk size of all pam file read requests. 0 disables paged
reads.  
If a cache host is used, the page size is set by the cache host.  
Default is 0kb.

-pam_file\_\<use\|no\>\_cache  
Enable or disable explicit caching of pam file reads. Default is off.

-pam_file\_\[not\_\]buffered  
Enable or disable internal pam file buffering. Typically you'll want to
disable  
paged reads and caching if enabling this options. Default is on.

-pam_file_cache_host hostname  
Specify the host name of the raas_cached server. Use "" to use an
embedded cache.  
Default is ""

-pam_file_cache_port port  
Specify the port of the raas_cached server.  
Default is 19000.

-pam_file_cache_pool_size mb  
Specify max memory size about in-core pam file read cache by MByte. 0 is
unlimited.  
Default is 0MB (=unlimited).

-pam_file_cache_vmem_size mb  
Specify max memory size about out-of-core pam file read cache by MByte.
0 is disable out-of-core functions  
Default is 0MB (=disable out-of-core)

-pam_file_cache_vmem_core vmcore  
Specify vmcore filename for out-of-core pam file read cache.  
Default is "/tmp/blockCache.vmcore"

-pam_file_cache_unixdomain_sock_path path  
Specify unixdomain socket file path for raas_cached connection which
running on same host.  
If path starts w/ '@' (e.g., @abc), using abstruct namespace unixdomain
connection internally.  
Default is "/tmp/raas_cached.localhost."

-athena_tags "TAG1=VALUE1 TAG2=VALUE2 ... TAGN=VALUEN"  
Provided string will be sent to Athena Log Server and can be used to
access stats on this render  
Intended to be used for storing user specific data of interest such as
RATS tests, testmaps, etc  
TAG and VALUES are entirely up to the user

-free_cam  
Use a WASD FPS style camera when in interactive mode (defaults to  
orbit camera).

-no_tile_progress  
Turn off the diagnostic tile outlines rendered on top of the image when
in gui mode.

-apply_crt  
Apply color render transform. The default LUT is used if no override is
specified.

-override_lut  
Path to a binary file containing a 64\*64\*64\*RGBfloat OpenGL
compatible volume texture.
```

# See Also

-   [Using raas_gui &
    raas_render](file:///C:\pages\viewpage.action%3fpageId=389544976)
