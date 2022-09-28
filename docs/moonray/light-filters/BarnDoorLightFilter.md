---
title: BarnDoorLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# BarnDoorLightFilter
**LIGHTFILTER**

---

<details open>
<summary class="scene-class-attr-group">Properties attributes</summary>
<p>

<h3>color</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

Color within the Barn Door lit region. For each color channel, 0=full shadow, 1=no shadow


<h3>density</h3>
<b>Float</b>  

default: 1.0

fades the filter effect. 0=no effect (like having no filter), 1=full effect


<h3>edge</h3>
<b>Float</b>  

default: 0.0

size of transition zone from the rounded box to the outside, as a proportion of width (or height, whichever is smaller)


<h3>edge_scale_bottom</h3>
<b>Float</b>  

default: 1.0

scale factor for bottom edge


<h3>edge_scale_left</h3>
<b>Float</b>  

default: 1.0

scale factor for left edge


<h3>edge_scale_right</h3>
<b>Float</b>  

default: 1.0

scale factor for right edge


<h3>edge_scale_top</h3>
<b>Float</b>  

default: 1.0

scale factor for top edge


<h3>invert</h3>
<b>Bool</b>  

default: False

swap application of filter from inside the Barn Door to outside


<h3>mode</h3>
<b>Int</b>  *enum*

- analytical = 0 (default)

- physical = 1


analytical mode allows light to shading points that project to the flap opening.physical mode allows light whose direction goes through the flap opening.


<h3>node_xform</h3>
<b>Mat4d</b>  *blurrable*

default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]

transform of the filter


<h3>pre_barn_distance</h3>
<b>Float</b>  

default: 0.5

distance from the BarnDoorLightFilter that the pre_barn_mode control takes effect


<h3>pre_barn_mode</h3>
<b>Int</b>  *enum*

- black = 0

- white = 1

- default = 2 (default)


force region before the pre_barn_distance to be fully filtered (black), not filtered at all (white), or treated the same as elsewhere (default)


<h3>projector_focal_distance</h3>
<b>Float</b>  

default: 30.0

distance of the flap opening from the projector origin. Ignored for orthographic projection


<h3>projector_height</h3>
<b>Float</b>  

default: 1.0

height of the frustum at distance 1.0


<h3>projector_type</h3>
<b>Int</b>  *enum*

- perspective = 0 (default)

- orthographic = 1


projection type used to map points to the flap opening. perspective has a focal point, while orthographic does not.


<h3>projector_width</h3>
<b>Float</b>  

default: 1.0

width of the frustum at distance 1.0


<h3>radius</h3>
<b>Float</b>  

default: 0.0

radius by which to convert the base box shape into a rounded box, as a proportion of half the width (or height, whichever is smaller)


<h3>rotation</h3>
<b>Float</b>  

default: 0.0

angle to rotate the Barn Door counter-clockwise as seen from the light, in degrees


<h3>size_bottom</h3>
<b>Float</b>  

default: 0.0

additional size on bottom edge


<h3>size_left</h3>
<b>Float</b>  

default: 0.0

additional size on left edge


<h3>size_right</h3>
<b>Float</b>  

default: 0.0

additional size on right edge


<h3>size_top</h3>
<b>Float</b>  

default: 0.0

additional size on top edge


<h3>use_light_xform</h3>
<b>Bool</b>  

default: True

attach to the light (in the -Z direction) and ignore node_xform


</p>
</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>on</h3>
<b>Bool</b>  

default: True

<p class="scene-class-attr-missing">No documentation available</p>


</p>
</details>

