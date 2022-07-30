# MeshLight

> Introduction Attributes
>
> common attributes normalized geometry parts map shader clear
>
> radius

### Introduction

> ![](media/image1.jpeg){width="5.199952974628172in"
> height="2.925in"}MeshLight conv erts a mesh geometry into a light
> source.

### Attributes

> common attributes
>
> Most of the common light attributes apply :
> [Light#Attributes](http://mydw.dreamworks.net/display/RENDER/Light#Light-Attributes).
> The only common attribute that does not apply is
> [\"texture\".](http://mydw.anim.dreamworks.com/display/MOONRAY/Light#Light-texture)
> In addition, MeshLight supports the f ollowing specialized attributes:
>
> normalized

+-----------+----------------------------------------------------------+
| >         | > normalized                                             |
| **Name:** |                                                          |
+===========+==========================================================+
| >         | > *bool*                                                 |
| **Type:** |                                                          |
+-----------+----------------------------------------------------------+
| > **D     | > true                                                   |
| efault:** |                                                          |
+-----------+----------------------------------------------------------+
| > **C     | > When this v alue is set to true, the size of the light |
| omment:** | > can be changed without                                 |
|           | >                                                        |
|           | > altering the total amount of energy cast into the      |
|           | > scene.                                                 |
|           | >                                                        |
|           | > In technical terms, non-normalized lights interpret    |
|           | > their radiance v alue as -is, whereas normalized       |
|           | > lights interpret this v alue as the f lux.             |
+-----------+----------------------------------------------------------+

> geometry

+------------+---------------------------------------------------------+
| >          | > geometry                                              |
|  **Name:** |                                                         |
+============+=========================================================+
+------------+---------------------------------------------------------+

+------------+---------------------------------------------------------+
| >          | > *SceneObject \**                                      |
|  **Type:** |                                                         |
+============+=========================================================+
| > **       | > nullptr                                               |
| Default:** |                                                         |
+------------+---------------------------------------------------------+
| > **       | > The ref erence geometry that will be converted into a |
| Comment:** | > MeshLight.                                            |
|            | >                                                       |
|            | > The geometry must be a mesh.                          |
+------------+---------------------------------------------------------+

> parts

+-----------+----------------------------------------------------------+
| >         | > parts                                                  |
| **Name:** |                                                          |
+===========+==========================================================+
| >         | > *StringVector*                                         |
| **Type:** |                                                          |
+-----------+----------------------------------------------------------+
| > **D     | > {} : empty v ector                                     |
| efault:** |                                                          |
+-----------+----------------------------------------------------------+
| > **C     | > The part names of the mesh the will be conv erted into |
| omment:** | > a light.                                               |
|           | >                                                        |
|           | > An empty v ector or empty string conv erts all parts   |
|           | > of the mesh into a light.                              |
+-----------+----------------------------------------------------------+

> map shader

+----------+-----------------------------------------------------------+
| > *      | > map_shader                                              |
| *Name:** |                                                           |
+==========+===========================================================+
| > *      | > *SceneObject \**                                        |
| *Type:** |                                                           |
+----------+-----------------------------------------------------------+
| > **De   | > nullptr                                                 |
| fault:** |                                                           |
+----------+-----------------------------------------------------------+
| > **Co   | > The MapShader network that colors the light.            |
| mment:** | >                                                         |
|          | > This f unctionally replaces the \"texture\" attribute   |
|          | > that is common to other light ty pes.                   |
+----------+-----------------------------------------------------------+

> clear radius

+-----+----------------------------------------------------------------+
| >   | > clear_radius                                                 |
| **N |                                                                |
| ame |                                                                |
| :** |                                                                |
+=====+================================================================+
| >   | > f loat                                                       |
| **T |                                                                |
| ype |                                                                |
| :** |                                                                |
+-----+----------------------------------------------------------------+
| >   | > 0.0                                                          |
| **D |                                                                |
| efa |                                                                |
| ult |                                                                |
| :** |                                                                |
+-----+----------------------------------------------------------------+
| >   | > Shadows less than this distance f rom the light are ignored  |
| **C | > (disabled if \<= 0.0). For more inf o, please see the user   |
| omm | > documentation f or clear                                     |
| ent | >                                                              |
| :** | > radius.                                                      |
+-----+----------------------------------------------------------------+

> Drop here!
