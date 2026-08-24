---
title: MoonRay GUI Viewer V2
---
# MoonRay GUI Viewer V2

The **moonray_gui_v2** executable is the successor to [moonray_gui](../moonray_gui), which is the interactive 
counterpart to [**moonray**](../moonray). It leverages [imgui](https://github.com/ocornut/imgui) as the graphical 
interface library in order to remove the more bloated QT dependency. It also includes a number of new features to 
make the tool easier to use.

The same core concepts are true for **moonray_gui_v2** as they are for **moonray_gui**, so you can refer to the 
[moonray_gui](../moonray_gui) page for general information for now. This page will be dedicated to the differences 
coming with moonray_gui_v2, including 1) how to invoke it, 2) additions, and 3) hotkeys.

## Usage
Here are some instructions on how to invoke moonray_gui_v2:

### Prior to refplat-vfx2025
You can use the `moonray_gui` executable for v1, and the `moonray_gui_v2` executable for v2.

### refplat-vfx2025+
**moonray_gui_v2** is the default from this point onward, because we do not support QT6. Using the `moonray_gui`
executable will cause moonray_gui_v2 to run. The goal is to deprecate moonray_gui v1. 

## Additions for moonray_gui_v2
We've added a number of new features for moonray_gui_v2:

### Status Bar
Instead of printing information about the status of the application to the terminal, we now display it in a bar at the 
bottom of the window. It includes information like:
- Current pixel under the mouse
- Channel mode
- Fast progressive mode
- Denoiser mode & buffers
- Camera type (Orbit or Free)
- Render output name

We also included a "?" button that opens a help menu. This help menu includes comprehensive information about the app 
and how to use it.

### Image Navigation
The window is now re-sizable, instead of fixed-size, and we've added panning and zooming features. We also display 
the xyz axes to help users understand their scene's camera orientation. 

### Inspectors
The **pixel inspector** allows users to investigate the RGB value of the pixel underneath their cursor. The 
**scene inspector**, which once printed results to the terminal, now has its own UI element and displays interactive 
updates.

### Key Bindings
The key bindings menu allows you to view current hotkey bindings, and set custom bindings based on user preferences. 

### Snapshot Viewer
The snapshot viewer displays snapshots in your given snapshot directory path, and allows you to toggle between them 
for easy image comparison. 

## Hotkeys
Any keys that have changed between moonray_gui and moonray_gui_v2 have been marked with a star.

> [!NOTE]
> You can use the `?` button in the bottom right to see all of these hotkeys in the application itself.

**Camera Hotkeys**
| **Action**         | **Hotkey**   | **Notes**                         |
| ------------------ | ------------ | --------------------------------- |
| Toggle Camera Type | `O`          |                                   |
| Forward            | `W`          |                                   |
| Backward           | `S`          |                                   |
| Left               | `A`          |                                   |
| Right              | `D`          |                                   |
| Up                 | `SPACE`      |                                   |
| Down               | `C`          |                                   |
| Slow Down          | `Q`          |                                   |
| Speed Up           | `E`          |                                   |
| Reset              | `R`          |                                   |
| Recenter           | `F`          |                                   |
| Frame Scene        | `SHIFT`+`F`  | new in v2                         |
| Print Matrices*    | `M`          | Previously `T`                    |
| Set Up Vector      | `U`          |                                   |
| Orbit*             | `ALT`+`LMB`  | FreeCam previously used LMB only  |
| Dolly              | `ALT`+`RMB`  |                                   |
| Pan                | `ALT`+`MMB`  |                                   |
| Roll*              | `CTRL`+`LMB` | Previously `ALT`+`LMB`+`RMB`      |

**Denoising Hotkeys**
| **Action**         | **Hotkey**   | **Notes**                         |
| ------------------ | ------------ | --------------------------------- |
| Toggle On/Off      | `N`          |                                   |
| Toggle Mode        | `SHIFT`+`N`  |                                   |
| Select Buffers     | `B`          |                                   |

**Channel Hotkeys**
| **Action**         | **Hotkey**   | **Notes**                         |
| ------------------ | ------------ | --------------------------------- |
| RGB                | ``` ` ```    |                                   |
| Red                | `1`          |                                   |
| Green              | `2`          |                                   |
| Blue               | `3`          |                                   |
| Alpha              | `4`          |                                   |
| Luminance          | `5`          |                                   |
| RGB Normalized*    | `6`          | Previously `7`                    |
| Num Samples*       | `7`          | Previously `8`                    |

**Color Management Hotkeys**
| **Action**         | **Hotkey**   | **Notes**                         |
| ------------------ | ------------ | --------------------------------- |
| Exposure Increase  | `UP`         |                                   |
| Exposure Decrease  | `DOWN`       |                                   |
| Exposure Adjust    | `X`+`LMB`    |                                   |
| Exposure Reset     | `SHIFT`+`X`  |                                   |
| Gamma Adjust       | `Y`+`LMB`    |                                   |
| Gamma Reset        | `SHIFT`+`Y`  |                                   |

**Fast Progressive Mode Hotkeys**
| **Action**         | **Hotkey**   | **Notes**                         |
| ------------------ | ------------ | --------------------------------- |
| Toggle On/Off      | `L`          |                                   |
| Next Mode          | `ALT`+`UP`   |                                   |
| Previous Mode      | `ALT`+`DOWN` |                                   |

**Window Hotkeys**
| **Action**                     | **Hotkey**   | **Notes**                         |
| ------------------------------ | ------------ | --------------------------------- |
| Open/Close Key Bindings Editor | `G`          | new in v2                         |
| Open/Close Pixel Inspector     | `P`          | new in v2                         |
| Open/Close Scene Inspector     | `I`          | now opens a window instead of printing info to console |
| Open/Close Snapshot Viewer     | `ALT`+`K`    | new in v2                         |
| Open/Close Status Bar          | `ALT`+`S`    | new in v2                         |
| Open/Close Exposure Editor*    | `ALT`+`X`    | Previously `X`                    |
| Open/Close Gamma Editor*       | `ALT`+`Y`    | Previously `Y`                    |
| Open/Close Path Visualizer     | `V`          |                                   |
| Open/Close Axis Display        | `SHIFT`+`A`  | new in v2                         |

**Path Visualizer**
| **Action**                     | **Hotkey**     | **Notes**                         |
| ------------------------------ | -------------- | --------------------------------- |
| Toggle On/Off                  | `SHIFT`+`V`    |                                   |
| Pick pixel                     | `LMB`          | just click the pixel you want to see the ray tree for |
| Previous Node                  | `SHIFT`+`LEFT` | selects the previous node (displays path vertex information in the path visualizer menu) |
| Next Node                      | `SHIFT`+`RIGHT`| selects the next node (displays path vertex information in the path visualizer menu) |

**Miscellaneous Hotkeys**
| **Action**                     | **Hotkey**     | **Notes**                         |
| ------------------------------ | -------------- | --------------------------------- |
| Render Output Previous         | `,`            |                                   |
| Render Output Next             | `.`            |                                   |
| Save Image                     | `CTRL`+`S`     | new in v2                         |
| Take Snapshot                  | `K`            |                                   |
| Next Snapshot                  | `RIGHT`        | new in v2, toggle next snapshot   |
| Prev Snapshot                  | `LEFT`         | new in v2, toggle prev snapshot   |
| Tile Progress Toggle*          | `T`            | Previously `P`                    |
| Print Key Bindings             | `H`            | prints keybindings to console     |

