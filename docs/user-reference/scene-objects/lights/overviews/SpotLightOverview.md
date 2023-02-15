SpotLight models a physically plausible spotlight mechanism that works like a projector, with an imaginary lens,
and a focal plane at which the projected image (a texture, if assigned, otherwise a pool of light) will be
in focus.

The position of the SpotLight corresponds to the center of the lens, and the orientation is such that the 
light is projected out along the SpotLight's positive local z-axis.

The extent of the light cone is controlled by two attributes, _inner_cone_angle_ and _outer_cone_angle_, which
describe the full side-to-side angular extents of the inner and outer regions of the beam of light, the inner
region being the portion where the projected radiance is at full intensity (i.e. equal to the value of the
_radiance_ attribute), and the outer portion being where the value has fallen off to zero. Interpolation
between the inner and outer regions is controlled by the _angle_falloff_type_ attribute.

Note that the above description implies that when viewing the lens itself, assuming the light is made visible
using the _visible_in_camera_ attribute, the lens will appear black. To better mimic the slight glow that
would be visible for a real spotlight lens under such conditions, the _black_level_ attribute can be set to
a small non-zero value. This attribute is merely provided as a convenience for visualization, however, and
has no effect on the illumination of the scene.
