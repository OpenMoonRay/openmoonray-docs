---
title: Commands
---
# Commands

## usdrecord

[`usdrecord`](https://openusd.org/release/toolset.html#usdrecord) is the supported
command-line application for rendering a USD stage through HdMoonRay. It is
installed with OpenUSD, not MoonRay. After setting up the MoonRay Hydra plugin,
select the delegate by its displayed name:

```bash
usdrecord --renderer Moonray scene.usda image.exr
```

The renderer choices are discovered from the Hydra plugins available in the
current environment. Run `usdrecord --help` to see the choices and options
provided by the installed OpenUSD version.

Useful OpenUSD options include:

- `--camera CAMERA` (or `-cam`) selects a camera by prim name or full prim path.
- `--imageWidth WIDTH` (or `-w`) sets the output width; the camera aspect ratio
  determines the height.
- `--complexity {low,medium,high,veryhigh}` (or `-c`) sets Hydra refinement
  complexity.
- `--purposes PURPOSE[,PURPOSE...]` includes additional imageable purposes;
  `default` is always included and the default additional purpose is `proxy`.
- `--disableCameraLight` disables the default camera light.
- `--frames FRAMESPEC` (or `-f`) renders a frame or range. For a range, the
  output filename must contain one frame placeholder such as `####`.
- `--renderSettingsPrimPath PATH` (or `-rs`) selects a `RenderSettings` prim.

For example:

```bash
usdrecord -r Moonray -cam /World/camera -w 1920 \
    --disableCameraLight scene.usda image.exr

usdrecord -r Moonray -f 1001:1010 scene.usda 'image.####.exr'
```

The current MoonRay source also uses `usdrecord` to capture the RDL2 scene
assembled by HdMoonRay. Set `HDMOONRAY_RDLA_OUTPUT` to the desired RDL output
and disable rendering:

```bash
HDMOONRAY_DISABLE_RENDER=1 \
HDMOONRAY_RDLA_OUTPUT=scene.rdla \
HDMOONRAY_SIMPLIFY_PATHS=1 \
USDIMAGINGGL_ENGINE_ENABLE_SCENE_INDEX=1 \
usdrecord -r Moonray -c medium --disableCameraLight scene.usda unused.exr
```

`usdrecord` still opens and processes the stage through MoonRay, but HdMoonRay
writes the RDL2 snapshot instead of rendering the requested image. See
[HdMoonRay setup](hdmoonray-setup) and [render settings](render-settings).

## hd_render (retired)

`hd_render` is retired and is not built or shipped by the current HdMoonRay
source. Older releases and tests may still refer to it; use `usdrecord` for
current command-line Hydra rendering. Options formerly accepted by
`hd_render`, such as `-in`, `-out`, and `-set`, are not `usdrecord` options.
