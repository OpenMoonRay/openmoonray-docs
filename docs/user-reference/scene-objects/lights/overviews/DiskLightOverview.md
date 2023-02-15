DiskLight is a light-emitting flat disk of a specified radius. The disk lies in the local (x,y)-plane of
the light's coordinate system and can be oriented and placed using the _node_xform_ attribute. Additionally,
it supports all the common attributes for controling its brightness, color, etc.

Note that by default the light will be emitted from a single surface of the disk - the one corresponding to the
positive direction of the light's local z-axis. This behavior can be changed via the _sidedness_ attribute.
