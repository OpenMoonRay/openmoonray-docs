---
title: light-path-visualizer
---
# Light Path Visualizer

The Light Path Visualizer is a debugging tool that allows users to view the light path tree from a selected pixel. 
It is currently integrated into moonray_gui only. 

## Usage

### moonray_gui
Use the hotkey `v` to open the menu for the Light Path Visualizer. From there you can turn on the visualizer and 
select your desired pixel using the mouse. You can also rotate around your visualization using moonray_gui's 
navigation keys.

<aside> <!-- Also: <aside class="info-aside"> -->
<p>All pixel selection is done with respect to the original camera location,
   so if you 1) change the camera, then 2) click to select a pixel, it will lead to unexpected results.
   We recommend using the menu or resetting the camera before clicking to avoid confusion. </p>
</aside>
{: .info-aside}

![]({{ "/assets/images/user-reference/tools/light-path-visualizer/basic_demo.gif" | absolute_url }})

### Understanding the Visualization
The rays are color-coded as follows:
- **diffuse rays**: magenta
- **specular rays**: teal
- **light rays** : yellow
- **bsdf samples**: orange
- **camera rays**: blue

These colors can be changed in the menu as needed. 

Rays are drawn semi-transparently when behind a scene object, and when a light ray encounters an occluder, it is 
drawn black after the intersection point to indicate it failed the visibility test. 

### Parameters

The current user parameters are listed below. Note that changes to any of these parameters affect the visualization only, 
and do not have an effect on the values used in the full render.

| Parameter | Default | Description |
| --------- | ------- | ----------- |
| Pixel | (0, 0) | Selected pixel |
| Use Scene Sampling Settings | false | Use the sampling values provided in the rdla. Disables the other sampling settings. |
| Pixel Samples | 2 | Square root of the # pixel samples to visualize |
| Light Samples | 1 | Square root of the # light samples to visualize |
| Bsdf Samples | 1 | Square root of the # bsdf samples to visualize |
| Max Depth | 1 | Max ray depth to visualize |
| Specular Ray Visibility | true | Show specular rays |
| Diffuse Ray Visibility | true | Show diffuse rays |
| Bsdf Sample Visibility | true | Show rays created by sampling the bsdf |
| Light Sample Visibility | true | Show rays created by sampling the bsdf |
| Line Width | 1 | Width of the lines. Most efficient when set to 1. |
| Diffuse Ray Color | Rgb(255, 0, 255) | Color to draw the diffuse rays |
| Specular Ray Color | Rgb(0, 255, 255) | Color to draw the specular rays |
| Light Sample Color | Rgb(255, 255, 0) | Color to draw the light rays |
| Bsdf Sample Color | Rgb(255, 102, 0) | Color to draw the diffuse rays |
| Camera Ray Color | Rgb(0, 0, 255) | Color to draw the camera rays |

## How Does it Work?

Whenever a parameter is changed, we run a "simulation" from the given pixel, or to elaborate, we hijack the current 
rendering proces to start a render with the viewport restricted to the given pixel. We like this method because it is 
quick (since it's a single-pixel render), lightweight (since we only gather the info we need), and allows for 
"speculative" drawing (we can change parameters on the fly to see what *would* happen to the ray tree). The biggest 
potential drawback is that a single-pixel render is not guaranteed to match the full render's results, due to potential 
non-determinism or change in random sequence order. However, we think this method gives good insight into what's 
happening under the hood, and we hope to explore alternative execution modes in the future. 