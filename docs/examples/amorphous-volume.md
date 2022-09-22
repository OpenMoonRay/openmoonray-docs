---
---
Amorphous Volume is a volume shader specifically handling vdb file with
metadata embedded through our in-house GPU volume previewer Amorphous. The metadata informs renderer which voxel grid to load from vdb file,
and what kind of remapping function to use to remap grid value to final
volume coefficient.

## **Attributes Overview**

Attribute | Data Type | Default value | Description
--------- | --------- | ------------- | -------------
  opacity gain mult | Color | Rgb(1, 1,1) | A multiplier further applied to the color 
  color mult | Color | Rgb(1, 1, 1) | A multiplier further applied to the color
incandescene gain mult | 	Color | 	Rgb(1, 1, 1)	 | A multiplier further applied to the incandescence gain
anisotropy	 | Float | 	0	 | Value in the interval [-1,1] that defines how forward (1) or backward (-1) scattering the volume is. 0.0 is isotropic


## **Attributes Details**

### **opacity gain mult**

Multiplies the density value queried from vdb file, to make
the volume denser (dial up) or thinner (dial down). A high value means
that light will only travel a short distance through the volume, while a
low value means that light will travel a long distance through the
volume.

left to right:

Rgb(0.01, 0.01, 0.01) Rgb(0.1, 0.1, 0.1) Rgb(1, 1, 1)

![image](media/image1.tmp){width="4.876388888888889in"
height="1.6236111111111111in"}

### **color mult**

Multiplies the albedo value queried from vdb file, to
determine what color will the volume scatter (keep this value between
\[0, 1\] for physically plausible behavior)

left to right:

Rgb(1, 0.2, 0.2) Rgb(0.2, 1, 0.2) Rgb(0.2, 0.2, 1)

![image](media/image2.tmp){width="4.876388888888889in"
height="1.6166666666666667in"}

### **incandescene gain mult**

Multiplies the emission value queried from vdb file, to
determin what color will the volume emit, and how strong the emission
is.

left to right:

Rgb(1, 0.1, 0.1) Rgb(0.1, 1, 0.1) Rgb(0.1, 0.1, 1)

![](media/image3.tmp){width="4.876388888888889in"
height="1.6166666666666667in"}

left to right:

Rgb(0.1, 0.1, 0.1) Rgb(1, 1, 1) Rgb(10, 10, 10)

![image](media/image4.tmp){width="4.876388888888889in"
height="1.6166666666666667in"}

## **anisotropy**

Henyey-Greenstein Anisotropy coefficient between -1 (full back-scatter)
and 1 (full forward-scatter). The default is 0 for an isotropic medium,
which scatters the light evenly in all directions, giving a uniform
effect. Positive values bias the scattering effect forwards, in the
direction of the light, while negative values bias the scattering
backward, toward the light. Changing the eccentricity, therefore, means
that you will get a different effect depending on whether the camera is
looking toward the light or away from the light. Note that values very
close to 1.0 (above 0.95) or -1.0 (below -0.95) will produce scattering
that is so directional that it will not be very visible from most angles
(and what scattering you do see may be noisy), so such values are not
recommended.
