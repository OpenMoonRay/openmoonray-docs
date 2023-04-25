![]({{"/assets/images/user-reference/scene-objects/materials/dwa/DwaAdjustMaterial/dwa_adjust_overview.png" | absolute_url}})

**DwaAdjustMaterial** operates in the same vein as the DwaColorCorrectMaterial: it allows for easy editing of materials 
without touching or overwriting the existing surfacing graph. Unlike DwaColorCorrectMaterial, it can modify a number of 
parameters, and the parameters are modified according to a set of established mesh attributes/primvars. There are few parameters on the 
material itself, as it reads the attributes from the geometry. 

## Mesh Attribute Reference
DwaAdjustMaterial has a list of geometry attributes that it can use for adjustments. As long as an attribute with one of 
these named keys is present and well-formed, the DwaAdjustMaterial should read it and apply changes to the input 
accordingly.

Each property can be separately disabled, e.g. you can uncheck *adjust_roughness* to ignore 
the roughness attributes or *adjust_color* to ignore color attributes, etc.

| Attribute | Type | Description | Notes |
| --------- | ---- | ----------- | ----- |
| color_hue_shift	      | float | changes hue	| |
| color_saturation	      | float | changes saturation | Relative. 1.0 means no change |
| color_gain	          | float | multiplies color | |	
| color_gain	          | Color | multiplies color | compatible with float attr of the same name |
| presence_set	          | float | sets presence | |
| presence_set_blend	  | float | 0-1 mix towards presence_set | |
| presence_mult	          | float | multiplies presence | |
| roughness_set	          | float | sets roughness | |
| roughness_set_blend	  | float | 0-1 mix towards roughness_set | |
| roughness_mult	      | float | multiplies roughness | |
| roughness_remap_in_min  | float | minimum input roughness	applied after set/set_blend/mult | |
| roughness_remap_in_max  | float | maximum input roughness	requires all other roughness_remap to work | |
| roughness_remap_out_min | float | minimum output roughness | |
| roughness_remap_out_max | float | maximum output roughness | |
| specular_set            | float | sets specular | |
| specular_set_blend	  | float | 0-1 mix towards specular_set | multiplicative with mix / masking |
| specular_mult	          | float | multiplies specular | |	

## Example
Using the DwaAdjustMaterial, we can adjust the presence on each sphere in the scene. We create an attribute with the reserved name 
*presence_set* and tell the instancer to use it. Then we create the adjust material and link the base material. Notice
 that DwaAdjustMaterial does not need instructions to track *presence_set*.

 ```lua
sphere = SphereGeometry("/scene/geometry/sphere") {}

example_attr = UserData("example_attr) {
    ["float_key"] = "presence_set",
    ["float_values_0"] = {1.000, 0.875, 0.750,
                          0.625, 0.500, 0.375,
                          0.250, 0.125, 0.000},
}

instancer = InstanceGeometry("instancer") {
    ["references"] = {sphere},
    ["method"] = 0,
    ["positions"] = {Vec3(-3, 3, 0), Vec3( 0, 3, 0), Vec3( 3, 3, 0),
                     Vec3(-3, 0, 0), Vec3( 0, 0, 0), Vec3( 3, 0, 0),
                     Vec3(-3,-3, 0), Vec3( 0,-3, 0), Vec3( 3,-3, 0)},
    ["primitive attributes"] = {example_attr},
}

baseMtl = DwaSolidDielectricMaterial("base") {
    ["albedo"] = Rgb(0.1, 0.2, 0.7),
    ["roughness"] = 0.9,
}

adjusted = DwaAdjustMaterial("adjusted") {
    ["input_material"] = baseMtl,
}
 ```