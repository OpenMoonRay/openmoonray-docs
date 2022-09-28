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

<h2>gain</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the input channels by the specified values


<h2>gain_b</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the blue channel by the specified values


<h2>gain_g</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the green channel by the specified values


<h2>gain_r</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the red channel by the specified values


<h2>input</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

bind the input here


<h2>mix</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

how much of the overall color correct to mix in


<h2>offset</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

adds the specified values to the input


<h2>offset_b</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

adds the specified values to the blue channel


<h2>offset_g</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

adds the specified values to the green channel


<h2>offset_r</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

adds the specified values to the red channel


<h2>on</h2>
<b>Bool</b>  

Default value : True  

enables/disables all color correct operations


<h2>use_per_channel_gain_offset</h2>
<b>Bool</b>  

Default value : False  

enables separate RGB controls for gain and offset


</details>

