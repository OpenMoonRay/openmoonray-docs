# OpenColorIO in Moonray_gui

Moonray_gui supports OpenColorIO v2 starting with version (TBD). Users
may now supply one .ocio config file to specify the transformation from
scene-referred linear space to ACES or some other color space. By
setting the **$OCIO** path environmental variable, users can specify
which .ocio config to use (ex:
/**rel/rez/dwa/ocio_configs/1.8.0.0/ocio/gill.ocio**). If no config file
is provided (or if the file path is bad), a raw config file is created
(basically a no-op). The hotkey **Z **can be used to toggle between the
previous method of color grading and the new method using OCIO. 

### Moonray_gui Color Transformation Order

1.  Apply exposure

2.  Apply user gamma

3.  Channel Filtering (RGB, RED, GREEN, BLUE, ALPHA, or LUMINANCE)

4.  Apply display/view transform specified in config OR apply 1.0/2.2
    gamma

5.  Clamp \[0, 1\]

### A few internal notes...

-   OCIO by default uses sRGB luma coefficients, but moonray_gui seems
    to use NTSC coefficients

-   There is no noticeable performance degradation (Cornell Box
    1920x1920: w/o OCIO avg: 3:73, w/ OCIO avg: 3.76)

<!-- -->

-   An extra step is being done currently to convert OCIO's
    PackedImgDesc → RGB888 → QT RGB888. Ideally we'd remove the
    intermediary and just perform PackedImgDesc → QT RGB888, but the
    structure of the codebase doesn't support that right now.

-   The saturation hotkey ('**6**') was removed during this update
    because it wasn't doing anything (was just a copy of the RGB
    codepath). 

-   Dithering isn't currently being performed – it's unclear whether
    this is needed or if OCIO does this for us

-   OCIO support helps solve issues like in MOONRAY-4448 (
    [MOONRAY-4448](https://jira.dreamworks.net/browse/MOONRAY-4448) -
    moonray_gui displays grey specular highlight values over 13.0 Open )

| **Without OCIO**                                                        | **With OCIO**                                                          |
|-------------------------------------------------------------------------|------------------------------------------------------------------------|
| <img src="OpenColorIO+in+Moonray_gui_files/image1.tmp" style="width:2.22917in;height:2.15625in" /> | <img src="OpenColorIO+in+Moonray_gui_files/image2.tmp" style="width:2.6875in;height:2.46875in" /> |

-   Debug modes RGB_NORMALIZED and NUM_SAMPLES use the non-OCIO code
    path

-   Currently uses a CpuProcessor – we might look into using a
    GpuProcessor in the future
