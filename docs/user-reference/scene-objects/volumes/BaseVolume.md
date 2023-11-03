---
title: BaseVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BaseVolume
{%-include overview.html data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.gallery data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Attenuation Properties attributes</summary>
  <p>
    <h3>attenuation_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">A color to tint (multiply to) the attenuation. Technically the product of attenuation color and intensity is the attenuation (extinction) coefficient.(Note the inverse behavior of color with this parameter.)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_color.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_color.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_color.links heading=4-%}
    </p>
    <h3>attenuation_colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      <br>
      default: [[ 1, 1, 1 ], [ 0, 0, 0 ]]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_colors.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_colors.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_colors.links heading=4-%}
    </p>
    <h3>attenuation_distances</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_distances.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_distances.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_distances.links heading=4-%}
    </p>
    <h3>attenuation_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Identical in behavior to attenuation_intensity but provided as a second means  to control attenuation, intended for use during lighting as a per-shot or  per-sequence adjustment.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_factor.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_factor.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_factor.links heading=4-%}
    </p>
    <h3>attenuation_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">The rate at which the light traversing a volume is attenuated. The attenuation (extinction) coefficient is the product of attenuation_color, attenuation_intensity, and attenuation_factor</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_intensity.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_intensity.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_intensity.links heading=4-%}
    </p>
    <h3>attenuation_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_interpolations.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_interpolations.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_interpolations.links heading=4-%}
    </p>
    <h3>attenuation_max_depth</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 2.0
      <p class="scene-class-comments">Represents the maximum ray depth, or the longest visible distance a ray has to travel through the volume. This sets the upper bound for the ramp. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_max_depth.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_max_depth.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_max_depth.links heading=4-%}
    </p>
    <h3>attenuation_min_depth</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Represents the minimum ray depth, or the shortest visible distance a ray has to travel through the volume. This sets the lower bound for the ramp. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_min_depth.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_min_depth.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_min_depth.links heading=4-%}
    </p>
    <h3>invert_attenuation_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Invert the input attenuation color(s).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.invert_attenuation_color.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.invert_attenuation_color.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.invert_attenuation_color.links heading=4-%}
    </p>
    <h3>match_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use the same color(s) for attenuation that is/are being used for diffuse.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.match_diffuse.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.match_diffuse.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.match_diffuse.links heading=4-%}
    </p>
    <h3>use_attenuation_ramp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use a ramp to define different attenuation colors depending on the depth of the volume.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.use_attenuation_ramp.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.use_attenuation_ramp.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.use_attenuation_ramp.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Density Properties attributes</summary>
  <p>
    <h3>densities</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.densities.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.densities.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.densities.links heading=4-%}
    </p>
    <h3>density_distances</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_distances.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_distances.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_distances.links heading=4-%}
    </p>
    <h3>density_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_interpolations.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_interpolations.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_interpolations.links heading=4-%}
    </p>
    <h3>density_max_depth</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 2.0
      <p class="scene-class-comments">Represents the maximum ray depth, or the longest visible distance a ray has to travel through the volume. This sets the upper bound for the ramp. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_max_depth.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_max_depth.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_max_depth.links heading=4-%}
    </p>
    <h3>density_min_depth</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Represents the minimum ray depth, or the shortest visible distance a ray has to travel through the volume. This sets the lower bound for the ramp. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_min_depth.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_min_depth.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.density_min_depth.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Scattering Properties attributes</summary>
  <p>
    <h3>anisotropy</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is.  A value of 0.0 indicates an isotropic volume.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.anisotropy.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.anisotropy.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.anisotropy.links heading=4-%}
    </p>
    <h3>diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Reflectance color of the volume. Technically this is called scattering albedo, which is the scattering coefficient divided by the extinction coefficient.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_color.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_color.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_color.links heading=4-%}
    </p>
    <h3>diffuse_colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      <br>
      default: [[ 1, 1, 1 ], [ 0, 0, 0 ]]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_colors.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_colors.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_colors.links heading=4-%}
    </p>
    <h3>diffuse_distances</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_distances.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_distances.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_distances.links heading=4-%}
    </p>
    <h3>diffuse_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_interpolations.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_interpolations.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_interpolations.links heading=4-%}
    </p>
    <h3>diffuse_max_depth</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 2.0
      <p class="scene-class-comments">Represents the maximum ray depth, or the longest visible distance a ray has to travel through the volume. This sets the upper bound for the ramp. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_max_depth.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_max_depth.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_max_depth.links heading=4-%}
    </p>
    <h3>diffuse_min_depth</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Represents the minimum ray depth, or the shortest visible distance a ray has to travel through the volume. This sets the lower bound for the ramp. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_min_depth.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_min_depth.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_min_depth.links heading=4-%}
    </p>
    <h3>use_diffuse_ramp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use a ramp to define different diffuse colors depending on the depth of the volume.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.use_diffuse_ramp.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.use_diffuse_ramp.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.use_diffuse_ramp.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Volume attributes</summary>
  <p>
    <h3>emission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">A color multiplier for the emission.  The product of emission color and intensity is the emission coefficient</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_color.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_color.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_color.links heading=4-%}
    </p>
    <h3>emission_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">The rate at which a volume emits light at a given point.  The product of emission color and intensity is the emission coefficient.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_intensity.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_intensity.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_intensity.links heading=4-%}
    </p>
    <h3>surface_opacity_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Accumulated opacity that's considered the 'surface' for computing surface position and Z</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.surface_opacity_threshold.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.surface_opacity_threshold.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.surface_opacity_threshold.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Volume Baking attributes</summary>
  <p>
    <h3>bake_divisions</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 100
      <p class="scene-class-comments">Divide widest axis by this many divisions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_divisions.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_divisions.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_divisions.links heading=4-%}
    </p>
    <h3>bake_resolution_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;default&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;divisions&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;voxel size&rdquo;<br>
      <p class="scene-class-comments">Method to specify grid resolution of baked density grid.  Choices are:<br>&emsp;&emsp;"default": For shaders that are bound to vdb volumes, use vdb resolution.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;For shaders that are bounds to mesh geometries use 100 divisions<br>&emsp;&emsp;"divisions": Specify number of divisions.<br>&emsp;&emsp;"voxel size": Specify voxel size.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_resolution_mode.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_resolution_mode.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_resolution_mode.links heading=4-%}
    </p>
    <h3>bake_voxel_size</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10.0
      <p class="scene-class-comments">Size of voxel in world space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_voxel_size.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_voxel_size.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_voxel_size.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.label.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.label.videos data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.label.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}