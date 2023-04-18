The CutoutVolume allows us to define a volume that should not be visible from the camera, but that should still 
contribute to indirect illumination. This could be helpful if you wish to render volumes separately in order to 
combine them in compositing. 

For example, let's say we have a hard-surface box and a cloud volume. 

![Cutout Volume Example1]({{"/assets/images/user-reference/scene-objects/volumes/CutoutVolume/cutout_volume_orig.png" | absolute_url }})

In order to isolate the box without entirely removing the cloud's indirect contribution, use a CutoutVolume, like so:

```lua
AmorphousVolume("CloudVolume") {...}

CutoutVolume("CloudVolumeCutout") {
    ["indirect volume"] = AmorphousVolume("CloudVolume")
}
-- in the Layer, use "CloudVolumeCutout" instead of "CloudVolume"
```
![Cutout Volume Example2]({{"/assets/images/user-reference/scene-objects/volumes/CutoutVolume/cutout_volume_just_box.png" | absolute_url }})

<aside>
The SceneVariable <i>volume_opacity_threshold</i> defaults to 0.995, which could cause the comp to be slightly incorrect/biased. 
Try setting <i>volume_opacity_threshold</i> to 0.999 for a more accurate result. 
</aside>
{: .warn-aside}