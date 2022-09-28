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

<h2>color</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

Color within the Barn Door lit region. For each color channel, 0=full shadow, 1=no shadow


<h2>density</h2>
<b>Float</b>  

Default value : 1.0  

fades the filter effect. 0=no effect (like having no filter), 1=full effect


<h2>edge</h2>
<b>Float</b>  

Default value : 0.0  

size of transition zone from the rounded box to the outside, as a proportion of width (or height, whichever is smaller)


<h2>edge_scale_bottom</h2>
<b>Float</b>  

Default value : 1.0  

scale factor for bottom edge


<h2>edge_scale_left</h2>
<b>Float</b>  

Default value : 1.0  

scale factor for left edge


<h2>edge_scale_right</h2>
<b>Float</b>  

Default value : 1.0  

scale factor for right edge


<h2>edge_scale_top</h2>
<b>Float</b>  

Default value : 1.0  

scale factor for top edge


<h2>invert</h2>
<b>Bool</b>  

Default value : False  

swap application of filter from inside the Barn Door to outside


<h2>mode</h2>
<b>Int</b>  *enum*

- analytical = 0 (default)

- physical = 1


analytical mode allows light to shading points that project to the flap opening.physical mode allows light whose direction goes through the flap opening.


<h2>node_xform</h2>
<b>Mat4d</b>  *blurrable*

Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]  

transform of the filter


<h2>pre_barn_distance</h2>
<b>Float</b>  

Default value : 0.5  

distance from the BarnDoorLightFilter that the pre_barn_mode control takes effect


<h2>pre_barn_mode</h2>
<b>Int</b>  *enum*

- black = 0

- white = 1

- default = 2 (default)


force region before the pre_barn_distance to be fully filtered (black), not filtered at all (white), or treated the same as elsewhere (default)


<h2>projector_focal_distance</h2>
<b>Float</b>  

Default value : 30.0  

distance of the flap opening from the projector origin. Ignored for orthographic projection


<h2>projector_height</h2>
<b>Float</b>  

Default value : 1.0  

height of the frustum at distance 1.0


<h2>projector_type</h2>
<b>Int</b>  *enum*

- perspective = 0 (default)

- orthographic = 1


projection type used to map points to the flap opening. perspective has a focal point, while orthographic does not.


<h2>projector_width</h2>
<b>Float</b>  

Default value : 1.0  

width of the frustum at distance 1.0


<h2>radius</h2>
<b>Float</b>  

Default value : 0.0  

radius by which to convert the base box shape into a rounded box, as a proportion of half the width (or height, whichever is smaller)


<h2>rotation</h2>
<b>Float</b>  

Default value : 0.0  

angle to rotate the Barn Door counter-clockwise as seen from the light, in degrees


<h2>size_bottom</h2>
<b>Float</b>  

Default value : 0.0  

additional size on bottom edge


<h2>size_left</h2>
<b>Float</b>  

Default value : 0.0  

additional size on left edge


<h2>size_right</h2>
<b>Float</b>  

Default value : 0.0  

additional size on right edge


<h2>size_top</h2>
<b>Float</b>  

Default value : 0.0  

additional size on top edge


<h2>use_light_xform</h2>
<b>Bool</b>  

Default value : True  

attach to the light (in the -Z direction) and ignore node_xform


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>on</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>


</details>

