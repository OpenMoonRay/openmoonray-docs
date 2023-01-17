---
title: Denoiser

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# <Overview_or_introduction>
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 

# Overview

OpenMoonRay has two methods for denoising its output: 

1. Interactive denoising in moonray_gui
2. The 'denoise' standalone command

Both methods use the same denoising engines:

1. NVIDIA Optix denoiser.  This requires a compatible NVIDIA GPU. <https://developer.nvidia.com/optix-denoiser>
2. Intel Open Image Denoise.  This currently runs on the CPU. <https://www.openimagedenoise.org/>

The denoising engine is selectable.

# Denoising in moonray_gui

Denoising is controlled by several hotkeys that may be used any tine during interactive rendering:

| **Key**      | **Result**                                                                                                               |
|--------------|--------------------------------------------------------------------------------------------------------------------------|
| N            | deNoising on/off                                                                                                         |
| Shift + N    | toggle deNoising mode: Optix / Open Image Denoise                                                                        |
| B            | toggle Buffers to use for denoising (none/normals/normals + albedo)                                                      |

The Optix denoiser is preferred for interactive rendering because it has higher performance (i.e. less lag) than the 
CPU-based Intel Open Image Denoise.  This is mostly because the Intel denoiser competes with the rendering for
CPU resources, while the Optix GPU-based denoiser runs completely on the GPU and is able to run unimpeded.

The denoiser can use auxiliary buffers to improve the denoising quality.  These buffers contain the normals and/or
albedo data.  These need to be specifically set up in the .rdla RenderOutputs so the denoiser knows which
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

The "denoiser_input" attr defaults to "not an input".

The filenames can be different than shown here,
i.e. the albedo output doesn't need to be "albedo.exr" and the RenderOutput doesn't need to be
named "/output/diffuse_albedo".  The denoiser will find any render outputs that are tagged with the
"denoiser_input" attribute, thus the names are not important.

# Denoising with the 'denoise' Command

The commandline 'denoise' command reads an image file to denoise, with optional normals and/or albedo
images.  It outputs a denoised image file.

'denoise' supports both Optix and Open Image Denoise denoisers.  Optix mode requires a compatible
NVIDIA GPU.  If Optix mode is specified but there is no compatible GPU, 'denoise' reports an error
and exits.

The commandline args are:

```bash
  -in input.exr              input image file to denoise
  -albedo albedo.exr         optional input albedo image to aid denoising
  -normals normals.exr       optional input normals image to aid denoising
  -mode optix OR -mode oidn  use Optix or Open Image Denoise denoiser
  -out output.exr            denoised output image file (default = "denoised.exr")
```

The filenames can be different than shown here.  Note that the RenderOutputs do not need
to be tagged in the .rdla file like for moonray_gui because the commandline "denoise" does
not read in .rdla files.  It only reads in the output .exr files.





