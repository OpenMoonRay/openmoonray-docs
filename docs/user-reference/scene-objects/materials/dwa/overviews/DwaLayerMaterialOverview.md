---
![DwaLayerMaterial]({{site.baseurl}}/assets/images/user-reference/scene-objects/materials/dwa/DwaLayerMaterial/layer.png)

Similar to some compositing softwares, the <span class="define">DwaLayerMaterial</span> uses an A over B layering order. This material layers by parameter blending, which generates a single material with blended parameters based on the _mask_ attribute. There are a handful of attributes that can not be blended and for those the DwaLayerMaterial provides _fallback_ attributes which really act as overrides for setting the attribute for the resulting layered material.

