---
title: DwaEmissiveMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaEmissiveMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
<summary class="scene-class-attr-group">Common attributes</summary>

## presence  
**Float**  *bindable*

Default value : 1.0  

controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).


</details>


<details open>
<summary class="scene-class-attr-group">Emission attributes</summary>

## emission  
**Rgb**  *bindable*

Default value : [ 1, 1, 1 ]  

the energy emitted from this material


## show_emission  
**Bool**  

Default value : True  

enables/disable emission


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## extra_aovs  
**Map**  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


## label  
**String**  

Default value :   

label used in material and light aovs


## priority  
**Int**  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

