# CylinderLight

> Introduction Attributes
>
> common attributes normalized radius height clear radius

### Introduction

> Cy linderLight is a light in the shape of a cy linder.
>
> ![](media/image1.jpeg){width="5.2170220909886265in" height="2.925in"}

### Attributes

> common attributes
>
> All of the common light attributes apply :
> [Light#Attributes](http://mydw.dreamworks.net/display/RENDER/Light#Light-Attributes)
> In addition, Cy linderLight supports the f ollowing specialized
> attributes:
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

> radius

+------------------------------------------+---------------------------+
| > **Name:**                              | > radius                  |
+==========================================+===========================+
| > **Type:**                              | > *float*                 |
+------------------------------------------+---------------------------+
| > **Default:**                           | > 1.0                     |
+------------------------------------------+---------------------------+

> height

+------------------------------------------+---------------------------+
| > **Name:**                              | > height                  |
+==========================================+===========================+
| > **Type:**                              | > *float*                 |
+------------------------------------------+---------------------------+
| > **Default:**                           | > 1.0                     |
+------------------------------------------+---------------------------+

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
