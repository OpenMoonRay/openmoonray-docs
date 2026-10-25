**Retired:** The current MoonRay source no longer defines a `ColorCorrectNukeMap` scene class. Use
[ColorCorrectMap]({{ "/user-reference/scene-objects/maps/ColorCorrectMap" | absolute_url }}) as its
replacement. It provides equivalent kinds of color correction, but it is not attribute-compatible
with `ColorCorrectNukeMap`; migrate existing configurations rather than changing only the scene class
name. For example, the retired map's `gain`, `offset`, `gamma`, `contrast`, and `saturation` attributes
are RGB values, while the replacement uses scalar attributes with separate per-channel controls.
