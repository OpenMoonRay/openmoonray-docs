---
title: Base Volume Ramp
---

# Base Volume Ramp
![Header]({{ "/assets/images/user-reference/how-to-guides/base-volume-ramp-controls/header.png" | absolute_url }})

MoonRay's homogenous `BaseVolume` has ramp controls that can be used to control attributes such as attenuation color, 
diffuse color, and density at a certain depth. These ramp controls are useful because it allows you some artistic control 
over the look of the volume without necessitating that you convert it to a heterogeneous volume, which takes much 
longer to render. 

## Ramp Structure
Below is an overview of the parameters that the diffuse color ramp, attenuation color ramp, and density ramp all 
share. For the exact attribute names, see the diffuse, attenuation, and density sections below this one.

#### Use Ramp Toggle
An attribute is used to toggle the ramp on/off. If turned off, the uniform [*diffuse_color* / *attenuation_color* / 
*density*] will be used instead. Off by default.

#### Ramp Values
An ordered array of values make up the ramp, where the first value applies to the shallowest part of 
the volume, and the last value applies to the deepest part of the volume. (Ex: *diffuse_colors*, *attenuation_colors*, 
*densities*)

#### Ramp Distances
An ordered array of ramp positions represents the placement of ramp values in the ramp. Between these positions, values 
are interpolated according to ...

#### Ramp Interpolations

An ordered array of interpolation types indicates how values should be interpolated on the ramp. 

![Interpolations Example]({{ "/assets/images/user-reference/how-to-guides/base-volume-ramp-controls/interpolations.png" | absolute_url }})
![Interpolations Example]({{ "/assets/images/user-reference/how-to-guides/base-volume-ramp-controls/interpolations2.png" | absolute_url }})
*Left to right: Top: 1) no interpolations, 2) linear, 3) exponential up, 4) exponential down, 5) smooth. Bottom: 1) catmull-rom, 2) monotone cubic*

#### Min Depth
The depth at which the ramp starts. Any depths smaller than this number will automatically be assigned the first value 
in the [*diffuse_colors* / *attenuation_colors* / *densities*] array.

<video controls loop muted>
    <source src="{{ "/assets/images/user-reference/how-to-guides/base-volume-ramp-controls/minDepth.mp4" | absolute_url }}" alt="Min Depth Example">
</video>
<figcaption>
    <i>Example of diffuse_min_depth starting at 0 and ending at 2 (the max depth of the sphere).</i>
</figcaption>

#### Max Depth
The depth at which the ramp ends. Any depths larger than this number will automatically be assigned the last value 
in the [*diffuse_colors* / *attenuation_colors* / *densities*] array.

<video controls loop muted>
    <source src="{{ "/assets/images/user-reference/how-to-guides/base-volume-ramp-controls/maxDepth.mp4" | absolute_url }}" alt="Max Depth Example">
</video>
<figcaption>
    <i>Example of diffuse_max_depth starting at 2 (the max depth of the sphere) and ending at 1.3 (some arbitrary 
    diffuse_min_depth chosen for asthetic purposes).</i>
</figcaption>


## Diffuse Attributes

**Parameters**
- *use_diffuse_ramp*
- *diffuse_colors*
- *diffuse_distances*
- *diffuse_interpolations*
- *diffuse_min_depth*
- *diffuse_max_depth*

**Example**
```lua
BaseVolume("/obj/SceneFlow/sceneflow_shader_assign/shader/BaseVolume1") {
    ["attenuation_color"] = Rgb(1.0, 1.0, 1.0),
    ["use_diffuse_ramp"] = true,
    ["diffuse_colors"] = {Rgb(0.02,0.09,0.82), Rgb(0.89,0.39,0.49), Rgb(0.0,0.78,0.87), Rgb(0.0,0.96,0.96)},
    ["diffuse_distances"] = {0.22, 0.51, 0.76, 0.94},
    ["diffuse_interpolations"] = {1, 1, 1, 1},
    ["diffuse_min_depth"] = 0.0,
    ["diffuse_max_depth"] = 2.5,
}
```

## Attenuation Attributes

**Parameters**
- *use_attenuation_ramp*
- *attenuation_colors*
- *attenuation_distances*
- *attenuation_interpolations*
- *attenuation_min_depth*
- *attenuation_max_depth*
- *invert_attenuation_color*
- *match_diffuse*: match the diffuse color(s). If a ramp was used, all ramp specs will be the same for attenuation. 

## Density Attributes
The following parameters function the same way as the diffuse controls, except they apply to density, which is a float 
instead of a color. These ramp values are *multipliers* on any existing density you may have already applied. 

**Parameters**
- *use_density_ramp*
- *densities*
- *density_distances*
- *density_interpolations*
- *density_min_depth*
- *density_max_depth*
