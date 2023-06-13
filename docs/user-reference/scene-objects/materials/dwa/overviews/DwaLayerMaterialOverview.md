---
![DwaLayerMaterial]({{ "/assets/images/user-reference/scene-objects/materials/dwa/DwaLayerMaterial/layer.png" | absolute_url }})

The <span class="define">DwaLayerMaterial</span> composites two materials together by layering A over B, using a _mask_ 
attribute to control the blending. Networks of DwaLayerMaterials can be as arbitrarily deep as desired. For max efficiency, 
instead of evaluating each material separately, we combine the materials' parameters to produce a set of **blended parameters** 
that we can use to configure a single BSDF. 

What do we mean by **"parameters"**? Each Dwa material in MoonRay is derived from an underlying
material base class. As such, any material can be resolved to a set of standard parameters that describe the "recipe" 
that can be used to produce the material. So, our layering technique involves blending the parameters of 
material A and material B based on the _mask_ attribute to produce a "recipe" for a single material that we can evaluate. 

There are a handful of attributes that cannot be blended, and for those the DwaLayerMaterial provides _fallback_ 
attributes which really act as overrides for setting the attribute for the resulting layered material. 


