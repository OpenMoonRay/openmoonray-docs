---
title: RemapMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RemapMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">Channel attributes</summary>

<h3>clamp_max_RGB</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

the maximum value output by this map when 'clamp' is enabled


<h3>clamp_min_RGB</h3>
<b>Rgb</b>  

default: [ 0, 0, 0 ]

the minimum value output by this map when 'clamp' is enabled


<h3>input_max_RGB</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

the input value that will be remapped to the 'output max' value


<h3>input_min_RGB</h3>
<b>Rgb</b>  

default: [ 0, 0, 0 ]

the input value that will be remapped to the 'output min' value


<h3>midpoint_bias_RGB</h3>
<b>Rgb</b>  

default: [ 0.5, 0.5, 0.5 ]

biases the in-between values toward 'output min' or 'output max'. Default = 0.5


<h3>output_max_RGB</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

the value that 'input max' is remapped to


<h3>output_min_RGB</h3>
<b>Rgb</b>  

default: [ 0, 0, 0 ]

the value that 'input min' is remapped to


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h3>clamp</h3>
<b>Bool</b>  

default: True

enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.


<h3>clamp_RGB</h3>
<b>Bool</b>  

default: True

enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.


<h3>clamp_max</h3>
<b>Float</b>  

default: 1.0

the maximum value output by this map when 'clamp' is enabled


<h3>clamp_min</h3>
<b>Float</b>  

default: 0.0

the minimum value output by this map when 'clamp' is enabled


<h3>input</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the input values to be remapped


<h3>input_max</h3>
<b>Float</b>  

default: 1.0

the input value that will be remapped to the 'output max' value


<h3>input_min</h3>
<b>Float</b>  

default: 0.0

the input value that will be remapped to the 'output min' value


<h3>midpoint_bias</h3>
<b>Float</b>  

default: 0.5

biases the in-between values toward 'output min' or 'output max'. Default = 0.5


<h3>output_max</h3>
<b>Float</b>  

default: 1.0

the value that 'input max' is remapped to


<h3>output_min</h3>
<b>Float</b>  

default: 0.0

the value that 'input min' is remapped to


<h3>remap_method</h3>
<b>Int</b>  *enum*

- uniform = 0 (default)

- RGB = 1


Choose whether you are remapping using single values (uniform) or with separate RGB channels


</details>

