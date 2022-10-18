---
title: RodLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RodLightFilter
---
{%assign image_dir=site.data.scene-classes.light-filters.RodLightFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.light-filters.RodLightFilter.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">filter color. Scales the light within the volume. For each color channel, 0=full shadow, 1=no shadow</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.color
          image_dir=image_dir
      %}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">fades the filter effect. 0=no effect (like having no filter), 1=full effect</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.density
          image_dir=image_dir
      %}
    </p>
    <h3>depth</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">depth of the base box (before radius and edge)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.depth
          image_dir=image_dir
      %}
    </p>
    <h3>edge</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">size of transition zone from the rounded box to the outside</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.edge
          image_dir=image_dir
      %}
    </p>
    <h3>height</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">height of the base box (before radius and edge)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.height
          image_dir=image_dir
      %}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">scalar for multiplying the color. 0=black 1=color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.intensity
          image_dir=image_dir
      %}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">swap application of filter from inside the volume to outside</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.invert
          image_dir=image_dir
      %}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">transform of the filter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.node_xform
          image_dir=image_dir
      %}
    </p>
    <h3>radius</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">radius by which to expand the base box into a rounded box</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.radius
          image_dir=image_dir
      %}
    </p>
    <h3>ramp_in_distances</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">input distance for ramp control</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.ramp_in_distances
          image_dir=image_dir
      %}
    </p>
    <h3>ramp_interpolation_types</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">interpolation types for ramp control</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.ramp_interpolation_types
          image_dir=image_dir
      %}
    </p>
    <h3>ramp_out_distances</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">remapped distances for ramp control</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.ramp_out_distances
          image_dir=image_dir
      %}
    </p>
    <h3>width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">width of the base box (before radius and edge)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.width
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.RodLightFilter.on
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>