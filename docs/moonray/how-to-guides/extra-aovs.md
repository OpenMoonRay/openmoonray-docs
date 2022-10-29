---
title: Extra AOV Workflow & Case Studies

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Extra AOV Workflow & Case Studies
## This page needs to be rebuilt

Extra AOV is a great way to create custom AOVs in a beauty render by
shader modification on an asset. These AOVs afford artists extra
flexibility in shot work to generate one of a kind AOVs that solve
unique problems that only occur in specific shots/sequences. The
workflow is extremely portable in Sceneflow and can be built into a rig
and shared between artists with ease.

-   Extra AOV Setup in SF

-   [Case Study - Nuke Generated
    Mattes](#ExtraAOVWorkflow&CaseStudies-CS1)

## **Extra AOV Setup in Sceneflow**

Extra AOV only requires 2 nodes in SF - the \<sceneflow append extra aov
maps\> node and the \<sceneflow aov\> node

<img src="media/image1.tmp" style="width:4.875in;height:1.875in" />

### Sceneflow Append Extra AOV Maps Node

There are 2 parts to this node once added to your SF network. 

Upon selecting the node, there will be a single "group" field in the
options panel.  
<img src="media/image2.tmp" style="width:4.875in;height:3.94792in" />

This is where the artist defines the shader to modify. This field
accepts wild cards, meaning depending on how far down the chain the
artist goes, it's possible to affect multiple shaders across multiple
assets at once.   
In the above example, selecting the base material under "pod" will
result in AOVs generated only applying to the "pod" asset. If the artist
selected the entire "timeout_pot_A" group, the AOV modifications will be
applied to both the "glass" and the "pod" assets under the group.

Once the shader to modify has been set, the actual modification will
happen inside the node.  
Double clicked into the node, the following should be the default setup
that comes with a newly created \<sceneflow append extra aov maps\>
node.  
<img src="media/image3.tmp" style="width:4.875in;height:4.64583in" />

There are 3 steps to the extra AOV creation process inside the \<SF
append extra aov maps\> node, as demonstrated by the image above:

1.  Modification process - can be a network of nodes to achieve the
    modification result or just a vdb/image map node

2.  Name AOV (Extras AOV Map node) - name the new AOV channels

3.  Output (ListMap or Extra_AOVs node)- plug each named AOV channel
    into the collections node to be picked up in sceneflow

### Sceneflow AOV Node

This node is very straight forward and comes after the \<SF append extra
aov maps\> node in the SF network.  
Once all the extra AOVs have been created and named, drop a \<SF AOV\>
node and click the "Add ExtraAOVMap Labels" button on the top of the
options panel.  
A list of named AOVs within the current stream will be pulled into a
list, and the artist can choose which to add as extra AOVs for this
particular render output stream.

<img src="media/image4.tmp" style="width:4.875in;height:3.94792in" />

Once the desired AOVs have been selected, the node's options panel will
be populated with each AOV.  
Once all setup is completed, the artist can test render and see the
extra aovs in Houdini's render view view bar:

<img src="media/image5.tmp" style="width:4.875in;height:3.98958in" />

### Case Study - Nuke Generated Mattes

Especially on a show like Boss2 where there are a lot of PIP screens and
projections of various kinds, it's very useful to have some ability to
dial the color information once the render is done.  
In this example, the matte painting and FX ocean were comped in a
separate nuke file, rendered out and converted to .tx to be used as
texture for the pod asset for final lighting. Extra AOVs were added to
the matte painting and FX ocean image sequence to allow the artist to
not only have some control during the shot creation process, but also
add them into the DI output for grading later.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p><img src="media/image6.tmp"
style="width:4.875in;height:2.02083in" /></p>
<p><strong>RGB</strong></p></th>
<th><p><img src="media/image7.tmp"
style="width:4.875in;height:2.02083in" /></p>
<p><strong>Matte_01 - matte painting sun and 2 types of
clouds</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><img src="media/image8.tmp"
style="width:4.875in;height:2.03125in" /></p>
<p><strong>Matte_02 - separated matte painting sky, matte painting ocean
and FX ocean</strong></p></td>
<td><p><img src="media/image9.tmp"
style="width:4.875in;height:2.01042in" /></p>
<p><strong>Matte_sparkles - ocean sparkles</strong></p></td>
</tr>
</tbody>
</table>

These mattes were instrumental in getting the shots through to final by
allowing the artist wide flexibility in the comping stage. The sparkles
matte also allowed the artist to generate high quality glints in the
final comp to be added on top of the final image without having to
rerender the background over and over to address notes, thus saving time
and resources.

To start, RGB renders were ran out for the whole length of the ocean
image sequence from Nuke to be used as texture maps in the light.hip
file for the pod asset.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p><img src="media/image10.tmp"
style="width:4.875in;height:2.4375in" /></p>
<p><strong>RGB texture</strong></p></th>
<th><p><img src="media/image11.tmp"
style="width:4.875in;height:2.44792in" /></p>
<p><strong>mattePaintingMattes_01</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><img src="media/image12.tmp"
style="width:4.875in;height:2.42708in" /></p>
<p><strong>mattePaintingMatte_02</strong></p></td>
<td><p><img src="media/image13.tmp"
style="width:4.875in;height:2.42708in" /></p>
<p><strong>sparkles</strong></p></td>
</tr>
</tbody>
</table>

Once the image sequences for each of the above passes were written out
(each sequence was from f101-f700), they were brought into Houdini to be
converted to .tx

<img src="media/image14.tmp" style="width:4.875in;height:2.71875in" />

The .tx conversion setup can be added anywhere, including the final
**light.hip** file.  
The artist will be inputting the explicit path of the image sequence for
each read node, then submit the whole thing to have the conversation run
on the farm.  
**\*\*Make sure to use the $F instead of a frame number to grab the
whole image sequence.\*\***

<img src="media/image15.tmp" style="width:4.875in;height:1.66667in" />

Once the conversions are finished, go back to the light.hip file and
make drop down the \<SF append extra aov maps\> node and \<SF aov\>
node. Plug them into the network where desired.  
Select the \<SF append extra aov maps\> node, find the pod asset and
select its shader.  
Double click on the \<SF append extra aov maps\> node and dive inside.
Create a \<moonray_imageMap\> node and pipe in the .tx image path for
one of the image sequences.  
Add an \<extraAOVMap\> node to give the matte channel a name. Connect
the \<extraAOVMap\> node to an empty slot on the \<extra aov\> node.  
Create as many \<moonray_imageMap\> and \<extraAOVMap\> nodes as the
mattes you need and update each one to a different set of image
sequence.  
**\*\*Make sure to use the $F instead of a frame number to grab the
whole image sequence.\*\***

<img src="media/image16.tmp" style="width:4.875in;height:5.21875in" />

When all image maps have been added, go back out and select the \<SF
aov\> node.  
Generate the AOVs by clicking the \<Add extraAOVMap Labels\>.  
Render and test!
