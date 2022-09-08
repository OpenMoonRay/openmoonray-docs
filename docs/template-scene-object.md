---
title: Template for scene objects
# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- This template is for scene objects in general (lights, materials, cameras, render outputs, display filters, maps geometry)
     always include name of the scene object in the headline below 

     Consider grouping related attributes into their own sections

     Consider using rdl_print on the scene object to get the info on the attributes to include on the page

     Be consistent as to whether you list the default of attributes.  
-->

<!-- How do we create a 'standardized note' in a page? -->

# Name of Scene Object

<!-- Add a description of the Scene Object
Description of shader goes here

<!-- Next, create a section for class name with the major headline "Class Name" -->

## Class Name

<!-- Next, create a section for object attributes with the major headline "Attributes" -->

## List of Attributes

<!-- Add a sub-headline for a group of related attributes -->
#### Grouped attributes

<!-- describe the group of related attributes -->
E.g. these attributes control the diffuse behavior of this shader

<!-- You can display an image by adding ! and wrapping the alt text in [ ]. Then wrap the link for the image in parentheses (). -->

![](images/sd-ior-wedge.gif)

<!-- Add a sub-headline for a specific attribute -->
#### normalized

<!-- list parameters for the attribute -->

| Name    | normalized      |
|----------|-----------------|
| Type:    | bool            |
| Default: | true            |
| Comment: | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci. |

##### radius

| **Name**    | radius  |
|--------------|---------|
| **Type:**    | *float* |
| **Default:** | 1.0     |

##### clear radius

| **Name**    | clear_radius                                                                                                                                                                                                                           |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Type**    | float       |
| **Default** | 0.0   |
| **Comment:** | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. |
