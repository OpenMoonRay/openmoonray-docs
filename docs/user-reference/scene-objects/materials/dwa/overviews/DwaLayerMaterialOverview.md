---
![DwaLayerMaterial]({{ "/assets/images/user-reference/scene-objects/materials/dwa/DwaLayerMaterial/layer.png" | absolute_url }})

The <span class="define">DwaLayerMaterial</span> composites two materials together by layering A over B, using a _mask_ 
attribute to control the blending. Networks of DwaLayerMaterials can be as arbitrarily deep as desired. 

For max efficiency, instead of evaluating each material separately, we used a method called **parameter blending**. Each 
material in MoonRay is derived from an "uber shader" called 
[`DwaBaseMaterial`]({{site.baseurl}}/user-reference/scene-objects/materials/dwa/DwaBaseMaterial), and as such can 
be resolved to a set of standard parameters that describe the "recipe" that can be used to produce a particular material. 
"Parameter blending" therefore involves blending the parameters of material A and material B based on the _mask_ attribute 
to produce a "recipe" for a single material that we can evaluate. 

There are a handful of attributes that cannot be blended, and for those the DwaLayerMaterial provides _fallback_ 
attributes which really act as overrides for setting the attribute for the resulting layered material. 


