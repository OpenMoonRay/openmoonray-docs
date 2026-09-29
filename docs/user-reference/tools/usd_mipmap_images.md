---
title: usd_mipmap_images
---
# usd_mipmap_images

usd_mipmap_images is a command-line utility which can be used to prepare USD scenes that may have non-tiled, non-mipmapped texture images for rendering in MoonRay.

MoonRay and the Hydra render delegate hdMoonray require all textures to be tiled and mipmapped for efficient random access during rendering.
Typical studio pipelines will ensure that all textures are in ready-to-render TX format (or other) before rendering by running OpenImageIO's `maketx` or some equivalent tool on each texture image to create the mipmaps and tiling data.
See the [Textures]({{ "/user-reference/how-to-guides/textures/" | absolute_url }}) and [Texture Format]({{ "/user-reference/performance/texture-format/" | absolute_url }}) pages for more details.

However, some publicly available USD scenes come with textures that are not in suitable image formats for efficient rendering, such as JPG, BMP, PNG, etc.
For scenes such as these the `usd_mipmap_images` tool can be used to prepare the textures for rendering and update the references to those texture images by updating the USD scene files in-place.

When you run `usd_mipmap_images` on a USD scene, it attempts to do the following:
* find texture images referenced by non-animated USD asset attributes that do not contain mipmaps or tiling data
* create a new version of the texture in TX format which includes mipmaps and tiling data
* update the affected USD scene files (by default) to reference the new TX textures

NOTE: Because `usd_mipmap_images` updates the USD scene files in-place, it may be a good idea to make a backup copy of the scene before running it.

## Important caveats

- The tool needs OpenImageIO's `iinfo` and `maketx` commands on `PATH`.
- It examines only the default value of USD `Asset` attributes. Time-sampled texture paths are not converted, even if that attribute also has a default value.
- Converted `.tx` files are written beside their source images. If a matching `.tx` file already exists, the tool skips regeneration. In the current implementation, that pre-existing file is not recorded as a conversion, so the original USD asset reference is **not** rewritten to the `.tx` path. To have the tool both generate the texture and update the USD reference, remove or rename the existing `.tx` before running it.
- By default, the tool updates USD files in place to point to the `.tx` files. `--no_export` still creates textures but leaves USD references unchanged.
- `--cleanup` deletes source images after conversion. Verify the generated textures and updated scene before using this option.
- `--force` allows processing to continue when some images fail to convert; it does not repair failed textures, and references to those images remain unchanged.

### Mipmap filtering artifacts

The tool invokes `maketx` without specifying a custom filter or any texture-semantic handling. By default, [`maketx`](https://openimageio.readthedocs.io/en/latest/maketx.html) uses a triangle filter; when halving evenly sized mip levels, this is equivalent to averaging 2x2 groups of pixels (a box filter). It does not compensate for filtering artifacts. As a result:

- Filtering can mix colors across UV-island boundaries, causing island edges to bleed. Adequate texture padding can reduce this.
- Opacity or mask textures can average opaque and transparent texels, making opacity appear to leak into neighboring pixels.
- Normal maps are filtered like ordinary color images; averaging encoded normals can smooth or distort the resulting surface normals.
- Roughness maps are also averaged, which can smooth out sharp changes in roughness.

Inspect the converted textures and render results at the intended viewing distances. For opacity, normal, roughness, or tightly packed UV-island textures, use a pipeline that generates mipmaps with filtering appropriate to the texture data instead of relying on this utility.

## Command-line options
Use the _-h_ flag to display the full list of command-line options.

```bash
$ usd_mipmap_images -h
usage: usd_mipmap_images [-h] [--force] [--cleanup] [--verbose]
                         [--allow_warnings] [--no_export]
                         [--max_threads MAX_THREADS]
                         input_file

positional arguments:
  input_file                Name of the root usd file to convert

optional arguments:
  -h, --help                Show this help message and exit
  --force                   Proceed even if some of the images cannot be converted
  --cleanup                 Delete the original image files after conversion
  --verbose                 Show more details about what is happening
  --allow_warnings          Allow USD and maketx warnings to print
  --no_export               Dont write any usd files, just convert the textures
  --max_threads MAX_THREADS Number of threads to use for texture conversion
```
