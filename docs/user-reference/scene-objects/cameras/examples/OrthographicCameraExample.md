```lua
OrthographicCamera("main_camera") {
    ["node xform"] = translate(0, 0, 10),
    ["film width aperture"] = 2,
    ["near"] = 4,
    ["far"] = 10000,
    ["mb shutter open"] = -0.25,
    ["mb shutter close"] = 0.25,
    ["dof"] = true,
    ["dof aperture"] = 0.8,
    ["dof focus distance"] = 10,
}
```