# Barn Door Light Filter
# Introduction
<img src="media/image1.tmp" style="width:4.875in;height:4.875in" />

The BarnDoorLightFilter functions like a [barn
door](https://en.wikipedia.org/wiki/Stage_lighting_accessories#Barn_doors)
in stage lighting. Typically there are four flaps attached to a light
that shape the lighting by restricting where the light can shine.

| <img src="media/image2.tmp" style="width:4.875in;height:4.875in" /> | <img src="media/image3.jpeg" style="width:4.875in;height:3.65625in" /> |
|---------------------------------------------------------------------|------------------------------------------------------------------------|
| Example photo of a Barn Door (black)                                | Photo of a Barn Door narrowing the light                               |

If the flaps were stitched to each other, the ends of the flaps would
form a rectangular portal that constrains the light.

This light filter operates by simulating such a portal, called the
flap-opening, shown in gray below:

<img src="media/image4.tmp" style="width:4.875in;height:3.67708in" />

 The flap-opening can be moved, resized, rotated, rounded, colored, and
blurred, with varying blur per side. Here is a rough overview of the
various shaping parameters.

<img src="media/image5.tmp" style="width:4.875in;height:3.19792in" />

The edge expands outwards and there are controls to scale the size of
each edge.

| <img src="media/image6.tmp" style="width:3.85417in;height:4.03125in" /> |
|-------------------------------------------------------------------------|
| edge size and per-edge scaling animation                                |

There are two modes of the Barn Door, analytical and physical.

| <img src="media/image7.tmp" style="width:3.125in;height:6.25in" /> | <img src="media/image8.tmp" style="width:3.125in;height:6.25in" /> | <img src="media/image9.tmp" style="width:3.125in;height:6.25in" /> |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|
| analytical mode                                                    | physical mode                                                      | no filter                                                          |

In physical mode, the ray between the shading point and the light is
checked to see if it passes through the Barn Door rectangular portal.
Light rays masked by the portal are darkened.

In analytic mode, the calculation is the same but the end of the ray on
the light is replaced by the singular position of the Barn Door (a
single point).  It treats the light as a point light for filter
shadowing.

There are two projection types, perspective and orthographic. These are
mainly useful for analytical mode, shown below. The two modes affect the
shape of the cone of light.

| <img src="media/image7.tmp" style="width:3.125in;height:6.25in" /> | <img src="media/image10.tmp" style="width:3.125in;height:6.25in" /> | <img src="media/image9.tmp" style="width:3.125in;height:6.25in" /> |
|--------------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------------------------------------|
| perspective projection                                             | orthographic projection                                             | no filter                                                          |

In analytic mode, perspective type provides a **cone** of light while
orthographic provides a **column**.

In physical mode, the projection type will determine how big the
flap-opening is. With perspective type, the flap-opening size will scale
with projector_focal_distance (roughly maintaining the same solid angle
/ cone size). With orthogonal type, it will remain a fixed size. Beyond
portal size the projection type does not matter.

# Attributes

| **Name:**    | color                                                                                     |
|--------------|-------------------------------------------------------------------------------------------|
| **Type:**    | *Rgb*                                                                                     |
| **Default:** | (1, 1, 1)                                                                                 |
| **Comment:** | Color within the Barn Door lit region. For each color channel, 0=full shadow, 1=no shadow |

| **Name:**    | density                                                                     |
|--------------|-----------------------------------------------------------------------------|
| **Type:**    | *float*                                                                     |
| **Default:** | 1                                                                           |
| **Comment:** | fades the filter effect. 0=no effect (like having no filter), 1=full effect |

| **Name:**    | edge                                                                                                                    |
|--------------|-------------------------------------------------------------------------------------------------------------------------|
| **Type:**    | *float*                                                                                                                 |
| **Default:** | 0                                                                                                                       |
| **Comment:** | size of transition zone from the rounded box to the outside, as a proportion of width (or height, whichever is smaller) |

| **Name:**    | edge_scale_bottom             |
|--------------|-------------------------------|
| **Type:**    | *float*                       |
| **Default:** | 1                             |
| **Comment:** |  scale factor for bottom edge |

| **Name:**    | edge_scale_left             |
|--------------|-----------------------------|
| **Type:**    | *float*                     |
| **Default:** | 1                           |
| **Comment:** |  scale factor for left edge |

| **Name:**    | edge_scale_right             |
|--------------|------------------------------|
| **Type:**    | *float*                      |
| **Default:** | 1                            |
| **Comment:** |  scale factor for right edge |

| **Name:**    | edge_scale_top             |
|--------------|----------------------------|
| **Type:**    | *float*                    |
| **Default:** | 1                          |
| **Comment:** |  scale factor for top edge |

| **Name:**    | invert                                                          |
|--------------|-----------------------------------------------------------------|
| **Type:**    | *bool*                                                          |
| **Default:** | false                                                           |
| **Comment:** | swap application of filter from inside the Barn Door to outside |

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>mode</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><p><em>Int, enumerable</em></p>
<p>0 = analytical</p>
<p>1 = physical</p></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>0 (analytical)</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td>visibility is computed with either the projector origin (analytic
mode) or the light sample (physical mode)</td>
</tr>
</tbody>
</table>

| **Name:**    | node_xform                                                                          |
|--------------|-------------------------------------------------------------------------------------|
| **Type:**    | *Mat4d, blurrable*                                                                  |
| **Default:** | Mat4d{ vx = (1, 0, 0, 0), vy = (0, 1, 0, 0), vz = (0, 0, 1, 0), vw = (0, 0, 0, 1) } |
| **Comment:** | transform of the filter                                                             |

| **Name:**    | on                              |
|--------------|---------------------------------|
| **Type:**    | *bool*                          |
| **Default:** | true                            |
| **Comment:** | whether filter takes is enabled |

| **Name:**    | pre_barn_distance                                                                 |
|--------------|-----------------------------------------------------------------------------------|
| **Type:**    | *float*                                                                           |
| **Default:** | 0.5                                                                               |
| **Comment:** | distance from the BarnDoorLightFilter that the pre_barn_mode control takes effect |

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>pre_barn_mode</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><p><em>Int, enumerable</em></p>
<p>0 = black</p>
<p>1 = white</p>
<p>2 = default</p></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>2 (default)</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td>force region before the pre_barn_distance to be fully filtered
(black), not filtered at all (white), or treated the same as elsewhere
(default)</td>
</tr>
</tbody>
</table>

| **Name:**    | projector_focal_distance                                                                            |
|--------------|-----------------------------------------------------------------------------------------------------|
| **Type:**    | *float*                                                                                             |
| **Default:** | 30                                                                                                  |
| **Comment:** | distance of the rectangular aperture from the projector origin. Ignored for orthographic projection |

| **Name:**    | projector_height                      |
|--------------|---------------------------------------|
| **Type:**    | *float*                               |
| **Default:** | 1                                     |
| **Comment:** | height of the frustum at distance 1.0 |

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>projector_type</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><p><em>Int, enumerable</em></p>
<p>0 = perspective</p>
<p>1 = orthographic</p></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>0 (perspective)</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td>projection type of the aperture. perspective=has focal point,
orthographic=no focal point</td>
</tr>
</tbody>
</table>

| **Name:**    | projector_width                      |
|--------------|--------------------------------------|
| **Type:**    | *float*                              |
| **Default:** | 1                                    |
| **Comment:** | width of the frustum at distance 1.0 |

| **Name:**    | radius                                                                                                                                |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------|
| **Type:**    | *float*                                                                                                                               |
| **Default:** | 0                                                                                                                                     |
| **Comment:** | radius by which to convert the base box shape into a rounded box, as a proportion of half the width (or height, whichever is smaller) |

| **Name:**    | rotation                                                                           |
|--------------|------------------------------------------------------------------------------------|
| **Type:**    | *float*                                                                            |
| **Default:** | 0                                                                                  |
| **Comment:** | angle to rotate the Barn Door counter-clockwise as seen from the light, in degrees |

| **Name:**    | size_bottom                    |
|--------------|--------------------------------|
| **Type:**    | *float*                        |
| **Default:** | 0                              |
| **Comment:** | additional size on bottom edge |

| **Name:**    | size_left                    |
|--------------|------------------------------|
| **Type:**    | *float*                      |
| **Default:** | 0                            |
| **Comment:** | additional size on left edge |

| **Name:**    | size_right                    |
|--------------|-------------------------------|
| **Type:**    | *float*                       |
| **Default:** | 0                             |
| **Comment:** | additional size on right edge |

| **Name:**    | size_top                    |
|--------------|-----------------------------|
| **Type:**    | *float*                     |
| **Default:** | 0                           |
| **Comment:** | additional size on top edge |

| **Name:**    | use_light_xform                                                 |
|--------------|-----------------------------------------------------------------|
| **Type:**    | *bool*                                                          |
| **Default:** | true                                                            |
| **Comment:** | attach to the light (in the -Z direction) and ignore node_xform |

# Examples

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><img src="media/image11.tmp"
style="width:4.875in;height:4.875in" /></th>
<th><img src="media/image1.tmp"
style="width:4.875in;height:4.875in" /></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>No light filter</td>
<td>With BarnDoorLightFilter</td>
</tr>
<tr class="even">
<td colspan="2">filter = RodLightFilter("/Scene/lighting/rod") {<br />
["node_xform"] = Mat4(-0.0291956, 0, 0.999573, 0, <br />
                           0.999573, 0, 0.0291956, 0, <br />
                           0, 1, 0, 0, <br />
                           0, 9, -7, 1),<br />
    ["projector_width"] = 0.5,<br />
    ["projector_height"] = 0.5,<br />
    ["projector_type"] = "perspective",<br />
    ["projector_focal_distance"] = 9,<br />
    ["pre_barn_mode"] = "black",<br />
    ["pre_barn_distance"] = 0,<br />
    ["mode"] = "physical",<br />
    ["invert"] = false,<br />
    ["radius"] = 0.2,<br />
    ["edge"] = 0.2,<br />
    ["use_light_xform"] = true,<br />
    ["edge_scale_top"] = 1.0,<br />
    ["edge_scale_bottom"] = 0.11,<br />
    ["edge_scale_left"] = 0.5,<br />
    ["edge_scale_right"] = 10,<br />
    ["rotation"] = 35,<br />
    ["density"] = 0.95,<br />
["color"] = Rgb(1,1,1),<br />
["on"] = true,<br />
["size_top"] = 0,<br />
["size_bottom"] = 0,<br />
["size_left"] = 0,<br />
["size_right"] = 0,<br />
}</td>
</tr>
</tbody>
</table>

In the following examples, a BarnDoorLightFilter is above the scene
aiming straight down from a light. The focal length is such that the
flap opening occurs exactly at the ground plane. The scene geometry is
designed to illustrate the shape of the rectangular flap opening and the
shape of the filtered light.

### mode

| <img src="media/image12.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image13.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| mode="analytical"                                                    | mode="physical"                                                      |

### projector_type (analytical mode)

| <img src="media/image14.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image15.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| projector_type="perspective"                                         | projector_type="orthographic"                                        |

### projector_focal_length (physical mode only)

| <img src="media/image16.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image17.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image18.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| projector_focal_length=7.6                                           | projector_focal_length=8.3                                           | projector_focal_length=9                                             |

### use_light_xform

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><img src="media/image19.tmp"
style="width:3.125in;height:3.125in" /></th>
<th><img src="media/image20.tmp"
style="width:3.125in;height:3.125in" /></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>use_light_xform="true"</td>
<td><p>use_light_xform="false"</p>
<p>barnXform = rotate(-90, 1, 0, 0)*translate(-2,9,-6)</p></td>
</tr>
</tbody>
</table>

### width

| <img src="media/image21.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image22.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image23.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| width=0.1                                                            | width=0.2                                                            | width=0.4                                                            |

### height

| <img src="media/image24.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image25.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image26.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| height=0.1                                                           | height=0.2                                                           | height=0.4                                                           |

### radius

| <img src="media/image27.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image28.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image29.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| radius=0                                                             | radius=0.5                                                           | radius=1                                                             |

### edge

| <img src="media/image30.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image31.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image32.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| edge=0                                                               | edge=0.5                                                             | edge=1                                                               |

### pre_barn_mode

| <img src="media/image33.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image34.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image35.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| pre_barn_mode="default"                                              | pre_barn_mode="white"                                                | pre_barn_mode="black"                                                |

Here pre_barn_distance is set to the distance from the
BarnDoorLightFilter to the ground plane, just like the focal distance.

### pre_barn_distance

| <img src="media/image36.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image37.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image38.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| pre_barn_distance=7.5                                                | pre_barn_distance=8.5                                                | pre_barn_distance=9.5                                                |

The distance from the BarnDoorLightFilter to the ground is 9.

### size_left, size_bottom, size_right, size_top

| <img src="media/image39.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image40.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image41.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image42.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| size_left=0.1                                                        | size_bottom=0.1                                                      | size_right=0.1                                                       | size_top=0.1                                                         |

### edge_scale_left, edge_scale_bottom, edge_scale_right, edge_scale_top

| <img src="media/image43.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image44.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image45.tmp" style="width:3.125in;height:3.125in" /> | <img src="media/image46.tmp" style="width:3.125in;height:3.125in" /> |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| edge_scale_left=3                                                    | edge_scale_bottom=3                                                  | edge_scale_right=0.333                                               | edge_scale_top=0.333                                                 |

### density

| <img src="media/image47.tmp" style="width:3.125in;height:3.125in" /> |             |             |
|----------------------------------------------------------------------|-------------|-------------|
| density=0.4                                                          | density=0.7 | density=1.0 |

### invert

|              |             |
|--------------|-------------|
| invert=false | invert=true |

### rotation

|            |             |             |
|------------|-------------|-------------|
| rotation=0 | rotation=15 | rotation=30 |

### node_xform

<table>
<colgroup>
<col style="width: 44%" />
<col style="width: 55%" />
</colgroup>
<tbody>
<tr class="odd">
<td>use_light_xform=true</td>
<td><p>use_light_xform=false</p>
<p>node_xform=rotate(-90, 1, 0, 0)*translate(-2,9,-6)</p></td>
</tr>
</tbody>
</table>

### color

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>color=Rgb(1,1,1)</td>
<td>color=Rgb(1,0,0)</td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><p>color=Rgb(1,0,0)</p>
<p>invert=true</p></td>
<td><p>color=Rgb(1,0,0)</p>
<p>density=0.5</p></td>
<td><p>color=Rgb(1, 0, 0)</p>
<p>invert=true</p>
<p>density=0.5</p></td>
</tr>
</tbody>
</table>

### on

|         |          |
|---------|----------|
| on=true | on=false |
