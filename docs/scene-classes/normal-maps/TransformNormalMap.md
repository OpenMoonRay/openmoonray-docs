---
title: TransformNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TransformNormalMap
{%assign image_path=site.data.scene-classes.normal-maps.TransformNormalMap.image_path%}
{%if site.data.scene-classes.normal-maps.TransformNormalMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.normal-maps.TransformNormalMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.normal-maps.TransformNormalMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.normal-maps.TransformNormalMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 1 ]
      <p class="scene-class-comments">input normal in either tangent or render space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.TransformNormalMapattributes.input_normal.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>decode_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">decode the input normal if it's in tangent space [0,1] -&gt; [-1,1]</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.TransformNormalMapattributes.decode_input_normal.images.
          path=image_path
      %}
    </p>
    <h3>transform</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | tangent to render = 0 (default)
          | render to tangent = 1
      <p class="scene-class-comments">transform to apply to the normals</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.TransformNormalMapattributes.transform.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>