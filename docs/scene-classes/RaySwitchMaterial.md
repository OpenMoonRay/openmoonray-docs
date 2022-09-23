---
title: RaySwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RaySwitchMaterial

**ROOTSHADER MATERIAL SHADER**

Documentation for class RaySwitchMaterial



---

## <p style="color:blue;">General attributes</p>

## camera_ray_material

**Material** 


Default value : None




<p style="color:red;">Documentation for the attribute <b>camera_ray_material</b> needs to be written</p>




## cutout_camera_rays

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>cutout_camera_rays</b> needs to be written</p>




## default_material

**Material** 


Default value : None




<p style="color:red;">Documentation for the attribute <b>default_material</b> needs to be written</p>




## extra_aovs

**Map** 


Default value : None




Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result




## indirect_diffuse_ray_material

**Material** 


Default value : None




<p style="color:red;">Documentation for the attribute <b>indirect_diffuse_ray_material</b> needs to be written</p>




## indirect_glossy_ray_material

**Material** 


Default value : None




<p style="color:red;">Documentation for the attribute <b>indirect_glossy_ray_material</b> needs to be written</p>




## indirect_mirror_ray_material

**Material** 


Default value : None




<p style="color:red;">Documentation for the attribute <b>indirect_mirror_ray_material</b> needs to be written</p>




## label

**String** 


Default value : 




label used in material and light aovs




## priority

**Int** 


Default value : 0




The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.





