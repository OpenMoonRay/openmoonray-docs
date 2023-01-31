---
Title: How To Look Dev Transparent Surfaces
---
# How To: Look Dev Transparent Surfaces

A transparent surface is a material interface that allows light to pass through. The law of refraction defines how light bends as it enters/exits from one medium to another (e.g., from air to water, or air to glass). 

### Index of Refraction for Common Materials

| Medium | Index of Refraction | 
| -------------- | ------------------- |
| Air | 1.0 |
| Water | 1.33 |
| Glass | 1.5 |
| Gemstones, etc | 2.x |

## Depth Settings
MoonRay's default depth settings are likely too low, which will result in a much darker surface than desired because light rays can't get out of the medium. Increase the following SceneVariable settings to produce a brighter render:

* `max_depth` (default: 5)
* `max_glossy_depth` (default: 2)
* `max_mirror_depth` (default: 3)

| max_depth: 5, glossy_depth: 2 | max_depth: 6, glossy_depth: 6 |
| -- | -- |
| ![Max Depth Example1]({{site.baseurl}}/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/max_depth_example1.png) | ![Max Depth Example2]({{site.baseurl}}/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/max_depth_example2.png) |

## Roughness and Layering

## Independent Transmission IOR
By default the reflective and refractive IOR are the same. If you want to reduce distortions in refractions, lower the `independent_transmission_refractive_index`. 

{%-include image-gallery.html images=site.data.user-reference.how-to-guides.look-dev-transparent-surfaces.gallery data=site.data.user-reference.how-to-guides.look-dev-transparent-surfaces-%}

## BaseVolume for Refraction Color
Light gets absorbed as it travels through a refractive medium, which is correctly modeled with BaseVolume attenuation. 

Set `diffuse_color` to black to eliminate scattering within the volume, then set the `attenuation_color` to the desired absorption color. 

| BaseVolume | Transmission Color |
| -- | -- |
| ![BaseVolume]({{site.baseurl}}/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/baseVolume.png) | ![Transmission Color]({{site.baseurl}}/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/transmissionColor.png) |