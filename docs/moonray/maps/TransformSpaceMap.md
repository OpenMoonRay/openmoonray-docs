---
title: TransformSpaceMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# TransformSpaceMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>camera</h2>
<b>Camera</b>  

Default value : None  

an alternate camera to use when transforming to/from 'camera' space


<h2>concatenate_instance_level_transforms</h2>
<b>Bool</b>  

Default value : True  

When true, instance level transforms below the specified one are concatenated otherwise only the selected level's transform is used


<h2>from_space</h2>
<b>Int</b>  *enum*

- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4

- local tangent = 5

- instance object transform = 6

- instance level 0 = 7

- instance level 1 = 8

- instance level 2 = 9

- instance level 3 = 10

- instance level 4 = 11


the space to transform from


<h2>input</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the input value to transform


<h2>input_type</h2>
<b>Int</b>  *enum*

- point = 0

- vector = 1 (default)

- normal = 2


the type of input value provided


<h2>object</h2>
<b>Geometry</b>  

Default value : None  

an alternate object to use when transforming to/from 'object' space


<h2>to_space</h2>
<b>Int</b>  *enum*

- render = 0

- camera = 1

- world = 2 (default)

- screen = 3

- object = 4

- local reference tangent = 5

- instance level 0 = 6

- instance level 1 = 7

- instance level 2 = 8

- instance level 3 = 9

- instance level 4 = 10

- instance object transform = 11


the space to transform to


<h2>use_custom_window_coordinates</h2>
<b>Bool</b>  

Default value : False  

used to apply non-uniform scaling to projection


<h2>window_x_max</h2>
<b>Float</b>  

Default value : 1.0  

maximum projected x coordinate


<h2>window_x_min</h2>
<b>Float</b>  

Default value : -1.0  

minimum projected x coordinate


<h2>window_y_max</h2>
<b>Float</b>  

Default value : 1.0  

maximum projected y coordinate


<h2>window_y_min</h2>
<b>Float</b>  

Default value : -1.0  

minimum projected y coordinate


</details>

