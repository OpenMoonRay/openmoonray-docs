---
title: ClampMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ClampMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>clamp</h2>
<b>Bool</b>  

Default value : True  

enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.


<h2>clamp_max</h2>
<b>Float</b>  

Default value : 1.0  

the maximum value output by this map when 'clamp' is enabled


<h2>clamp_min</h2>
<b>Float</b>  

Default value : 0.0  

the minimum value output by this map when 'clamp' is enabled


<h2>input</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the input values to be remapped


</details>

