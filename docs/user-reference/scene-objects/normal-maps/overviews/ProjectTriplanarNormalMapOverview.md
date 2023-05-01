**ProjectTriplanarNormalMap** uses the normals and position on a mesh to apply and blend normal textures procedurally.

The triplanar projection is a virtual cube, where textures repeat along each cube face. The blending weight for each face's texture is determined by the face's alignment with the mesh normal. The `transition_width` parameter increases or decreases the amount of blending across faces.  The normal map is applied with the correct tangent for each face for the cube.

The `number_of_textures` option also determines how the projection works:
- `one` texture means it's the same on all faces
- `three` textures means the X, Y, Z planes can each have their own texture
- `six` textures means positive and negative X, Y, Z can have unique textures


