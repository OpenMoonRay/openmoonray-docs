---
title: MoonRay GUI Viewer
---
# MoonRay GUI Viewer

The **moonray_gui** executable is the interactive rendering counterpart to [**moonray**](../moonray).  It displays the render in-progress in a graphical window, and enables you to
navigate the camera using the keyboard and mouse. You can also view individual color channels and any
[RenderOutputs](../../scene-objects/render-output/RenderOutput/) that are defined in your scene.

This tool was meant to be used primarily as a developer tool rather than for production artists. It is especially useful during testing and when working
directly with [RDLA](../../../getting-started/about/rdl-scene-format/) files via a text editor.

When the render is complete the resulting beauty render is written to disk, as well as any additional images that are specified via
[RenderOutputs](../../scene-objects/render-output/RenderOutput/)

<aside> <!-- Also: <aside class="info-aside"> -->
<p>Starting with refplatvfx-2025, the `moonray_gui` executable will instead invoke the imgui-based <b>moonray_gui_v2</b>, documented <a href="../moonray_gui_v2">here</a>. </p>
</aside>
{: .warn-aside}

## Command-line options
Most of the [command-line options](../moonray/#command-line-options) are the same as the
[**moonray**](../moonray) executable, with a few exceptions, so we won't list them all here.

Use the _-h_ flag to display the full list of command-line options.

```bash
$ moonray_gui -h
```

One key difference with **moonray_gui** is that the input [RDL2](../../../getting-started/about/rdl-scene-format/) files are automatically
"watched" for changes, and the render updates/restarts to reflect any changes to any of the input files.

### Deltas
While similar to the RDL2 input files specified with the _-in_ command-line argument, delta files are RDL2 input files specified with the _-deltas_ command-line argument.
Deltas are handled differently, and expected to contain only small updates to the existing scene.

During interactive renders with moonray_gui the delta files are also watched for changes, and the render is updated immediately to reflect those changes.

Examples include changing the color or position of a light, moving the camera, or changing the color of a material.

```bash
$ moonray_gui -in scene.rdla -deltas my_updates.rdla
```

Depending on the nature of the changes specified in a delta file the renderer may essentially restart.

## Camera modes
There are two supported modes of navigation: _orbit_ and _free_cam_

Orbit is the default mode, but you can change this on the command-line by specifying _-free_cam_,
or by using the `o` key to toggle between modes at run-time.

## Hotkeys (common to both modes)

| **Key**               | **Result**                                                                                                                          |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `h`                   | Display list of hotkeys                                                                                                             |
| `Alt`+`RMB`           | Roll camera                                                                                                                         |
| `r`                   | Reset camera to original start-up world location                                                                                    |
| `t`                   | Print current camera matrix to console                                                                                              |
| `o`                   | Toggle between free camera and orbit camera                                                                                         |
| `u`                   | Upright camera (remove roll)                                                                                                        |
| `p`                   | Toggle bucket progress on/off                                                                                                       |
| `w`                   | Translate forward                                                                                                                   |
| `s`                   | Translate backward                                                                                                                  |
| `a`                   | Translate left                                                                                                                      |
| `d`                   | Translate right                                                                                                                     |
| `Space`               | Translate upward                                                                                                                    |
| `c`                   | Translate downward                                                                                                                  |
| `q`                   | Slow down movement                                                                                                                  |
| `e`                   | Speed up movement                                                                                                                   |
| `k`                   | Take snapshot - saves an image of the current render result (eg. ./snapshot.0001.exr) ( see console output )                        |
| `l`                   | Toggle fast lighting mode, useful for for moving the camera in heavy scenes ( see console output )                                  |
| `Alt`+`Up`            | Switch to previous fast lighting mode ( see console output )                                                                        |
| `Alt`+`Down`          | Switch to next fast lighting mode ( see console output )                                                                            |
| `i`                   | Cycles "pick" mode (Light Contributions, Geometry, Geometry Part, Material, None). Use `RMB` to pick, see console output for result |
| `n`                   | Toggle denoising ( see console output )                                                                                             |
| `N`                   | Toggle between NVIDIA's Optix Denoiser (currently requires driver version 470+) and Intel's Open Image Denoise                      |
| `b`                   | Select which additional (B)uffers to use for denoising (none, albeldo only, or albedo and normals).                                 |
| `` ` ``               | Display RGB channels                                                                                                                |
| `1`                   | Display red channel                                                                                                                 |
| `2`                   | Display green channel                                                                                                               |
| `3`                   | Display blue channel                                                                                                                |
| `4`                   | Display alpha channel                                                                                                               |
| `5`                   | Display luminance                                                                                                                   |
| `6`                   | Display saturation (not implemented yet)                                                                                            |
| `7`                   | Display normalized RGB channels (0-1)                                                                                               |
| `8`                   | View heat map of number of samples rendered per pixel (mainly useful in conjunction with adaptive sampling).                        |
| `,`                   | Display previous RenderOutput (aka AOV)( see console output )                                                                       |
| `.`                   | Display next RenderOutput (aka AOV) ( see console output )                                                                          |
| `ESCAPE`              | Quit rendering and exit                                                                                                             |
| `x`(hold)+`LMB`(drag) | Adjust exposure                                                                                                                     |
| `x`(hold)+`LMB`(tap)  | Reset exposure                                                                                                                      |
| `x`(tap)              | Set exposure                                                                                                                        |
| `y`(hold)+`LMB`(drag) | Adjust gamma                                                                                                                        |
| `y`(hold)+`LMB`(tap)  | Reset gamma                                                                                                                         |
| `y`(tap)              | Set gamma                                                                                                                           |
| `Shift`+`Up`\|`Down`  | Increment/decrement exposure by 1                                                                                                   |

## Hotkeys (Orbit mode)

In this mode (the default), the camera orbits around a fixed point in the scene.  You can choose a new pivot using `Crtl`+`LMB`, but note that
it doesn't currently work when clicking on curves or points.

| **Action**   | **Result**                                          |
|--------------|-----------------------------------------------------|
| `Alt`+`LMB`  | Orbit around current pivot point                    |
| `Alt`+`MMB`  | Pan                                                 |
| `Alt`+`RMB`  | Dolly (zoom)                                        |
| `Ctrl`+`LMB` | Refocus orbit pivot to point under the mouse cursor |

## Hotkeys (Freecam mode)

This mode is modeled around the `w``a``s``d` scheme common in first person shooters. The mouse control differs from the orbit mode in that `LMB`
rotates the camera around the current camera position, rather than that of some world space location. The result is that it feels like how you
would look around in a typical FPS game. Used in conjunction with the translation keys, this allow you to "fly" around the scene.

| **Key**         | **Result**                                                                                                                |
|-----------------|---------------------------------------------------------------------------------------------------------------------------|
| `LMB`           | Orbit around camera position                                                                                              |
| `w`             | Translate forward                                                                                                         |
| `s`             | Translate backward                                                                                                        |
| `a`             | Translate left                                                                                                            |
| `d`             | Translate right                                                                                                           |

## Denoising in moonray_gui

Denoising is controlled by several hotkeys that may be used any tine during interactive rendering:

| **Key**      | **Result**                                                                                                               |
|--------------|--------------------------------------------------------------------------------------------------------------------------|
| `n`          | deNoising on/off                                                                                                         |
| `N`          | toggle deNoising mode: OptiX / Open Image Denoise                                                                        |
| `b`          | toggle Buffers to use for denoising (none/normals/normals + albedo)                                                      |

The OptiX denoiser is preferred for interactive rendering because it has higher performance (i.e. less lag) than the 
CPU-based Intel Open Image Denoise.  This is mostly because the Intel denoiser competes with the rendering for
CPU resources, while the OptiX GPU-based denoiser runs completely on the GPU and is able to run unimpeded.

The denoiser can use auxiliary buffers to improve the denoising quality.  These buffers contain the normals and/or
albedo data.  These need to be specifically set up in the RDLA RenderOutputs so the denoiser knows which
AOVs to use.  E.g.

```bash
RenderOutput("/output/diffuse_albedo") {
   ["file name"] = "albedo.exr",
   ["result"] = 7, -- material aov
   ["material aov"] = "D.albedo", 
   ["denoiser_input"] = "as albedo",
}

RenderOutput("/output/result/normal") {
   ["file name"] = "normal.exr",
   ["result"] = 3, -- state variable
   ["state variable"] = 2, -- "N"
   ["channel format"] = 0,
   ["channel_suffix_mode"] = "rgb",
   ["denoiser_input"] = "as normal",
}
```

The _denoiser_input_ attr defaults to "not an input".

The filenames can be different than shown here,
i.e. the albedo output doesn't need to be "albedo.exr" and the RenderOutput doesn't need to be
named "/output/diffuse_albedo".  The denoiser will find any render outputs that are tagged with the
_denoiser_input_ attribute, thus the names are not important.

## OpenColorIO
moonray_gui supports OpenColorIO-v2 for refplat v2021 and above.

### Usage
Users may supply one **.ocio** config file to specify the transformation from scene-referred linear space to ACES or some other color space.
By specifying an OCIO file via the $**OCIO** environment variable, users can specify which **.ocio** config to use. If no config file is provided
(or if the file path is bad), a raw config file is created (basically a no-op). The hotkey `z` can be used to toggle between the previous
method of color grading and the new method using OCIO. 

If the _-apply_lut_ command-line option is used (or if you aren't using refplat v2021 or above), OCIO support will be disabled
{: .warn-aside}

### Color Grading Transformation Order

1.  Apply exposure
2.  Apply user gamma
3.  Channel Filtering (RGB, RED, GREEN, BLUE, ALPHA, or LUMINANCE)
4.  Apply display/view transform specified in config OR apply 1.0/2.2
    gamma
5.  Clamp \[0, 1\]

