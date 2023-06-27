The *ImageMap* allows for the mapping of an image texture onto geometry.  Single texture files
and UDIM tiles are both supported.   If *\<UDIM\>* appears in the texture filename then it
will be replaced with the appropriate UDIM tile based on the *st* coordinates.  Both *exr* and
*tx* files are supported but *tx* files are preferred for
[performance]({{ "/user-reference/performance" | absolute_url }})
reasons.
