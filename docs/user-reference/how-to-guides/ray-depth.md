---
title: Ray Depth
---
# Ray Depth

MoonRay contains a number of settings that allow you to specify the max number of interactions a ray can have with 
certain lobe(s). You may need to experiment with the right combination of these settings to achieve max efficiency, while also 
ensuring you don't lose important radiance information. MoonRay includes the following depth settings:

- [max_depth](#max-depth)
- [max_diffuse_depth](#max-diffuse-depth)
- [max_glossy_depth](#max-glossy-depth)
- [max_mirror_depth](#max-mirror-depth)
- [max_hair_depth](#max-hair-depth)
- [max_presence_depth](#max-presence-depth)
- [max_volume_depth](#max-volume-depth)

## Max Depth
*max_depth* is the overall limiter of depth settings. The ray can have *max_depth* interactions before terminating, 
regardless of whether we've achieved the max interactions specified by the rest of the ray depth settings. For instance, 
if *max_diffuse_depth* = 5, but *max_depth* = 3, we can only achieve max 3 diffuse interactions. 

The image comparison below shows the effect of setting *max_depth* to 0. Notice that we have no bounce lighting or 
reflections, but we still get highlights because we sample direct lighting separately.

{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/ray-depth/max_depth_0.png'
                               image_path_after='/assets/images/user-reference/how-to-guides/ray-depth/test_scene1.png' 
                               image_alt_before='Max Depth 0' 
                               image_alt_after='Original Test Scene'
                               position='55' %} 
*Left: original test scene, right: max_depth = 0 <br>D = diffuse, G = glossy, M = mirror*

As we increase the depth, we get richer bounce lighting. Crevices and other small spaces may require a larger max_depth 
to allow the ray to escape the small spaces and reach the light(s). You will notice that the shadows lighten as 
max_depth increases. 

## Max Diffuse Depth
*max_diffuse_depth* is the maximum number of diffuse interactions for a ray.

{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/ray-depth/max_diffuse_depth0.png'
                               image_path_after='/assets/images/user-reference/how-to-guides/ray-depth/test_scene1.png' 
                               image_alt_before='Max Diffuse Depth 0' 
                               image_alt_after='Original Test Scene'
                               position='55' %}
*Left: original test scene, right: max_diffuse_depth = 0<br>D = diffuse, G = glossy, M = mirror*

## Max Glossy Depth
*max_glossy_depth* is the maximum number of glossy interactions for a ray.

{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/ray-depth/max_glossy_depth0.png'
                               image_path_after='/assets/images/user-reference/how-to-guides/ray-depth/test_scene1.png' 
                               image_alt_before='Max Glossy Depth 0' 
                               image_alt_after='Original Test Scene'
                               position='55' %}
*Left: original test scene, right: max_glossy_depth = 0<br>D = diffuse, G = glossy, M = mirror*

## Max Mirror Depth
*max_mirror_depth* is the maximum number of mirror interactions for a ray.

{% include image-comparer.html image_path_before='/assets/images/user-reference/how-to-guides/ray-depth/max_mirror_depth0.png'
                               image_path_after='/assets/images/user-reference/how-to-guides/ray-depth/test_scene1.png' 
                               image_alt_before='Max Mirror Depth 0' 
                               image_alt_after='Original Test Scene'
                               position='55' %}
*Left: original test scene, right: max_mirror_depth = 0<br>D = diffuse, G = glossy, M = mirror*

For a transparent mirror surface (e.g. glass), our transmissive ray needs to have at least two interactions to exit a 
water-tight object.

![Transmission ray bounces]({{ "/assets/images/user-reference/how-to-guides/ray-depth/transparent_surface_depth.png" | absolute_url }})

However, we may encounter <span class="define">total internal reflection</span>, where rays continue bouncing on the 
inside of the object without losing energy, instead of refracting into the next medium. Therefore, you may need to 
increase the max depth to get the desired energy. 

![Mirror Depth GIF]({{ "/assets/images/user-reference/how-to-guides/ray-depth/mirror_depth.mp4" | absolute_url }})

### Ray Termination Lights
In order to help combat these dark areas where ray paths have been terminated too early due to depth controls, we have 
<span class="define">ray termination lights</span>. You can turn on `ray_termination` on the desired light, and any 
ray path that reaches *max_depth* (or *max_glossy_depth*, etc) will exit to the ray termination light, ignoring occlusion 
by scene geometry.

The advantage of this method is that you can quickly achieve the same aesthetic look as you would with a higher number of 
bounces, and you can adjust the color and intensity independently of the actual scene light. Additionally, these lights 
can be put in light sets, which allows for per part, per object control. However, note that this method is not 
physically correct, and currently total internal reflection won't trigger the effect. 

## Max Hair Depth
*max_hair_depth* is the maximum number of hair interactions for a ray.

max_hair_depth is not limited by max_depth.  This exception is to allow for extra hair-to-hair bounces without increasing max_depth
globally within the scene.  This is especially useful for characters with white (or very light) dense hair/fur where often
10 or more bounces is needed to get that nice and white/fluffy look, but when such a high number of bounces is not required
for illuminating the rest of the scene.

## Max Presence Depth
*max_presence_depth* is the maximum number of presence interactions for a ray.

![Max Presence Depth 0]({{ "/assets/images/user-reference/how-to-guides/ray-depth/max_presence_depth0.png" | absolute_url }})
*max_presence_depth = 0 (see max_volume_depth for a look at max_presence_depth = 1)*

## Max Volume Depth
*max_volume_depth* is the maximum number of volume interactions for a ray.

*Volumes are not affected by max_depth!* The default volume depth is 1, meaning we get no multiple scattering by default. Below 
you will see max volume depth of 0. 

![Max Volume Depth 0]({{ "/assets/images/user-reference/how-to-guides/ray-depth/volume_depth0.png" | absolute_url }})
*max_volume_depth = 0 (see max_presence_depth for a look at a non-zero max_volume_depth)*
