# Camera

## Attributes


### near

<table>
<tbody>
<tr class="odd">
<td>
<p><strong>Type:</strong></p>
</td>
<td>
<p><em>float</em></p>
</td>
</tr>
<tr class="even">
<td>
<p><strong>Default:</strong></p>
</td>
<td>
<p>1.0</p>
</td>
</tr>
</tbody>
</table>

### far

<table>
<tbody>
<tr class="odd">
<td>
<p><strong>Type:</strong></p>
</td>
<td>
<p><em>float</em></p>
</td>
</tr>
<tr class="even">
<td>
<p><strong>Default:</strong></p>
</td>
<td>
<p>10000.0</p>
</td>
</tr>
</tbody>
</table>

### mb

<table>
<tbody>
<tr class="odd">
<td>
<p><strong>Type:</strong></p>
</td>
<td>
<p><em>bool</em></p>
</td>
</tr>
<tr class="even">
<td>
<p><strong>Default:</strong></p>
</td>
<td>
<p>f alse</p>
</td>
</tr>
</tbody>
</table>

### mb shutter open

<table>
<tbody>
<tr class="odd">
<td>
<p><strong>Type:</strong></p>
</td>
<td>
<p><em>float</em></p>
</td>
</tr>
<tr class="even">
<td>
<p><strong>Default:</strong></p>
</td>
<td>
<p>-0.25</p>
</td>
</tr>
</tbody>
</table>

# mb shutter close

<table>
<tbody>
<tr class="odd">
<td>
<p><strong>Type:</strong></p>
</td>
<td>
<p><em>float</em></p>
</td>
</tr>
<tr class="even">
<td>
<p><strong>Default:</strong></p>
</td>
<td>
<p>0.25</p>
</td>
</tr>
</tbody>
</table>

# mb shutter bias

<table>
<tbody>
<tr class="odd">
<td>
<p><strong>Type:</strong></p>
</td>
<td>
<p><em>float</em></p>
</td>
</tr>
<tr class="even">
<td>
<p><strong>Default:</strong></p>
</td>
<td>
<p>0.0f</p>
</td>
</tr>
</tbody>
</table>

# pixel sample map

<table>
<tbody>
<tr class="odd">
<td>
<p><strong>Type:</strong></p>
</td>
<td>
<p><em>string</em></p>
</td>
</tr>
<tr class="even">
<td>
<p><strong>Default:</strong></p>
</td>
<td>
<p>""</p>
</td>
</tr>
<tr class="odd">
<td>
<p><strong>Comment:</strong></p>
</td>
<td>
<p>f ile path to a gray scale image</p>
</td>
</tr>
</tbody>
</table>

## Pixel Sample Map Usage

A pixel sample map is a gray scale image that multiplies the number of
pixel samples per pixel. This can be usef ul when certain parts of a f
rame conv erge more slowly than other parts. The image map is squashed
/ stretch to f it the region window of the f rame. The gray scale v
alues can be greater than 1 in order to supersample the pixels.

Example:

Grimmel's white hair is quite noisy.
<pre>
SceneVariables {
    ["pixel samples"] = 4 
}
PerspectiveCamera {
    ["pixel sample map"] = ""
}</pre>
All pixels have 16 samples.

<img src="media/image1.jpeg" style="width:7.01708in;height:3.9375in" />

<img src="media/image2.jpeg" style="width:7in;height:3.9375in" />We
can mask it with this image

The white pixels = 1, and the grey pixels = 0.25.

Now we set
<pre>
SceneVariables {
    ["pixel samples"] = 8
}
PerspectiveCamera {
    ["pixel sample map"] = "hair_mask.png"
}</pre>
<img src="media/image3.jpeg" style="width:7in;height:3.9375in" />
And this devotes more pixel samples to the hair! The hair region has 64 samples, and everywhere else had 16 samples.