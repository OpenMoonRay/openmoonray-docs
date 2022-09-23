---
title: ColorRampLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorRampLightFilter

**LIGHTFILTER**

Documentation for class ColorRampLightFilter



---

## <p style="color:blue;">Properties attributes</p>

## begin_distance

**Float** 


Default value : 0.0




<p style="color:red;">Documentation for the attribute <b>begin_distance</b> needs to be written</p>




## colors

**RgbVector** 


Default value : [[ 1, 1, 1 ], [ 0, 0, 0 ]]




<p style="color:red;">Documentation for the attribute <b>colors</b> needs to be written</p>




## density

**Float** 


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>density</b> needs to be written</p>




## distances

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7fe3b957fa28>




<p style="color:red;">Documentation for the attribute <b>distances</b> needs to be written</p>




## end_distance

**Float** 


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>end_distance</b> needs to be written</p>




## intensity

**Float** 


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>intensity</b> needs to be written</p>




## interpolation_types

**IntVector** 


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7fe3b957ff50>




<p style="color:red;">Documentation for the attribute <b>interpolation_types</b> needs to be written</p>




## mode

**Int** *enum*



- radial = 0 (default)

- directional = 1





<p style="color:red;">Documentation for the attribute <b>mode</b> needs to be written</p>




## node_xform

**Mat4d** *blurrable*


Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]




<p style="color:red;">Documentation for the attribute <b>node_xform</b> needs to be written</p>




## wrap_mode

**Int** *enum*



- extend = 0 (default)

- mirror = 1





For directional filter mode where filter uses distance along -Z axis.  Extend: f(z) = f(0) for z > 0.  Mirror: f(z) = f(-z).






---

## <p style="color:blue;">General attributes</p>

## on

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>on</b> needs to be written</p>




## use_xform

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>use_xform</b> needs to be written</p>





