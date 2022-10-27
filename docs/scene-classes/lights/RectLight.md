---
title: RectLight

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RectLight
{%assign image_path=site.data.scene-classes.lights.RectLight.image_path%}
{%if site.data.scene-classes.lights.RectLight.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.lights.RectLight.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.lights.RectLight.links-%}
---
## See Also
{%for link in site.data.scene-classes.lights.RectLight.links-%}
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
          images=site.data.scene-classes.lights.RectLightattributes.contrast.images.
          path=image_path
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.gain.images.
          path=image_path
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.gamma.images.
          path=image_path
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.offset.images.
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.saturation.images.
          path=image_path
      %}
    </p>
    <h3>temperature</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">color temperature using Nuke-like T/M/E settings</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.temperature.images.
          path=image_path
      %}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture (formats: .exr, .tif, .jpg, etc.)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.texture.images.
          path=image_path
      %}
    </p>
    <h3>texture_border_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">RGB value used when a texture lookup occurs outside the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.texture_border_color.images.
          path=image_path
      %}
    </p>
    <h3>texture_coverage</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Scales in (u,v)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.texture_coverage.images.
          path=image_path
      %}
    </p>
    <h3>texture_mirror_u</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">true =&gt; mirror in u, false =&gt; repeat in u</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.texture_mirror_u.images.
          path=image_path
      %}
    </p>
    <h3>texture_mirror_v</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">true =&gt; mirror in v, false =&gt; repeat in v</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.texture_mirror_v.images.
          path=image_path
      %}
    </p>
    <h3>texture_reps_u</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in u over the scaled texture space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.texture_reps_u.images.
          path=image_path
      %}
    </p>
    <h3>texture_reps_v</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in v over the scaled texture space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.texture_reps_v.images.
          path=image_path
      %}
    </p>
    <h3>texture_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Clockwise rotation angle in degrees</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.texture_rotation.images.
          path=image_path
      %}
    </p>
    <h3>texture_translation</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">Translations in (u,v) expressed as fractions of the unscaled texture space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.texture_translation.images.
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
          images=site.data.scene-classes.lights.RectLightattributes.apply_scene_scale.images.
          path=image_path
      %}
    </p>
    <h3>clear_radius</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">clear radius: shadows less than this distance from the light are ignored (disabled if &lt;= 0.0)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.clear_radius.images.
          path=image_path
      %}
    </p>
    <h3>clear_radius_falloff_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">clear radius falloff distance: distance over which the shadows fall off, where shadows start to falloff at clear radius + falloff distance and disappear entirely at clear radius</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.clear_radius_falloff_distance.images.
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
          images=site.data.scene-classes.lights.RectLightattributes.clear_radius_interpolation_type.images.
          path=image_path
      %}
    </p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.color.images.
          path=image_path
      %}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.exposure.images.
          path=image_path
      %}
    </p>
    <h3>height</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.height.images.
          path=image_path
      %}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.intensity.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in light aov expressions</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.label.images.
          path=image_path
      %}
    </p>
    <h3>max_shadow_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.max_shadow_distance.images.
          path=image_path
      %}
    </p>
    <h3>mb</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Does light motion affect motion-blur?</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.mb.images.
          path=image_path
      %}
    </p>
    <h3>normalized</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.normalized.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.on.images.
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
          images=site.data.scene-classes.lights.RectLightattributes.presence_shadows.images.
          path=image_path
      %}
    </p>
    <h3>ray_termination</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Is light used for ray termination color? Ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. Such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. Any light can either be a regular light or a ray termination light (but not both). Thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. Ray termination color is only applied to non-hair transmission lobes.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.ray_termination.images.
          path=image_path
      %}
    </p>
    <h3>spread</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">directionality of light emission. 1 is completely diffuse hemisphere. 0 is parallel to normal of light.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.spread.images.
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
          images=site.data.scene-classes.lights.RectLightattributes.texture_filter.images.
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
          images=site.data.scene-classes.lights.RectLightattributes.visible_in_camera.images.
          path=image_path
      %}
    </p>
    <h3>width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.width.images.
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
          images=site.data.scene-classes.lights.RectLightattributes.visible_diffuse_reflection.images.
          path=image_path
      %}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in diffuse transmission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.visible_diffuse_transmission.images.
          path=image_path
      %}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in glossy reflection.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.visible_glossy_reflection.images.
          path=image_path
      %}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in glossy transmission (refraction).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.visible_glossy_transmission.images.
          path=image_path
      %}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in miror reflection.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.visible_mirror_reflection.images.
          path=image_path
      %}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the light is visible in miror transmission (refraction).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.visible_mirror_transmission.images.
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
          images=site.data.scene-classes.lights.RectLightattributes.light_filters.images.
          path=image_path
      %}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.node_xform.images.
          path=image_path
      %}
    </p>
    <h3>sidedness</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | regular = 0 (default)
          | reverse = 1
          | 2-sided = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.lights.RectLightattributes.sidedness.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>