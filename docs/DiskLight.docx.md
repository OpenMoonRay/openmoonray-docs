# DiskLight

> Introduction Attributes
>
> common attributes normalized radius clear
>
> radius

### Introduction

> DiskLight is a light in the shape of a disk.
>
> ![](media/image1.jpeg){width="5.2170220909886265in" height="2.925in"}

### Attributes

> common attributes
>
> All of the common light attributes apply :
> [Light#Attributes](http://mydw.dreamworks.net/display/RENDER/Light#Light-Attributes)
> In addition, DiskLight supports the f ollowing specialized attributes:
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
|           | > their radiance v alue as-is, whereas normalized lights |
|           | > interpret this v alue as the f lux.                    |
+-----------+----------------------------------------------------------+

> radius

+------------------------------------------+---------------------------+
| > **Name:**                              | > radius                  |
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
| #   | > Shadows less than this distance f rom t he light are ignored |
|  En | > (disabled if \<= 0.0). For more inf o, please see the user   |
| vLi | > documentation f or clear                                     |
| ght | >                                                              |
|     | > radius.                                                      |
| >   |                                                                |
| **C |                                                                |
| omm |                                                                |
| ent |                                                                |
| :** |                                                                |
+-----+----------------------------------------------------------------+

> Drop here!
>
> Introduction
>
> Attributes common attributes sample upper hemisphere only

### Introduction

> ![](media/image2.jpeg){width="5.204148075240595in"
> height="2.925in"}Env ironment Light is a hemispherical or spherical
> light that surrounds the entire scene.

### Attributes

> common attributes
>
> All of the common light attributes apply :
> [Light#Attributes](http://mydw.dreamworks.net/display/RENDER/Light#Light-Attributes)
> In addition, Env Light supports the f ollowing specialized attributes:
>
> sample upper hemisphere only

+------------------+---------------------------------------------------+
| > **Name:**      | > sample_upper_hemisphere_only                    |
+==================+===================================================+
| > **Type:**      | > *bool*                                          |
+------------------+---------------------------------------------------+
| > **Default:**   | > f alse                                          |
+------------------+---------------------------------------------------+
