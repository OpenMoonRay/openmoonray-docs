---
title: ColorCorrectHsvMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectHsvMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<br>

<h3>clamp</h3>
<b>Bool</b>  

default: False

clamps output to [0,1] range


<h3>hue_shift</h3>
<b>Float</b>  *bindable*

default: 0.0

shifts the hue of the input (360 rolls over back to 0)


<h3>input</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

input color


<h3>on</h3>
<b>Bool</b>  

default: True

all attributes on/off


<h3>saturation_contrast</h3>
<b>Float</b>  

default: 0.0

modifies the contrast of the input's saturation (-1, 1)


<h3>saturation_factor</h3>
<b>Float</b>  *bindable*

default: 1.0

multiplies the saturation of the input


<h3>saturation_shift</h3>
<b>Float</b>  

default: 0.0

shifts the saturation of the input (-1, 1)


<h3>value_contrast</h3>
<b>Float</b>  

default: 0.0

modifies the contrast of the input's value (-1, 1)


<h3>value_factor</h3>
<b>Float</b>  *bindable*

default: 1.0

multiplies the value of the input


<h3>value_shift</h3>
<b>Float</b>  

default: 0.0

shifts the value of the input (-1, 1)


</details>

