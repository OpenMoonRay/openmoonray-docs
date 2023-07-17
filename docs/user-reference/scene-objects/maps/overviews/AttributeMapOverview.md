**AttributeMap** reads data from a model for use in shading.  The data can be implicit
in the model (i.e. *position*, *geometric normal*) or an explicit primitive attribute
added to models using the
[UserData]({{ "/user-reference/scene-objects/user-data/UserData" | absolute_url }})
object.\
The following table shows what primitive attributes are expected and what values 
are returned with the various *map_type* settings:

|*map_type*|return value|
|--------|--------------|
|*primitive attribute*|Explicit primitive attribute specified with *primitive_attribute_name* and *primitive_attribut_type* parameters|
|*position*|Position in render space `P`(*Vec3f*)|
|*texture st*|Texture coordinates specified with `surface_st`(*Vec2f*) for meshes or `uv`(*Vec2f*) for points or implicit coordinates depending on geometry type|
|*shading normal*|Normal specified with `N`(*Vec3f*) or implicit geometric normal|
|*geometric normal*|Implicit normal calculated from geometry (faceted for meshes)|
|*dpds*|Partial derivative of `P` with respect to *s* *texture st* coordinate|
|*dpdt*|Partial derivative of `P` with respect to *t* *texture st* coordinate|
|*dnds*|Partial derivative of *shading normal* with respect to *s* *texture st* coordinate|
|*dndt*|Partial derivative of *shading normal* with respect to *t* *texture st* coordinate|
|*map color*|Color from *color* parameter or evaluated map bound to it|
|*hair surface P*|Surface position of a curve specified with `surface_P`(*Vec3f*)|
|*hair surface N*|Surface normal of a curve specified with `surface_N`(*Vec3f*)|
|*hair surface st*|Surface texture st of a curve specified with `surface_st`(*Vec2f*)|
|*hair closest surface st*|Closest surface texture st of a curve specified with `closest_surface_st`(*Vec2f*)|
|*id*|Explicit `id`(*int*) primitive attribute|
|*velocity*|Explicit `velocity`(*Vec3f*) primitive attribute|
|*acceleration*|Explicit `acceleration`(*Vec3f*) primitive attribute|
|*motionvec*|Explicit `motionvec`(*Vec3f*) primitive attribute|
