---
title: SpotLight

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SpotLight
{%assign image_path=site.data.scene-classes.lights.SpotLight.image_path%}
{%if site.data.scene-classes.lights.SpotLight.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.lights.SpotLight.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.lights.SpotLight.links-%}
---
## See Also
{%for link in site.data.scene-classes.lights.SpotLight.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Cone attributes</summary>
  <p>
    <h3>aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.aspect_ratio.images.
          path=image_path
      %}
    </p>
    <h3>focal_plane_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 10000000000.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.focal_plane_distance.images.
          path=image_path
      %}
    </p>
    <h3>inner_cone_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.inner_cone_angle.images.
          path=image_path
      %}
    </p>
    <h3>lens_radius</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.lens_radius.images.
          path=image_path
      %}
    </p>
    <h3>outer_cone_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 60.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.outer_cone_angle.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Falloff attributes</summary>
  <p>
    <h3>angle_falloff_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0
          | linear = 1
          | ease in = 2
          | ease out = 3
          | ease in/out = 4 (default)
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.angle_falloff_type.images.
          path=image_path
      %}
    </p>
    <h3>black_level</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0010000000475
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.black_level.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Map attributes</summary>
  <p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.contrast.images.
          path=image_path
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.gain.images.
          path=image_path
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.gamma.images.
          path=image_path
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.offset.images.
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.saturation.images.
          path=image_path
      %}
    </p>
    <h3>temperature</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">color temperature using Nuke-like T/M/E settings</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.temperature.images.
          path=image_path
      %}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture (formats: .exr, .tif, .jpg, etc.)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.texture.images.
          path=image_path
      %}
    </p>
    <h3>texture_border_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">RGB value used when a texture lookup occurs outside the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.texture_border_color.images.
          path=image_path
      %}
    </p>
    <h3>texture_coverage</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Scales in (u,v)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.texture_coverage.images.
          path=image_path
      %}
    </p>
    <h3>texture_mirror_u</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">true =&gt; mirror in u, false =&gt; repeat in u</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.texture_mirror_u.images.
          path=image_path
      %}
    </p>
    <h3>texture_mirror_v</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">true =&gt; mirror in v, false =&gt; repeat in v</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.texture_mirror_v.images.
          path=image_path
      %}
    </p>
    <h3>texture_reps_u</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in u over the scaled texture space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.texture_reps_u.images.
          path=image_path
      %}
    </p>
    <h3>texture_reps_v</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in v over the scaled texture space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.texture_reps_v.images.
          path=image_path
      %}
    </p>
    <h3>texture_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Clockwise rotation angle in degrees</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.texture_rotation.images.
          path=image_path
      %}
    </p>
    <h3>texture_translation</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">Translations in (u,v) expressed as fractions of the unscaled texture space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.texture_translation.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>apply_scene_scale</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">apply scene scale variable when normalized</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.apply_scene_scale.images.
          path=image_path
      %}
    </p>
    <h3>clear_radius</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">clear radius: shadows less than this distance from the light are ignored (disabled if &lt;= 0.0)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.clear_radius.images.
          path=image_path
      %}
    </p>
    <h3>clear_radius_falloff_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">clear radius falloff distance: distance over which the shadows fall off, where shadows start to falloff at clear radius + falloff distance and disappear entirely at clear radius</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.clear_radius_falloff_distance.images.
          path=image_path
      %}
    </p>
    <h3>clear_radius_interpolation_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | linear = 0 (default)
          | exponential_up = 1
          | exponential_down = 2
          | smoothstep = 3
      <p class="scene-class-comments">clear radius interpolation: interpolation type to use for the clear radius shadow falloff</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.clear_radius_interpolation_type.images.
          path=image_path
      %}
    </p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.color.images.
          path=image_path
      %}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.exposure.images.
          path=image_path
      %}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.intensity.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in light aov expressions</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.label.images.
          path=image_path
      %}
    </p>
    <h3>max_shadow_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.max_shadow_distance.images.
          path=image_path
      %}
    </p>
    <h3>mb</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Does light motion affect motion-blur?</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.mb.images.
          path=image_path
      %}
    </p>
    <h3>normalized</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.normalized.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.on.images.
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
          images=site.data.scene-classes.lights.SpotLightattributes.presence_shadows.images.
          path=image_path
      %}
    </p>
    <h3>ray_termination</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Is light used for ray termination color? Ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. Such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. Any light can either be a regular light or a ray termination light (but not both). Thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. Ray termination color is only applied to non-hair transmission lobes.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.ray_termination.images.
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
          images=site.data.scene-classes.lights.SpotLightattributes.texture_filter.images.
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
          images=site.data.scene-classes.lights.SpotLightattributes.visible_in_camera.images.
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
          images=site.data.scene-classes.lights.SpotLightattributes.visible_diffuse_reflection.images.
          path=image_path
      %}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in diffuse transmission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.visible_diffuse_transmission.images.
          path=image_path
      %}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in glossy reflection.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.visible_glossy_reflection.images.
          path=image_path
      %}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in glossy transmission (refraction).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.visible_glossy_transmission.images.
          path=image_path
      %}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in miror reflection.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.visible_mirror_reflection.images.
          path=image_path
      %}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in miror transmission (refraction).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.visible_mirror_transmission.images.
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
          images=site.data.scene-classes.lights.SpotLightattributes.light_filters.images.
          path=image_path
      %}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.SpotLightattributes.node_xform.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>