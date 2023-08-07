---
![DwaLayerMaterial]({{ "/assets/images/user-reference/scene-objects/materials/dwa/DwaLayerMaterial/layer.png" | absolute_url }})

The <span class="define">DwaLayerMaterial</span> composites two materials together by layering A over B, using a _mask_ 
attribute to control the blending. Networks of DwaLayerMaterials can be as arbitrarily deep as desired. Instead of evaluating each material separately, this material blends inputs' respective parameters to produce a single BSDF.

As an example, if inputs material_A and material_B each have a specular lobe with respective roughnesses of 0.2 and 0.4, layering with a mask value of 0.5 doesn't create both the lobes at half intensity, but rather results in a single lobe with roughness 0.3. But if material_A has a specular lobe while material_B does not, then the specular reflection color will be tapered (blended with black) by the mask while the lobe's other attributes, such as anisotropy, are copied from material_A without blending.

There are a handful of attributes that cannot be blended, and for those the DwaLayerMaterial provides _fallback_ attributes which really act as overrides for setting the attribute for the resulting layered material. 

Lobe order or layering is not changed by the input order, as all lobes respect the ordering described in [Dwa Materials.]({{ "/user-reference/scene-objects/materials/dwa" | absolute_url }}) For example, you cannot use LayerMaterial to render a specular lobe atop a fuzz lobe.