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

<h2>clamp</h2>
<b>Bool</b>  

Default value : False  

clamps output to [0,1] range


<h2>hue_shift</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

shifts the hue of the input (360 rolls over back to 0)


<h2>input</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

input color


<h2>on</h2>
<b>Bool</b>  

Default value : True  

all attributes on/off


<h2>saturation_contrast</h2>
<b>Float</b>  

Default value : 0.0  

modifies the contrast of the input's saturation (-1, 1)


<h2>saturation_factor</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the saturation of the input


<h2>saturation_shift</h2>
<b>Float</b>  

Default value : 0.0  

shifts the saturation of the input (-1, 1)


<h2>value_contrast</h2>
<b>Float</b>  

Default value : 0.0  

modifies the contrast of the input's value (-1, 1)


<h2>value_factor</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the value of the input


<h2>value_shift</h2>
<b>Float</b>  

Default value : 0.0  

shifts the value of the input (-1, 1)


</details>

