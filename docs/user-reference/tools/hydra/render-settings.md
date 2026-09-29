---
title: HdMoonRay Render Settings
---

# HdMoonRay Render Settings

This page describes the render settings supported by HdMoonRay. The way these are set depends on the host application:
- In usdview choose View/Render Settings. 
- In Houdini the “eye” button in the viewer lower-right brings up a control panel and these are on the first tab. 
- In Maya a control panel is brought up by clicking the empty box to the right of MoonRay in the Renderers menu on the viewer.

Some option defaults can be changed with the environment variables listed below.
## Use Remote Hosts
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_HOSTS > 0

**Description:** When this is turned on, hdMoonRay will render using one or more hosts taken from the Arras pool, instead of running on your local machine. This can reduce the load on the local machine, and resolve to a final image much more quickly if multiple remote hosts are used. You should check the availability of Arras hosts before using this. This option has no effect in debug mode.

## Remote Hosts
**Type:** Int

**Default:** 5

**Environment Variable:** $HDMOONRAY_HOSTS=n

**Description:** Sets the number of remote hosts to use. Shading will be faster roughly in proportion to the number of hosts you use, although the initial "render prep" stage, before shading begins, will remain roughly the same. Check the number of available Arras hosts before using this, since selecting more than are currently available will cause renders to fail. This option has no effect if "Use Remote Hosts" is off.

## Local Reserved Cores
**Type:** Int

**Default:** 1

**Environment Variable:** $HDMOONRAY_LOCAL_RESERVED_CORES=n

**Description:** Sets the `reservedCores` resource requirement on the MoonRay
computation for a single-host Arras session. Changing it while using local mode
requires the session to reconnect.

## Max FPS
**Type:** Float

**Default:** 12

**Environment Variable:** $HDMOONRAY_MAX_FPS=n

**Description:** This option sets the maximum number of image updates per second that MoonRay will provide during shading. It doesn't affect the speed of the render, just how often it updates the display with the latest image. Normally you shouldn't need to change this : it might sometimes be useful to turn it lower in order to reduce network traffic when using remote hosts.

## Maximum connect retries
**Type:** Int

**Default:** 2

**Environment Variable:** $HDMOONRAY_MAX_CONNECT_RETRIES=n

**Description:** Sets how many times HdMoonRay retries creating an Arras
session after the initial connection attempt fails.

## Debug Mode
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DEBUG_MODE=1 

**Description:** This switch turns on an alternate mode that can be used to help track down bugs or performance issues. It works by loading MoonRay directly into the application process. We don't recommend turning this option on for normal use. Some features don't work in developer mode, including remote hosts and pausing the render. If MoonRay asserts or crashes in developer mode, the entire application will exit.

## Disable Render
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DISABLE_RENDER=1

**Description:** Disables actual rendering, so that we can measure the performance of Hydra and the construction of the RDL SceneContext separately from the renderer.

## Generate Only
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_GENERATE_ONLY=1

**Description:** Uses the normal render delegate and generates the MoonRay
scene, but skips rendering products driven by a Hydra `RenderSettings` prim.
Unlike Disable Render, this setting can be changed after delegate creation.

## Restart (toggle)
**Type:** Bool

**Default:** False

**Environment Variable:**

