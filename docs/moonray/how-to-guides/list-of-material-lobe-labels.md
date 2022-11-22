---
title: List of Material Lobe Labels

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# List of Material Lobe Labels

- [Dwa* Materials](#ListofMaterialLobeLabels-Dwa*Materials-)

- [HairMaterial](#ListofMaterialLobeLabels-HairMaterial)

- [HairDiffuseMaterial](#ListofMaterialLobeLabels-HairDiffuseMat)

- [IrisMaterial](#ListofMaterialLobeLabels-IrisMaterial)

- [GlitterFlakeMaterial](#ListofMaterialLobeLabels-GlitterFlakeMa)

##  Dwa* Materials (such as DwaSolidDielectric, DwaMetal, DwaRefractive, DwaSkin, DwaFabric, DwaVelvet, etc.)

Each _Dwa*_ material may either carry a subset or all of the following lobes. For instance:

- `DwaMetal` only has `fuzz`, `outer specular`, and `specular`
- `DwaSkin` has all lobes except `transmission`

When available, the individual lobes can be accessed via AOVs using the following labels:

-   `fuzz`
-   `outer specular` (clearcoat/moisture)
-   `specular`
-   `diffuse`
-   `specular transmission`
-   `diffuse transmission`

## HairMaterial

Hair materials only have one lobe which can be accessed via this label: `hair`. However, when the attribute `use optimized sampling = OFF`, the
hair lobes are split into four individual lobes, each of which can be accessed via:

-   `hair R`
-   `hair TT`
-   `hair TRT`
-   `hair TRRT`

To check individual lobe settings (which may be
important for VDEV standardization checks &#8212; for instance, in a Sceneflow review render), we should definitely `use optimized sampling = OFF` on the material and render out AOVs to check properties like *color* and *roughness* for the individual lobes. This should help us catch any rogue surfacing setups where perhaps the
`transmission tint` has been used to set hair color instead of the `hair color` attribute. This should only be the case for specific look
requirements where we have to break physical looks achievable from the `HairMaterial`. In this case, we can use the following material expressions:\
With `use optimized sampling = OFF`

```lua
'hair R'.color
'hair TRT'.color
'hair TT'.color
```
In VDEV handoff, you should check that _all of the above colors colors are the same_
for a physically accurate material setup that behaves the most logically in lighting. You can &#8212; and should &#8212; change when using the lobe specific _tint colors_ which are only recommended for very art-dev-ed looks and
are valid only in those cases.

## HairDiffuseMaterial

-  `'hair diffuse`

## IrisMaterial

 IrisMaterial has a special *caustic* lobe which can be accessed via the label: `iris caustics`.


## GlitterFlakeMaterial

You can isolate glitter using the following label:

-   `glitter` 
