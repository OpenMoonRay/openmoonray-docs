The *UsdUVTexture* map is part of the
[USD Preview Surface](https://openusd.org/release/spec_usdpreviewsurface.html) 
spec.  It allows the mapping of an image texture onto geometry.  Single texture files
and UDIM tiles are both supported.   If *\<UDIM\>* appears in the texture filename then it
will be replaced with the appropriate UDIM tile based on the *st* coordinates.  The *st* 
coordinates are typically provided by binding a
[UsdPrimvarReader_float2]({{ "/user-reference/scene-objects/maps/UsdPrimvarReader_float2" | absolute_url }})
map to the *st* parameter.   Both *exr* and *tx* files are supported but *tx* files are preferred for
[performance]({{ "/user-reference/performance" | absolute_url }})
reasons.
