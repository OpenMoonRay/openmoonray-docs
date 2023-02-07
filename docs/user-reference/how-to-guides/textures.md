---
title: textures
---

# Textures

MoonRay requires textures to be tiled and mipmapped before rendering. The OpenImageIO utility application `maketx` is the easiest way to do this.

## Workflow
In most cases, MoonRay requires supplied textures to be tiled and mipmapped. The easiest way to achieve this is through OpenImageIO’s `maketx` utility, which will convert the provided image to a tiled and mipmapped TIFF file with a TX extension.

## maketx
The `maketx` default settings work for most cases, making its usage extremely simple:

```bash
maketx input.exr
```

## Image Formats
Most high-dynamic range images (e.g., those used for image-based lighting) will be stored in real-valued formats (i.e., half, float, or double). Texture maps for materials may be stored in any format. In general, smaller data types consume less space on disk and in working application memory (RAM) at the loss of color ranges and fidelity. Images can easily be converted to other file formats with OpenImageIO’s `oiiotool` utility, but not all formats support all data types. Below we list out supported data types for EXR and TIFF files:

### EXR
- 16-bit half
- 32-bit float
- 32-bit unsigned integer

### TIFF
- 32-bit float
- 64-bit double
- 8-bit unsigned integer
- 16-bit unsigned integer
- 32-bit unsigned integer

It should be noted that while TX files are a particular version of TIFF, raw TIFF files do not support 16-bit half data, but TX files do.
The utility `oiiotool` supports dithering when converting to an 8-bit TIFF. Dithering will not cost extra memory while rendering, but it may interfere with compression, making the image take up more space on disk.

## Gamma Correction
MoonRay assumes scene linear color spaces for all textures except for 8-bit RGB, on which MoonRay applies an inverse gamma-2.2 curve.

## Exceptions
The only texture MoonRay accepts in non-tiled non-mipmapped form is the texture on a cookie light filter v2, which will accept raw EXR files.

## Texture Cache
Smaller data types save working memory (RAM) and can increase render performance. Our texture caching system will (generally) read from disk on demand and cache textures to disk as needed. Smaller data types lead to smaller disk reads, increasing rendering performance. Increasing the texture cache through the scene variable texture_cache_size can also improve performance if the desired cached textures do not fit in the texture cache.

## Motivation
### Tiles
Images are separated into tiles stored internally in the generated file format. The tiles allow the renderer to load smaller portions of the image as needed, decreasing disk and network read times and increasing cache efficiency.

### Mipmaps
Mipmaps are copies of the image stored at different resolutions. Image resolutions are repeatedly decreased by half in each dimension until an image of 1x1 pixels is generated. Like tiles, mipmaps allow the renderer to load smaller images for efficiency, but furthermore, they allow prefiltering of images to reduce rendering artifacts without a loss of image fidelity. The choice of which mipmap to load is based on several factors, e.g., distance from the intersection and roughness of the originating material. 
 