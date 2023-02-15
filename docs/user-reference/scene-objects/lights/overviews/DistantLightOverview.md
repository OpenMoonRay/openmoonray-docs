DistantLight is one of Moonray's two light types that model a light source at infinity,
and was designed to make it easy to represent very distant round light sources such as the Sun.

It behaves like a spherical cap lying on the sphere at infinity. The position of its center
on the sphere at infinity is determined by the direction of positive z-axis of the light's rotated frame,
as defined by the _node_xform_ attribute, and its size is given by the _angular_extent_ attribute,
the angle in degrees subtended from one side of the light to the other, also called the apparent
diameter.
