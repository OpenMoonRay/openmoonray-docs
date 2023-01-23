# Variance AOVs
A variance AOV is a special AOV that measures the pixel variance of another AOV. It is always a buffer of single floats, as opposed to, for example, RGB or XYZ. 

## Setup
To indicate which AOV the variance AOV should monitor, the user can set the attribute `"reference_render_output"` to point to the appropriate RenderOutput object.
```lua
RenderOutput("beauty") { ... }

RenderOutput("beauty_var") {
    ["result"] = "variance aov",
    ["reference_render_output"] = RenderOutput("beauty"),
    ["channel_name"] = "beauty_var",
}
```

## What is variance?
_Variance_ is a statistical measure of sampled data points. It is a measurement of how spread out the sample points are. The [variance of {8, 8, 8, 8}](http://www.wolframalpha.com/input/?i=variance+%7B8,+8,+8,+8%7D_), for example, is 0, because the samples are not spread out at all. On the other hand, if our samples had instead been {6, 8, 3, 3}, the variance is 6. However, with samples of {1, 7, 10, 2}, the average is the same (5), but the variance is 18, signifying that the data is much more spread out. 

It is not important to understand how this measurement is computed, only to understand that higher variance values mean that, as MoonRay sampled the pixel, the values it found were more spread out than other pixels. With a single sample, the variance will be zero, because there is no "spread" to the data (an image rendered with a single sample per pixel will generate a black variance AOV).

## How does MoonRay calculate variance?
Calculating variance depends on the type of AOV that is being monitored. For a single floating point AOV (e.g. depth), it is easy: simply calculate the variance of the float values for each pixel sample. For RGB AOVs (e.g. beauty), MoonRay uses the luminance as the variance calculation. For other types (e.g. normal), things get a little more complicated: MoonRay keeps track of the variance for each component separately (e.g. x, y, and z in the normal), and outputs the maximum of the three variances, being a little bit of a pessimist.

## How does Silencer use variance?
The variance provides Silencer with a notion of how much it can trust a particular AOV. If the variance is high, Silencer knows that this input may not be as trustworthy as another AOV that has low variance at the same pixel. It affects how much filtering blurs a particular feature as well.

## How is variance related to error?
Here "error" refers to how closely a rendered pixel's value is to "ground truth", or how close is it to what we would get if we could sample the pixel with an infinite number of rays. Does a high variance imply that the pixel is noisy or not converged? No. As an example, assume it is possible to sample every value in a group that looks like {5, 7, 3, 5}. Even though the entire group is known, and there can be no error in figuring out the average (which is the ultimate goal of the renderer), the variance is still 2, not zero. Conversely, a low variance does not necessarily mean that the pixel is converged: the sampling could have just been unlucky and gotten similar values each time. However, a low variance is generally an indication that the pixel is converged, especially if many samples have been used. A fairly naive adaptive sampling strategy would be to shoot a minimum number of samples, and skip pixels where the variance is low enough until a maximum number of samples is reached.

Variance can be used as an indicator of error, called the standard error. It relates the standard deviation (the square root of variance) to the square root of the number of samples taken. The error being related to the square root of the number of samples taken explains why, in general, four times as many samples must be taken in order to reduce the amount of noise in an image by half (and why MCRT rendering is a game of diminishing returns, further justifying a post-process de-noising step).

## Examples

| AOV | Variance |
| --- | -------- |
| ![Beauty](../../../assets/images/moonray/how-to-guides/variance-aovs/beauty.jpg) | ![Beauty Variance](../../../assets/images/moonray/how-to-guides/variance-aovs/beauty_var.jpg) |
| ![Depth](../../../assets/images/moonray/how-to-guides/variance-aovs/depth.jpg) | ![Depth Variance](../../../assets/images/moonray/how-to-guides/variance-aovs/depth_var.jpg) |
| ![Normal](../../../assets/images/moonray/how-to-guides/variance-aovs/geo_normal.jpg) | ![Normal Variance](../../../assets/images/moonray/how-to-guides/variance-aovs/geo_normal_var.jpg) |

In this simple example image, the beauty variance is not very large, since each pixel does not vary much per ray, meaning it will converge pretty quickly in MoonRay. Depth and geometry normal are much more interesting. At the edges of the spheres, depth variance is high. This is because the rays for each pixel near the edge of the sphere can record vastly different depth readings. It is important to note that the same issue arises near the back of the floor. As the floor approaches the horizon, the depth readings for each sample can vary substantially. The geometry normal has the same issue near the edge of the spheres, where the normal of the sphere versus the background makes a rather hard edge.