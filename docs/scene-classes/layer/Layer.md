---
title: Layer

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Layer
{%assign image_path=site.data.scene-classes.layer.Layer.images.path%}
{%if site.data.scene-classes.layer.Layer.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.layer.Layer.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.layer.Layer.links-%}
---
## See Also
{%for link in site.data.scene-classes.layer.Layer.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>displacements</h3>
    <p class="scene-class-type">
      <b>Displacement Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.images.attributes.displacements
          path=image_path
      %}
    </p>
    <h3>geometries</h3>
    <p class="scene-class-type">
      <b>SceneObjectIndexable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.images.attributes.geometries
          path=image_path
      %}
    </p>
    <h3>lightfiltersets</h3>
    <p class="scene-class-type">
      <b>Lightfilterset Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.images.attributes.lightfiltersets
          path=image_path
      %}
    </p>
    <h3>lightsets</h3>
    <p class="scene-class-type">
      <b>Lightset Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.images.attributes.lightsets
          path=image_path
      %}
    </p>
    <h3>parts</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.images.attributes.parts
          path=image_path
      %}
    </p>
    <h3>shadowreceiversets</h3>
    <p class="scene-class-type">
      <b>134217728 Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.images.attributes.shadowreceiversets
          path=image_path
      %}
    </p>
    <h3>shadowsets</h3>
    <p class="scene-class-type">
      <b>16777216 Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.images.attributes.shadowsets
          path=image_path
      %}
    </p>
    <h3>surface_shaders</h3>
    <p class="scene-class-type">
      <b>Material Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.images.attributes.surface_shaders
          path=image_path
      %}
    </p>
    <h3>volume_shaders</h3>
    <p class="scene-class-type">
      <b>Volumeshader Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.layer.Layer.images.attributes.volume_shaders
          path=image_path
      %}
    </p>
  </p>
</details>
</div>