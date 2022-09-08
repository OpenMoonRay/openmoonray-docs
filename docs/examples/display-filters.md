# Display Filters

Display Filters are essentially compositing nodes that can be piped into
Moonray Render Outputs. They're handy for non-PBR interactive
compositing directly in Moonray. We'll look at some of the basics, and
how to get them set-up in a Houdini scene.

Marianna Neubauer gave a great introductory presentation about Display
Filters, you can watch the recording of
it [**here**](https://dreamtube.dreamworks.net/Panopto/Pages/Viewer.aspx?id=ccc7aa9c-2c2b-4773-a1d9-ac47013dcb2a),
and her slides can be
found [**here**](https://docs.google.com/presentation/d/19mJ7N_K64xnTIr-rO6pp9-GtL5WQuGNNqZ2caaO72yw/edit#slide=id.g611868cec5_0_0).

## Available Display Filters:

-   [BlendDisplayFilter](file:///G:\display\GSHADERS\BlendDisplayFilter)

-   [ClampDisplayFilter](http://mydw.dreamworks.net/display/GSHADERS/ClampDisplayFilter)

-   [ColorCorrectDisplayFilter](http://mydw.dreamworks.net/display/GSHADERS/ColorCorrectDisplayFilter)

-   [ConstantDisplayFilter](file:///G:\display\GSHADERS\ConstantDisplayFilter)

-   [ConvolutionDisplayFilter](http://mydw.dreamworks.net/display/GSHADERS/ConvolutionDisplayFilter)

-   [DiscretizeDisplayFilter](http://mydw.dreamworks.net/display/GSHADERS/DiscretizeDisplayFilter)

-   [DofDisplayFilter](http://mydw.dreamworks.net/display/GSHADERS/DofDisplayFilter)

-   [HalftoneDisplayFilter](file:///G:\display\GSHADERS\HalftoneDisplayFilter)

-   [ImageDisplayFilter](file:///G:\display\GSHADERS\ImageDisplayFilter)

-   [OpDisplayFilter](file:///G:\display\GSHADERS\OpDisplayFilter)

-   [OverDisplayFilter](http://mydw.dreamworks.net/display/GSHADERS/OverDisplayFilter)

-   [RampDisplayFilter](file:///G:\display\GSHADERS\RampDisplayFilter)

-   [RemapDisplayFilter](file:///G:\display\GSHADERS\RemapDisplayFilter)

-   [RgbToFloatDisplayFilter](http://mydw.dreamworks.net/display/GSHADERS/RgbToFloatDisplayFilter)

-   [RgbToHsvDisplayFilter](file:///G:\display\GSHADERS\RgbToHsvDisplayFilter)

-   [ShadowDisplayFilter](file:///G:\display\GSHADERS\ShadowDisplayFilter)

-   [ToonDisplayFilter](http://mydw.dreamworks.net/display/GSHADERS/ToonDisplayFilter)

### Invalid Inputs:

Currently the following AOVs are **not** valid inputs for Display
Filters:

-   Cryptomatte

-   Deep

-   Heat Map (Time per pixel)

-   Weight

### Caveats/Common Mistakes:

We'll go over Houdini next, but here are a few common mistake areas to
watch out for, if you're having trouble:

-   AOVs (both inputs and outputs) need to be defined *before* the
    sceneflow_displayfilter node. If a particular AOV doesn't show up in
    the Fetch's dropdown menu, check upstream and make sure your AOVs
    are being defined and also not deleted.

-   Currently the automatic per-light AOVs defined by our **SceneFlow LT
    AOV** node don't work as inputs (for example lgt_key_difsss). This
    is because that light list isn't resolved until rdla generation.
    There's an open ticket to see if we can get them working: 
    [M4H-3842](https://jira.dreamworks.net/browse/M4H-3842) - Enable
    sceneflow_displayfilter node to use Lighting's automatic per-light
    AOVs as inputs Closed

### Using Display Filters in Houdini:

Here's a basic set-up to get you started with Display Filters in your
scene.

1.  We need to first define AOVs for our display filters to output to.
    Drop down a **sceneflow_aov** node. At the top, hit the plus button
    to create a new AOV. In the new AOV's dropdown menu set it to
    Display Filter, and give it a unique name. Repeat this step to
    create additional display filter AOVs. 

| <img src="media/image1.tmp" style="width:4.875in;height:3.30208in" /> |
|-----------------------------------------------------------------------|

2.  

3.  Drop down a **sceneflow_displayfilter** node anywhere downstream
    from the aov node we created in Step 1. (You will also want this
    downstream of your show's **Sceneflow LT AOV** node.) Hop inside the
    node to start playing with display filters. A basic set-up will be
    pre-made inside as an example.

| <img src="media/image2.tmp" style="width:4.71875in;height:4.01042in" /><img src="media/image3.tmp" style="width:4.875in;height:3.78125in" /> |
|----------------------------------------------------------------------------------------------------------------------------------------------|

4.  

5.  Setting up your display filters is similar to a Shading Network, in
    that it generally flows from left to right (or top to bottom. We'll
    assume left to right for this example). On the left we'll pull in
    AOVs to use as inputs for our display filters, which we'll then
    output as the new AOVs we created in Step 1.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><img src="media/image4.png"
style="width:4.875in;height:2.6875in" /></p>
<p><strong>Illustration courtesy of Marianna Neubauer</strong></p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

6.  

7.  Here's a simple example. We'll pull in our Beauty AOV, apply the
    Halftone display filter to it, and output it as our new 'df_test'
    AOV. **Note:** the dropdown menus in the Fetch nodes are helpful for
    seeing and selecting your available AOVs.

| <img src="media/image5.tmp" style="width:4.875in;height:5.46875in" /><img src="media/image6.tmp" style="width:4.875in;height:5.4375in" /><img src="media/image7.tmp" style="width:4.875in;height:5.28125in" /> |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

8.  

9.  Start rendering! Kick up an interactive render and you'll notice new
    AOVs for each extra Display Filter AOV you've created. Display
    Filters are best utilized with IPR or Auto-update, so toggle it on,
    flip to your new AOV, and start making changes to see them live
    during the render.

| <img src="media/image8.tmp" style="width:4.875in;height:3.4375in" /> |
|----------------------------------------------------------------------|

10. 

11. The TAB menu inside the sceneflow_displayfilter node is helpful for
    showing what nodes are available, simply type 'display filter' to
    see what nodes are currently available. The list of available
    display filters is subject to change as development on it
    continues. 

> Here's another simple example, using a combination of display filters
> and AOV inputs.

| <img src="media/image9.tmp" style="width:4.875in;height:3.04167in" /><img src="media/image10.jpeg" style="width:4.875in;height:2.03125in" /> |
|----------------------------------------------------------------------------------------------------------------------------------------------|

Drop here!

Drop here!

Drop here!

Drop here!

Drop here!
