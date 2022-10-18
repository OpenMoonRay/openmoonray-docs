---
title: ShadowReceiverSet

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ShadowReceiverSet
---
{%assign image_dir=site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>complement</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.complement
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>geometries</h3>
    <p class="scene-class-type">
      <b>SceneObjectIndexable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.geometries
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>