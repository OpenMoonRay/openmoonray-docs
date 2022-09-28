---
title: DirectionalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DirectionalMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">Adjustment attributes</summary>

<h2>bias</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

controls the rate at which the effect increases as the shading normal approaches the prime direction


<h2>clamping_behavior</h2>
<b>Int</b>  *enum*

- clamp = 0 (default)

- absolute = 1


determines how surfaces facing opposite the prime direction are handled


<h2>falloff_type</h2>
<b>Int</b>  *enum*

- cosine = 0 (default)

- linear = 1


determines how the effect falls off as the difference angle increases


<h2>smoothstep_end</h2>
<b>Float</b>  *bindable*

Default value : 0.550000011921  

the value at which the effect is considered 100% on


<h2>smoothstep_start</h2>
<b>Float</b>  *bindable*

Default value : 0.449999988079  

the value at which the effect is considered 100% off


<h2>use_smoothstep</h2>
<b>Bool</b>  

Default value : False  

apply smoothstep function to result


</details>


<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>

<h2>input_normal</h2>
<b>33554432</b>  

Default value : None  

specifies an alternate shading normal when bound. The binding multiplier is ignored


<h2>input_normal_dial</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the amount of influence of the alternate normal


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>color_a</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

the color of the effect when the difference angle is greatest


<h2>color_b</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the color of the effect when the difference angle is smallest


<h2>custom_direction</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 1, 0 ]  

specifies a custom direction in world space as the prime direction


<h2>object</h2>
<b>Node</b>  

Default value : None  

the object to use when 'prime direction' is set to 'axis of object' or 'look-at object'


<h2>object_axis</h2>
<b>Int</b>  *enum*

- +X axis = 0

- -X axis = 1 (default)

- +Y axis = 2

- -Y axis = 3

- +Z axis = 4

- -Z axis = 5


which axis to use when 'prime direction' is set to 'axis of object'


<h2>polarity</h2>
<b>Int</b>  *enum*

- perpendicular = 0 (default)

- parallel = 1


determines which directions are given color A and which are given color B. Switching this effectively swaps the colors


<h2>prime_direction</h2>
<b>Int</b>  *enum*

- observer direction = 0 (default)

- custom direction = 1

- axis of object = 2

- look-at object = 3


which source is used for the prime direction


<h2>use_reference_space</h2>
<b>Bool</b>  

Default value : False  

use reference space position and normals


</details>

