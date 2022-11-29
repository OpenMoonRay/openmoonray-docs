---
title: OpenColorIO in Moonray_gui

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OpenColorIO in Moonray_gui
---

Moonray_gui supports OpenColorIO-v2 for refplat v2021 and above.

## Usage
Users may supply one **.ocio** config file to specify the transformation from scene-referred linear space to ACES or some 
other color space. By setting the `$OCIO` path environmental variable, users can specify which **.ocio** config to use. 
If no config file is provided (or if the file path is bad), a raw config file is created (basically a no-op). The hotkey 
`Z` can be used to toggle between the previous method of color grading and the new method using OCIO. 

*__Note__: if the `-apply_lut` tag is used (or if you aren't using refplat v2021 or above), OCIO support will be disabled*

### Color Grading Transformation Order

1.  Apply exposure
2.  Apply user gamma
3.  Channel Filtering (RGB, RED, GREEN, BLUE, ALPHA, or LUMINANCE)
4.  Apply display/view transform specified in config OR apply 1.0/2.2
    gamma
5.  Clamp \[0, 1\]
