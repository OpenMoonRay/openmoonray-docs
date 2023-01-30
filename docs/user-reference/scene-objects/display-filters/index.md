---
title: DisplayFilters

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DisplayFilters
![DisplayFilter Example]({{site.baseurl}}/assets/images/user-reference/scene-objects/display-filters/displayFilterExample.png)

## Overview
DisplayFilters are compositing nodes that can alter pixel values as a post-process in MoonRay. 

**Inputs**: RenderOutputs and/or other DisplayFilters, *excluding*:
- cryptomatte
- deep
- time per pixel
- weight

**Output**: The result can be chained with another DisplayFilter or piped to a RenderOutput, which allows you to save the result to disk and/or monitor as it is progressively refined in your interactive render session. The RenderOutput type must be "display filter", like so:
```lua
local idf = ImageDisplayFilter("/display/image") { ... }

RenderOutput("/output/idf") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = idf,
    ["channel_name"] = "idf"
}
```

## Types

| Name | Description |
| ---- | ----------- |
| [BlendDisplayFilter](BlendDisplayFilter) | blends between two inputs, `input1` and `input2`, given some `blendAmt` and `blendType` |
| [ClampDisplayFilter](ClampDisplayFilter) | clamps the rgb values of an `input` image buffer between `min` and `max`|
| [ColorCorrectDisplayFilter](ColorCorrectDisplayFilter) | modifies the color of an image buffer | 
| [ConstantDisplayFilter](ConstantDisplayFilter) | produces a render output of a uniform `color` |  
| [ConvolutionDisplayFilter](ConvolutionDisplayFilter) | convolves a kernel with a specified `kernel_type` and `kernel_size` with an `input` image |  
| [DiscretizeDisplayFilter](DiscretizeDisplayFilter) | bins the r, g, and b values of the `input` buffer into a specified `num_bins` |   
| [DofDisplayFilter](DofDisplayFilter) | applies a 2D Depth of Field blur on an image buffer |   
| [HalftoneDisplayFilter](HalftoneDisplayFilter) | adds the effect of halftone dots observed in old printing methods |  
| [ImageDisplayFilter](ImageDisplayFilter) | fits a given image to the `input`'s render dimensions |  
| [OpDisplayFilter](OpDisplayFilter) | performs a user-specified `operation` on `input1` and `input2` |  
| [OverDisplayFilter](OverDisplayFilter) | layers two image buffers, `input_top` and `input_bottom` |   
| [RampDisplayFilter](RampDisplayFilter) | takes in a series of `colors`, `positions`, and `interpolations` to generate a ramp of the specified `ramp_type` |   
| [RemapDisplayFilter](RemapDisplayFilter) | maps the colors of an `input` from a specified range to a desired output range |  
| [RgbToFloatDisplayFilter](RgbToFloatDisplayFilter) | combines the r,g,b channels of an image buffer into a grayscale image buffer |   
| [RgbToHsvDisplayFilter](RgbToHsvDisplayFilter) | takes in a RGB render input and converts it to HSV, and vice versa |   
| [ShadowDisplayFilter](ShadowDisplayFilter) | takes in an `occluded` aov and an `unoccluded` aov to produce shadows of the specified `density` and `shadow_color` |  
| [TangentSpaceDisplayFilter](TangentSpaceDisplayFilter) | produces engine-ready normal maps|   
| [ToonDisplayFilter](ToonDisplayFilter) | outlines objects and discretizes the color of an image buffer | 
