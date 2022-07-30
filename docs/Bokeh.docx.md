# Bokeh

### Introduction

> Bokeh ref ers to set of aesthetic qualities of out -of -f ocus
> portions of an image. Bokeh primarily exists as a consequence of a
> depth of f ield, the camera lens conf iguration, and manuf acturing
> def ects of the lens.
>
> One of the major attributes of Bokeh is the shape of out -of -f ocus
> specular highlights. When out of f ocus, points of light are not f
> ocused to a precise point at the image plane, which cause them to take
> the f orm of the iris of a camera. This quality is largely dependent
> on the lens setting when a photograph is taken. A photographer can
> manipulate those settings, so that instead of circles, they \'re able
> to render a distinct regular po ly gon. This poly gon is the shape of
> the iris of the camera; the shape is determined by how many blades the
> lens is comprised of . A photographer may also use l ens cov ers that
> can create shapes that are not possible as an iris shape. Below are
> real examples of this ef f ect.

+----------------------------------------------------+-----------------+
| > **Circular**                                     |                 |
+====================================================+=================+
|                                                    |                 |
+----------------------------------------------------+-----------------+

> There are other f eatures such as spherical aberration, chromatic
> aberration, optical v ignetting, and astigmatism that all of manuf
> acturing def ects of lens that could also be used or manipulated f or
> an artistic purpose.

### Moonray

> In the upcoming release of Moonray , these three modes will be av
> ailable f or use in a similar f ashion.
>
> Custom Shapes

##### Disk Mode

> Disk mode is the def ault depth of f ield response that has been in
> Moonray f or as long as depth of f ield has been in Moonray . The code
> that makes this
>
> ef f ect possible has been mov ed f rom its prev ious location into a
> new location with the other modes, but is largely still f unc tionally
> the same. For this mode, enabling Bokeh is optional, but it will prev
> ent y ou f rom using other f eatures of Bokeh like spherical
> aberration, if y ou want to use it.

