---
Title: Sample RDLA file for Checkpoint and Resume render
---
# Sample RDLA file for Checkpoint and Resume render
---
## RenderOutput block sample
This example creates one output image file and defines one checkpoint image file for checkpoint rendering.  The regular image output and checkpoint image output both include the Alpha, Beauty, Weight, Beauty Aux and Alpha Aux AOVs for Resume rendering. Additionally, the example defines the resumable file as an input to Resume renderering

```lua
-- alpha
RenderOutput("/output/alpha") {
    ["file_name"] = "result0.exr",
    ["result"] = 1, -- alpha
    ["channel_name"] = "alpha",
    ["checkpoint_file_name"] = "checkpoint0.exr",
    ["resume_file_name"] = "resume0.exr",
}
  
-- beauty
RenderOutput("/output/beauty") {
    ["file_name"] = "result0.exr",
    ["result"] = 0, -- beauty
    ["channel_name"] = "beauty",
    ["checkpoint_file_name"] = "checkpoint0.exr",
    ["compression"] = "zip",
    ["channel_format"] = "float"
}
  
-- weight
RenderOutput("/output/weight") {
    ["file_name"] = "result0.exr",
    ["result"] = 11, -- weight
    ["channel_name"] = "weight",
    ["checkpoint_file_name"] = "checkpoint0.exr",
    ["compression"] = "zip",
    ["channel_format"] = "float"
}
 
-- beauty aux
RenderOutput("/output/beautyaux") {
    ["file_name"] = "result0.exr",
    ["result"] = 12, -- beauty aux
    ["channel_name"] = "beauty aux",
    ["checkpoint_file_name"] = "checkpoint0.exr",
    ["compression"] = "zip",
    ["channel_format"] = "float"
}
  
-- alpha aux
RenderOutput("/output/alphaaux") {
    ["file_name"] = "result0.exr",
    ["result"] = 14, -- alpha aux
    ["channel_name"] = "alpha aux",
    ["checkpoint_file_name"] = "checkpoint0.exr",
    ["compression"] = "zip",
    ["channel_format"] = "float"
}
```

## Checkpoint with Resume rendering enabled 
This example activates time-based checkpoint rendering with an interval of 5 minutes and a time cap of 120 minutes, and creates a resumable output image.  If a resumable output image file exists, MoonRay will resume from that file. If not, MoonRay will start from scratch.
```lua
SceneVariables {
    ...
    ["checkpoint_active"] = true,
    ["checkpoint_mode"] = "time",
    ["checkpoint_interval"] = 5.0, -- every 5 min
    ["checkpoint_time_cap"] = 120, -- limit 120 min
    ["resumable_output"] = true, -- create resumable image
    ["resume_render"] = true,  -- try to do resume render
    ...
}
```
The following are the equivalent settings via the command-line.
```bash
moonray ... -checkpoint -scene_var checkpoint_mode 0 -scene_var checkpoint_interval 5 -scene_var checkpoint_time_cap 120 -resumable_output -resume_render
```

This example activates quality-based checkpoint rendering with a quality-steps value of 2. Other settings are the same as the previous example.
```lua
SceneVariables {
    ...
    ["checkpoint_active"] = true,
    ["checkpoint_mode"] = "quality",
    ["checkpoint_quality_steps"] = 2, -- every 2 quality steps
    ["checkpoint_time_cap"] = 120, -- limit 120 min
    ["resumable_output"] = true, -- create resumable image
    ["resume_render"] = true,  -- try to do resume render
    ...
}
```
The following are the equivalent settings via the command-line.
```bash
moonray ... -checkpoint -scene_var checkpoint_mode 1 -scene_var checkpoint_quality_steps 2 -scene_var checkpoint_time_cap 120 -resumable_output -resume_render
```



