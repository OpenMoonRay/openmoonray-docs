**VdbVolume** is a volume shader meant to be used with
[VdbGeometry]({{ "/user-reference/scene-objects/geometry/VdbGeometry" | absolute_url }}).
This shader allow modification of the color, density, or emission fields of the VDB volume
 with constant multipliers or map bindings.  Map bindings are evaluated and baked into the
 grid based on the *bake_resolution_mode*.  The default is to use the same number of divisions
 as the VDB file being rendered. 
