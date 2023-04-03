```lua
hairColumnMap = HairColumnMap("/Scene/surfacing/columnMap") {
    --intentionally empty
}

ImageMap("/Scene/surfacing/furDif") {
    ["texture"] = "myTexture.tx",
    ["texture coordinates"] = 2, --input texture coordinates
    ["input texture coordinates"] = bind(hairColumnMap),
    ["wrap around"] = false,
}

hairMapWithHairColumnMap = HairMap("/Scene/surfacing/hair_color_map_with_hair_column_map") {
    ["base color"] = Rgb(1.0, 1.0, 1.0),
    ["tip color"] = Rgb(1.0, 1.0, 1.0),
    ["column uv color"] = bind(ImageMap("/Scene/surfacing/furDif")),
}

hairColorMtlWithHairColumnMap = HairMaterial_v3("/Scene/surfacing/hairColorMtlWithHairColumnMap") {
    ["hair color"] = bind(hairMapWithHairColumnMap),
    ["primary specular tint"] = bind(hairMapWithHairColumnMap),
    ["transmission tint"] = bind(hairMapWithHairColumnMap),
    ["primary specular roughness"] = 1.0
}

```