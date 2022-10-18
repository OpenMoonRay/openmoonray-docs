---
title: RaySwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RaySwitchMaterial
---
{%assign image_dir=site.data.scene-classes.materials.RaySwitchMaterial.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.materials.RaySwitchMaterial.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>camera_ray_material</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.RaySwitchMaterial.camera_ray_material
          image_dir=image_dir
      %}
    </p>
    <h3>cutout_camera_rays</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.RaySwitchMaterial.cutout_camera_rays
          image_dir=image_dir
      %}
    </p>
    <h3>default_material</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.RaySwitchMaterial.default_material
          image_dir=image_dir
      %}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.RaySwitchMaterial.extra_aovs
          image_dir=image_dir
      %}
    </p>
    <h3>indirect_diffuse_ray_material</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.RaySwitchMaterial.indirect_diffuse_ray_material
          image_dir=image_dir
      %}
    </p>
    <h3>indirect_glossy_ray_material</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.RaySwitchMaterial.indirect_glossy_ray_material
          image_dir=image_dir
      %}
    </p>
    <h3>indirect_mirror_ray_material</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.RaySwitchMaterial.indirect_mirror_ray_material
          image_dir=image_dir
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.RaySwitchMaterial.label
          image_dir=image_dir
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.RaySwitchMaterial.priority
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>