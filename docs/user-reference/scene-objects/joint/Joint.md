---
title: Joint

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Joint
{%-include overview.html data=site.data.user-reference.scene-objects.joint.Joint-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.joint.Joint.gallery data=site.data.user-reference.scene-objects.joint.Joint-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.joint.Joint.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.joint.Joint.attributes.node_xform.images data=site.data.user-reference.scene-objects.joint.Joint-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.joint.Joint.attributes.node_xform.videos data=site.data.user-reference.scene-objects.joint.Joint-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.joint.Joint.attributes.node_xform.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.joint.Joint-%}