+-------+--------------------------------------------------------------+
| > **M | > **Circular**                                               |
| ode** |                                                              |
+=======+==============================================================+
| >     |                                                              |
| Image |                                                              |
+-------+--------------------------------------------------------------+
| >     | > Camera() {                                                 |
|  RDLA | >                                                            |
|       | > \...                                                       |
|       | >                                                            |
|       | > \[\"dof\"\] = true,                                        |
|       | >                                                            |
|       | > \[\"dof aperture\"\] = 3.2,                                |
|       | >                                                            |
|       | > \[\"dof focus distance\"\] = 28.3,                         |
|       | >                                                            |
|       | > \...                                                       |
|       | >                                                            |
|       | > }                                                          |
+-------+--------------------------------------------------------------+
| > R   | > 2m 52s                                                     |
| ender |                                                              |
| >     |                                                              |
|  Time |                                                              |
+-------+--------------------------------------------------------------+

##### Polygon Mode

> Poly gon mode is the f irst custom Bokeh pattern option. To enable
> this, y ou will enable Bokeh and prov ide a number of sides. Y ou can
> optionally prov ide an angle at which the poly gon will be rotated c
> ounterclockwise. With the number of sides, as y ou approach inf inity
> , it will conv erge to a circle. Common real camera blade conf
> igurations range between 6 and 9 blades, which is suggested f or a
> realistic ef f ect. The angle control can take any number f rom 0 to
>
> inf inity but once y ou exceed 180 degrees, it\'s unnecessary .

+-------+--------------------------------------------------------------+
| > **M | > **Polygon**                                                |
| ode** |                                                              |
+=======+==============================================================+
| >     |                                                              |
| Image |                                                              |
+-------+--------------------------------------------------------------+
| >     | > Camera() {                                                 |
|  RDLA | >                                                            |
|       | > \...                                                       |
|       | >                                                            |
|       | > \[\"dof\"\] = true,                                        |
|       | >                                                            |
|       | > \[\"dof aperture\"\] = 3.2,                                |
|       | >                                                            |
|       | > \[\"dof focus distance\"\] = 28.3,                         |
|       | >                                                            |
|       | > \[\"bokeh\"\] = true,                                      |
|       | >                                                            |
|       | > \[\"bokeh sides\"\] = 4,                                   |
+-------+--------------------------------------------------------------+

+-------+--------------------------------------------------------------+
|       | > \[\"bokeh angle\"\] = 37,                                  |
|       | >                                                            |
|       | > \...                                                       |
|       | >                                                            |
|       | > }                                                          |
+=======+==============================================================+
| > R   | > 2m 54s                                                     |
| ender |                                                              |
| >     |                                                              |
|  Time |                                                              |
+-------+--------------------------------------------------------------+

##### Image Mode

> Image mode allows y ou to use custom images as the bokeh shape. Y ou
> just need to prov ide a path to an exr f ile, where the shap e y ou
> intend on using is in white on black background. The size of the exr
> being used can v ary , experimentally 100px x 100px images work as
> well as 500px x 500px images. One thing to keep in mind with this ef f
> ect is that it is phy sically accurate in that the shape does not
> scale with how big or pro portioned the f inal image is; it is solely
> dependent on the aperture and f ocus distance.

+-------+--------------------------------------------------------------+
| > **M | > **Image**                                                  |
| ode** |                                                              |
+=======+==============================================================+
| >     |                                                              |
| Image |                                                              |
+-------+--------------------------------------------------------------+
| >     | > Camera() {                                                 |
|  RDLA | >                                                            |
|       | > \...                                                       |
|       | >                                                            |
|       | > \[\"dof\"\] = true,                                        |
|       | >                                                            |
|       | > \[\"dof aperture\"\] = 3.2,                                |
|       | >                                                            |
|       | > \[\"dof focus distance\"\] = 28.3,                         |
|       | >                                                            |
|       | > \[\"bokeh\"\] = true,                                      |
|       | >                                                            |
|       | > \[\"bokeh image\"\] = \"/usr/pic1/\.../eighth_note.exr\"   |
|       | >                                                            |
|       | > \...                                                       |
|       | >                                                            |
|       | > }                                                          |
+-------+--------------------------------------------------------------+
| > R   | > 2m 52s                                                     |
| ender |                                                              |
| >     |                                                              |
|  Time |                                                              |
+-------+--------------------------------------------------------------+

> Here are some more examples of this ef f ect with the images used
> attached.

+----------------------------------------------------+-----------------+
| > **Eighth Note**                                  |                 |
+====================================================+=================+
|                                                    |                 |
+----------------------------------------------------+-----------------+
|                                                    |                 |
+----------------------------------------------------+-----------------+

> Spherical Aberration
>
> **Warning:** This f eature has been disabled temporarily due to
> implementation concerns.
>
> Spherical aberration ref ers to an optical ef f ect when light
> entering the lens at dif f erent distances f rom the optical center
> are ref racted more than the light passing through the optical center.
> This is a manuf acturing def ect in camera lenses, but it does
> contribute to the ov erall bl ur quality . The below picture on the
> lef t shows what\'s generally happening at dif f erent points on the
> lens and the picture on the right shows the v isual resul t of it.
>
> In Moonray , we are able to achiev e this by modif y ing radiance v
> alues by weighing samples relativ e to their position. The user will
> prov ide a location v alue f rom 0 to 1, which represents the distance
> f rom the origin of the shape where the weights will be modif ied the
> most, and a st rength v alue, which should represent the general
> strength of the weights as they approach the location v alue.
>
> 3
>
> e
>
> t n

+---+----------------------------------------------------+------------+
|   | > \...                                             | > \...     |
|   | >                                                  | >          |
|   | > }                                                | > }        |
+===+====================================================+============+
+---+----------------------------------------------------+------------+

> We\'v e receiv ed f eedback f rom artists that indicate that they
> would like this f eature and others to be supported in Moonray . H
> owev er, there are some implementation concerns with this ef f ect
> that would af f ects the potential implementat ion of other ef f ects.
> This implementation modif ies radiance v alues directly , as they \'re
> calculated. This works in scalar mode, but it does not work in v
> ectorized mode. There has been some disc ussion about determining a
> better method of capturing and utilizing the weights that are
> generated. Another concern is that the current calculation assumes a
> circle which isn\'t necessarily appropriate f or poly gons or images,
> since it means that v alues that would otherwise be modif ied are not
> v isually represented since they exceed they can exceed the boundaries
> of the poly gon or image as the edge is approached. Some sort of edge
> detection is necessary f o r this to hav e the same
>
> ef f ect across modes. Finally , the current implementation lets the
> users set a clamp v alue to pr ev ent the weights f rom sky rocketing.
> This is not intuitiv e and it sets a bad precedent of letting the
> artist control the radiance v alues in such a way . The proposed
> solution would be to im plement a f orm of the calculation such that
> it integrates to 1.
