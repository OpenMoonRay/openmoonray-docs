---
title: GradientMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# GradientMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">Additional properties attributes</summary>
<br>

<h3>symmetric</h3>
<b>Bool</b>  

default: False

Color A blends into Color B and then back into Color A from the start to the end point


<h3>symmetric_center</h3>
<b>Float</b>  

default: 0.5

Shifts the center of the symmetric falloff


</details>


<details open>
<summary class="scene-class-attr-group">Falloff properties attributes</summary>
<br>

<h3>falloff_bias</h3>
<b>Float</b>  

default: 0.5

Compresses the blending towards the start or end color


<h3>falloff_end</h3>
<b>Float</b>  

default: 1.0

Shifts where the falloff ends


<h3>falloff_end_intensity</h3>
<b>Float</b>  

default: 1.0

Adjust the intensity of the end color


<h3>falloff_exponent</h3>
<b>Float</b>  

default: 1.0

Adjusts rate of blending


<h3>falloff_start</h3>
<b>Float</b>  

default: 0.0

Shifts where the falloff starts


<h3>falloff_type</h3>
<b>Int</b>  *enum*

- none = 0

- natural = 1 (default)

- linear = 2

- squared = 3

- gaussian = 4

- ease out = 5


Falloff blend mode


</details>


<details open>
<summary class="scene-class-attr-group">Gradient properties attributes</summary>
<br>

<h3>color_A</h3>
<b>Rgb</b>  *bindable*

default: [ 0, 0, 0 ]

Start color


<h3>color_B</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

End color


<h3>end</h3>
<b>Vec3f</b>  

default: [ 0, 1, 0 ]

End position in the chosen space


<h3>object</h3>
<b>Geometry</b>  

default: None

Use the provided object's transformation space (only used if object space is also specified)


<h3>space</h3>
<b>Int</b>  *enum*

- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4

- reference = 5

- texture = 6


The transformation space in which to perform the blending


<h3>start</h3>
<b>Vec3f</b>  

default: [ 0, 0, 0 ]

Start position in the chosen space


</details>

