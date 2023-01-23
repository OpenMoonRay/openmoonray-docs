CombineNormalMap takes two input normal maps (a base and detail) and blends the detail atop the base such that the strength of both maps are preserved.

This uses _reoriented normal mapping_, where the normal of the detail map is rotated to follow the surface of the base map. This is as opposed to using linear blending or other methods that would create flat or incorrect results.
