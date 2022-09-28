---
title: UsdUVTexture

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# UsdUVTexture
**MAP SHADER**
---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## bias
**Rgb** 

Default value : [ 0, 0, 0 ]

Bias to be applied to all components of the texture.  output = textureValue * scale + bias


## fallback
**Rgb** 

Default value : [ 0, 0, 0 ]

Fallback value used when texture can not be read.


## file
**String** *filename*

Default value : 

Path to the texture


## scale
**Rgb** 

Default value : [ 1, 1, 1 ]

Scale to be applied to all components of the texture.  output = textureValue * scale + bias


## sourceColorSpace
**Int** *enum*

- raw = 0

- sRGB = 1

- auto = 2 (default)


Flag indicating the color space in which the source texture is encoded.


## st
**Vec2f** *bindable*

Default value : [ 1, 1 ]

Texture coordinate to use to fetch this texture.


## udim_files
**StringVector** 

Default value : []

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_files</b> needs to be written</p>


## udim_max_v
**Int** 

Default value : 10

udim maximum v value


## udim_values
**IntVector** 

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_values</b> needs to be written</p>


## wrapS
**Int** *enum*

- black = 0

- clamp = 1

- repeat = 2

- mirror = 3

- useMetadata = 4 (default)


Wrap mode when reading this texture.


## wrapT
**Int** *enum*

- black = 0

- clamp = 1

- repeat = 2

- mirror = 3

- useMetadata = 4 (default)


Wrap mode when reading this texture.


</details>

