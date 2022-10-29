---
title: Bokeh

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Bokeh
## This page needs to be rebuilt
---

*Bokeh* refers to set of aesthetic qualities of out-of-focus portions of
an image. Bokeh primarily exists as a consequence of a depth of field,
the camera lens configuration, and manufacturing defects of the lens. 

One of the major attributes of Bokeh is the shape of out-of-focus
specular highlights. When out of focus, points of light are not focused
to a precise point at the image plane, which cause them to take the form
of the iris of a camera. This quality is largely dependent on the lens
setting when a photograph is taken. A photographer can manipulate those
settings, so that instead of circles, they\'re able to render a distinct
regular polygon. This polygon is the shape of the iris of the camera;
the shape is determined by how many blades the lens is comprised of. A
photographer may also use lens covers that can create shapes that are
not possible as an iris shape. Below are real examples of this effect.

  **Circular** | **Polygon** | Arbitrary Shape
  -----------|  ----------------------- | -----------------------
  [image]  | [image]  | [image]  | 

There are other features such as spherical aberration, chromatic
aberration, optical vignetting, and astigmatism that all of
manufacturing defects of lens that could also be used or manipulated for
an artistic purpose.

## Moonray

In the upcoming release of Moonray, these three modes will be available
for use in a similar fashion. 

### Custom Shapes

### Disk Mode

Disk mode is the default depth of field response that has been in
Moonray for as long as depth of field has been in Moonray. The code that
makes this effect possible has been moved from its previous location
into a new location with the other modes, but is largely still
functionally the same. For this mode, enabling Bokeh is optional, but it
will prevent you from using other features of Bokeh like spherical
aberration, if you want to use it. 

 **Mode** | **Circular**
 ------------ | ---------
Image | missing image!
RDLA     | `Camera() {`<br>`...`<br>`["dof"] = true,`<br>`["dof aperture"] = 3.2,`<br>`["dof focus distance"] = 28.3,`<br>`...`<br>`}`
Render Time | 2m 52s                                                    |


###  Polygon Mode

Polygon mode is the first custom Bokeh pattern option. To enable this,
you will enable Bokeh and provide a number of sides. You can optionally
provide an angle at which the polygon will be rotated counterclockwise.
With the number of sides, as you approach infinity, it will converge to
a circle. Common real camera blade configurations range between 6 and 9
blades, which is suggested for a realistic effect. The angle control can
take any number from 0 to 180 degrees.

**Mode** | **Polygon**
---------- | ----------
Image    | missing image
RDLA |	`Camera() {`<br>`...`<br>`["dof"] = true,`<br>`["dof aperture"] = 3.2,`<br>`["dof focus distance"] = 28.3,`<br>`["bokeh"] = true,`<br>`["bokeh sides"] = 4,`<br>`["bokeh angle"] = 37,`<br>`...`<br>`}`

### Image Mode

Image mode allows you to use custom images as the bokeh shape. You just
need to provide a path to an exr file, where the shape you intend on
using is in white on black background. The size of the exr being used
can vary, experimentally 100px x 100px images work as well as 500px x
500px images. One thing to keep in mind with this effect is that it is
physically accurate in that the shape does not scale with how big or
proportioned the final image is; it is solely dependent on the aperture
and focus distance. 

**Mode** | **Polygon**
---------- | ----------
Image    | missing image
RDLA     | `Camera() {`<BR>`...`<br>`["dof"] = true,`<BR>`["dof aperture"] = 3.2,`<BR>`["dof focus distance"] = 28.3,`<BR>`["bokeh"] = true,`<BR>`["bokeh image"] = "/usr/pic1/.../eighth_note.exr"`<BR>`...`<BR>`}`
Render Time | 2m 52s

Here are some more examples of this effect with the images used
attached.

Eighth Note	| Hollow Heart|	Star
------------ | --------- | -------
image   |   image |  image

## Spherical Aberration

**Warning:** This feature has been disabled temporarily due to
implementation concerns. 

Spherical aberration refers to an optical effect when light entering the
lens at different distances from the optical center are refracted more
than the light passing through the optical center. This is a
manufacturing defect in camera lenses, but it does contribute to the
overall blur quality. The below picture on the left shows what\'s
generally happening at different points on the lens and the picture on
the right shows the visual result of it. 

ee | 455
------------ | --------
image   |   image

In Moonray, we are able to achieve this by modifying radiance values by
weighing samples relative to their position. The user will provide a
location value from 0 to 1, which represents the distance from the
origin of the shape where the weights will be modified the most, and a
strength value, which should represent the general strength of the
weights as they approach the location value. 

Mode	| Over-Corrected| Under-Corrected
---- | ---------------- | -----------
image   |image   |image  
RDLA    | `Camera() {`<br>`...`<br>`["dof"] = true,`<br>`["dof aperture"] = 3.2,`<br>`["dof focus distance"] = 28.3,`<br>`["bokeh"] = true,`<br>`["bokeh weight location"] = 0.9,`<br>`["bokeh weight strength"] = 0.009,`<br>`...`<br>`}` | `Camera() {`<br>`...`<br>`["dof"] = true,`<br>`["dof aperture"] = 3.2,`<br>`["dof focus distance"] = 28.3,`<br>`["bokeh"] = true,`<br>`["bokeh weight location"] = 0.1,`<br>`["bokeh weight strength"] = 0.009,`<br>`...`<br>`}`

We\'ve received feedback from artists that indicate that they would like
this feature and others to be supported in Moonray. However, there are
some implementation concerns with this effect that would affects the
potential implementation of other effects. This implementation modifies
radiance values directly, as they\'re calculated. This works in scalar
mode, but it does not work in vectorized mode. There has been some
discussion about determining a better method of capturing and utilizing
the weights that are generated. Another concern is that the current
calculation assumes a circle which isn\'t necessarily appropriate for
polygons or images, since it means that values that would otherwise be
modified are not visually represented since they exceed they can exceed
the boundaries of the polygon or image as the edge is approached. Some
sort of edge detection is necessary for this to have the same effect
across modes. Finally, the current implementation lets the users set a
clamp value to prevent the weights from skyrocketing. This is not
intuitive and it sets a bad precedent of letting the artist control the
radiance values in such a way. The proposed solution would be to
implement a form of the calculation such that it integrates to 1. 
