---
title: Joint

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Joint
---
{%assign image_dir=site.data.scene-classes.joint.Joint.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.joint.Joint.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.joint.Joint.node_xform
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>