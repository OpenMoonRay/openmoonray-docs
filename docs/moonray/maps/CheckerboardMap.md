---
title: CheckerboardMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# CheckerboardMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>color_A</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>color_A</b> needs to be written</p>


<h2>color_B</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>color_B</b> needs to be written</p>


<h2>input_texture_coordinates</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 0 ]  

bind a shader that outputs UV coordinates (such as a projection shader) here


<h2>num_u_tiles</h2>
<b>Int</b>  

Default value : 8  

number of checkerboard squares in the U direction


<h2>num_v_tiles</h2>
<b>Int</b>  

Default value : 8  

number of checkerboard squares in the V direction


<h2>texture_coordinates</h2>
<b>Int</b>  *enum*

- texture = 0 (default)

- input texture coordinates = 1


switches between the model's uv coordinates or the input texture coordinates


</details>

