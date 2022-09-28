---
title: ColorCorrectGainOffsetMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectGainOffsetMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<br>

<h3>gain</h3>
<b>Float</b>  *bindable*

default: 1.0

multiplies the input channels by the specified values


<h3>gain_b</h3>
<b>Float</b>  *bindable*

default: 1.0

multiplies the blue channel by the specified values


<h3>gain_g</h3>
<b>Float</b>  *bindable*

default: 1.0

multiplies the green channel by the specified values


<h3>gain_r</h3>
<b>Float</b>  *bindable*

default: 1.0

multiplies the red channel by the specified values


<h3>input</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

bind the input here


<h3>mix</h3>
<b>Float</b>  *bindable*

default: 1.0

how much of the overall color correct to mix in


<h3>offset</h3>
<b>Float</b>  *bindable*

default: 0.0

adds the specified values to the input


<h3>offset_b</h3>
<b>Float</b>  *bindable*

default: 1.0

adds the specified values to the blue channel


<h3>offset_g</h3>
<b>Float</b>  *bindable*

default: 1.0

adds the specified values to the green channel


<h3>offset_r</h3>
<b>Float</b>  *bindable*

default: 1.0

adds the specified values to the red channel


<h3>on</h3>
<b>Bool</b>  

default: True

enables/disables all color correct operations


<h3>use_per_channel_gain_offset</h3>
<b>Bool</b>  

default: False

enables separate RGB controls for gain and offset


</details>

