---
title: BarnDoorLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# BarnDoorLightFilter

**LIGHTFILTER**

Documentation for class BarnDoorLightFilter



---

## <p class="scene-class-attr-group">Properties attributes</p>

## color

**Rgb** 


Default value : [ 1, 1, 1 ]




Color within the Barn Door lit region. For each color channel, 0=full shadow, 1=no shadow




## density

**Float** 


Default value : 1.0




fades the filter effect. 0=no effect (like having no filter), 1=full effect




## edge

**Float** 


Default value : 0.0




size of transition zone from the rounded box to the outside, as a proportion of width (or height, whichever is smaller)




## edge_scale_bottom

**Float** 


Default value : 1.0




scale factor for bottom edge




## edge_scale_left

**Float** 


Default value : 1.0




scale factor for left edge




## edge_scale_right

**Float** 


Default value : 1.0




scale factor for right edge




## edge_scale_top

**Float** 


Default value : 1.0




scale factor for top edge




## invert

**Bool** 


Default value : False




swap application of filter from inside the Barn Door to outside




## mode

**Int** *enum*



- analytical = 0 (default)

- physical = 1





analytical mode allows light to shading points that project to the flap opening.physical mode allows light whose direction goes through the flap opening.




## node_xform

**Mat4d** *blurrable*


Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]




transform of the filter




## pre_barn_distance

**Float** 


Default value : 0.5




distance from the BarnDoorLightFilter that the pre_barn_mode control takes effect




## pre_barn_mode

**Int** *enum*



- black = 0

- white = 1

- default = 2 (default)





force region before the pre_barn_distance to be fully filtered (black), not filtered at all (white), or treated the same as elsewhere (default)




## projector_focal_distance

**Float** 


Default value : 30.0




distance of the flap opening from the projector origin. Ignored for orthographic projection




## projector_height

**Float** 


Default value : 1.0




height of the frustum at distance 1.0




## projector_type

**Int** *enum*



- perspective = 0 (default)

- orthographic = 1





projection type used to map points to the flap opening. perspective has a focal point, while orthographic does not.




## projector_width

**Float** 


Default value : 1.0




width of the frustum at distance 1.0




## radius

**Float** 


Default value : 0.0




radius by which to convert the base box shape into a rounded box, as a proportion of half the width (or height, whichever is smaller)




## rotation

**Float** 


Default value : 0.0




angle to rotate the Barn Door counter-clockwise as seen from the light, in degrees




## size_bottom

**Float** 


Default value : 0.0




additional size on bottom edge




## size_left

**Float** 


Default value : 0.0




additional size on left edge




## size_right

**Float** 


Default value : 0.0




additional size on right edge




## size_top

**Float** 


Default value : 0.0




additional size on top edge




## use_light_xform

**Bool** 


Default value : True




attach to the light (in the -Z direction) and ignore node_xform






---

## <p class="scene-class-attr-group">General attributes</p>

## on

**Bool** 


Default value : True




<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>





