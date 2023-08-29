---
title: Texture Format
---
# Texture Format

## Tiled Textures

<aside class="info-aside">
MoonRay <b>requires</b> the use of tiled textures, which significantly improves rendering performance. The only exception is within the cookie light filter, which accepts raw EXR files.
</aside>  

The OpenImageIO utility
`maketx` or `oiiotool` should be used to convert common file formats to the optimal TX format.

## Gamma Correction
MoonRay assumes scene linear color spaces for all textures except for 8-bit RGB, on which MoonRay applies an inverse gamma-2.2 curve.

## Texture Format
Texture loading during rendering should use the best trade-off between renderer memory usage, disk space, network traffic, and reading performance.

The central aspect is ensuring textures use the least memory once loaded in the renderer's in-memory texture cache. Memory usage is a premium in a ray tracer, especially in larger scenes.
- 8-bit textures use half the memory compared to 16-bit half-float EXR textures once loaded in the renderer's 
in-memory texture cache. You would have to double the renderer's texture cache size to get the same performance, so we recommend leveraging 8-bit textures as much as possible.
- EXR textures should use 16-bit floats instead of 32-bit floats per channel, which can save another 2x in memory 
  usage. 32-bit float precision is never needed for texture maps.
- Grayscale textures should use single-channel files and never RGB or RGBA files. Using single-channel files can save 
  3x to 4x in memory usage, respectively.
As a contrived but not unheard-of example, compounding the three bullet points, we can make grayscale textures use 16x less renderer memory when using 8-bit single-channel textures, compared to 32-bit float RGBA textures.

To lower the disk space and network traffic used by textures, use the file format choice and compression options judiciously. The issues are:
- The EXR format doesn't support 8-bit per channel images, but the TX format does.
- Both EXR and TX formats can be either lossily or losslessly compressed. The "zip" compression is the best to-date 
  lossless compression for both formats. The "dwa-med" or "dwa-hi" can be used to do lossy-compression of EXR files, and the "jpeg" compression (with high-quality settings equal to or above 90) can be used to do effective and artifact-free lossy-compression of TX files.

General tests across various formats show that texture load / decoding time is generally insignificant compared to total render time across these options.

## Texture Format Recommendation

Surfacing artists can author their textures in a fully-linear color pipeline and save them to 16-bit half-float EXR (or another preferred format). However, before rendering, the painted textures should be converted to mipmapped and tiled "render-ready" textures as follows:
- Surfacing color textures: using 8-bit gamma 2.2 is sufficient visually, so using TX files, either zip or
  jpeg-compressed (-q >= 90), is advised.
- High-dynamic-range lighting color textures: use 16-bit EXR with dwa-med, dwa-hi, or zip compression.
- Normal-Displacement, bump, and normal maps: use 16-bit half-float EXR render-ready textures to avoid precision / 
  visual artifacts. We should use single-channel for normal-displacement maps. Compression should be zip.
- Vector Displacement maps should be 32-bit float RGB zip-compressed.
- Other grayscale masks or control maps (e.g., roughness or radius) are best as 8-bit single-channel TX, either zip 
  or jpeg-compressed (-q >= 90).

## Texture Conversion Examples

Creating a render-ready texture with `zip` compression:
```bash
maketx input.exr -d half --oiio --compression zip -o output.tx
```

Creating a render-ready texture with `dwa-hi` compression:
```bash
maketx input.exr -d half --oiio --compression dwaa:45 -o output.tx
```

Creating a render-ready texture with `dwa-med` compression:
```bash
maketx input.exr -d half --oiio --compression dwaa:85 -o output.tx
```

Creating an 8-bit render-ready texture from a linear EXR[^gamma]:
```bash
maketx input.exr --colorconvert linear sRGB -d uint8 --oiio --compression zip -o output.tx
```

Creating a dithered 8-bit render-ready texture from a linear EXR:
```bash
oiiotool input.exr --powc 1.0/2.2 --dither -d uint8 -o transitional.tif
maketx transitional.tif -d uint8 --oiio --compression zip -o output.tx
```

Forcing a single channel for grayscale textures:
```bash
maketx input.exr --nchannels 1 -d uint8 --oiio --compression zip -o output.tx
```

[^gamma]: MoonRay applies a 2.2 gamma curve to 8-bit textures, which is close, but not exact, to the sRGB gamma curve.
