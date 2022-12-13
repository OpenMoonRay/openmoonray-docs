#### RGBAZ
```lua
-- build a reasonably standard default RGBAZ result  
RenderOutput("/output/result0/rgb") {  
    ["file name"] = "result0.exr",  
}

RenderOutput("/output/result0/alpha") {  
    ["file name"] = "result0.exr",  
    ["result"] = 1 -- alpha  
}

RenderOutput("/output/result0/depth") {  
    ["file name"] = "result0.exr",  
    ["result"] = 2, -- depth  
    ["channel format"] = 0, -- 32 bit float  
    ["math filter"] = "min"
}
```

#### World Position

```lua
-- output position in world space  
RenderOutput("/output/result/worldPos") {  
    ["file name"] = "result0.exr",  
    ["result"] = 3, -- state variable  
    ["state variable"] = 10, -- "WP"  
    ["channel format"] = 0  
}
```

#### Ref_P

```lua
-- output the "ref_P" primitive attribute  
RenderOutput("/output/result/ref_P") {  
    ["file name"] = "result0.exr",  
    ["result"] = 4, -- primitive attribute  
    ["primitive attribute"] = "ref_P",  
    ["primitive attribute type"] = 2 -- Vec3f  
}
```

#### Glossy Lobe Material Color

```lua
-- output the color of all glossy lobes hit by primary rays  
RenderOutput("/output/glossy_color") {  
    ["file name"] = "result0.exr",  
    ["result"] = 7, -- material aov  
    ["material aov"] = "G.color",  
}
```

#### Matte of the Geometry Objects with the "curly" and "gizmo1' Labels 

```lua
-- output a matte for the geometry objects with the  
-- gizmo1 and curly labels  
RenderOutput("/output/gizmo1AndCurlyMatte") {  
    ["file name"] = "result0.exr",  
    ["result"] = 7, -- material aov  
    ["material aov"] = "'gizmo1''curly'...matte",  
    ["channel name"] = "A"  
}
```

#### Direct Lighting on Glossy Lobes

```lua
-- output the direct lighting on diffuse lobes  
    RenderOutput("/output/glossy_direct") {  
    ["file name"] = "result0.exr",  
    ["result"] = 8, -- light aov  
    ["light aov"] = "CGL",  
    ["channel format"] = 0,  
}
```

#### Diffuse Key Lighting (assumes light has label 'key')

```lua
-- output diffuse lighting from lights with the key label  
RenderOutput("/output/diffuse_key") {  
    ["file name"] = "result0.exr",  
    ["result"] = 8, -- light aov  
    ["light aov"] = "CD'key'",  
}
```

#### Motion Vectors

See also: [Motion Vectors](/moonray/how-to-guides/motion-vectors)

```lua
-- Create 2D screen space motion vectors  
RenderOutput("/output/motion_vectors") {  
    ["result"] = "material aov",  
    ["material_aov"] = "motionvec",  
    ["channel_suffix_mode"] = "rgb"  
}
```