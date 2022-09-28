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
<p>

<h3>bias</h3>
<b>Float</b>  *bindable*

default: 0.5

controls the rate at which the effect increases as the shading normal approaches the prime direction


<h3>clamping_behavior</h3>
<b>Int</b>  *enum*

- clamp = 0 (default)

- absolute = 1


determines how surfaces facing opposite the prime direction are handled


<h3>falloff_type</h3>
<b>Int</b>  *enum*

- cosine = 0 (default)

- linear = 1


determines how the effect falls off as the difference angle increases


<h3>smoothstep_end</h3>
<b>Float</b>  *bindable*

default: 0.550000011921

the value at which the effect is considered 100% on


<h3>smoothstep_start</h3>
<b>Float</b>  *bindable*

default: 0.449999988079

the value at which the effect is considered 100% off


<h3>use_smoothstep</h3>
<b>Bool</b>  

default: False

apply smoothstep function to result


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>
<p>

<h3>input_normal</h3>
<b>33554432</b>  

default: None

specifies an alternate shading normal when bound. The binding multiplier is ignored


<h3>input_normal_dial</h3>
<b>Float</b>  *bindable*

default: 1.0

controls the amount of influence of the alternate normal


</p>
</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>color_a</h3>
<b>Rgb</b>  *bindable*

default: [ 0, 0, 0 ]

the color of the effect when the difference angle is greatest


<h3>color_b</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the color of the effect when the difference angle is smallest


<h3>custom_direction</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 1, 0 ]

specifies a custom direction in world space as the prime direction


<h3>object</h3>
<b>Node</b>  

default: None

the object to use when 'prime direction' is set to 'axis of object' or 'look-at object'


<h3>object_axis</h3>
<b>Int</b>  *enum*

- +X axis = 0

- -X axis = 1 (default)

- +Y axis = 2

- -Y axis = 3

- +Z axis = 4

- -Z axis = 5


which axis to use when 'prime direction' is set to 'axis of object'


<h3>polarity</h3>
<b>Int</b>  *enum*

- perpendicular = 0 (default)

- parallel = 1


determines which directions are given color A and which are given color B. Switching this effectively swaps the colors


<h3>prime_direction</h3>
<b>Int</b>  *enum*

- observer direction = 0 (default)

- custom direction = 1

- axis of object = 2

- look-at object = 3


which source is used for the prime direction


<h3>use_reference_space</h3>
<b>Bool</b>  

default: False

use reference space position and normals


</p>
</details>

