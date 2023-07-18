**DistortNormalMap** warps an input
[normal map]({{ "/user-reference/scene-objects/normal-maps" | absolute_url }})
based on perlin noise.
By default, the warp direction is based on the implicit derivatives of the surface.   If *use_input_vectors* is set to true, then explicit warp directions can be specified by binding to the *input_U* and *input_V* parameters.

