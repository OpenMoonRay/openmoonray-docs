Amorphous Volume is a volume shader specifically handling VDB file
with metadata embedded through our in -house GPU volume previewer
*Amorphous*.
>
The metadata informs renderer which voxel grid to load from VDB file,
and what kind of remapping f unction to use to remap grid value to
final volume coefficient.

## Attributes Overview

Attribute | Data Type | Default Value | Description
--------- | --------- | --------- | --------- | 
opacity gain mult | Color | Rgb(1, 1, 1 | A multiplier further applied to the opacity gain.
color mult | Color | Rgb(1, 1, 1) | A multiplier further applied to the color.
incandescene gain mult | Color | Rgb(1, 1, 1) | A multiplier further applied to the incandescence gain.
anisotropy | Float | 0 | Value in the interval [-1,1] that defines how forward (1) or backward (-1) scattering the volume is. 0.0 is isotropic.