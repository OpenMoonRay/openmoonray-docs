---
title: MeasuredMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# MeasuredMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
<summary class="scene-class-attr-group">Diffuse attributes</summary>

## diffuse  
**Bool**  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse</b> needs to be written</p>


## diffuse_color  
**Rgb**  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_color</b> needs to be written</p>


## diffuse_factor  
**Float**  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_factor</b> needs to be written</p>


## diffuse_filename  
**String**  *filename*

Default value :   

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_filename</b> needs to be written</p>


## diffuse_hue_shift  
**Float**  *bindable*

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_hue_shift</b> needs to be written</p>


## diffuse_saturation  
**Float**  *bindable*

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_saturation</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Specular attributes</summary>

## specular  
**Bool**  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular</b> needs to be written</p>


## specular_color  
**Rgb**  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_color</b> needs to be written</p>


## specular_factor  
**Float**  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_factor</b> needs to be written</p>


## specular_filename  
**String**  *filename*

Default value :   

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_filename</b> needs to be written</p>


## specular_hue_shift  
**Float**  *bindable*

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_hue_shift</b> needs to be written</p>


## specular_saturation  
**Float**  *bindable*

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_saturation</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## anisotropic_direction  
**Vec2f**  

Default value : [ 1, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>anisotropic_direction</b> needs to be written</p>


## casts_caustics  
**Bool**  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>casts_caustics</b> needs to be written</p>


## extra_aovs  
**Map**  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


## input_normal  
**Vec3f**  *bindable*

Default value : [ 0, 0, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal</b> needs to be written</p>


## input_normal_dial  
**Float**  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal_dial</b> needs to be written</p>


## input_normal_space  
**Int**  

Default value : 0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal_space</b> needs to be written</p>


## label  
**String**  

Default value :   

label used in material and light aovs


## priority  
**Int**  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