**Description:** This is a toggle switch that has an effect each time you click it (Hydra doesn't support plain buttons in renderer settings : a toggle is the only way to get the same behavior). When you switch it, hdMoonRay shuts down the renderer and restarts it from scratch. It also allows you to retry a failed Remote Hosts setup. This option has no effect other than to reload textures in debug mode.

## Reload Textures (toggle)
**Type:** Bool

**Default:** False

**Environment Variable:**

**Description:** Switching this forces MoonRay to re-read all texture files from disk.

## Show Debug Messages
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DEBUG=1 

**Description:** Enables printing of debug messages to the console. Turning this on will display a large number of debugging messages from MoonRay and hdMoonRay.

## Show Info Messages
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_INFO=1 

**Description:** Enables printing of info messages to the console. This shows a smaller set of messages than "Show Debug", but includes the MoonRay render summary.

## Show Render Settings
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_SHOW_RENDER_SETTINGS=1

**Description:** When enabled, prints all current render-setting keys, types,
and values. It then prints subsequent setting changes while the option remains
enabled.

## Show Render Passes
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_SHOW_RENDER_PASSES=1

**Description:** Prints the camera and AOV bindings the first time each Hydra
render pass executes.

## Log Level (1-5)
**Type:** Int

**Default:** 1

**Environment Variable:** $HDMOONRAY_LOGLEVEL=n

**Description:** Sets how many debug messages to show from the remote hosts (or the single local host when not in debug mode)

## Rdla Output
**Type:** String

**Default:**

**Environment Variable:** $HDMOONRAY_RDLA_OUTPUT=name

**Description:** Write the SceneContext as rdla. The file is written whenever the value of this option changes. Use “foo.rdla” to write an rdla file, “foo.rdlb” to write an rdlb file, or just “foo” to write both an rdla and rdlb, split so all the heavy binary data is in the rdlb, but the structure can be seen in the rdla.

## Disable Lighting
**Type:** Bool

**Default:** False

**Environment Variable:**

**Description:** Ignore any lights in the scene, and render it with the default dome light. This is used to implement the light on/off button in Houdini. Usdview has other methods of turning off all the lights that work as well.

## Double Sided
**Type:** Bool

**Default:** True in the standard package (False if the environment variable is unset)

**Environment Variable:** $HDMOONRAY_DOUBLESIDED=1

**Description:** When this is on, all geometry is treated as double-sided, and to get single sided set int primvars:moonray:side_type = 1. When this is off standard USD behavior is used, where everything is single-sided unless bool doubleSided = true.

## Maximum Mesh Resolution
**Type:** Float

**Default:** 0.0

**Environment Variable:** $HDMOONRAY_MAX_MESH_RESOLUTION=n

**Description:** Clamps the mesh resolution derived from Hydra refinement when
the value is greater than 0. A `moonray:mesh_resolution` primvar takes
precedence, so this setting does not clamp an explicitly authored primvar.
Zero disables the clamp.

## Decode Normals
**Type:** Bool

**Default:** False

**Environment Variable:** None

**Description:** Requests decoding of normal-map channels by multiplying them
by 2 and subtracting 1. Changing the setting causes surface materials to be
rebuilt. There is no dedicated environment variable in this source revision;
due to an implementation coupling, `HDMOONRAY_DOUBLESIDED` also initializes
this setting.

## Enable Motion Blur
**Type:** Bool

**Default:** True

**Environment Variable:** $HDMOONRAY_ENABLE_MOTION_BLUR=0

**Description:** Enables motion blur when both the scene time-sampling interval
and the selected camera shutter interval have nonzero duration. Otherwise
HdMoonRay disables motion blur for the render pass.

## Prune Willow
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_PRUNE_WILLOW=1

**Description:** Prevents `WillowGeometry_v3` procedural objects from being
created and hides existing instances.

## Prune FurDeform
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_PRUNE_FURDEFORM=1

**Description:** Prevents `FurDeformGeometry` procedural objects from being
created and hides existing instances.

## Prune Volumes
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_PRUNE_VOLUME=1

**Description:** Prevents geometry identified by HdMoonRay as volume geometry
from being created and hides existing instances.

## Prune WrapDeform
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_PRUNE_WRAPDEFORM=1

**Description:** Prevents `WrapDeformGeometry` procedural objects from being
created and hides existing instances.

## Prune CurveDeform
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_PRUNE_CURVEDEFORM=1

**Description:** Prevents `CurveDeformGeometry` procedural objects from being
created and hides existing instances.

## Force Polygon
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_FORCE_POLYGON=1

**Description:** Renders meshes as polygons instead of subdivision surfaces.

## Execution Mode
**Type:** String

**Default:** auto

**Environment Variable:** $HDMOONRAY_EXEC_MODE=mode

**Description:** Selects `auto`, `vectorized`, `xpu`, or `scalar` execution.
The setting is passed to local debug rendering and to the MoonRay computation
in an Arras session. Other strings are rejected by those implementations.

## Denoising
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_ENABLE_DENOISE=1

**Description:** Enables the OptiX denoiser. Denoising does not currently work
in debug mode.

## Enable OIDN
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_ENABLE_DENOISE_OIDN=1

**Description:** Requests Open Image Denoise and enables denoising on the
Arras-backed delegate. In this source revision, the setting is not propagated
to denoise-engine selection, so the receiver remains configured for OptiX.

## Denoise : Albedo Guiding
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DENOISE_ALBEDO_GUIDING=0

**Description:** When OptiX denoising is enabled, this uses the albedo to guide it.

## Denoise : Normal Guiding
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DENOISE_NORMAL_GUIDING=0

**Description:** When OptiX denoising is enabled, this uses the normal to guide it.
