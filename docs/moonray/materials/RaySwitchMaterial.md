---
title: RaySwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RaySwitchMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>camera_ray_material</h2>
<b>Material</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>camera_ray_material</b> needs to be written</p>


<h2>cutout_camera_rays</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>cutout_camera_rays</b> needs to be written</p>


<h2>default_material</h2>
<b>Material</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>default_material</b> needs to be written</p>


<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>indirect_diffuse_ray_material</h2>
<b>Material</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>indirect_diffuse_ray_material</b> needs to be written</p>


<h2>indirect_glossy_ray_material</h2>
<b>Material</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>indirect_glossy_ray_material</b> needs to be written</p>


<h2>indirect_mirror_ray_material</h2>
<b>Material</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>indirect_mirror_ray_material</b> needs to be written</p>


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

