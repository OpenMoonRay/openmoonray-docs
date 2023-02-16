---
![DwaRefractiveMaterial]({{site.baseurl}}/assets/images/user-reference/scene-objects/materials/dwa/DwaRefractiveMaterial/refractive.png)

The <span class="define">DwaRefractiveMaterial</span> is the material for all transparent materials such as water, glass, and gemstones. It is best to use physical values for the _refractive_index_ eg. 1.33 for water and 1.52 for glass. Larger values can be used for gemstones; up to 2.42 for diamond. Note that there is no diffuse component, but a diffuse lobe can be layered over the DwaRefractiveMaterial via the [DwaLayerMaterial]({{site.baseurl}}/user-reference/scene-objects/materials/dwa/DwaLayerMaterial) to achieve looks such as dirt or paint on top of glass.
