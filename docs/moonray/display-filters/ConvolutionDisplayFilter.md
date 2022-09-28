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

## invert_mask  
**Bool**  

Default value : False  

invert value of mask


## mix  
**Float**  

Default value : 1.0  

blend between output and input


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## custom_kernel  
**FloatVector**  

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >  

a list of kernel values for a custom filter. The number of values provided must be the square of an odd number (e.g. 3x3, 5x5, 7x7)


## input  
**67141632**  

Default value : None  

RenderOutput to convolve


## kernel_size  
**Int**  

Default value : 5  

size of kernel in pixels. Size must be odd. If using custom kernel, this attribute is ignored, and the size of the custom kernel is used instead


## kernel_type  
**Int**  *enum*

- gaussian = 0 (default)

- box = 1

- custom = 2


<p class="scene-class-attr-missing">Documentation for the attribute <b>kernel_type</b> needs to be written</p>


## mask  
**67141632**  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>mask</b> needs to be written</p>


</details>

