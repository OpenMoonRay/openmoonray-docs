---
title: denoise
---
# Denoising

MoonRay has two methods for denoising its output: 

1. Interactive denoising in [**moonray_gui**](../moonray-gui)
2. The **denoise** standalone command-line tool

Both methods use the same denoising engines:

1. NVIDIA OptiX denoiser.  This requires a compatible NVIDIA GPU. <https://developer.nvidia.com/optix-denoiser>
2. Intel Open Image Denoise.  This currently runs on the CPU. <https://www.openimagedenoise.org/>

The denoising engine is selectable.

## Denoising with the **denoise** Command-line Tool

The **denoise** command-line tool reads an image file to denoise, with optional normals and/or albedo
images.  It outputs a denoised image file.

**denoise** supports both OptiX and Open Image Denoise denoisers.  OptiX mode requires a compatible
NVIDIA GPU.  If OptiX mode is specified but there is no compatible GPU, **denoise** reports an error
and exits.

The command-line args are:

```bash
  -in input.exr              input image file to denoise
  -albedo albedo.exr         optional input albedo image to aid denoising
  -normals normals.exr       optional input normals image to aid denoising
  -mode optix OR -mode oidn  use OptiX or Open Image Denoise denoiser
  -out output.exr            denoised output image file (default = "denoised.exr")
```

## Denoising in moonray_gui
See the [**moonray_gui**](../moonray-gui/#denoising-in-moonray_gui) page for information about interactive denoising.

