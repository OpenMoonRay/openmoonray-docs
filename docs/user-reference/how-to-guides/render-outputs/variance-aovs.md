---
title: Variance AOVs
---

# Variance AOVs

A <span class="define">variance AOV</span> measures the pixel variance of another AOV. It is always a buffer of floats. Variance AOVs are
unavailable in vectorized or GPU rendering.

## Setup

To indicate which AOV the variance AOV should monitor, the user can set the attribute *reference_render_output* to point
to the appropriate RenderOutput object.

```lua
RenderOutput("beauty") { ... }

RenderOutput("beauty_var") {
    ["result"] = "variance aov",
    ["reference_render_output"] = RenderOutput("beauty"),
    ["channel_name"] = "beauty_var",
}
```

## What is variance?

<span class="define">Variance</span> is a statistical measure of sampled data points: it can be thought of as how spread out the sample points
are. The [variance of {8, 8, 8, 8}](https://www.wolframalpha.com/input?i=variance%7B8%2C8%2C8%2C8%7D), for example, is 0
because the samples are not spread out. On the other hand, if our samples had instead
been [{6, 8, 3, 3}](https://www.wolframalpha.com/input?i=variance%7B6%2C8%2C3%2C3%7D), the variance
would be 6. However, with samples of [{1, 7, 10, 2}](https://www.wolframalpha.com/input?i=variance%7B1%2C7%2C10%2C2%7D),
the mean is the same (5), but the variance is 18, signifying that
the data is more spread out.

Higher variance values mean that as MoonRay sampled the pixel, the values it found were more spread out than other
pixels. The variance will be zero with a single sample because there is no "spread" to the data (an image rendered with
a single sample per pixel will generate a black variance AOV).

## How does MoonRay calculate variance?

Calculating variance depends on the type of AOV that is being monitored. For example, for a single floating point AOV (
e.g., depth), we record the variance of the float values as added for each pixel sample. For RGB AOVs (e.g., beauty),
MoonRay uses luminance for the variance calculation. For other types (e.g., normal), MoonRay keeps track of the variance
for each component separately (e.g., x, y, and z in the normal) and outputs the maximum of the three variance values.

## How is variance related to error?

Here "error" refers to how closely a rendered pixel's value is to "ground truth" or how close it is to what we would get
if we could sample the pixel with an infinite number of rays. Does a high variance imply that the pixel is noisy or not
converged? No. For example, assume it is possible to sample every value in this finite
group [{5, 8, 2, 5}](https://www.wolframalpha.com/input?i=variance%7B5%2C8%2C2%2C5%7D). Even though
the entire group is known, and there can be no error in finding the mean (which is the goal of the renderer), the
variance is still 6 instead of 0.

Conversely, a low variance does not necessarily mean that the pixel is converged: the sampling could have just been
unlucky and gotten similar values each time. However, a low variance value may indicate that the pixel is converged if
many samples have been used. A naive adaptive sampling strategy would be to shoot a minimum number of samples and skip
pixels where the variance is low enough or until a maximum number of samples is reached.

Variance can be used as an indicator of error, called the standard error. It relates the standard deviation (the square
root of variance) to the square root of the number of samples taken, which is why, in general, four times as many
samples must be taken to reduce the amount of noise in an image by half (and why MCRT rendering is a game of diminishing
returns, further justifying a post-process de-noising step).

## Examples

| AOV                                                                                                 | Variance                                                                                                         |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| ![Beauty]({{site.baseurl}}/assets/images/user-reference/how-to-guides/variance-aovs/beauty.jpg)     | ![Beauty Variance]({{site.baseurl}}/assets/images/user-reference/how-to-guides/variance-aovs/beauty_var.jpg)     |
| ![Depth]({{site.baseurl}}/assets/images/user-reference/how-to-guides/variance-aovs/depth.jpg)       | ![Depth Variance]({{site.baseurl}}/assets/images/user-reference/how-to-guides/variance-aovs/depth_var.jpg)       |
| ![Normal]({{site.baseurl}}/assets/images/user-reference/how-to-guides/variance-aovs/geo_normal.jpg) | ![Normal Variance]({{site.baseurl}}/assets/images/user-reference/how-to-guides/variance-aovs/geo_normal_var.jpg) |

In this simple example image, the beauty variance is insignificant since each pixel does not vary much per ray. However,
the depth and geometry normal AOVs are much more interesting: the depth variance is high at the edges of the spheres
because the rays for each pixel near the sphere's edge can record vastly different depth readings. It is important to
note that the same issue arises near the back of the floor. As the floor approaches the horizon, the depth readings for
each sample can vary substantially. The geometry normal has the same issue near the edge of the spheres, where the
normal of the sphere versus the background makes a hard edge. 
