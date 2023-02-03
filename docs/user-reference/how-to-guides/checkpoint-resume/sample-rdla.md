---
Title: Sample rdla file for Checkpoint and Resume render
---
# Sample rdla file for Checkpoint and Resume render
---
## rdla renderOutput block sample
This rdla example creates one output file and defines one checkpoint file for checkpoint render.
Regular output and checkpoint output includes "**weight**" "**beauty aux**" and "**alpha aux**"
AOVs for resume render.<br>
Also defines resume file as input of resume render.<br>

```
-- alpha
RenderOutput("/output/alpha") {
    ["file name"] = "result0.exr",
    ["result"] = 1, -- alpha
    ["channel name"] = "alpha",
    ["checkpoint file name"] = "checkpoint0.exr",
    ["resume file name"] = "resume0.exr",
}
  
-- beauty
RenderOutput("/output/beauty") {
    ["file name"] = "result0.exr",
    ["result"] = 0, -- beauty
    ["channel name"] = "beauty",
    ["checkpoint file name"] = "checkpoint0.exr",
    ["compression"] = "zip",
    ["channel_format"] = "float"
}
  
-- weight
RenderOutput("/output/weight") {
    ["file name"] = "result0.exr",
    ["result"] = 11, -- weight
    ["channel name"] = "weight",
    ["checkpoint file name"] = "checkpoint0.exr",
    ["compression"] = "zip",
    ["channel_format"] = "float"
}
 
-- beauty aux
RenderOutput("/output/beautyaux") {
    ["file name"] = "result0.exr",
    ["result"] = 12, -- beauty aux
    ["channel name"] = "beauty aux",
    ["checkpoint file name"] = "checkpoint0.exr",
    ["compression"] = "zip",
    ["channel_format"] = "float"
}
  
-- alpha aux
RenderOutput("/output/alphaaux") {
    ["file name"] = "result0.exr",
    ["result"] = 14, -- alpha aux
    ["channel name"] = "alpha aux",
    ["checkpoint file name"] = "checkpoint0.exr",
    ["compression"] = "zip",
    ["channel_format"] = "float"
}
```

<br>
## Checkpoint with resume render enable example 
Following setting activate **time-based** checkpoint render by interval **5 minute** and
time cap **120 minute** and create resumable output image.<br>
If resume file is exist, start from resume file. If not, just start from scratch.
```
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
Following is a equivalent setting by moonray command line.
```
moonray ... -checkpoint -scene_var checkpoint_mode 0 -scene_var checkpoint_interval 5 -scene_var checkpoint_time_cap 120 -resumable_output -resume_render
```

<br>
Next setting activate **quality-based** checkpoint render by **quality-steps 2**. Other setting is same as above.
```
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
Following is a equivalent setting by moonray command line of above.
```
moonray ... -checkpoint -scene_var checkpoint_mode 1 -scene_var checkpoint_quality_steps 2 -scene_var checkpoint_time_cap 120 -resumable_output -resume_render
```



