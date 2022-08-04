# Camera

> Attributes
>
> near
>
> f ar mb
>
> mb shutter open
>
> mb shutter close mb shutter bias pixel sample map
>
> Pixel Sample Map Usage Example:

### Attributes

> near

<table>
<colgroup>
<col style="width: 65%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Name:</strong></p>
</blockquote></th>
<th><blockquote>
<p>near</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p><strong>Type:</strong></p>
</blockquote></td>
<td><blockquote>
<p><em>float</em></p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Default:</strong></p>
</blockquote></td>
<td><blockquote>
<p>1.0</p>
</blockquote></td>
</tr>
</tbody>
</table>

> far

<table>
<colgroup>
<col style="width: 55%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Name:</strong></p>
</blockquote></th>
<th><blockquote>
<p>f ar</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p><strong>Type:</strong></p>
</blockquote></td>
<td><blockquote>
<p><em>float</em></p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Default:</strong></p>
</blockquote></td>
<td><blockquote>
<p>10000.0</p>
</blockquote></td>
</tr>
</tbody>
</table>

> mb

<table>
<colgroup>
<col style="width: 64%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Name:</strong></p>
</blockquote></th>
<th><blockquote>
<p>mb</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p><strong>Type:</strong></p>
</blockquote></td>
<td><blockquote>
<p><em>bool</em></p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Default:</strong></p>
</blockquote></td>
<td><blockquote>
<p>f alse</p>
</blockquote></td>
</tr>
</tbody>
</table>

> mb shutter open

<table>
<colgroup>
<col style="width: 39%" />
<col style="width: 60%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Name:</strong></p>
</blockquote></th>
<th><blockquote>
<p>mb_shutter_open</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p><strong>Type:</strong></p>
</blockquote></td>
<td><blockquote>
<p><em>float</em></p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Default:</strong></p>
</blockquote></td>
<td><blockquote>
<p>-0.25</p>
</blockquote></td>
</tr>
</tbody>
</table>

> mb shutter close

<table>
<colgroup>
<col style="width: 39%" />
<col style="width: 60%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Name:</strong></p>
</blockquote></th>
<th><blockquote>
<p>mb_shutter_close</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p><strong>Type:</strong></p>
</blockquote></td>
<td><blockquote>
<p><em>float</em></p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Default:</strong></p>
</blockquote></td>
<td><blockquote>
<p>0.25</p>
</blockquote></td>
</tr>
</tbody>
</table>

> mb shutter bias

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 59%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Name:</strong></p>
</blockquote></th>
<th><blockquote>
<p>mb_shutter_bias</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p><strong>Type:</strong></p>
</blockquote></td>
<td><blockquote>
<p><em>float</em></p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Default:</strong></p>
</blockquote></td>
<td><blockquote>
<p>0.0f</p>
</blockquote></td>
</tr>
</tbody>
</table>

> pixel sample map

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Name:</strong></p>
</blockquote></th>
<th><blockquote>
<p>pixel_sample_map</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p><strong>Type:</strong></p>
</blockquote></td>
<td><blockquote>
<p><em>string</em></p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Default:</strong></p>
</blockquote></td>
<td><blockquote>
<p>""</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p><strong>Comment:</strong></p>
</blockquote></td>
<td><blockquote>
<p>f ile path to a gray scale image</p>
</blockquote></td>
</tr>
</tbody>
</table>

### Pixel Sample Map Usage

> A pixel sample map is a gray scale image that multiplies the number of
> pixel samples per pixel. This can be usef ul when certain parts of a f
> rame conv erge more slowly than other parts. The image map is squashed
> / stretch to f it the region window of the f rame. The gray scale v
> alues can be greater than 1 in order to supersample the pixels.

##### Example:

> Grimmel's white hair is quite noisy
>
> SceneVariables { \["pixel samples"\] = 4
>
> }
>
> PerspectiveCamera { \["pixel sample map"\] = ""
>
> }
>
> All pixels hav e 16 samples
>
> <img src="media/image1.jpeg" style="width:7.01708in;height:3.9375in" />
>
> <img src="media/image2.jpeg" style="width:7in;height:3.9375in" />We
> can mask it with this image
>
> The white pixels = 1, and the grey pixels = 0.25.
>
> Now we set
>
> SceneVariables {
>
> \["pixel samples"\] = 8
>
> }
>
> PerspectiveCamera { \["pixel sample map"\] = "hair_mask.png"
>
> }
>
> <img src="media/image3.jpeg" style="width:7in;height:3.9375in" />And
> this dev otes more pixel samples to the hair! The hair region has 64
> samples, and ev ery where else had 16 samples.
