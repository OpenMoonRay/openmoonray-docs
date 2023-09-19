---
title: Iridescence 
---
# Iridescence 

## Introduction
Iridescence is a phenomenon where the hue of the surface changes with respect to the angle of observation and illumination. There are three main causes of iridescence: structural coloration, thin-film interference, and diffraction. In all three cases there are micro surface details that are the same scale as the wavelength of light (400nm - 700nm) that cause the reflected light to interfere with itself to form constructive or destructive interference. This interference causes different wavelengths to combine or cancel each other out, amplifying or muting colors within the incident light’s spectrum.

## Overview
### Iridescence Modes
There are two artistic modes for controlling the iridescence color. The _hue interpolation_ mode is designed to be more automatic and will generate a rainbow of colors, but it does have some extra controls to slightly fine tune the result. The _ramp_ mode is more customizable and gives complete control to set colors, positions, and interpolations via a user defined ramp.

#### Hue Interpolation
The `iridescence_primary_color` and `iridescence_secondary_color` allow for the spectrum of iridescence colors to be narrowed to a specific range of hues. By default the material interpolates all the way around the hue wheel, from red 0° to red again at 360°. The primary color is the color at near-normal incidence and the secondary color appears at glancing angles, with the colors in-between them interpolated. By default the material always interpolates positively around the hue wheel (increasing hue degree / clockwise) from primary to secondary, but this direction can be reversed (decreasing hue degree / counterclockwise) by using `iridescence_flip_hue_direction`.
![color_wheel (1)](https://github.com/dreamworksanimation/openmoonray-docs/assets/5185072/6644df14-df3f-42dd-83f1-c9c26d797295)


#### Ramp
The user defined ramp also defaults to the full rainbow of colors. However, the ramp can be customized to use any color and interpolation between those colors via up to ten control points.

### Metallic vs Dielectric
The iridescence effect is accomplished by simply tinting the specular lobe. Therefore the iridescence effect will appear strongest on metallic materials and weaker on non-metals. Intermediate results can be achieved through layering a metal material with iridescence with a dielectric material.
| Metallic    | Dielectric    |
| ----------- | ----------- |
| ![metal](https://github.com/dreamworksanimation/openmoonray-docs/assets/5185072/e44481ad-0c87-41cd-a8cb-c093462322f0) | ![solid_dielectric](https://github.com/dreamworksanimation/openmoonray-docs/assets/5185072/79345ce8-6330-41a7-b3d1-77b3d7f3c88f) |

### Interaction with Clearcoat
Since iridescence is view dependent interesting things happen when you turn on clearcoat. By default clearcoat is treated as a separate medium and will bend the rays which will significantly alter the look of iridescence because the bending reduces the difference in angle between the incoming ray and the half vector. Turning off `clearcoat_bending` in the clearcoat settings will not bend the rays and the iridescence effect will behave more predictably.

Iridscence can also be set to be applied to the clearcoat lobe instead of the regular specular lobe.

| Clearcoat without bending    | Clearcoat with bending    |
| ----------- | ----------- |
| ![clearcoat_bending_off](https://github.com/dreamworksanimation/openmoonray-docs/assets/5185072/967bcd7c-b8de-4c2c-9870-e4eb0d97129a) | ![clearcoat_bending](https://github.com/dreamworksanimation/openmoonray-docs/assets/5185072/a8803823-e24d-4c18-bad8-822a7a56e574) |
