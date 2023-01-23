---
title: Map

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Adaptive Sampling
## This page needs to be rebuilt
---
As of version 4.26, MoonRay supports adaptive sampling.

The goal of this feature is to allow the user to set a desired overall
noise level instead of the explicitly setting the number of samples per
pixel (SPP), and have the renderer adaptively choose the number of
samples on the fly on a per pixel basis such that a final desired error
threshold is reached all over the image. Since we want the noise at each
pixel to fall below this specified error threshold, it also has the
beneficial side effect of removing fireflies from the output.

As an example, here are 2 equal time renders, the first with adaptive
sampling off, and the second with adaptive sampling switched on. Notice
how the error is spread out more uniformly in the second image, as well
as how the fireflies are attenuated.

<img src="media/image1.png" style="width:4.875in;height:2.02083in" />

Uniform sampling above, adaptive sampling below

<img src="media/image2.png" style="width:4.875in;height:2.02083in" />

Here is a description of the attributes related to adaptive sampling.

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Attribute name</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>"sampling_mode"</td>
<td><p>The attribute is an enumeration of samples modes. These values
are currently supported:</p>
<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 11%" />
<col style="width: 65%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name</strong></th>
<th><strong>Value</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>"uniform"</td>
<td>0</td>
<td>This give the previous "fixed" number of samples per pixel (SPP)
behavior. The number of samples per pixel is driven off of the
"pixel_samples" attribute, this number represents the square root of the
desired SPP. This is the current default.</td>
</tr>
<tr class="even">
<td>"adaptive_v1"</td>
<td>1</td>
<td>This activates the first version of the adaptive sampling algorithm.
When in this mode, the "pixel samples" attribute is ignored and SPP
criteria is driven off of the 3 attributes described below.</td>
</tr>
</tbody>
</table>
<p>More modes may be added in the future.</p></td>
</tr>
<tr class="even">
<td>"min_adaptive_samples"</td>
<td>When adaptive sampling is turned on, it's possible that a tile may
be mis-classified as having converged before it has actually converged.
This manifests itself as square 8x8 artifacts in the final image. The
higher this value, the less the chance of this happening. It defaults to
16 which is a reasonable number for most final frame renders. You may
find it beneficial to lower the value to 8 or 10 for interactive or
preview quality use cases. Note that unlike the "pixel_samples"
attribute, this is a linear number not a square number, i.e 2 equals 2,
not 4. The default value is 16.</td>
</tr>
<tr class="odd">
<td>"max_adaptive_samples"</td>
<td>When adaptive sampling is turned on, this represents the max number
of samples we can throw at a pixel. Each pixel is deemed as converged
when either it hits the max adaptive sample limit, or its error falls
below the target adaptive error threshold, whichever happens first. When
setting this, it's generally good practice to err on the high side and
rely on the "target_adaptive_error" attribute to control the number of
SPP rendered. Note that unlike the "pixel_samples" attribute, this is a
linear number not a square number, i.e 2 equals 2, not 4. The default
value is 4096.</td>
</tr>
<tr class="even">
<td>target_adaptive_error</td>
<td>When adaptive sampling is active (via the sampling_mode attribute),
this represents the desired quality of the output images. Lower values
will give higher quality but take longer to render. Higher values will
give lower quality but render quicker. The default value is 0.08.</td>
</tr>
</tbody>
</table>

 

Example usage:

SceneVariables

{

 \["sampling mode"\] = 1,

 \["min adaptive samples"\] = 16,

 \["max adaptive samples"\] = 4096,

 \["target adaptive error"\] = 0.08,

}

 

In raas_gui you can hit '8' to toggle on a diagnostic view of the number
of samples rendered per pixel. The brighter the pixel, the higher the
sample count. As a reminder, the 'N' key toggles optix denoising which
works well in conjunction with adaptive sampling. So for this beauty
image (above), we would a pixel heat map like this (below):

<img src="media/image3.tmp" style="width:4.875in;height:2.84375in" />

<img src="media/image4.tmp" style="width:4.875in;height:2.84375in" />

## Questions and Answers

**What happens if I set min_adaptive_samples too low?**

Setting this attribute too low can cause the algorithm to mis-classify
tiles as being prematurely converged before they are actually converged
to the desired level. If you see 8x8 blocky artifacts in the final
image, it's likely that you've set this value too low.

**What happens if I set min_adaptive_samples too high?**

Setting this attribute too high can cause excessively long render times.
The higher the value, the less leeway the algorithm has to move samples
from already converged tiles to tiles which are in need of more samples.
This value should rarely, if ever, be set higher than 24 or 32, 16 is
the default currently.

**What happens if I set max_adaptive_samples too low?**

This is one way of reducing render time but the caveat is that by
setting this value low, it reduces the algorithms ability to remove
fireflies. The firefly removal works by throwing more samples at pixels
where fireflies are detected, but the number of samples gets clamped to
the max_adaptive_samples value regardless of whether fireflies are still
present or not.

**What happens if I set max_adaptive_samples too high?**

This can cause excessive render times if the target_adaptive_error
attribute is set too low. The trick in finding good settings is setting
max_adaptive_sample high enough to remove fireflies, and using
target_adaptive_error to control the overall render time. We have
discovered that this is easier said than done however.

**What happens if I set target_adaptive_error too low?**

Render times may balloon. This trick is setting this attribute low
enough such that the image is rendered to the desired noise level, but
no cleaner.

**What happens if I set target_adaptive_error too high?**

The final image may be noisier than desired.

## Known Issues

-   The only way to currently visualize the SPP count is through a debug
    view in raas_gui. Going forward the intent is to add a new AOV type
    containing the exact number samples per pixel.

-   The min/max samples counts are specified a linear values, not
    squared values as with "pixel samples" attribute to allow for finer
    grained control over the min SPP. This introduces an unfortunate
    inconsistency when specifying SPP for the different sampling modes.
    One possibility to to linearize all sample count attributes in the
    renderer.

-   Adaptive sampling isn't supported in vector mode. If the -exec_mode
    option is set to auto, MoonRay will automatically fallback to scalar
    execution if adaptive sampling is active.

 
