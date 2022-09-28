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

## camera  
**Camera**  

Default value : None  

an alternate camera to use when transforming to/from 'camera' space


## concatenate_instance_level_transforms  
**Bool**  

Default value : True  

When true, instance level transforms below the specified one are concatenated otherwise only the selected level's transform is used


## from_space  
**Int**  *enum*

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


## input  
**Vec3f**  *bindable*

Default value : [ 1, 1, 1 ]  

the input value to transform


## input_type  
**Int**  *enum*

- point = 0

- vector = 1 (default)

- normal = 2


the type of input value provided


## object  
**Geometry**  

Default value : None  

an alternate object to use when transforming to/from 'object' space


## to_space  
**Int**  *enum*

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


## use_custom_window_coordinates  
**Bool**  

Default value : False  

used to apply non-uniform scaling to projection


## window_x_max  
**Float**  

Default value : 1.0  

maximum projected x coordinate


## window_x_min  
**Float**  

Default value : -1.0  

minimum projected x coordinate


## window_y_max  
**Float**  

Default value : 1.0  

maximum projected y coordinate


## window_y_min  
**Float**  

Default value : -1.0  

minimum projected y coordinate


</details>

