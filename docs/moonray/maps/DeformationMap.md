---
title: DeformationMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DeformationMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>output_mode</h3>
<b>Int</b>  *enum*

- RGB = 0

- deformation_S = 1

- deformation_T = 2

- deformation_avg = 3 (default)


Controls output: 

		    RGB - R = deformation along S, G = deformation along T, B = average deformation from ref space 

		    deformation_S - deformation along S 

		    deformation_T - deformation along T 

		    deformation_avg - average deformation from ref space


<h3>use_warning_color</h3>
<b>Bool</b>  

default: False

If derivatives are missing or zero output the warning color erroring out


<h3>warning_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

Warning color to output when derivatives are missing or zero


</p>
</details>

