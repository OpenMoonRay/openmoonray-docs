# MeshLight

-   [Introduction](#MeshLight-Introduction)

-   [Attributes](#MeshLight-Attributes) 

    -   [common attributes](#MeshLight-commonattributes)

    -   [normalized](#MeshLight-normalized)

    -   [geometry](#MeshLight-geometry)

    -   [parts](#MeshLight-parts)

    -   [map shader](#MeshLight-mapshader)

    -   [clear radius](#MeshLight-clearradius)

# Introduction

MeshLight converts a mesh geometry into a light source.

<img src="media/image1.tmp" style="width:4.875in;height:2.73958in" />

 

# Attributes

## common attributes

Most of the common light attributes
apply: [Light#Attributes](file:///G:\display\RENDER\Light#Light-Attributes).
The only common attribute that does not apply is
["texture"](http://mydw.anim.dreamworks.com/display/MOONRAY/Light#Light-texture). In
addition, MeshLight supports the following specialized attributes:

## normalized

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 85%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>normalized</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><em>bool</em></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>true</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td><p>When this value is set to true, the size of the light can be
changed without<br />
altering the total amount of energy cast into the scene.</p>
<p>In technical terms, non-normalized lights interpret their radiance
value as-is,<br />
whereas normalized lights interpret this value as the flux.</p></td>
</tr>
</tbody>
</table>

## geometry

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 83%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>geometry</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><em>SceneObject *</em></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>nullptr</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td><p>The reference geometry that will be converted into a
MeshLight.</p>
<p>The geometry must be a mesh.</p></td>
</tr>
</tbody>
</table>

 

## parts

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 85%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>parts</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><em>StringVector</em></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>{} : empty vector</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td><p>The part names of the mesh the will be converted into a
light.</p>
<p>An empty vector or empty string converts all parts of the mesh into a
light.</p></td>
</tr>
</tbody>
</table>

## map shader

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 86%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>map_shader</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><em>SceneObject *</em></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>nullptr</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td><p>The MapShader network that colors the light.</p>
<p>This functionally replaces the "texture" attribute that is common to
other light types.</p></td>
</tr>
</tbody>
</table>

## clear radius

| **Name:**    | clear_radius                                                                                                                                                                                                                           |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Type:**    | float                                                                                                                                                                                                                                  |
| **Default:** | 0.0                                                                                                                                                                                                                                    |
| **Comment:** | Shadows less than this distance from the light are ignored (disabled if \<= 0.0). For more info, please see the [user documentation for clear radius](http://mydw.dreamworks.net/display/RENDER/Clear+Radius+and+Max+Shadow+Distance). |
