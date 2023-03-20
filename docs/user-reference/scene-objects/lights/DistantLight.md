---
title: DistantLight

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DistantLight
{%-include overview.html data=site.data.user-reference.scene-objects.lights.DistantLight-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.gallery data=site.data.user-reference.scene-objects.lights.DistantLight-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Map attributes</summary>
  <p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Per-channel contrast used in color-correcting the light's texture, if one is present. The operation mimics Nuke's ColorCorrect node's contrast function:<br>  For input &gt;  0, output = 0.18 * pow(inputCompnent/0.18, contrast).<br>  For input &lt;= 0, output = 0.18 * input * pow(1/0.18, contrast).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.contrast.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.contrast.links heading=4-%}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Per-channel gain used in tandem with a per-channel offset for color-correcting the light's texture, if one is present. This is achieved by applying the following formula for each channel:<br>  output = input * gain + offset</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.gain.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.gain.links heading=4-%}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Per-channel gamma used in color-correcting the light's texture, if one is present. This is achieved by applying the following formula for each channel:<br>  For input &gt;  0, output = pow(input, gamma)<br>  For input &lt;= 0, output = input</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.gamma.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.gamma.links heading=4-%}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Per-channel offset used in tandem with a per-channel gain for color-correcting the light's texture, if one is present. This is achieved by applying the following formula for each channel:<br>  output = input * gain + offset</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.offset.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.offset.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Per-channel saturation used in color-correcting the light's texture, if one is present. This is achieved by applying the following formula for each channel:<br>  output = lerp(luminance(inputRGB), input, saturation).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.saturation.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.saturation.links heading=4-%}
    </p>
    <h3>temperature</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Color temperature using Nuke-style T/M/I settings (T = temperature, M = magenta/green, I = intensity). This is achieved as follows:<br>The 3-channel temperature is interpreted as the vector (T,M,I). The followiong scale values are then applied to the RGB components:<br>  outputR = inputR * (pow(2,I) + M/3 - T/2)<br>  outputG = inputG * (pow(2,I) - 2*M/3<br>  outputB = inputB * (pow(2,I) + M/3 + T/2)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.temperature.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.temperature.links heading=4-%}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">File name of the texture applied to the light. If set to the empty string, no texture is applied. Any file format supported by OpenImageIO can be used. The texture is used in 2 ways - for looking up the texture value at the intersection point when a ray hits the light, and for building a lookup-table-based auxilliary data structure used for distributing light samples over the texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture.links heading=4-%}
    </p>
    <h3>texture_border_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">RGB value used when a texture lookup occurs outside the texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_border_color.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_border_color.links heading=4-%}
    </p>
    <h3>texture_coverage</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Texture scales in the u and v-directions.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_coverage.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_coverage.links heading=4-%}
    </p>
    <h3>texture_mirror_u</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether to mirror the texture in the u-direction. If set to false, the texture is repeated in the u-direction.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_mirror_u.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_mirror_u.links heading=4-%}
    </p>
    <h3>texture_mirror_v</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether to mirror the texture in the v-direction. If set to false, the texture is repeated in the v-direction.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_mirror_v.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_mirror_v.links heading=4-%}
    </p>
    <h3>texture_reps_u</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in u over the scaled texture space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_reps_u.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_reps_u.links heading=4-%}
    </p>
    <h3>texture_reps_v</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in v over the scaled texture space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_reps_v.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_reps_v.links heading=4-%}
    </p>
    <h3>texture_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Clockwise rotation angle in degrees.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_rotation.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_rotation.links heading=4-%}
    </p>
    <h3>texture_translation</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0, 0 ]
      <p class="scene-class-comments">Translation of the texture in (u,v)-space, in units of the texture size. For example, a translation of (0.25, 0.5) will translate the texture one-quarter of its width in the u-direction and one-half of its height in the v-direction.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_translation.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_translation.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>angular_extent</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.52999997139
      <p class="scene-class-comments">The angle in degrees subtended by the DistantLight's diameter.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.angular_extent.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.angular_extent.links heading=4-%}
    </p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The light's RGB values.<br>These are combined multiplicatively with the intensity and other attributes in determining the light's 3-channel radiance.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.color.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.color.links heading=4-%}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">The light's exposure value.<br>This value provides an alternative to the intensity value as a mechanism for controlling the light's overall brightness, and is inspired by the corresponding photographic term but is generalised to apply independently to each light. To calculate its effect, pow(2, exposure) is combined multiplicatively with the color and other attributes in determining the light's 3-channel radiance.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.exposure.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.exposure.links heading=4-%}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">The light's intensity.<br>This is combined multiplicatively with the color and other attributes in determining the light's 3-channel radiance.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.intensity.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.intensity.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used in light aov expressions.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.label.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.label.links heading=4-%}
    </p>
    <h3>max_shadow_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">The distance from the light beyond which a light-receiving surface will no longer receive shadows cast from that light.<br>Note that the distance is thresholded for each occlusion ray cast for this light, it is possible for a receiving point to lie at an intermediate distance such that some parts of the light are closer than the threshold distance and other parts beyond it, in which case the point will appearto be in partial shadow.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.max_shadow_distance.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.max_shadow_distance.links heading=4-%}
    </p>
    <h3>mb</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether motion-blur is active for this light. When set to true, the scene's illumination will correctly account for any blur() applied to the light's transformation matrix.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.mb.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.mb.links heading=4-%}
    </p>
    <h3>normalized</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">If set to true, a normalisation factor is applied to the light's radiance. The normalisation factor used is such that if a distant light of radiance (1,1,1) is directly overhead a Lambertian surface of colour (1,1,1), the  resulting outgoing radiance at the surface will be (1,1,1) regardless of the light's angular extent.<br>If set to false, the light's radiance is used as-is.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.normalized.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.normalized.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is switched on.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.on.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.on.links heading=4-%}
    </p>
    <h3>presence_shadows</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;force off&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;force on&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;use default&rdquo; (default)<br>
      <p class="scene-class-comments">Switch this attribute on for shadows cast from this light to correctly respect presence values. When off, surfaces with a material with presence less than 1.0 will cast opaque shadows from this light. This is an optimization - when the attribute is off, occlusion rays (fast) are used for testing for shadows. When it is on, regular rays (slower) are used, and the material's presence is evaluated to determine how much shadowing should occur. When set to "use default" it reads from the value of SceneVariable enable_presence_shadows.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.presence_shadows.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.presence_shadows.links heading=4-%}
    </p>
    <h3>ray_termination</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether the light is used for ray termination color. Ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. Such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. Any light can either be a regular light or a ray termination light (but not both). Thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. Ray termination color is only applied to non-hair transmission lobes.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.ray_termination.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.ray_termination.links heading=4-%}
    </p>
    <h3>texture_filter</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;nearest neighbor&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;bilinear&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;nearest neighbor with nearest mip&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;bilinear with nearest mip&rdquo;<br>
      <p class="scene-class-comments">The filtering mode to apply to the texture. Nearest neighbor is the cheapest filtering mode but produces a blocky result. Switch linear filtering on for a smoother result. Additionally, mip-mapping can be switched on with either nearest neighbor or linear filtering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_filter.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.texture_filter.links heading=4-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;force off&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;force on&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;use default&rdquo; (default)<br>
      <p class="scene-class-comments">Whether the light is directly visible in the scene's active camera. When set to "use default" it reads from the value of SceneVariable lights_visible_in_camera.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_in_camera.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_in_camera.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Visibility Flags attributes</summary>
  <p>
    <h3>visible_diffuse_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in diffuse reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_diffuse_reflection.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_diffuse_reflection.links heading=4-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in diffuse transmission.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_diffuse_transmission.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_diffuse_transmission.links heading=4-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in glossy reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_glossy_reflection.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_glossy_reflection.links heading=4-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in glossy transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_glossy_transmission.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_glossy_transmission.links heading=4-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in miror reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_mirror_reflection.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_mirror_reflection.links heading=4-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in miror transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_mirror_transmission.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.visible_mirror_transmission.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>light_filters</h3>
    <p class="scene-class-type">
      <b>SceneObject Vector</b>
      <br>
      default: []
      <p class="scene-class-comments">Vector of LightFilters associated with the light.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.light_filters.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.light_filters.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.DistantLight.attributes.node_xform.images data=site.data.user-reference.scene-objects.lights.DistantLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.DistantLight.attributes.node_xform.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.lights.DistantLight-%}