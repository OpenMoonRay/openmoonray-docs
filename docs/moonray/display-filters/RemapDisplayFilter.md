---
title: RemapDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RemapDisplayFilter
****

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

<h2>invert_mask</h2>
<b>Bool</b>  

Default value : False  

invert value of mask


<h2>mix</h2>
<b>Float</b>  

Default value : 1.0  

blend between output and input


</details>


<details open>
<summary class="scene-class-attr-group">Channel attributes</summary>

<h2>clamp_max_RGB</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

the maximum value output by this map when 'clamp' is enabled


<h2>clamp_min_RGB</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

the minimum value output by this map when 'clamp' is enabled


<h2>input_max_RGB</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

the input value that will be remapped to the 'output max' value


<h2>input_min_RGB</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

the input value that will be remapped to the 'output min' value


<h2>midpoint_bias_RGB</h2>
<b>Rgb</b>  

Default value : [ 0.5, 0.5, 0.5 ]  

biases the in-between values toward 'output min' or 'output max'. Default = 0.5


<h2>output_max_RGB</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

the value that 'input max' is remapped to


<h2>output_min_RGB</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

the value that 'input min' is remapped to


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>clamp</h2>
<b>Bool</b>  

Default value : True  

enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.


<h2>clamp_RGB</h2>
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
<b>67141632</b>  

Default value : None  

Input buffer


<h2>input_max</h2>
<b>Float</b>  

Default value : 1.0  

the input value that will be remapped to the 'output max' value


<h2>input_min</h2>
<b>Float</b>  

Default value : 0.0  

the input value that will be remapped to the 'output min' value


<h2>mask</h2>
<b>67141632</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>mask</b> needs to be written</p>


<h2>midpoint_bias</h2>
<b>Float</b>  

Default value : 0.5  

biases the in-between values toward 'output min' or 'output max'. Default = 0.5


<h2>output_max</h2>
<b>Float</b>  

Default value : 1.0  

the value that 'input max' is remapped to


<h2>output_min</h2>
<b>Float</b>  

Default value : 0.0  

the value that 'input min' is remapped to


<h2>remap_method</h2>
<b>Int</b>  *enum*

- uniform = 0 (default)

- RGB = 1


Choose whether you are remapping using single values (uniform) or with separate RGB channels


</details>

