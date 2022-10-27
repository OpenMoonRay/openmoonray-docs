---
title: Joint

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Joint
{%assign image_path=site.data.scene-classes.joint.Joint.image_path%}
{%if site.data.scene-classes.joint.Joint.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.joint.Joint.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.joint.Joint.links-%}
---
## See Also
{%for link in site.data.scene-classes.joint.Joint.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.joint.Jointattributes.node_xform.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>