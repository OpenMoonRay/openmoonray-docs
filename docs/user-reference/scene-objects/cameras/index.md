---
title: Cameras
---
# Cameras

MoonRay includes several different kinds of cameras: 

| Type | Description |
| ---- | ----------- |
|[BakeCamera](BakeCamera)| A camera shader that can be used to bake textures. |
|[OrthographicCamera](OrthographicCamera)| A camera that uses orthographic projection, where projection lines are orthogonal to the viewing plane. An object's size will not change regardless of how close/far it is from the camera. |
[PerspectiveCamera](PerspectiveCamera)| A camera that uses perspective projection, where projection lines are in the shape of a viewing frustum. An object will appear smaller the further it is from the camera. | 
|[SphericalCamera](SphericalCamera)| A camera that maps the (x, y) image coordinates to the spherical directions (theta, phi). |
