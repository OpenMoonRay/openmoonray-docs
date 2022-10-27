---
title: EnvLight

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# EnvLight
{%assign image_path=site.data.scene-classes.lights.EnvLight.images.path%}
{%if site.data.scene-classes.lights.EnvLight.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.lights.EnvLight.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.lights.EnvLight.links-%}
---
## See Also
{%for link in site.data.scene-classes.lights.EnvLight.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Map attributes</summary>
  <p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.contrast
          path=image_path
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.gain
          path=image_path
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.gamma
          path=image_path
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.offset
          path=image_path
      %}
    </p>
    <h3>sample_upper_hemisphere_only</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.sample_upper_hemisphere_only
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.saturation
          path=image_path
      %}
    </p>
    <h3>temperature</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">color temperature using Nuke-like T/M/E settings</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.temperature
          path=image_path
      %}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture (formats: .exr, .tif, .jpg, etc.)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture
          path=image_path
      %}
    </p>
    <h3>texture_border_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">RGB value used when a texture lookup occurs outside the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture_border_color
          path=image_path
      %}
    </p>
    <h3>texture_coverage</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Scales in (u,v)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture_coverage
          path=image_path
      %}
    </p>
    <h3>texture_mirror_u</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">true =&gt; mirror in u, false =&gt; repeat in u</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture_mirror_u
          path=image_path
      %}
    </p>
    <h3>texture_mirror_v</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">true =&gt; mirror in v, false =&gt; repeat in v</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture_mirror_v
          path=image_path
      %}
    </p>
    <h3>texture_reps_u</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in u over the scaled texture space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture_reps_u
          path=image_path
      %}
    </p>
    <h3>texture_reps_v</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in v over the scaled texture space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture_reps_v
          path=image_path
      %}
    </p>
    <h3>texture_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Clockwise rotation angle in degrees</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture_rotation
          path=image_path
      %}
    </p>
    <h3>texture_translation</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">Translations in (u,v) expressed as fractions of the unscaled texture space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture_translation
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.color
          path=image_path
      %}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.exposure
          path=image_path
      %}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.intensity
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in light aov expressions</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.label
          path=image_path
      %}
    </p>
    <h3>max_shadow_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.max_shadow_distance
          path=image_path
      %}
    </p>
    <h3>mb</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Does light motion affect motion-blur?</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.mb
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.on
          path=image_path
      %}
    </p>
    <h3>presence_shadows</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | force off = 0
          | force on = 1
          | use default = 2 (default)
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.presence_shadows
          path=image_path
      %}
    </p>
    <h3>ray_termination</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Is light used for ray termination color? Ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. Such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. Any light can either be a regular light or a ray termination light (but not both). Thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. Ray termination color is only applied to non-hair transmission lobes.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.ray_termination
          path=image_path
      %}
    </p>
    <h3>texture_filter</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | nearest neighbor = 0 (default)
          | bilinear = 1
          | nearest neighbor with nearest mip = 2
          | bilinear with nearest mip = 3
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.texture_filter
          path=image_path
      %}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | force off = 0
          | force on = 1
          | use default = 2 (default)
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.visible_in_camera
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Visibility Flags attributes</summary>
  <p>
    <h3>visible_diffuse_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in diffuse reflection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.visible_diffuse_reflection
          path=image_path
      %}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in diffuse transmission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.visible_diffuse_transmission
          path=image_path
      %}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in glossy reflection.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.visible_glossy_reflection
          path=image_path
      %}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in glossy transmission (refraction).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.visible_glossy_transmission
          path=image_path
      %}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in miror reflection.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.visible_mirror_reflection
          path=image_path
      %}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in miror transmission (refraction).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.visible_mirror_transmission
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>light_filters</h3>
    <p class="scene-class-type">
      <b>Object Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.light_filters
          path=image_path
      %}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.EnvLight.images.attributes.node_xform
          path=image_path
      %}
    </p>
  </p>
</details>
</div>