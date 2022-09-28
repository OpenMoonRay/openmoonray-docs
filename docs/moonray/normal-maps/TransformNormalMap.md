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

## input_normal  
**Vec3f**  *bindable*

Default value : [ 0, 0, 1 ]  

input normal in either tangent or render space


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## decode_input_normal  
**Bool**  

Default value : True  

decode the input normal if it's in tangent space [0,1] -> [-1,1]


## transform  
**Int**  *enum*

- tangent to render = 0 (default)

- render to tangent = 1


transform to apply to the normals


</details>

