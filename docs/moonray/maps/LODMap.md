---
title: LODMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# LODMap

**MAP SHADER**

Documentation for class LODMap



---

## <p style="color:blue;">General attributes</p>

## far_value

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




value output when feature_width/camera_distance is more than or equal to stop




## mode

**Int** *enum*



- feature width = 0 (default)

- camera distance = 1





Use feature_width for LOD based on average, world-space feature-width visible in a pixel, correctly changing with resolution. Use camera_distance for LOD based on distance from render cam.




## near_value

**Rgb** *bindable*


Default value : [ 0, 0, 0 ]




value output when feature_width/camera_distance is less than or equal to start




## start

**Float** 


Default value : 0.00999999977648




feature_width/camera_distance at which to start blending near_value->far_value




## stop

**Float** 


Default value : 0.10000000149




feature_width/camera_distance at which to stop blending near_value->far_value





