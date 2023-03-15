---
title: Map

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Adaptive Sampling
---

This feature allows the user to set a desired overall noise level instead of explicitly setting the number of samples per pixel (SPP). Instead, the renderer will adaptively choose the number of samples per pixel to reach the desired error threshold over the entire image. Since we want the noise at each pixel to fall below this specified error threshold, it also has the beneficial side effect of removing fireflies from the output. The error is measured on the beauty image only.

## RDL Parameters

To enable adaptive sampling, the RDL sampling mode must be set:

uniform [0]
: Render with a fixed number of samples per pixel: the square of the RDL _pixel_samples_ attribute.

adaptive [2]
: Render with adaptive sampling. The _pixel_samples_ RDL attribute is ignored.

The table below contains descriptions of the attributes related to adaptive sampling.

| Attribute Name       | Description                                                                                                                                                                                                                                                               |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| sampling_mode        | [uniform or adaptive](#RDL-Parameters)                                                                                                                                                                                                                                    |
| min_adaptive_samples | The minimum number of samples taken per pixel, regardless of error level. A value too small may result in areas that are prematurely deemed converged. A value too large will waste time rendering where it is not necessary. Unlike pixel_samples, this value is linear. |
| max_adaptive_samples | The maximum number of samples taken per pixel, regardless of error level. A value too small may result in unconverged areas and pixels. A value too large will waste time rendering where it is not necessary. Unlike pixel_samples, this value is linear.                |

To find suitable values for the adaptive sampling parameters, check the output value "Pixels at max adaptive samples." If the value is significant and your image is noisy, consider increasing max_adaptive_samples. On the other hand, if the value is small and your image is converged, you may be able to increase your error threshold.

## Example RDLA Syntax

    SceneVariables
    {
        ["sampling_mode"] = 1,
        ["min_adaptive_samples"] = 16,
        ["max_adaptive_samples"] = 4096,
        ["target_adaptive_error"] = 1.5,
    }

In `moonray_gui`, hotkey "8" will toggle to a grayscale view showing the number of samples rendered per pixel. The brighter the pixel, the higher the sample count. In addition, a weight AOV is available that also records the absolute number of pixel samples. To be human-viewable, the weight AOV may need to be normalized to [0, 1] in compositing software.

## Questions and Answers

### What happens if I set min_adaptive_samples too low?

Setting min_adaptive_samples too low can cause the algorithm to classify tiles prematurely as converged, leading to noisy areas or image discontinuities.

### What happens if I set min_adaptive_samples too high?

Setting min_adaptive_samples too high can cause excessively long render times. Higher values give the adaptive sampler more information about the scene before limiting samples, but it also results in a longer render time.

### What happens if I set max_adaptive_samples too low?

Setting max_adaptive_samples too low may result in noisy images or unresolved fireflies.

### What happens if I set max_adaptive_samples too high?

Setting max_adaptive_samples too high can result in excessive render times if the renderer has difficulty getting an area of the image to converge.

### What happens if I set target_adaptive_error too low?

Render times will be longer than desired.

### What happens if I set target_adaptive_error too high?

The final image will be noisier than desired.
