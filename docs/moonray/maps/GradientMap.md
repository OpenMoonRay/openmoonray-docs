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

<h2>symmetric</h2>
<b>Bool</b>  

Default value : False  

Color A blends into Color B and then back into Color A from the start to the end point


<h2>symmetric_center</h2>
<b>Float</b>  

Default value : 0.5  

Shifts the center of the symmetric falloff


</details>


<details open>
<summary class="scene-class-attr-group">Falloff properties attributes</summary>

<h2>falloff_bias</h2>
<b>Float</b>  

Default value : 0.5  

Compresses the blending towards the start or end color


<h2>falloff_end</h2>
<b>Float</b>  

Default value : 1.0  

Shifts where the falloff ends


<h2>falloff_end_intensity</h2>
<b>Float</b>  

Default value : 1.0  

Adjust the intensity of the end color


<h2>falloff_exponent</h2>
<b>Float</b>  

Default value : 1.0  

Adjusts rate of blending


<h2>falloff_start</h2>
<b>Float</b>  

Default value : 0.0  

Shifts where the falloff starts


<h2>falloff_type</h2>
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

<h2>color_A</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

Start color


<h2>color_B</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

End color


<h2>end</h2>
<b>Vec3f</b>  

Default value : [ 0, 1, 0 ]  

End position in the chosen space


<h2>object</h2>
<b>Geometry</b>  

Default value : None  

Use the provided object's transformation space (only used if object space is also specified)


<h2>space</h2>
<b>Int</b>  *enum*

- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4

- reference = 5

- texture = 6


The transformation space in which to perform the blending


<h2>start</h2>
<b>Vec3f</b>  

Default value : [ 0, 0, 0 ]  

Start position in the chosen space


</details>

