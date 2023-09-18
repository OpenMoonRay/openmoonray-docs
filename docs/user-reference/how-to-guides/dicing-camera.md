---
title: Dicing Camera
---

# Dicing Camera

A dicing camera is a camera that is solely used for adaptive tessellation. This feature might be useful if you want 
adaptive tessellation to behave consistently in a sequence, regardless of what the main camera is doing. You can 
currently set the dicing camera in two ways:

1. Globally: the camera will be used as a dicing camera for all geometry in the scene

``` lua
SceneVariables {
    ...
    ["dicing_camera"] = PerspectiveCamera("example_cam") -- note: must be a PerspectiveCamera
    ...
}
```

See the example below. The main camera is pointing down the negative y-axis at two planes: one displaced and one flat. 
The wavy, displaced plane lies about 10 units below the flat one. The dicing camera lies in the middle of the flat 
plane. You will see a checkered pattern that is applied to the planes – in the areas that are properly tessellated, 
the texture renders properly. Below you will notice that the texture renders in a frustum shape, which is the shape of 
the dicing camera's frustum. 

![Global Dicing Camera]({{ "/assets/images/user-reference/how-to-guides/dicing-camera/global_dicing_cam.png" | absolute_url }})

2. Individually: the camera will be used as a dicing camera only for specified geometries

``` lua
AbcGeometry("example_geometry") {
    ...
    ["dicing_camera"] = PerspectiveCamera("example_cam") -- note: must be a PerspectiveCamera
    ...
}
```

This example has the same setup as the first example, except that the dicing camera is only set on the top, flat plane. 
Only the top plane uses the dicing camera for tessellation (the bottom plane is therefore tessellated by default using 
the main camera). 

![Individual Dicing Camera]({{ "/assets/images/user-reference/how-to-guides/dicing-camera/dicing_camera_individual.png" | absolute_url }})

