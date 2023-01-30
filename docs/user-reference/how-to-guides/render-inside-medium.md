---
title: How to Render Inside a Medium
---
# How to: Render Inside A Medium 
#### (with correct IOR tracking)

MoonRay natively supports nested dielectrics *in scalar mode only*, which allows for correct index of refraction tracking. However, if you want your camera to start in a certain medium (say, underwater), there are a few attributes you need to set on the camera to allow for correct index of refraction tracking. 

## Attribute Descriptions

- `medium_material`: the material you want the camera to start in
- `medium_geometry`: limits the application of the medium_material only to the medium_geometry <br><br>*Note: medium_geometry is primarily useful if you want your camera to be partially submerged in a medium. The rays that pass through the medium_geometry will have the index of refraction of the specified medium_material, while rays that do not pass through the medium_geometry will assume they are in air. Setting medium_geomety may have a small, negative performance impact, so I wouldn't set this unless you know your camera will be partially submerged.*

## Example

```lua
local waterMat = DwaRefractiveMaterial("waterMat") {
    ["index_of_refraction"] = 1.33
    ...
}
 
 
local waterBox = AbcGeometry("water") {
    ...
}
 
 
Camera
{
    ["medium_material"] = waterMat
    ["medium_geometry"] = waterBox
    ...
}
```

The images below show the effect of setting the medium_material to water. As expected, the rightmost sphere with a water material applied to it disappears, while the sphere with the red specular material applied to it appears duller. 

| medium_material: None | medium_material: DwaRefractive (IOR 1.33) |
| --------------------- | ----------------------------------------- |
| ![Medium Material None Example]({{site.baseurl}}/assets/images/user-reference/how-to-guides/render-in-medium/medium_material_none.png) | ![Medium Material Water Example]({{site.baseurl}}/assets/images/user-reference/how-to-guides/render-in-medium/medium_material_refractive.png) |
