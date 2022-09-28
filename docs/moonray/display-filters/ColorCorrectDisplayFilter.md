---
title: ColorCorrectDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectDisplayFilter
****

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

<h3>invert_mask</h3>
<b>Bool</b>  

default: False

invert value of mask


<h3>mix</h3>
<b>Float</b>  

default: 1.0

blend between output and input


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h3>contrast</h3>
<b>Float</b>  

default: 0.0

Decrease contrast below 0.0 and increase contrast above 0.0


<h3>exposure</h3>
<b>Float</b>  

default: 0.0

Adjusts the exposure, in fstops


<h3>gamma</h3>
<b>Float</b>  

default: 1.0

Adjusts gamma of input


<h3>input</h3>
<b>67141632</b>  

default: None

RenderOutput to color correct


<h3>mask</h3>
<b>67141632</b>  

default: None

<p class="scene-class-attr-missing">Documentation for the attribute <b>mask</b> needs to be written</p>


<h3>multiply</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

Multiplies input using specified color


<h3>offset</h3>
<b>Rgb</b>  

default: [ 0, 0, 0 ]

Add offset color to input


<h3>saturation</h3>
<b>Float</b>  

default: 1.0

Desaturates input below 1.0 and adds saturation above 1.0


</details>

