CylinderLight emits light from a cylindrical surface whose position, orientation, and radius can be configured, in
addition to the common attributes that control its brightness, color, etc.

The cylinder's axis lies along the light's local y-axis, so that its orientation can be specified via the
_node_xform_ attribute. 

Note that the circular end caps are not considered part of the emitting surface.
This means that if the light is made visible using the _visible_in_camera_ attribute,
it is possible to see through the open ends to the interior of the cylinder.
The inward-facing surface emits no light unless the _sidedness_ attribute is set to 1 (reverse).
