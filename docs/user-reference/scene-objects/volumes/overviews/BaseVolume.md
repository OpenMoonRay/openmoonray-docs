**BaseVolume** is a volume shader meant to be applied to a water tight mesh.
The volume is homogenous by default but can be made heterogenous by binding
maps to any of the attributes.

You can apply map shaders to any attribute of a volume shader, such as:
- anisotropy
- emission
- color
- density

Map bindings are evaluated and baked into a precomputed grid for fast lookups
during rendering.  The resolution of the grid is based on the attributes
*bake_resolution_mode*, *bake_divisions* and *bake_voxel_size*. See the attribute
documentation for details.

There are some caveats to binding maps to volume shader attributes:
- Evaluating a map (baked grid) is slower than evaluating a constant value. MCRT will take longer to converge.
- Memory usage is increased due to the baked attribute grid.
- Only 3D position maps can be bound to the attributes. 2D surface data (texture coordinates, normals, etc) do not work with volumes.

