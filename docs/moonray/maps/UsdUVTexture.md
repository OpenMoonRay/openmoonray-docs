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

<h2>bias</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

Bias to be applied to all components of the texture.  output = textureValue * scale + bias


<h2>fallback</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

Fallback value used when texture can not be read.


<h2>file</h2>
<b>String</b>  *filename*

Default value :   

Path to the texture


<h2>scale</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

Scale to be applied to all components of the texture.  output = textureValue * scale + bias


<h2>sourceColorSpace</h2>
<b>Int</b>  *enum*

- raw = 0

- sRGB = 1

- auto = 2 (default)


Flag indicating the color space in which the source texture is encoded.


<h2>st</h2>
<b>Vec2f</b>  *bindable*

Default value : [ 1, 1 ]  

Texture coordinate to use to fetch this texture.


<h2>udim_files</h2>
<b>StringVector</b>  

Default value : []  

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_files</b> needs to be written</p>


<h2>udim_max_v</h2>
<b>Int</b>  

Default value : 10  

udim maximum v value


<h2>udim_values</h2>
<b>IntVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >  

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_values</b> needs to be written</p>


<h2>wrapS</h2>
<b>Int</b>  *enum*

- black = 0

- clamp = 1

- repeat = 2

- mirror = 3

- useMetadata = 4 (default)


Wrap mode when reading this texture.


<h2>wrapT</h2>
<b>Int</b>  *enum*

- black = 0

- clamp = 1

- repeat = 2

- mirror = 3

- useMetadata = 4 (default)


Wrap mode when reading this texture.


</details>

