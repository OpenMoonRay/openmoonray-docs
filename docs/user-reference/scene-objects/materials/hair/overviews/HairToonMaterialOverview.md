---

**HairToonMaterial** allows for the creation of stylized hair using the diffuse options of HairDiffuseMaterial and specular options controlled by ramps. This allows artists to make complex and specific falloff and specular shapes.

When working with ramps in rdla, each vector attribute (specular_X_positions, specular_X_values, specular_X_interpolations) must have the same number of elements.

Here is an example to create one of the images below:

```lua
mtl = HairToonMaterial("mtl") {
    ["specular_1_model"] = "Toon_Hair",
    ["specular_1_roughness"] = 0.25,
    ["specular_1_values"] = {0.0, 0.05, 1.0, 1.0, 1.0},
    ["specular_1_positions"] = {0.0, 0.15, 0.2, 0.5, 1.0},
    ["specular_1_interpolation"] = {1, 1, 1, 1, 1},

    ["hair_color"] = Rgb(0.351, 0.275, 0.15),
    ["bssrdf"] = 1,
    ["scattering_radius"] = 0.25,
}
```