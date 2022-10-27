---
title: ShadowReceiverSet

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ShadowReceiverSet
{%assign image_path=site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.image_path%}
{%if site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.links-%}
---
## See Also
{%for link in site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>complement</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.attributes.complement.images.
          path=image_path
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
          images=site.data.scene-classes.shadow-receiver-set.ShadowReceiverSet.attributes.geometries.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>