---
title: HdMoonRay Render Settings

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# <Overview_or_introduction>
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 

# HdMoonRay Render Settings
These may be set to change hdMoonRay’s behavior. In usdview choose View/Render Settings. In Houdini the “eye” button in the viewer lower-right brings up a control panel and these are on the first tab. In Maya a control panel is brought up by clicking the empty box to the right of MoonRay in the Renderers menu on the viewer.

It is very useful to set these before the first render. In Houdini and Maya this is possible, you can edit the settings for any renderer, not just the one being used. usdview does not let you change the settings until after you set the renderer, so a number of environment variables are provided, these change the default value so it is in that state before you switch to MoonRay. These are shown at the end of each description.

## Use Remote Hosts
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_HOSTS > 0

**Description:** When this is turned on, hdMoonRay will render using one or more hosts taken from the Arras pool, instead of running on your local machine. This can reduce the load on the local machine, and resolve to a final image much more quickly if multiple remote hosts are used. You should check the availability of Arras hosts before using this. This option has no effect in developer mode.

## Remote Hosts
**Type:** Int

**Default:** 5

**Environment Variable:** $HDMOONRAY_HOSTS=n

**Description:** Sets the number of remote hosts to use. Shading will be faster roughly in proportion to the number of hosts you use, although the initial "render prep" stage, before shading begins, will remain roughly the same. Check the number of available Arras hosts before using this, since selecting more than are currently available will cause renders to fail. This option has no effect if "Use Remote Hosts" is off.

## Max FPS
**Type:** Float

**Default:** 12

**Environment Variable:** 

**Description:** This option sets the maximum number of image updates per second that MoonRay will provide during shading. It doesn't affect the speed of the render, just how often it updates the display with the latest image. Normally you shouldn't need to change this : it might sometimes be useful to turn it lower in order to reduce network traffic when using remote hosts.

## Debug Mode
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DEBUG_MODE=1 

**Description:** This switch turns on an alternate mode that can be used to help track down bugs or performance issues. It works by loading MoonRay directly into the application process. We don't recommend turning this option on for normal use. Some features don't work in developer mode, including remote hosts and pausing the render. If MoonRay asserts or crashes in developer mode, the entire application will exit. | 

## Disable Render
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DISABLE=1

**Description:** Disables actual rendering, so that we can measure the performance of Hydra and the construction of the RDL SceneContext separately from the renderer. |

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

## Log Level (1-5)
**Type:** Int

**Default:** 1

**Environment Variable:** $HDMOONRAY_LOGLEVEL=n

**Description:** Sets how many debug messages to show from the remote hosts (or the single local host when not in debug mode)

## Rdla Output
**Type:** String

**Default:**

**Environment Variable:** $HDMOONRAY_RDLA_OUTPUT=name

**Description:** Write the SceneContext as rdla. This is done each time rendering is started by any changes. Use “foo.rdla” to write an rdla file, “foo.rdlb” to write an rdlb file, or just “foo” to write both an rdla and rdlb, split so all the heavy binary data is in the rdlb, but the structure can be seen in the rdla.

## Disable Lighting
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DOUBLESIDED=1

**Description:** Ignore any lights in the scene, and render it with the default dome light. This is used to implement the light on/off button in Houdini. Usdview has other methods of turning off all the lights that work as well.

## Double Sided
**Type:** Bool

**Default:** True

**Environment Variable:** $HDMOONRAY_DISABLE_LIGHTING=1

**Description:** When this is on, all geometry is treated as double-sided, and to get single sided set int primvars:moonray:side_type = 1. When this is off standard USD behavior is used, where everything is single-sided unless bool doubleSided = true. 

## Denoising
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_ENABLE_DENOISE=1

**Description:** Enables the Optix denoiser which will denoise the rendered image.   Denoising does not currently work with debug mode.

## Denoise : Albedo Guiding
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DENOISE_ALBEDO_GUIDING=0

**Description:** When Optix denoising is enabled this uses the albedo to guide it.

## Denoise : Normal Guiding
**Type:** Bool

**Default:** False

**Environment Variable:** $HDMOONRAY_DENOISE_NORMAL_GUIDING=0

**Description:** When Optix denoising is enabled this uses the normal to guide it.
