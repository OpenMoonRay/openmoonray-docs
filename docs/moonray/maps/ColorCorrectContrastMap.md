---
title: ColorCorrectContrastMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectContrastMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>contrast</h3>
<b>Float</b>  *bindable*

default: 0.0

negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance


<h3>contrast_b</h3>
<b>Float</b>  *bindable*

default: 0.0

negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel


<h3>contrast_g</h3>
<b>Float</b>  *bindable*

default: 0.0

negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel


<h3>contrast_r</h3>
<b>Float</b>  *bindable*

default: 0.0

negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel


<h3>input</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

bind the input here


<h3>mix</h3>
<b>Float</b>  *bindable*

default: 1.0

how much of the overall color correct to mix in


<h3>on</h3>
<b>Bool</b>  

default: True

enables/disables all color correct operations


<h3>use_per_channel_contrast</h3>
<b>Bool</b>  

default: False

enables separate RGB controls for contrast


</p>
</details>

