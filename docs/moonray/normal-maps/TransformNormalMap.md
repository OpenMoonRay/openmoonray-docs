---
title: TransformNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# TransformNormalMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>

<h2>input_normal</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 1 ]  

input normal in either tangent or render space


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>decode_input_normal</h2>
<b>Bool</b>  

Default value : True  

decode the input normal if it's in tangent space [0,1] -> [-1,1]


<h2>transform</h2>
<b>Int</b>  *enum*

- tangent to render = 0 (default)

- render to tangent = 1


transform to apply to the normals


</details>

