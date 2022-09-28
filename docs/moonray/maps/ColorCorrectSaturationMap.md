---
title: ColorCorrectSaturationMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectSaturationMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>input</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

bind the input here


<h2>mix</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

how much of the overall color correct to mix in


<h2>on</h2>
<b>Bool</b>  

Default value : True  

enables/disables all color correct operations


<h2>saturation</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

desaturates the input below 1.0 and adds saturation above 1.0


<h2>saturation_b</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

desaturates the blue channel input below 1.0 and adds saturation above 1.0


<h2>saturation_g</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

desaturates the green channel input below 1.0 and adds saturation above 1.0


<h2>saturation_r</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

desaturates the red channel input below 1.0 and adds saturation above 1.0


<h2>use_per_channel_saturation</h2>
<b>Bool</b>  

Default value : False  

enables separate RGB controls for saturation


</details>

