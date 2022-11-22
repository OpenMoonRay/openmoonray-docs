---
title: NoiseMap_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# NoiseMap_v2
{%-include overview.html data=site.data.scene-classes.maps.NoiseMap_v2-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.gallery data=site.data.scene-classes.maps.NoiseMap_v2-%}
{%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>4D attributes</summary>
  <p>
    <h3>time</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">If use 4D noise is on, this is the value for the 4th dimension</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.time.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.time.links heading=4-%}
    </p>
    <h3>use_4D_noise</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">If on, 4-dimensional noise is used instead of 3-dimensional</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.use_4D_noise.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.use_4D_noise.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Adjustment attributes</summary>
  <p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">Bias the noise towards 0 or 1</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.bias.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.bias.links heading=4-%}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">Apply gain to the noise</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.gain.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.gain.links heading=4-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Invert the final pattern</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.invert.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.invert.links heading=4-%}
    </p>
    <h3>smoothstep</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      default: [ 0, 1 ]
      <p class="scene-class-comments">min/max values between which the smoothstep will interpolate</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.smoothstep.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.smoothstep.links heading=4-%}
    </p>
    <h3>use_smoothstep</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Put the noise value through a smoothstep function defined by min/max</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.use_smoothstep.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.use_smoothstep.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Flow Noise attributes</summary>
  <p>
    <h3>flow_advection_rate</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Rate of advection for flow noise</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.flow_advection_rate.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.flow_advection_rate.links heading=4-%}
    </p>
    <h3>flow_angle</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Angle of rotation for flow noise</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.flow_angle.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.flow_angle.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Space attributes</summary>
  <p>
    <h3>camera</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-comments">camera used to define camera and screen space</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.camera.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.camera.links heading=4-%}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.input_texture_coordinates.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>object_space</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      default: None
      <p class="scene-class-comments">Directly connect object to use that object's space.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.object_space.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.object_space.links heading=4-%}
    </p>
    <h3>space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | render = 0
          | camera = 1
          | world = 2
          | screen = 3
          | object = 4 (default)
          | reference = 5
          | texture = 6
          | input texture coordinates = 7
          | hair_surface_uv = 8
          | hair_closest_surface_uv = 9
      <p class="scene-class-comments">The space to calculate the noise in</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.space.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.space.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Transform attributes</summary>
  <p>
    <h3>rotation</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotates the noise in space based on the specified rotation order</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.rotation.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.rotation.links heading=4-%}
    </p>
    <h3>rotation_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | xyz = 0 (default)
          | xzy = 1
          | yxz = 2
          | yzx = 3
          | zxy = 4
          | zyx = 5
      <p class="scene-class-comments">Order in which to apply the euler rotations</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.rotation_order.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.rotation_order.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Vector to scale the noise non-proportionally</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.scale.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.scale.links heading=4-%}
    </p>
    <h3>transformation_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | srt = 0
          | str = 1
          | rst = 2
          | rts = 3
          | tsr = 4 (default)
          | trs = 5
      <p class="scene-class-comments">Order in which to apply the translation, rotation, and frequency</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.transformation_order.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.transformation_order.links heading=4-%}
    </p>
    <h3>translation</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Translation of the noise in space</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.translation.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.translation.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>amplitude</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Intensity of the noise</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.amplitude.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.amplitude.links heading=4-%}
    </p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Outputs RGB noise</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.color.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.color.links heading=4-%}
    </p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">The color value at 0 noise</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.color_A.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.color_A.links heading=4-%}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The color value at 1 noise</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.color_B.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.color_B.links heading=4-%}
    </p>
    <h3>distortion</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Warp input coordinate space with single noise level before looking up noise</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.distortion.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.distortion.links heading=4-%}
    </p>
    <h3>distortion_noise_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | perlin classic = 0 (default)
          | perlin simplex = 1
      <p class="scene-class-comments">Type of noise to use for distortion.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.distortion_noise_type.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.distortion_noise_type.links heading=4-%}
    </p>
    <h3>frequency_multiplier</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier for the frequency vector</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.frequency_multiplier.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.frequency_multiplier.links heading=4-%}
    </p>
    <h3>lacunarity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 2.0
      <p class="scene-class-comments">Multiplier on the noise frequency per level</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.lacunarity.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.lacunarity.links heading=4-%}
    </p>
    <h3>max_level</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Number of octaves of noise to add together for the final result</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.max_level.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.max_level.links heading=4-%}
    </p>
    <h3>noise_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | perlin classic = 0 (default)
          | perlin simplex = 1
      <p class="scene-class-comments">Type of noise to use. Simplex grid activates Flow Noise Angle and Advection</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.noise_type.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.noise_type.links heading=4-%}
    </p>
    <h3>persistence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">Multiplier on the noise amplitude per level</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.persistence.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.persistence.links heading=4-%}
    </p>
    <h3>seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The seed for the random number generator</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.NoiseMap_v2.attributes.seed.images data=site.data.scene-classes.maps.NoiseMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.NoiseMap_v2.attributes.seed.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.NoiseMap_v2-%}