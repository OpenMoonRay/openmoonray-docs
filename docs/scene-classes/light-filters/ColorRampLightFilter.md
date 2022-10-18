---
title: ColorRampLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorRampLightFilter
---
{%assign image_dir=site.data.scene-classes.light-filters.ColorRampLightFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.light-filters.ColorRampLightFilter.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>begin_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.begin_distance
          image_dir=image_dir
      %}
    </p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      default: [[ 1, 1, 1 ], [ 0, 0, 0 ]]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.colors
          image_dir=image_dir
      %}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.density
          image_dir=image_dir
      %}
    </p>
    <h3>distances</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.distances
          image_dir=image_dir
      %}
    </p>
    <h3>end_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.end_distance
          image_dir=image_dir
      %}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.intensity
          image_dir=image_dir
      %}
    </p>
    <h3>interpolation_types</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.interpolation_types
          image_dir=image_dir
      %}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | radial = 0 (default)
          | directional = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.mode
          image_dir=image_dir
      %}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.node_xform
          image_dir=image_dir
      %}
    </p>
    <h3>wrap_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | extend = 0 (default)
          | mirror = 1
      <p class="scene-class-comments">For directional filter mode where filter uses distance along -Z axis.  Extend: f(z) = f(0) for z &gt; 0.  Mirror: f(z) = f(-z).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.wrap_mode
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
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.on
          image_dir=image_dir
      %}
    </p>
    <h3>use_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.ColorRampLightFilter.use_xform
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>