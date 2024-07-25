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
* discover/locate all texture images that the USD scene references which do not contain mipmaps or tiling data
* create a new version of the texture in TX format which includes mipmaps and tiling data
* update the USD scene files (by default) to reference the new TX textures

NOTE: Because `usd_mipmap_images` updates the USD scene files in-place, it may be a good idea to make a backup copy of the scene before running it.

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
