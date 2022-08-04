# Cookie Light Filter

Why the name? Cookie is a nickname for Cucoloris. A device used in live
action lighting to create shadow patters. Much more
[here](https://en.wikipedia.org/wiki/Cucoloris).

The cookie light filter projects a pattern from either an orthographic
or perspective camera. The filter takes as its input a Moonray map
shader, so any of the image generators, noise, checkerboard, image map
will work. Additionally, through the Houdini interface you a may use a
[COP](https://www.sidefx.com/docs/houdini/nodes/cop2/index.html) network
as input. When SceneFlow processes the scene it will, under the hood,
convert the COP network's output to a tx file and feed it to Moonray
through an image map.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><img src="media/image1.tmp"
style="width:4.875in;height:4.51042in" /></th>
<th><img src="media/image2.tmp"
style="width:4.875in;height:3.04167in" /></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Orthographic projection</p>
<p><img src="media/image3.tmp"
style="width:4.14583in;height:3.90625in" /></p></td>
<td><img src="media/image4.tmp"
style="width:4.875in;height:3.55208in" /></td>
</tr>
<tr class="even">
<td><p>Perspective Projection</p>
<p><img src="media/image5.tmp"
style="width:4.19792in;height:3.88542in" /></p></td>
<td><img src="media/image6.tmp"
style="width:4.875in;height:2.88542in" /></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 15%" />
<col style="width: 73%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Tab</strong></th>
<th><strong>Input</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Properties</td>
<td>Texture Map</td>
<td>Moonray map. Any Moonray map generator, checkerboard, noise, image
map. You may also add any of the map modifiers, color correct for
example. The default is an image map.</td>
</tr>
<tr class="even">
<td></td>
<td>Density</td>
<td>Standard Light filter parameter that controls how much of the cookie
is added to the light</td>
</tr>
<tr class="odd">
<td></td>
<td>Invert</td>
<td>Inverts the map</td>
</tr>
<tr class="even">
<td></td>
<td>Outside Projection</td>
<td><p>What happens outside the frustum of the projection camera.</p>
<ul>
<li><p>Black (default)</p></li>
<li><p>White</p></li>
<li><p>Default-This uses the mode set on the Moonray map shader.<br />
Wrap Around Off-Texture stretches the edge pixels<br />
<img src="media/image7.tmp"
style="width:4.875in;height:3.11458in" /><br />
Wrap Around On-Texture repeats<br />
<img src="media/image8.tmp"
style="width:4.875in;height:2.86458in" /></p></li>
</ul></td>
</tr>
<tr class="odd">
<td></td>
<td>Projection Type</td>
<td><ul>
<li><p>Perspective (default)</p></li>
<li><p>Orthographic</p></li>
</ul></td>
</tr>
<tr class="even">
<td></td>
<td>Projection Focal</td>
<td>Focal length of the lens when using perspective projection</td>
</tr>
<tr class="odd">
<td></td>
<td>Projector Film Width</td>
<td>Size of the camera image plane.</td>
</tr>
<tr class="even">
<td></td>
<td>Projector Pixel Aspect</td>
<td>Aspect ration of the projection</td>
</tr>
<tr class="odd">
<td></td>
<td>Blur</td>
<td><p>The filter can be blurred at 3 different levels based on the
filter's distance the illuminated surface. Since the blur occurs in
texture space the blur values</p>
<p>are extremely low. A blur of .05 results in a very blurry texture
map.</p></td>
</tr>
<tr class="even">
<td></td>
<td><p>Display Blur Distance Guides</p>
<p>in Viewport</p></td>
<td><p>Displays guides in the 3d viewport</p>
<p><img src="media/image9.tmp"
style="width:3.44792in;height:3.03125in" /></p></td>
</tr>
<tr class="odd">
<td></td>
<td>Blur Type</td>
<td><ul>
<li><p>Gaussian</p></li>
<li><p>Circular - Good for sun/leaf dapples<br />
Gaussian(left)---Circular(right)<br />
<img src="media/image10.tmp"
style="width:4.875in;height:3.14583in" /></p></li>
</ul></td>
</tr>
<tr class="even">
<td></td>
<td>Blur Near Distance/Value</td>
<td>Distance from cookie filter and blur value at that distance.</td>
</tr>
<tr class="odd">
<td></td>
<td>Blur Midpoint/Value</td>
<td>Distance from cookie filter and blur value at that distance.</td>
</tr>
<tr class="even">
<td></td>
<td>Blur Far Distance/Value</td>
<td>Distance from cookie filter and blur value at that distance.</td>
</tr>
<tr class="odd">
<td>OpenGL</td>
<td>OpenGL Tab</td>
<td>Controls for display properties in the 3d viewport.</td>
</tr>
<tr class="even">
<td></td>
<td>Image Map</td>
<td>The map displayed in the 3d viewport</td>
</tr>
<tr class="odd">
<td></td>
<td>Card Transparency</td>
<td>How opaque the texture map is in 3d viewport. Toggling this off will
turn off the image in the 3d viewport.</td>
</tr>
<tr class="even">
<td></td>
<td><p>Display BG Image When</p>
<p>Looking Through Camera</p></td>
<td><p>This utilizes a native Houdini viewport option to display the
projection image behind the scene geometry.</p>
<p><img src="media/image11.tmp"
style="width:4.51042in;height:4.27083in" /></p>
<p>This only seems to work with the perspective camera.</p></td>
</tr>
<tr class="odd">
<td></td>
<td>Icon Scale</td>
<td>Size of the Cookie icon geometry in the 3d viewport</td>
</tr>
<tr class="even">
<td></td>
<td>Near Plane</td>
<td><p>Position of the image plane</p>
<p><img src="media/image12.tmp"
style="width:3.91667in;height:3.6875in" /></p></td>
</tr>
<tr class="odd">
<td></td>
<td>Size</td>
<td><p>Size of the projection frustum</p>
<p><img src="media/image13.tmp"
style="width:3.91667in;height:3.6875in" /></p></td>
</tr>
<tr class="even">
<td></td>
<td>Output Image</td>
<td>Path to write out image from the projection's point of view. Very
useful to create a reference image for painting.</td>
</tr>
</tbody>
</table>

# Inside the Cookie HDA

<table>
<colgroup>
<col style="width: 46%" />
<col style="width: 53%" />
</colgroup>
<thead>
<tr class="header">
<th>Double clicking on the Cookie HDA you're presented with 3
subnetworks</th>
<th><img src="media/image14.tmp"
style="width:3.4375in;height:1.33333in" /></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><h2 id="matnet"><strong>MatNet</strong></h2>
<p>These maps represent one of the two options for passing an image to
the Cookie Light Filter</p></td>
<td><p><img src="media/image15.tmp"
style="width:2.02083in;height:2.64583in" /></p>
<ul>
<li><p>ImageMap-is the default and is a path to a .tx file.</p></li>
<li><p>ImageMapFromCOPs-imports an image from the CompNet COP network on
level up</p></li>
</ul></td>
</tr>
<tr class="even">
<td><h2 id="compnet"><strong>CompNet</strong></h2>
<p>The built-in Houdini compositing tool (<a
href="https://www.sidefx.com/docs/houdini/nodes/cop2/index.html">Documentation</a>).</p>
<p>Behind the scene SceneFlow converts the output of the COP network to
a .tx file and feeds it</p>
<p>to the Cookie filter.</p>
<p>Using a COP network is a handy way of importing a painted textures
since</p>
<p>it handles the image to tx conversion for you at the expense of some
processing time.</p>
<p>(Tip)You can quickly iterate when painting a map using a COP network.
Once the texture is</p>
<p>done converting it to a tx file and importing it directly will be
more render efficient.</p></td>
<td><img src="media/image16.tmp"
style="width:3.32292in;height:3.32292in" /></td>
</tr>
<tr class="odd">
<td><h2 id="livepaint"><strong>LivePaint</strong></h2>
<p>Here are the steps to paint using Houdini's Paint HDA:</p>
<ol type="1">
<li><p>Create and Connect a Cookie Light Filter</p></li>
<li><p>Aim the projector</p></li>
<li><p>Look through the projector in the 3d viewport (if you're not
already)</p></li>
<li><p>Turn "off" the OpenGL&gt;Card Transparency</p></li>
<li><p>Select EDIT/MatNet/ImageMapFromCOPs in Texture Map</p></li>
<li><p>Dive into the CompNet</p></li>
<li><p>Wire FetchLivePaint into OUT</p></li>
<li><p>Go up and into LivePaint</p></li>
<li><p>Select "Paint" if not already selected</p></li>
<li><p>In 3d viewport hit enter</p></li>
<li><p>Adjust brush size if necessary</p></li>
<li><p>Start painting</p></li>
</ol></td>
<td></td>
</tr>
</tbody>
</table>

# Tips & Tricks & Known Issues

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 76%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Currently light filters can only be combined with a
<strong>multiply</strong>.</p>
<p>There's a open Jira to add additional combine modes. <a
href="http://jira.dreamworks.net/browse/MOONRAY-3578">MOONRAY-3578</a></p></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>If you use multiple 3d viewers the texture preview will sometimes
disappear. Using a single view</p>
<p>solves this problem.</p></td>
<td><p><img src="media/image17.tmp"
style="width:4.875in;height:2.125in" /></p>
<p><img src="media/image18.tmp"
style="width:4.875in;height:2.125in" /></p></td>
</tr>
<tr class="even">
<td><p>Adding map processing to your tx image.</p>
<p>All of Moonray map processing operations are available.</p></td>
<td><p><img src="media/image19.tmp"
style="width:3.8125in;height:3.07292in" /></p>
<p>repath the Cookie Textrue Map:</p>
<p><img src="media/image20.tmp"
style="width:4.64583in;height:1.69792in" /></p></td>
</tr>
<tr class="odd">
<td>Works with volumes</td>
<td><p><img src="media/image21.tmp"
style="width:2.08333in;height:1.63542in" /></p>
<p>with blur <img src="media/image22.tmp"
style="width:2.08333in;height:1.60417in" /></p>
<p>blur on midpoint only<img src="media/image23.tmp"
style="width:2.08333in;height:1.6875in" /></p></td>
</tr>
</tbody>
</table>
