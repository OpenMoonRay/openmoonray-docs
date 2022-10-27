---
title: DwaToonMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaToonMaterial
{%assign image_path=site.data.scene-classes.materials.dwa.DwaToonMaterial.image_path%}
{%if site.data.scene-classes.materials.dwa.DwaToonMaterial.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.dwa.DwaToonMaterial.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.dwa.DwaToonMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.dwa.DwaToonMaterial.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>prevent_light_culling</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">WARNING: Experimental and must be used with max_depth: 0 and only for non-photoreal looks. Prevents culling of lights so surfaces can be lit purely with respect to the shading normal irrespective of geometry</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.prevent_light_culling.images.
          path=image_path
      %}
    </p>
    <h3>specular</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">enables/disables specular reflections (binary 0|1 for plausibility)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.specular.images.
          path=image_path
      %}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.sss_trace_set.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Clearcoat attributes</summary>
  <p>
    <h3>clearcoat</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">enables/disables clearcoat (binary 0|1 for plausibility)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.clearcoat.images.
          path=image_path
      %}
    </p>
    <h3>clearcoat_attenuation_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0.5, 0.5, 0.5 ]
      <p class="scene-class-comments">the attenuation color of the clearcoat when 'cleacoat thickness' &gt; 0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.clearcoat_attenuation_color.images.
          path=image_path
      %}
    </p>
    <h3>clearcoat_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">(advanced, recommended ON) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.clearcoat_bending.images.
          path=image_path
      %}
    </p>
    <h3>clearcoat_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
      <p class="scene-class-comments">sets the normalized distribution function for clearcoat.  GGX is currently isotropic only</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.clearcoat_model.images.
          path=image_path
      %}
    </p>
    <h3>clearcoat_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the amount of infuence of the alternate clearcoat normal</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.clearcoat_normal_dial.images.
          path=image_path
      %}
    </p>
    <h3>clearcoat_refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.5
      <p class="scene-class-comments">defines the Fresnel behavior</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.clearcoat_refractive_index.images.
          path=image_path
      %}
    </p>
    <h3>clearcoat_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.10000000149
      <p class="scene-class-comments">the roughness of the clearcoat lobe</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.clearcoat_roughness.images.
          path=image_path
      %}
    </p>
    <h3>clearcoat_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">the thickness of the virtual clearcoat layer. Values &gt; 0 enable absorption</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.clearcoat_thickness.images.
          path=image_path
      %}
    </p>
    <h3>independent_clearcoat_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an independent shading normal (normal map) for the clearcoat lobe</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.independent_clearcoat_normal.images.
          path=image_path
      %}
    </p>
    <h3>show_clearcoat</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables/disables clearcoat</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.show_clearcoat.images.
          path=image_path
      %}
    </p>
    <h3>use_independent_clearcoat_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">specifies whether the clearcoat lobe should use an independent normal</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.use_independent_clearcoat_normal.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Common attributes</summary>
  <p>
    <h3>casts_caustics</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">allows continuation of caustic light paths.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.casts_caustics.images.
          path=image_path
      %}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.presence.images.
          path=image_path
      %}
    </p>
    <h3>thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables proper shading of infinitely thin geometry such as paper or leaves.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.thin_geometry.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Diffuse attributes</summary>
  <p>
    <h3>albedo</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the overall surface color as seen from a distance (ie. diffuse color)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.albedo.images.
          path=image_path
      %}
    </p>
    <h3>bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | normalized diffusion = 0 (default)
          | dipole = 1
          | random walk = 2
      <p class="scene-class-comments">0 for NormalizedDiffuse, 1 for Dipole, 2 for random walk</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.bssrdf.images.
          path=image_path
      %}
    </p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      default: [[ 1, 1, 1 ], [ 0.75, 0.75, 0.75 ], [ 0.25, 0.25, 0.25 ], [ 0, 0, 0 ]]
      <p class="scene-class-comments">List of colors on the ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.colors.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_flatness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Flattens out the diffuse response by bending the normal towards the light direction</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.diffuse_flatness.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_flatness_falloff</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Fades out flatness with respect to light direction</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.diffuse_flatness_falloff.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | oren-nayar = 0 (default)
          | ramp = 1
      <p class="scene-class-comments">The method used to render the diffuse response.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.diffuse_model.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Roughness of the diffuse shading.  If the value is zero a Lambertian model is used.  If it's above zero the Oren Nayar model is used.   Not compatible with subsurface scattering.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.diffuse_roughness.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplier on the amount of light that is transmitted through the surface.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.diffuse_transmission.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_transmission_blending_behavior</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | RGB = 0
          | Monochromatic = 1 (default)
      <p class="scene-class-comments">Controls how diffuse transmission color attenuates diffuse reflection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.diffuse_transmission_blending_behavior.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_transmission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the color/amount of light that is transmitted through the surface.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.diffuse_transmission_color.images.
          path=image_path
      %}
    </p>
    <h3>enable_sss_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for sss samples. More accurate but potentially expensive</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.enable_sss_input_normal.images.
          path=image_path
      %}
    </p>
    <h3>extend_ramp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Extends the last ramp color to unlit portions. IMPORTANT: Only works in conjuction with prevent_light_culling ON and visible_shadows OFF</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.extend_ramp.images.
          path=image_path
      %}
    </p>
    <h3>interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.interpolations.images.
          path=image_path
      %}
    </p>
    <h3>positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.positions.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier0</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier0.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier1</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier1.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier2</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier2.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier3</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier3.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier4</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier4.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier5</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier5.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier6</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier6.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier7</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier7.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier8</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier8.images.
          path=image_path
      %}
    </p>
    <h3>ramp_color_multiplier9</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_color_multiplier9.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset0.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset1.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset2.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset3.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset4.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset5.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset6.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset7.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset8.images.
          path=image_path
      %}
    </p>
    <h3>ramp_position_offset9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.ramp_position_offset9.images.
          path=image_path
      %}
    </p>
    <h3>resolve_self_intersections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">tries to resolve self-intersecting geometry automatically by only evaluating 'exiting' intersections for subsurface evaluations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.resolve_self_intersections.images.
          path=image_path
      %}
    </p>
    <h3>scattering_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the subsurface scattering 'falloff' color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.scattering_color.images.
          path=image_path
      %}
    </p>
    <h3>scattering_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">the distance the light scatters beneath the surface. When 0 surface diffuse (lambertian or toon) is used</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.scattering_radius.images.
          path=image_path
      %}
    </p>
    <h3>show_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables diffuse reflectance</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.show_diffuse.images.
          path=image_path
      %}
    </p>
    <h3>terminator_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0500000007451
      <p class="scene-class-comments">Controls how the diffuse ligthing falls off.  Values greater than 0.0 shift the falloff point closer to the light source and values less than 0.0 shift the falloff point further away</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.terminator_shift.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Emission attributes</summary>
  <p>
    <h3>emission</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the energy emitted from this material</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.emission.images.
          path=image_path
      %}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.show_emission.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Fuzz attributes</summary>
  <p>
    <h3>fuzz</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">fuzz mask</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.fuzz.images.
          path=image_path
      %}
    </p>
    <h3>fuzz_albedo</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color of the fuzz highlights.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.fuzz_albedo.images.
          path=image_path
      %}
    </p>
    <h3>fuzz_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an independent shading normal (normal map) for the fuzz lobe</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.fuzz_normal.images.
          path=image_path
      %}
    </p>
    <h3>fuzz_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the amount of infuence of the alternate fuzz normal</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.fuzz_normal_dial.images.
          path=image_path
      %}
    </p>
    <h3>fuzz_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.25
      <p class="scene-class-comments">Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.fuzz_roughness.images.
          path=image_path
      %}
    </p>
    <h3>show_fuzz</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Enables/disables fuzz lobe</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.show_fuzz.images.
          path=image_path
      %}
    </p>
    <h3>use_absorbing_fuzz_fibers</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.use_absorbing_fuzz_fibers.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Glitter attributes</summary>
  <p>
    <h3>glitter</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">enables/disables glitter model (binary 0|1 for plausibility)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter.images.
          path=image_path
      %}
    </p>
    <h3>glitter_LOD_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_LOD_quality.images.
          path=image_path
      %}
    </p>
    <h3>glitter_approximate_for_secondary_rays</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">use an approximation to shade glitter for non-mirror secondary rays</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_approximate_for_secondary_rays.images.
          path=image_path
      %}
    </p>
    <h3>glitter_color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">base flake color (use physical metallic color values)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_color_A.images.
          path=image_path
      %}
    </p>
    <h3>glitter_color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">base flake color (use physical metallic color values)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_color_B.images.
          path=image_path
      %}
    </p>
    <h3>glitter_color_hue_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">introduce hue variation in flake color centered at the base flake color's hue on the hue wheel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_color_hue_variation.images.
          path=image_path
      %}
    </p>
    <h3>glitter_color_saturation_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">introduce saturation variation in flake color centered at the base flake color's saturation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_color_saturation_variation.images.
          path=image_path
      %}
    </p>
    <h3>glitter_color_value_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">introduce value variation in flake color centered at the base flake color's value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_color_value_variation.images.
          path=image_path
      %}
    </p>
    <h3>glitter_compensate_reference_space_deformation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_compensate_reference_space_deformation.images.
          path=image_path
      %}
    </p>
    <h3>glitter_debug_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0 (default)
          | blend = 1
          | color = 2
          | averageColor = 3
          | footprintArea = 4
          | radius = 5
      <p class="scene-class-comments">developer debug visualization modes</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_debug_mode.images.
          path=image_path
      %}
    </p>
    <h3>glitter_density</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the number of flakes per unit length; larger density packs more flakes into same space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_density.images.
          path=image_path
      %}
    </p>
    <h3>glitter_jitter</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Controls how much the flakes are randomly offset from a regular grid</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_jitter.images.
          path=image_path
      %}
    </p>
    <h3>glitter_layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | physical = 0 (default)
          | additive = 1
      <p class="scene-class-comments">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_layering_mode.images.
          path=image_path
      %}
    </p>
    <h3>glitter_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">randomness of flake orientation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_randomness.images.
          path=image_path
      %}
    </p>
    <h3>glitter_roughness_A</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.140000000596
      <p class="scene-class-comments">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_roughness_A.images.
          path=image_path
      %}
    </p>
    <h3>glitter_roughness_B</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.140000000596
      <p class="scene-class-comments">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_roughness_B.images.
          path=image_path
      %}
    </p>
    <h3>glitter_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The seed for the glitter random number generator</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_seed.images.
          path=image_path
      %}
    </p>
    <h3>glitter_size_A</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_size_A.images.
          path=image_path
      %}
    </p>
    <h3>glitter_size_B</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_size_B.images.
          path=image_path
      %}
    </p>
    <h3>glitter_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | object = 4
          | reference = 5 (default)
      <p class="scene-class-comments">The space to calculate the worley noise in, defaults to reference space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_space.images.
          path=image_path
      %}
    </p>
    <h3>glitter_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_style_A_frequency.images.
          path=image_path
      %}
    </p>
    <h3>glitter_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_style_B_frequency.images.
          path=image_path
      %}
    </p>
    <h3>glitter_texture_A</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_texture_A.images.
          path=image_path
      %}
    </p>
    <h3>glitter_texture_B</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_texture_B.images.
          path=image_path
      %}
    </p>
    <h3>glitter_texture_orientation_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.15000000596
      <p class="scene-class-comments">randomly orient each texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.glitter_texture_orientation_randomness.images.
          path=image_path
      %}
    </p>
    <h3>show_glitter</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Enables/disables glitter lobes</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.show_glitter.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Iridescence attributes</summary>
  <p>
    <h3>iridescence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">controls the strength of the iridescence effect</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_apply_to</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | primary specular = 0 (default)
          | clearcoat/moisture specular = 1
      <p class="scene-class-comments">Apply iridescence to primary specular lobe or clearcoat/moisture lobe</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_apply_to.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_at_0_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 0 degree viewing angle</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_at_0_incidence.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_at_90_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 90 degree viewing angle</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_at_90_incidence.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_color_control</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | use hue interpolation = 0 (default)
          | use ramp = 1
      <p class="scene-class-comments">use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_color_control.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      default: [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]
      <p class="scene-class-comments">List of colors on the ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_colors.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_exponent</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Tightens or broadens the distribution of colors</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_exponent.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_flip_hue_direction</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">flip interpolation around the hue wheel to counter-clockwise direction</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_flip_hue_direction.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_interpolations.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">ramp positions</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_positions.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_primary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">First color to interpolate from around the hue wheel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_primary_color.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_ramp_interpolation_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | RGB = 0 (default)
          | HSV = 1
      <p class="scene-class-comments">RGB: lerp in RGB space which matches UI preview but can lose saturation, HSV: lerp in HSV space which preserves saturation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_ramp_interpolation_mode.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_secondary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">Second color to interpolate to around the hue wheel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_secondary_color.images.
          path=image_path
      %}
    </p>
    <h3>iridescence_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Controls how much the color spectrum is repeated</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.iridescence_thickness.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal in the tangent frame (normal map)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.input_normal.images.
          path=image_path
      %}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the amount of influence of the alternate normal</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.input_normal_dial.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Normal Anti-aliasing attributes</summary>
  <p>
    <h3>normal_AA_dial</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Controls the amount roughness compensation from the normal map AA strategy.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.normal_AA_dial.images.
          path=image_path
      %}
    </p>
    <h3>normal_AA_strategy</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | none = 0 (default)
          | toksvig = 1
      <p class="scene-class-comments">Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.normal_AA_strategy.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Specular attributes</summary>
  <p>
    <h3>anisotropy</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">controls the shape of the primary reflection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.anisotropy.images.
          path=image_path
      %}
    </p>
    <h3>metallic</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">enables/disables metallic model (binary 0|1 for plausibility)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.metallic.images.
          path=image_path
      %}
    </p>
    <h3>metallic_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the overall reflection color, defines Fresnel behavior</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.metallic_color.images.
          path=image_path
      %}
    </p>
    <h3>metallic_edge_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the reflection color at grazing angles, defines Fresnel behavior</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.metallic_edge_color.images.
          path=image_path
      %}
    </p>
    <h3>refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.5
      <p class="scene-class-comments">defines the Fresnel behavior (affects only refraction when model is Toon)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.refractive_index.images.
          path=image_path
      %}
    </p>
    <h3>roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">the roughness of the surface</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.roughness.images.
          path=image_path
      %}
    </p>
    <h3>shading_tangent</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      default: [ 1, 0 ]
      <p class="scene-class-comments">controls the orientation of anistropy</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.shading_tangent.images.
          path=image_path
      %}
    </p>
    <h3>show_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables specular reflections</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.show_specular.images.
          path=image_path
      %}
    </p>
    <h3>specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
          | Toon = 2
      <p class="scene-class-comments">sets the normalized distribution function for specular.  GGX is currently isotropic only</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.specular_model.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_enable_indirect_reflections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables indirect GGX reflections for toon specular model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_enable_indirect_reflections.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon toon specular</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_enable_input_normal.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_indirect_reflections_intensity.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_indirect_reflections_roughness.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_input_U.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_input_V.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon toon specular</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_input_normal.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon toon specular</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_input_normal_dial.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the toon specular response</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_intensity.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_interpolations.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_positions.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_stretch_u.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_stretch_v.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_tint.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_use_input_vectors_for_stretch.images.
          path=image_path
      %}
    </p>
    <h3>toon_specular_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">List of colors on the ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.toon_specular_values.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Transmission attributes</summary>
  <p>
    <h3>dispersion_abbe_number</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 34.0
      <p class="scene-class-comments">The amount of dispersion/chromatic-aberration via refractions. Lower this number to increase the effect. A value of 0 turns off dispersion. Around [25-80] makes sense for realistic glass. Lower values may look better on gemstones.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.dispersion_abbe_number.images.
          path=image_path
      %}
    </p>
    <h3>independent_transmission_refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.5
      <p class="scene-class-comments">defines a separate IOR for the bending of light with transmission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.independent_transmission_refractive_index.images.
          path=image_path
      %}
    </p>
    <h3>independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">separate roughness for transmission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.independent_transmission_roughness.images.
          path=image_path
      %}
    </p>
    <h3>show_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables refractive solid model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.show_transmission.images.
          path=image_path
      %}
    </p>
    <h3>transmission</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">enables/disables refractive solid model (binary 0|1 for plausibility)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.transmission.images.
          path=image_path
      %}
    </p>
    <h3>transmission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the desired color of transmitted light</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.transmission_color.images.
          path=image_path
      %}
    </p>
    <h3>use_dispersion</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use dispersion effects in transmission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.use_dispersion.images.
          path=image_path
      %}
    </p>
    <h3>use_independent_transmission_refractive_index</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use a separate IOR for transmission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.use_independent_transmission_refractive_index.images.
          path=image_path
      %}
    </p>
    <h3>use_independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use a separate roughness for transmission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.use_independent_transmission_roughness.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.extra_aovs.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.label.images.
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaToonMaterial.attributes.priority.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>