---
title: ColorCorrectGammaMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectGammaMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>gamma</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

raises the input to the specified exponents


<h2>gamma_b</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

raises the blue channel to the specified exponents


<h2>gamma_g</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

raises the green channel to the specified exponents


<h2>gamma_r</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

raises the red channel to the specified exponents


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


<h2>use_per_channel_gamma</h2>
<b>Bool</b>  

Default value : False  

enables separate RGB controls for gamma


</details>

