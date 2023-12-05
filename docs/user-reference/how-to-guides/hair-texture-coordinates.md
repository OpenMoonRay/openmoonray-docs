# Hair Texture Coordinates

This page describes the various hair texture coordinates and how to use them.

## Hair UVs
These are the default texture coordinates for curves in MoonRay. The 's' texture coordinate varies from 0 to 1 along the 
length of the hair curve, 0 at the base and 1 at the tip. The 't' texture coordinate varies from -1 to 1 across the 
width of the hair curve. S and T are pretty much useless to read an image texture but very useful if you want to isolate 
a parameter to control base to tip behavior for the hair shader.

```lua
ImageMap("imageMap") {
    ["texture"] = "path_to_texture",
    ["texture coordinates"] = 0 -- ST
    ...
}

HairMaterial_v3("hairMat") {
    ["hair color"] = bind(ImageMap("imageMap"))
    ...
}
```

**Example:**

!["Hair UVs Example"]({{ "/assets/images/user-reference/how-to-guides/hair-texture-coordinates/st_example.png" | absolute_url }})
*Hair curves with a texture applied (shown below) using hair UVs*
!["Hair UVs Texture"]({{ "/assets/images/user-reference/how-to-guides/hair-texture-coordinates/rgb_checker_black.png" | absolute_url }})

## Surface UVs
Each hair carries with it the coordinates of the surface texture at the base of the hair curve as 'surface_st'. This is 
the recommended method to use to add hair color. You can paint a color map on the surface that the hair grows from and 
then, using an ImageMap shader with the "Texture Coordinate" input set to "hair surface", you can color the entire hair 
curve growing at the surface with the color at the root. 

```lua
ImageMap("imageMap") {
    ["texture"] = "path_to_texture",
    ["texture coordinates"] = 1 -- surface_st
    ...
}

HairMaterial_v3("hairMat") {
    ["hair color"] = bind(ImageMap("imageMap"))
    ...
}
```
**Example:**
!["Surface UVs Example]({{ "/assets/images/user-reference/how-to-guides/hair-texture-coordinates/surface_st_example.png" | absolute_url }})
*Left: hair with a texture (using the same checkerboard from above) applied to it using surface UVs, Right: hair without texture*


## Closest Surface UV
In addition to the 'surface_st', which is the texture coordinate of the point on the surface at the root of the hair 
curve, we can also potentially carry another called 'closest_surface_uv', which points to the texture coordinates of the 
surface *closest* to the hair curve. This is output by default by the FurDeformGeometry shader.

```lua
FurDeformGeometry("furGeo") {
    ["render fur ref file"] = "path to fur file",
    ...
}

AttributeMap("attrMap") {
    ["map_type"] = 15,
    ...
}

ImageMap("imageMap") {
    ["texture"] = "path_to_texture",
    ["texture coordinates"] = 2 -- input texture coordinates
    ["input texture coordinates"] = bind(AttributeMap("attrMap"))
    ...
}

BaseMaterial("curveMat") {
    ["emission color"] = bind(imageMap),
    ...
}
```
**Example:**
!["Closest Surface UVs Example]({{ "/assets/images/user-reference/how-to-guides/hair-texture-coordinates/closest_surface_st_example.png" | absolute_url }})

## Column UVs
This set of UVs can be used to add random variation along the length of hair grooms. Each hair will randomly pick a 
single column to follow to pick up the texture variations along its length. This can be used to either add color 
variation per strand or have deterministic colors along the hair length by painting a texture.

```lua
HairColumnMap("columnMap") {}

ImageMap("imageMap") {
    ["texture"] = "path_to_texture",
    ["texture coordinates"] = 2 -- input texture coordinates
    ["input texture coordinates"] = bind(HairColumnMap("columnMap")),
    ...
}

HairMap("hairMap") {
    ["column uv color"] = bind(ImageMap("imageMap")),
    ...
}

HairMaterial_v3("hairMat") {
    ["hair color"] = bind(HairMap("hairMap"))
    ...
}
```
**Example:**
!["Column UVs Example]({{ "/assets/images/user-reference/how-to-guides/hair-texture-coordinates/column_uv_example.png" | absolute_url }})
*Left: Curves textured using column uvs, Right: un-textured curves, Bottom: the texture used for the curves on the left*
!["Column UVs texture"]({{ "/assets/images/user-reference/how-to-guides/hair-texture-coordinates/column_uv_texture.png" | absolute_url }} )

## Noise Maps
How to use NoiseMaps on hair using various UVs:
- Plug the AttributeMap setup to read either 'surface_st' or 'closest_surface_uv' into the 'input texture coordinates 
of the NoiseMap shaders with 'space' of the noise set to 'input texture coordinates' as well. 
- Thereafter, adjust the 'frequency' etc as per regular noise shaders. 
- The output can be used via a LayerMap shader to blend between different colors for the 'hair colors' or to 
control roughness, etc. 