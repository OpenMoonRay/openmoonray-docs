---
title: ColorCorrectTMIMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectTMIMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>TMI</h3>
<b>Rgb</b>  *bindable*

default: [ 0, 0, 0 ]

T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy 


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


</p>
</details>

