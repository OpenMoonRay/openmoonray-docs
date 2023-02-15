EnvLight is one of Moonray's two light types that model a light source at infinity,
and was designed to make it easy to represent illumination by the sky or similar distant distributed sources
which benefit from having a user-defined texture assigned.


When a texture is applied using the _texture_ attribute, the light's local z-axis is used to define
the poles of the sphere, with the texture u-coordinate determining the longitude and the v-coordinate
the latitude.

If the _sample_upper_hemisphere_only_ attribute is set to _true_, only the hemisphere centered around the
positive local z-axis emits light.
