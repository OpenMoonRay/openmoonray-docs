# CylinderLight
CylinderLight is a light in the shape of a cylinder. 

# Introduction

- [Attributes](#CylinderLight-Attributes) 
- [common attributes](#CylinderLight-commonattributes)
- [normalized](#CylinderLight-normalized)
- [radius](#CylinderLight-radius)
- [height](#CylinderLight-height)
- [clear radius](#CylinderLight-clearradius)




<img src="media/image1.tmp" style="width:4.875in;height:2.73958in" />

# Attributes

## common attributes

All of the common light attributes
apply:  [Light#Attributes](file:///G:\display\RENDER\Light#Light-Attributes) In
addition, CylinderLight supports the following specialized attributes:

## normalized

<table>
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

## radius

|    |   |
|--------------|---------|
| **Type:**    | *float* |
| **Default:** | 1.0     |

## height

|    |   |
|--------------|---------|
| **Type:**    | *float* |
| **Default:** | 1.0     |

## clear radius
|    |   |
|--------------|---------|
| **Type:**    | float                                                                                                                                                                                                                                  |
| **Default:** | 0.0                                                                                                                                                                                                                                    |
| **Comment:** | Shadows less than this distance from the light are ignored (disabled if \<= 0.0). For more info, please see the [user documentation for clear radius](http://mydw.dreamworks.net/display/RENDER/Clear+Radius+and+Max+Shadow+Distance). |
