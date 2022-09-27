---
title: RodLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RodLightFilter

**LIGHTFILTER**

Documentation for class RodLightFilter



---

## <p style="color:blue;">Properties attributes</p>

## color

**Rgb** 


Default value : [ 0, 0, 0 ]




filter color. Scales the light within the volume. For each color channel, 0=full shadow, 1=no shadow




## density

**Float** 


Default value : 1.0




fades the filter effect. 0=no effect (like having no filter), 1=full effect




## depth

**Float** 


Default value : 1.0




depth of the base box (before radius and edge)




## edge

**Float** 


Default value : 0.0




size of transition zone from the rounded box to the outside




## height

**Float** 


Default value : 1.0




height of the base box (before radius and edge)




## intensity

**Float** 


Default value : 1.0




scalar for multiplying the color. 0=black 1=color




## invert

**Bool** 


Default value : False




swap application of filter from inside the volume to outside




## node_xform

**Mat4d** *blurrable*


Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]




transform of the filter




## radius

**Float** 


Default value : 0.0




radius by which to expand the base box into a rounded box




## ramp_in_distances

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >




input distance for ramp control




## ramp_interpolation_types

**IntVector** 


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >




interpolation types for ramp control




## ramp_out_distances

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >




remapped distances for ramp control




## width

**Float** 


Default value : 1.0




width of the base box (before radius and edge)






---

## <p style="color:blue;">General attributes</p>

## on

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>on</b> needs to be written</p>





