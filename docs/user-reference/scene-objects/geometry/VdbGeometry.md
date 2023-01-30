---
title: VDB Geometry
---
# VdbGeometry
{%-include overview.html data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.gallery data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>contains_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Specifies whether the geometry contains the camera and should be used for IOR tracking. This should not be changed by the user -- they should instead attach the relevant geometry to the camera, which will then flag this geometry.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.contains_camera.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.contains_camera.links heading=4-%}
    </p>
    <h3>density_grid</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: density
      <p class="scene-class-comments">The name of the density grid. If multiple grids have the same name, only the first grid with that name will be loaded. If a vdb file has multiple grids with the same name, you may use a suffix index to pick which grid to load, e.g. "density[3]". The index must be in [] brackets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.density_grid.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.density_grid.links heading=4-%}
    </p>
    <h3>dicing_camera</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.dicing_camera.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.dicing_camera.links heading=4-%}
    </p>
    <h3>emission_grid</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">The name of the emission grid. If multiple grids have the same name, only the first grid with that name will be loaded. If a vdb file has multiple grids with the same name, you may use a suffix index to pick which grid to load, e.g. "emission[3]". The index must be in [] brackets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.emission_grid.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.emission_grid.links heading=4-%}
    </p>
    <h3>emission_sample_rate</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the relative scale of input emission grid resolution. Lower value has lower memory overhead and faster render time, with the cost of lower fidelity of emission shape and illumination</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.emission_sample_rate.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.emission_sample_rate.links heading=4-%}
    </p>
    <h3>interpolation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | nearest neighbor = 0
          | linear = 1 (default)
          | quadratic = 2
      <p class="scene-class-comments">the voxel interpolation to use when sampling the volume data</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.interpolation.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.interpolation.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material aov expresssions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.label.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.label.links heading=4-%}
    </p>
    <h3>model</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a VDB file</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.model.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.model.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.node_xform.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.node_xform.links heading=4-%}
    </p>
    <h3>ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  Instead, it is considered part of the current intersection's geometry.  If zero, an automatically calculated epsilon will be used.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.ray_epsilon.links heading=4-%}
    </p>
    <h3>references</h3>
    <p class="scene-class-type">
      <b>Geometry Vector</b>
      default: []
      <p class="scene-class-comments">list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.references.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.references.links heading=4-%}
    </p>
    <h3>reverse_normals</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enable to reverse the normals in the geometry</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.reverse_normals.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.reverse_normals.links heading=4-%}
    </p>
    <h3>shadow_exclusion_mappings</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">List of mappings of the form A:B where:<br>A is a list of names of parts to be mapped, or asterisk to map the whole geometry<br>B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.shadow_exclusion_mappings.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.shadow_exclusion_mappings.links heading=4-%}
    </p>
    <h3>shadow_ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.shadow_ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.shadow_ray_epsilon.links heading=4-%}
    </p>
    <h3>shadow_receiver_label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Label used to associate Geometry objects into sets. Then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.shadow_receiver_label.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.shadow_receiver_label.links heading=4-%}
    </p>
    <h3>side_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | force two-sided = 0 (default)
          | force single-sided = 1
          | use mesh sidedness = 2
      <p class="scene-class-comments">set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.side_type.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.side_type.links heading=4-%}
    </p>
    <h3>static</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">disable if the geometry will be updated between frames</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.static.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.static.links heading=4-%}
    </p>
    <h3>velocity_grid</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">the name of vector grid representing the velocity field. Usually named "v" or "vel" in simulation export. If multiple velocity grids have the same name, only the first grid with that name will be loaded. If a vdb file has multiple grids with the same name, you may use a suffix index to pick which grid to load, e.g. "v[3]". The index must be in [] brackets. The index can be different from the index on the "density_grid".</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.velocity_grid.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.velocity_grid.links heading=4-%}
    </p>
    <h3>velocity_sample_rate</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.20000000298
      <p class="scene-class-comments">the relative scale of input velocity grid resolution. Lower value has lower memory overhead and lower fidelity of motion blur effect, which is sometimes desired for artistic reasons</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.velocity_sample_rate.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.velocity_sample_rate.links heading=4-%}
    </p>
    <h3>velocity_scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">A scale factor for the velocity field. A value of 0 disables motion blur.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.velocity_scale.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.velocity_scale.links heading=4-%}
    </p>
    <h3>visible_diffuse_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse reflection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_diffuse_reflection.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_diffuse_reflection.links heading=4-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_diffuse_transmission.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_diffuse_transmission.links heading=4-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_glossy_reflection.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_glossy_reflection.links heading=4-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_glossy_transmission.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_glossy_transmission.links heading=4-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible to camera rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_in_camera.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_in_camera.links heading=4-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_mirror_reflection.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_mirror_reflection.links heading=4-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_mirror_transmission.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_mirror_transmission.links heading=4-%}
    </p>
    <h3>visible_shadow</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry casts shadows</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_shadow.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_shadow.links heading=4-%}
    </p>
    <h3>visible_volume</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in indirect volume rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_volume.images data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.VdbGeometry.attributes.visible_volume.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.geometry.VdbGeometry-%}