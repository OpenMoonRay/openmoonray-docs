---
title: ExtraAovMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ExtraAovMap
{%assign image_path=site.data.scene-classes.maps.ExtraAovMap.image_path%}
{%if site.data.scene-classes.maps.ExtraAovMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ExtraAovMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ExtraAovMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ExtraAovMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bind the root of a map shader network that you want evaluated as an extra aov</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ExtraAovMap.attributes.color.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Sets the LPE label that is used for the extra aov</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ExtraAovMap.attributes.label.images.
          path=image_path
      %}
    </p>
    <h3>post_scatter</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">If true, accumulate this aov when scattering off the surface as an indirect ray (after the LPE scatter transition event, after path throughput multiplication), rather than when the surface is first intersected.  The purpose of this setting is to efficiently capture information from all rays that leave a surface that could potentially intersect and trigger aov evaluation on other surfaces.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ExtraAovMap.attributes.post_scatter.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>