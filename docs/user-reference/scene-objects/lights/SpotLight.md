---
title: SpotLight

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SpotLight
{%-include overview.html data=site.data.user-reference.scene-objects.lights.SpotLight-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.gallery data=site.data.user-reference.scene-objects.lights.SpotLight-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Cone attributes</summary>
  <p>
    <h3>aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">The aspect ratio of the lens - its local y dimension divided by its local x dimension. values other than 1.0 will give the lens a non-circular elliptical shape.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.aspect_ratio.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.aspect_ratio.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.aspect_ratio.links heading=4-%}
    </p>
    <h3>focal_plane_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10000000000.0
      <p class="scene-class-comments">The distance from the spotlight's position, measured in the direction the light is pointing, at which the projected image will be in focus.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.focal_plane_distance.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.focal_plane_distance.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.focal_plane_distance.links heading=4-%}
    </p>
    <h3>inner_cone_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 30.0
      <p class="scene-class-comments">The apex angle of the bright inner cone of the light emitted by the spotlight. full illumination takes place inside this region. this is a full angle, measured from one side to the other. there is a falloff function applied between the outer and inner cones - see the angle_falloff_type attribute.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.inner_cone_angle.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.inner_cone_angle.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.inner_cone_angle.links heading=4-%}
    </p>
    <h3>lens_radius</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">The radius of the spotlight's lens (when the aspect ratio is 1.0, so that the lens is circular).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.lens_radius.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.lens_radius.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.lens_radius.links heading=4-%}
    </p>
    <h3>outer_cone_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 60.0
      <p class="scene-class-comments">The apex angle of the bounding cone of the light emitted by the spotlight. no illumination takes placeoutside this angle. this is a full angle, measured from one side to the other. there is a falloff function applied between the outer and inner cones - see the angle_falloff_type attribute.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.outer_cone_angle.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.outer_cone_angle.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.outer_cone_angle.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Falloff attributes</summary>
  <p>
    <h3>angle_falloff_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;off&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;linear&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;ease in&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;ease out&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;ease in/out&rdquo; (default)<br>
      <p class="scene-class-comments">The falloff function applied between the outer and inner cones. to calculate this, the angle from the cone's axis to the the point being illuminated is measured as seen from the spotlight's position. this angle is converted into a fractional value representing the fraction from the outer cone angle to the inner cone angle, clamped to the range [0,1]. the resulting value is then fed into one of the following user-selectable functions to determine the final 0-1 scaling value to be applied to thelight's radiance: <br>  0 (off)         - no fallof, a step function at the outer cone boundary is applied<br>  1 (linear)      - a linear ramp, i.e. the fractional parameter is applied as-is<br>  2 (ease in)     - a quadratic ramp with zero gradient at the start point (outer cone)<br>  3 (ease out)    - a quadratic ramp with zero gradient at the end point (inner cone)<br>  4 (ease in/out) - a cubic ramp with zero gradient at both ends (outer and inner cone)<br></p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.angle_falloff_type.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.angle_falloff_type.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.angle_falloff_type.links heading=4-%}
    </p>
    <h3>black_level</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0010000000475
      <p class="scene-class-comments">The radiance used for rendering the spotlight lens as seen through the camera via a primary ray, when the true computed radiance would otherwise be black. this is simply a convenience feature to make the spotlight lens visible in the camera view.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.black_level.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.black_level.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.black_level.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Map attributes</summary>
  <p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Per-channel contrast used in color-correcting the light's texture, if one is present. the operation mimics nuke's colorcorrect node's contrast function:<br>  for input &gt;  0, output = 0.18 * pow(inputcompnent/0.18, contrast).<br>  for input &lt;= 0, output = 0.18 * input * pow(1/0.18, contrast).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.contrast.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.contrast.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.contrast.links heading=4-%}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Per-channel gain used in tandem with a per-channel offset for color-correcting the light's texture, if one is present. this is achieved by applying the following formula for each channel:<br>  output = input * gain + offset</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.gain.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.gain.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.gain.links heading=4-%}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Per-channel gamma used in color-correcting the light's texture, if one is present. this is achieved by applying the following formula for each channel:<br>  for input &gt;  0, output = pow(input, gamma)<br>  for input &lt;= 0, output = input</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.gamma.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.gamma.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.gamma.links heading=4-%}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Per-channel offset used in tandem with a per-channel gain for color-correcting the light's texture, if one is present. this is achieved by applying the following formula for each channel:<br>  output = input * gain + offset</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.offset.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.offset.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.offset.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Per-channel saturation used in color-correcting the light's texture, if one is present. this is achieved by applying the following formula for each channel:<br>  output = lerp(luminance(inputrgb), input, saturation).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.saturation.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.saturation.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.saturation.links heading=4-%}
    </p>
    <h3>temperature</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Color temperature using nuke-style t/m/i settings (t = temperature, m = magenta/green, i = intensity). this is achieved as follows:<br>the 3-channel temperature is interpreted as the vector (t,m,i). the followiong scale values are then applied to the rgb components:<br>  outputr = inputr * (pow(2,i) + m/3 - t/2)<br>  outputg = inputg * (pow(2,i) - 2*m/3<br>  outputb = inputb * (pow(2,i) + m/3 + t/2)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.temperature.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.temperature.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.temperature.links heading=4-%}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">File name of the texture applied to the light. if set to the empty string, no texture is applied. any file format supported by openimageio can be used. the texture is used in 2 ways - for looking up the texture value at the intersection point when a ray hits the light, and for building a lookup-table-based auxilliary data structure used for distributing light samples over the texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture.links heading=4-%}
    </p>
    <h3>texture_border_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Rgb value used when a texture lookup occurs outside the texture.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_border_color.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_border_color.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_border_color.links heading=4-%}
    </p>
    <h3>texture_coverage</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Texture scales in the u and v-directions.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_coverage.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_coverage.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_coverage.links heading=4-%}
    </p>
    <h3>texture_mirror_u</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether to mirror the texture in the u-direction. if set to false, the texture is repeated in the u-direction.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_mirror_u.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_mirror_u.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_mirror_u.links heading=4-%}
    </p>
    <h3>texture_mirror_v</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether to mirror the texture in the v-direction. if set to false, the texture is repeated in the v-direction.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_mirror_v.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_mirror_v.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_mirror_v.links heading=4-%}
    </p>
    <h3>texture_reps_u</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in u over the scaled texture space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_reps_u.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_reps_u.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_reps_u.links heading=4-%}
    </p>
    <h3>texture_reps_v</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Number of times texture repeats in v over the scaled texture space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_reps_v.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_reps_v.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_reps_v.links heading=4-%}
    </p>
    <h3>texture_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Clockwise rotation angle in degrees.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_rotation.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_rotation.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_rotation.links heading=4-%}
    </p>
    <h3>texture_translation</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0, 0 ]
      <p class="scene-class-comments">Translation of the texture in (u,v)-space, in units of the texture size. for example, a translation of (0.25, 0.5) will translate the texture one-quarter of its width in the u-direction and one-half of its height in the v-direction.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_translation.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_translation.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_translation.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>apply_scene_scale</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether to apply scene scale variable when normalized.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.apply_scene_scale.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.apply_scene_scale.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.apply_scene_scale.links heading=4-%}
    </p>
    <h3>clear_radius</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Shadows less than this distance from the light are ignored. setting this value to 0.0 or less effectively disables this feature.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.clear_radius.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.clear_radius.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.clear_radius.links heading=4-%}
    </p>
    <h3>clear_radius_falloff_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Distance over which the shadows fall off. shadows are fully visible at a distance clear_radius + clear_radius_falloff_distance from the light, and fully invisble at a distance clear_radius from the light.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.clear_radius_falloff_distance.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.clear_radius_falloff_distance.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.clear_radius_falloff_distance.links heading=4-%}
    </p>
    <h3>clear_radius_interpolation_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;linear&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;exponential_up&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;exponential_down&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;smoothstep&rdquo;<br>
      <p class="scene-class-comments">Interpolation type to use for the clear radius shadow falloff.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.clear_radius_interpolation_type.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.clear_radius_interpolation_type.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.clear_radius_interpolation_type.links heading=4-%}
    </p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The light's rgb values.<br>these are combined multiplicatively with the intensity and other attributes in determining the light's 3-channel radiance.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.color.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.color.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.color.links heading=4-%}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">The light's exposure value.<br>this value provides an alternative to the intensity value as a mechanism for controlling the light's overall brightness, and is inspired by the corresponding photographic term but is generalised to apply independently to each light. to calculate its effect, pow(2, exposure) is combined multiplicatively with the color and other attributes in determining the light's 3-channel radiance.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.exposure.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.exposure.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.exposure.links heading=4-%}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">The light's intensity.<br>this is combined multiplicatively with the color and other attributes in determining the light's 3-channel radiance.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.intensity.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.intensity.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.intensity.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used in light aov expressions.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.label.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.label.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.label.links heading=4-%}
    </p>
    <h3>max_shadow_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">The distance from the light beyond which a light-receiving surface will no longer receive shadows cast from that light.<br>note that the distance is thresholded for each occlusion ray cast for this light, it is possible for a receiving point to lie at an intermediate distance such that some parts of the light are closer than the threshold distance and other parts beyond it, in which case the point will appearto be in partial shadow.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.max_shadow_distance.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.max_shadow_distance.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.max_shadow_distance.links heading=4-%}
    </p>
    <h3>mb</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether motion-blur is active for this light. when set to true, the scene's illumination will correctly account for any blur() applied to the light's transformation matrix.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.mb.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.mb.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.mb.links heading=4-%}
    </p>
    <h3>normalized</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">When set to true, the size of the light can be changed without altering the amount of total energy cast into the scene. this is achieved via scaling the light's radiance by the reciprocal of its surface area. when set to false, the radiance is used as-is, regardless of surface area.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.normalized.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.normalized.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.normalized.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is switched on.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.on.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.on.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.on.links heading=4-%}
    </p>
    <h3>presence_shadows</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;force off&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;force on&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;use default&rdquo; (default)<br>
      <p class="scene-class-comments">Switch this attribute on for shadows cast from this light to correctly respect presence values. when off, surfaces with a material with presence less than 1.0 will cast opaque shadows from this light. this is an optimization - when the attribute is off, occlusion rays (fast) are used for testing for shadows. when it is on, regular rays (slower) are used, and the material's presence is evaluated to determine how much shadowing should occur. when set to "use default" it reads from the value of scenevariable enable_presence_shadows.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.presence_shadows.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.presence_shadows.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.presence_shadows.links heading=4-%}
    </p>
    <h3>ray_termination</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether the light is used for ray termination color. ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. any light can either be a regular light or a ray termination light (but not both). thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. ray termination color is only applied to non-hair transmission lobes.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.ray_termination.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.ray_termination.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.ray_termination.links heading=4-%}
    </p>
    <h3>texture_filter</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;nearest neighbor&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;bilinear&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;nearest neighbor with nearest mip&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;bilinear with nearest mip&rdquo;<br>
      <p class="scene-class-comments">The filtering mode to apply to the texture. nearest neighbor is the cheapest filtering mode but produces a blocky result. switch linear filtering on for a smoother result. additionally, mip-mapping can be switched on with either nearest neighbor or linear filtering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_filter.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_filter.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.texture_filter.links heading=4-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;force off&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;force on&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;use default&rdquo; (default)<br>
      <p class="scene-class-comments">Whether the light is directly visible in the scene's active camera. when set to "use default" it reads from the value of scenevariable lights_visible_in_camera.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_in_camera.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_in_camera.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_in_camera.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_diffuse_reflection.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_diffuse_reflection.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_diffuse_reflection.links heading=4-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in diffuse transmission.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_diffuse_transmission.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_diffuse_transmission.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_diffuse_transmission.links heading=4-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in glossy reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_glossy_reflection.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_glossy_reflection.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_glossy_reflection.links heading=4-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in glossy transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_glossy_transmission.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_glossy_transmission.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_glossy_transmission.links heading=4-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in miror reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_mirror_reflection.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_mirror_reflection.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_mirror_reflection.links heading=4-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the light is visible in miror transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_mirror_transmission.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_mirror_transmission.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.visible_mirror_transmission.links heading=4-%}
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
      default: {}
      <p class="scene-class-comments">Vector of lightfilters associated with the light.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.light_filters.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.light_filters.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.light_filters.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.lights.SpotLight.attributes.node_xform.images data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.lights.SpotLight.attributes.node_xform.videos data=site.data.user-reference.scene-objects.lights.SpotLight-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.lights.SpotLight.attributes.node_xform.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.lights.SpotLight-%}