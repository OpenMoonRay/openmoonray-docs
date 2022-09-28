---
title: DwaColorCorrectMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaColorCorrectMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
<summary class="scene-class-attr-group">Hue/Sat/Gain attributes</summary>

<h2>gain</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the input channels by the specified value


<h2>hue_shift</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

shifts the hue of the input (spectrum range is 0-1)


<h2>saturation</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

desaturates the input below 1.0 and adds saturation above 1.0


</details>


<details open>
<summary class="scene-class-attr-group">TMI attributes</summary>

<h2>TMI</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy 


<h2>TMI_enabled</h2>
<b>Bool</b>  

Default value : False  

enables the TMI parameters


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>input_material</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_material</b> needs to be written</p>


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>mix</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

how much of the overall color correct to mix in


<h2>on</h2>
<b>Bool</b>  

Default value : True  

Enable/disable all color corrections


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

