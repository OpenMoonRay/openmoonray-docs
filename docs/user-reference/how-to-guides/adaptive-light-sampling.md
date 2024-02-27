---
title: Adaptive Light Sampling
---
# Adaptive Light Sampling
---

Adaptive light sampling is a mode of light sampling where only the most important lights are sampled for each intersection. You can toggle this mode on using the following scene variables:

```lua
SceneVariables {
    ["light_sampling_mode"] = "adaptive",
    ["light_sampling_quality"] = 0.6 #see the section below on how to choose this value
}
```

## Uniform vs. Adaptive Light Sampling

#### Uniform
The default light sampling mode in MoonRay is "uniform". This means that: 

<span class="define">For each pixel sample in `pixel_samples^2` we take `light_samples^2` samples **from every light in the scene**.</span>

So, we sample all lights, regardless of their position and orientation in the scene. This leads to inefficient light sampling, because we spend time drawing light samples that do not contribute meaningfully. 

#### Adaptive
The more intelligent method is "adaptive" light sampling, where

<span class="define">For each pixel sample in `pixel_samples^2` we take `light_samples^2` samples **from only the most important lights**.</span>

This generally leads to more efficient light sampling, because we focus our time on sampling the lights that matter most. That said, there is some overhead associated with choosing the ideal lights, so adaptive light sampling typically performs best on scenes that have a lot of lights. 

## What makes a light "important"?
How do we determine whether the light is bound to contribute meaningfully to the radiance? There are several factors that play a role:
- Energy (brighter lights are more important)
- Distance (closer lights are more important)
- Orientation (lights that face the point (and whose normal is facing the light, in turn) are more important)

## Light Sampling Quality
How do we determine the threshold at which a light is considered "important"? We have a user-supplied value that acts as this threshold, which we call `"light_sampling_quality"`. This is a value between 0 and 1, where 0 represents the strictest adherence to importance (very few lights are sampled), and 1 represents the loosest adherence to importance (all lights are sampled). We call this threshold `"light_sampling_quality"` because the higher the threshold, the more lights that are sampled and the higher the render quality, at the expense of performance. 