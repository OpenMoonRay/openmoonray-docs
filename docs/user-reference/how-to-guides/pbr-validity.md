---
title: PBR Validity
---
# PBR Validity

## Introduction
PBR Validity is a feature that aids the artist in validating that materials have values that are physically reasonable, thus promoting a PBR workflow. PBR Validity is implemented as a Material AOV Property on RenderOutputs. Some of the attributes that are currently validated include - refractive index for validating specular, albedo for validating diffuse (and consequently, subsurface) and metallic color for validating specular on metals.

## Technical Details
### RenderOutput Setup
The PBR validity can be visualized by setting up a RenderOutput with a material AOV syntax that queries the "pbr_validity" property, with the lobe selector specifying the type of material you want to validate. To make it easier to isolate specific material types, the shaders have exposed AOV labels.

**RDLA setup for albedo validity**
```lua
RenderOutput("/Scene/lighting/pbr_validity_aov_albedo") {
    ["result"] = 7,
    ["material aov"] = "'diffuse'.DSS.pbr_validity",
    ["file name"] = "result0.exr",
    ["channel name"] = "albedo validity"
}
```
The above block shows an example of selecting and validating diffuse lobes.  Similarly, other lobe types can be selected using common Material AOV syntax. Some examples:

**Material AOV syntax examples for PBR Validity**
```lua
["material aov"] = "'specular'.pbr_validity"
["material aov"] = "'clearcoat'.pbr_validity"
["material aov"] = "'moisture'.pbr_validity"
```

### What does the AOV output look like?
A color scheme that is easy to visualize valid and invalid areas is used. Red areas are considered invalid, while green areas are considered valid. Values in between are shown as an interpolation between green and red (they show up as orange for close to invalid, and yellow for close to valid).
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/aov_example.jpg)

*Please note*: The validity for albedo and metallic color is evaluated based on the value of the color, i.e. the maximum of red, green or blue channels. Validity is not evaluated individually per RGB channel!

### Albedo Validity for Diffuse
Physically reasonable values (max of RGB) for albedo are between 0.032 and 0.87.

Therefore, on the lower end - to achieve dark looking materials, it is recommended to use values greater than 0.032 (~0.04). It might be tempting to use lower values like 0.02, or even 0.0 to get black, but, those materials will not light well. With a correct LUT applied, values around 0.04 should be able to yield inky black results!
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/albedo_drops_low_final.jpg)
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/aovs_albedo_low.jpg)
Albedo values: 0.001, 0.01, 0.02, 0.04, 0.12

On the higher end, for brighter materials, it is recommended to use values less than 0.87. This is an important change in the workflow compared to old moonlight workflows, where it was common to see values of 0.9 or higher being used for instance in the red channel for skin.
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/albedo_drops_high_final.jpg)
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/aovs_albedo_high.jpg)
Albedo values: 0.6, 0.8, 0.9, 0.95, 0.99

Validity also works with textures that are bound to the albedo, along with any map operations that are applied to the texture in the shading network (like color corrections or remaps). This is really useful because it is very difficult to evaluate all values in a texture map by hand, and almost impossible to track down end values that actually get plugged into the albedo in a complicated shading network. Below is an example of a skin setup:
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/render_skin.jpg)
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/aovs_skin_albedo.jpg)

### Refractive Index Validity for Specular
Dielectric materials, either reflective or refractive have an Index of Refraction (or refractive index) that controls the specular behavior in the Dwa family of materials. The IOR is a single floating point value in our shaders - since we only allow non-colored specular response for dielectrics.

Most common solids have an IOR of 1.5 (the default value in our shaders). This is the recommended value, and thus, it represents the center of the valid range. In order to achieve different looks, we recommend using IOR values that are between 1.33 and 1.58. Some gemstones are known to have higher IOR values like 1.68 (so these are exceptions).

Examples of how Validity shows up for reflective and refractive materials:
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/reflect_drops_final.jpg)
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/render_amber_refract.jpg)
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/aovs_spec_refract.jpg)
IOR values: 1.1, 1.318, 1.5, 1.72, 2.4

### Metallic Color Validity for Metals
Metals are parameterized by a metallic color that controls the specular response in our shaders. The recommended values for metallic color is greater than 0.53 (for max RGB). Anything less than 0.46 will get flagged as invalid.
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/metaldrops_final.jpg)
![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/pbr-validity/aovs_metal.jpg)
Metallic color values: 0.165, 0.5, 0.66, 0.99, > 1.0 (but gets clamped to 1.0 in shader)
