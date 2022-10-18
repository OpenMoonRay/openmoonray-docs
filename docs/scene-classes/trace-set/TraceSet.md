---
title: TraceSet

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TraceSet
---
{%assign image_dir=site.data.scene-classes.trace-set.TraceSet.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.trace-set.TraceSet.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>geometries</h3>
    <p class="scene-class-type">
      <b>SceneObjectIndexable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.trace-set.TraceSet.geometries
          image_dir=image_dir
      %}
    </p>
    <h3>parts</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.trace-set.TraceSet.parts
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>