---
![]({{"/assets/images/user-reference/scene-objects/materials/dwa/DwaMixMaterial/dwa_mix_overview.png" | absolute_url }})

**DwaMixMaterial** allows for multiple materials to be blended sequentially, and it supports up to 64 material inputs. 
The bindable *mix* attribute is responsible for selecting the material, and it ranges from 0 to 63. The range can be 
specified from 0 to 1, but only if the *remap_mix_to_inputs* attribute, which scales `[0, 1]` to `[0, num_materials - 1]`, 
is true.  

Any *mix* values that fall between material selections will blend the materials together. This blending is the same 
style of blending performed by the DwaLayerMaterial. In essence, this material provides a combination of the ability to 
select materials like DwaSwitchMaterial and the ability to blend between them like DwaLayerMaterial.