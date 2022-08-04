# Light

-   [Introduction](#Light-Introduction)

-   [Attributes](#Light-Attributes)

    -   [xform](#Light-xform)

    -   [on](#Light-on)

    -   [mb](#Light-mb)

    -   [visible in camera](#Light-visibleincamera)

    -   [color](#Light-color)

    -   [intensity](#Light-intensity)

    -   [exposure](#Light-exposure)

    -   [presence shadows](#Light-presenceshadows)

    -   [texture](#Light-texture)

    -   [saturation](#Light-saturation)

    -   [contrast](#Light-contrast)

    -   [gamma](#Light-gamma)

    -   [gain](#Light-gain)

    -   [offset](#Light-offset)

    -   [temperature](#Light-temperature)

    -   [texture rotation](#Light-texturerotation)

    -   [texture translation](#Light-texturetranslation)

    -   [texture coverage](#Light-texturecoverage)

    -   [texture reps u](#Light-texturerepsu)

    -   [texture reps v](#Light-texturerepsv)

    -   [texture mirror u](#Light-texturemirroru)

    -   [texture mirror v](#Light-texturemirrorv)

    -   [texture border color](#Light-texturebordercolor)

    -   [light filters](#Light-lightfilters)

    -   [label](#Light-label)

    -   [visible diffuse reflection](#Light-visiblediffusereflection)

    -   [visible diffuse
        transmission](#Light-visiblediffusetransmission)

    -   [visible glossy reflection](#Light-visibleglossyreflection)

    -   [visible glossy transmission](#Light-visibleglossytransmission)

    -   [visible mirror reflection](#Light-visiblemirrorreflection)

    -   [visible mirror transmission](#Light-visiblemirrortransmission)

    -   [max shadow distance](#Light-maxshadowdistance)

 

# Introduction

All Moonray light types share the following attributes in common.

 

# Attributes

## xform

<table>
<colgroup>
<col style="width: 24%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>xform</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td>Mat4d</td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td><table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th>1</th>
<th>0</th>
<th>0</th>
<th>0</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr class="even">
<td>0</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr class="odd">
<td>0</td>
<td>0</td>
<td>0</td>
<td>1</td>
</tr>
</tbody>
</table></td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td><p>Node transformation (light-to-world).</p>
<p>A blurrable attribute.</p></td>
</tr>
</tbody>
</table>

 

## on

| **Name:**    | on      |
|--------------|---------|
| **Type:**    | *bool*  |
| **Default:** | true    |

 

 

\["mb"\] = false, -- Bool

## mb

| **Name:**    | mb                                            |
|--------------|-----------------------------------------------|
| **Type:**    | *bool*                                        |
| **Default:** | false                                         |
| **Comment:** | Whether the light motion affects motion blur. |

 

## visible in camera

<table>
<colgroup>
<col style="width: 34%" />
<col style="width: 65%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>visible_in_camera</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><em>int</em></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>2</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td><p>0 =&gt; force off</p>
<p>1 =&gt; force on</p>
<p>2 =&gt; use global setting</p></td>
</tr>
</tbody>
</table>

 

## color

| **Name:**    | color                              |
|--------------|------------------------------------|
| **Type:**    | *Rgb*                              |
| **Default:** | (1,1,1)                            |
| **Comment:** | RGB value of the light's radiance. |

 

## intensity

| **Name:**    | intensity                                 |
|--------------|-------------------------------------------|
| **Type:**    | *float*                                   |
| **Default:** | 1.0                                       |
| **Comment:** | Multiplier applied directly to the color. |

 

## exposure

| **Name:**    | exposure                                                           |
|--------------|--------------------------------------------------------------------|
| **Type:**    | *float*                                                            |
| **Default:** | 0.0                                                                |
| **Comment:** | The following multiplier is applied to the color: pow(2,exposure). |

##  presence shadows

<table>
<colgroup>
<col style="width: 34%" />
<col style="width: 65%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>presence_shadows</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><em>int</em></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>2</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td><p>0 =&gt; force off</p>
<p>1 =&gt; force on</p>
<p>2 =&gt; use global setting</p></td>
</tr>
</tbody>
</table>

 

## texture

| **Name:**    | texture                                                              |
|--------------|----------------------------------------------------------------------|
| **Type:**    | *string*                                                             |
| **Default:** | ""                                                                   |
| **Comment:** | Filename that points to a texture (formats: .exr, .tif, .jpg, etc.). |

 

## saturation

| **Name:**    | saturation |
|--------------|------------|
| **Type:**    | Rgb        |
| **Default:** | (1,1,1)    |
| **Comment:** |            |

 

## contrast

| **Name:**    | contrast |
|--------------|----------|
| **Type:**    | Rgb      |
| **Default:** | (1,1,1)  |
| **Comment:** |          |

 

## gamma

| **Name:**    | gamma   |
|--------------|---------|
| **Type:**    | Rgb     |
| **Default:** | (1,1,1) |
| **Comment:** |         |

 

## gain

| **Name:**    | gain    |
|--------------|---------|
| **Type:**    | Rgb     |
| **Default:** | (1,1,1) |
| **Comment:** |         |

 

## offset

| **Name:**    | offset  |
|--------------|---------|
| **Type:**    | Rgb     |
| **Default:** | (0,0,0) |
| **Comment:** |         |

 

## temperature

| **Name:**    | temperature                                       |
|--------------|---------------------------------------------------|
| **Type:**    | *Vec3f*                                           |
| **Default:** | (0,0,0)                                           |
| **Comment:** | Color temperature using Nuke-like T/M/E settings. |

 

## texture rotation

| **Name:**    | texture_rotation                     |
|--------------|--------------------------------------|
| **Type:**    | *float*                              |
| **Default:** | 0.0                                  |
| **Comment:** | Clockwise rotation angle in degrees. |

 

## texture translation

| **Name:**    | texture_translation      |
|--------------|--------------------------|
| **Type:**    | *Vec2f*                  |
| **Default:** | (0,0)                    |
| **Comment:** | Translations in u and v. |

 

## texture coverage

| **Name:**    | texture_coverage   |
|--------------|--------------------|
| **Type:**    | *Vec2f*            |
| **Default:** | (1,1)              |
| **Comment:** | Scales in u and v. |

 

## texture reps u

| **Name:**    | texture_reps_u                                               |
|--------------|--------------------------------------------------------------|
| **Type:**    | *float*                                                      |
| **Default:** | 1.0                                                          |
| **Comment:** | Number of times texture repeats in u over the texture space. |

 

## texture reps v

| **Name:**    | texture_reps_v                                               |
|--------------|--------------------------------------------------------------|
| **Type:**    | *float*                                                      |
| **Default:** | 1.0                                                          |
| **Comment:** | Number of times texture repeats in v over the texture space. |

 

## texture mirror u

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 61%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>texture_mirror_u</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><em>bool</em></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>false</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td><p>true =&gt; mirror in u</p>
<p>false =&gt; repeat in u</p></td>
</tr>
</tbody>
</table>

## texture mirror v

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 61%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Name:</strong></th>
<th>texture_mirror_v</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Type:</strong></td>
<td><em>bool</em></td>
</tr>
<tr class="even">
<td><strong>Default:</strong></td>
<td>false</td>
</tr>
<tr class="odd">
<td><strong>Comment:</strong></td>
<td><p>true =&gt; mirror in v</p>
<p>false =&gt; repeat in v</p></td>
</tr>
</tbody>
</table>

## texture border color

| **Name:**    | texture_border_color                                             |
|--------------|------------------------------------------------------------------|
| **Type:**    | Rgb                                                              |
| **Default:** | (1,1,1)                                                          |
| **Comment:** |  RGB value used when a texture lookup occurs outside the texture |

 

## light filters

| **Name:**    | light_filters       |
|--------------|---------------------|
| **Type:**    | SceneObjectVector   |
| **Default:** | SceneObjectVector() |
| **Comment:** |                     |

 

## label

| **Name:**    | label                                |
|--------------|--------------------------------------|
| **Type:**    | *String*                             |
| **Default:** | ""                                   |
| **Comment:** | Label used in light AOV expressions. |

 

## visible diffuse reflection

| **Name:**    | visible_diffuse_reflection                          |
|--------------|-----------------------------------------------------|
| **Type:**    | *bool*                                              |
| **Default:** | true                                                |
| **Comment:** | Whether the light is visible in diffuse reflection. |

## visible diffuse transmission

| **Name:**    | visible_diffuse_transmission                          |
|--------------|-------------------------------------------------------|
| **Type:**    | *bool*                                                |
| **Default:** | true                                                  |
| **Comment:** | Whether the light is visible in diffuse transmission. |

## visible glossy reflection

| **Name:**    | visible_glossy_reflection                          |
|--------------|----------------------------------------------------|
| **Type:**    | *bool*                                             |
| **Default:** | true                                               |
| **Comment:** | Whether the light is visible in glossy reflection. |

## visible glossy transmission

| **Name:**    | visible_glossy_transmission                                       |
|--------------|-------------------------------------------------------------------|
| **Type:**    | *bool*                                                            |
| **Default:** | true                                                              |
| **Comment:** | Whether the light is visible in glossy transmission (refraction). |

## visible mirror reflection

| **Name:**    | visible_mirror_reflection                          |
|--------------|----------------------------------------------------|
| **Type:**    | *bool*                                             |
| **Default:** | true                                               |
| **Comment:** | Whether the light is visible in mirror reflection. |

## visible mirror transmission

| **Name:**    | visible_mirror_transmission                                       |
|--------------|-------------------------------------------------------------------|
| **Type:**    | *bool*                                                            |
| **Default:** | true                                                              |
| **Comment:** | Whether the light is visible in mirror transmission (refraction). |

## max shadow distance

| **Name:**    | max_shadow_distance                                                                                                                                                                                                                                         |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Type:**    | float                                                                                                                                                                                                                                                       |
| **Default:** | 0.0                                                                                                                                                                                                                                                         |
| **Comment:** | Shadows farther than this distance from the occluding object are ignored (disabled if \<= 0.0). For more info, please see the [user documentation for max shadow distance](http://mydw.dreamworks.net/display/RENDER/Clear+Radius+and+Max+Shadow+Distance). |
