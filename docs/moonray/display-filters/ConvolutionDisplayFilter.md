---
title: ConvolutionDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ConvolutionDisplayFilter
****

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>
<p>

<h3>invert_mask</h3>
<b>Bool</b>  

default: False

invert value of mask


<h3>mix</h3>
<b>Float</b>  

default: 1.0

blend between output and input


</p>
</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>custom_kernel</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

a list of kernel values for a custom filter. The number of values provided must be the square of an odd number (e.g. 3x3, 5x5, 7x7)


<h3>input</h3>
<b>67141632</b>  

default: None

RenderOutput to convolve


<h3>kernel_size</h3>
<b>Int</b>  

default: 5

size of kernel in pixels. Size must be odd. If using custom kernel, this attribute is ignored, and the size of the custom kernel is used instead


<h3>kernel_type</h3>
<b>Int</b>  *enum*

- gaussian = 0 (default)

- box = 1

- custom = 2


<p class="scene-class-attr-missing">Documentation for the attribute <b>kernel_type</b> needs to be written</p>


<h3>mask</h3>
<b>67141632</b>  

default: None

<p class="scene-class-attr-missing">Documentation for the attribute <b>mask</b> needs to be written</p>


</p>
</details>

