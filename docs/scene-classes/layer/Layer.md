---
title: Layer

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Layer
---
{%assign image_dir=site.data.scene-classes.layer.Layer.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.layer.Layer.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>displacements</h3>
    <p class="scene-class-type">
      <b>Displacement Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.displacements
          image_dir=image_dir
      %}
    </p>
    <h3>geometries</h3>
    <p class="scene-class-type">
      <b>SceneObjectIndexable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.geometries
          image_dir=image_dir
      %}
    </p>
    <h3>lightfiltersets</h3>
    <p class="scene-class-type">
      <b>Lightfilterset Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.lightfiltersets
          image_dir=image_dir
      %}
    </p>
    <h3>lightsets</h3>
    <p class="scene-class-type">
      <b>Lightset Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.lightsets
          image_dir=image_dir
      %}
    </p>
    <h3>parts</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.parts
          image_dir=image_dir
      %}
    </p>
    <h3>shadowreceiversets</h3>
    <p class="scene-class-type">
      <b>134217728 Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.shadowreceiversets
          image_dir=image_dir
      %}
    </p>
    <h3>shadowsets</h3>
    <p class="scene-class-type">
      <b>16777216 Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.shadowsets
          image_dir=image_dir
      %}
    </p>
    <h3>surface_shaders</h3>
    <p class="scene-class-type">
      <b>Material Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.surface_shaders
          image_dir=image_dir
      %}
    </p>
    <h3>volume_shaders</h3>
    <p class="scene-class-type">
      <b>Volumeshader Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.volume_shaders
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>