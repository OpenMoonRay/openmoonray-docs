# MoonRay

> **Adaptive Sampling**
>
> As of v ersion 4.26, Moonray supports adaptiv e sampling.
>
> The goal of this f eature is to allow the user to set a desired ov
> erall noise lev el instead of the explicitly setting the numb er of
> samples per pixel (SPP), and hav e the renderer adaptiv ely choose the
> number of samples on the f ly on a per pixel basis such that a f inal
> desired error threshold is reached all ov er the image. Since we want
> the noise at each pixel to f all below this specif ied error
> threshold, it also has the benef icial side ef f ect of removing f
> ireflies from the output.
>
> ![](media/image1.png){width="7.018331146106736in"
> height="2.9218744531933507in"}As an example, here are 2 equal time
> renders, the f irst with adaptiv e sampling of f , and the second with
> adaptiv e sampling swi tched on. Notice how the error is spread out
> more unif ormly in the second image, as well as how the f iref lies
> are attenuated.
>
> Unif orm sampling abov e, adaptiv e sampling below
>
> ![](media/image2.png){width="7.01866469816273in"
> height="2.9218744531933507in"}
>
> Here is a description of the attributes related to adaptiv e sampling.

+-----+----------------------------------------------------------------+
| > * | > **Description**                                              |
| *At |                                                                |
| tri |                                                                |
| but |                                                                |
| e** |                                                                |
| >   |                                                                |
| >   |                                                                |
|  ** |                                                                |
| nam |                                                                |
| e** |                                                                |
+=====+================================================================+
| >   | > The attribute is an enumeration of samples modes. These v    |
| \"s | > alues are currently supported:                               |
| amp | >                                                              |
| lin | > More modes may be added in the f uture.                      |
| g\_ |                                                                |
| >   |                                                                |
| >   |                                                                |
| mod |                                                                |
| e\" |                                                                |
+-----+----------------------------------------------------------------+
| \"m | > When adaptiv e sampling is turned on, it\'s possible that a  |
| in_ | > tile may be mis -classif ied as hav ing conv erged bef ore   |
| ada | > it has actually conv erged. This manif ests itself as square |
| pti | > 8x8 artif acts in the f inal image. The higher this v alue,  |
|     | > the less the chance of this happening. It def aults to 16    |
| > v | > which is a reasonable number f or most f inal f rame         |
| >   | > renders. Y ou may f ind it benef icial to lower the v alue   |
|  e_ | > to 8 or 10 f or inter activ e or prev iew quality use cases. |
| sam | > Note that unlike the \"pixel_samples\" attribute, this is a  |
| ple | > linear number not a square number, i.e 2 equals 2, not 4.    |
| s\" | > The                                                          |
|     | >                                                              |
|     | > def ault v alue is 16.                                       |
+-----+----------------------------------------------------------------+
| >   | > When adaptiv e sampling is turned on, this represents the    |
|  \" | > max number of samples we can throw at a pixel. Each pixel is |
| max | > deemed as conv erged when either it hits the max adaptiv e   |
| _ad | > sample limit, or its error f alls below the target adaptiv e |
| apt | > error threshold, wh ichev er                                 |
| >   | >                                                              |
|  iv | > f irst. When setting this, it\'s generally good practice to  |
| >   | > err on the high side and rely on the \"target_adaptiv        |
|  e_ | > e_error\" attribute to control SPP rendered. Note that       |
| sam | > unlike the \"pixel_samples\" attribute, this is a linear     |
| ple | > number not a square number, i.e 2 equals 2, not 4. The def   |
| > h | > ault                                                         |
| app |                                                                |
| ens |                                                                |
| >   |                                                                |
| s\" |                                                                |
| >   |                                                                |
| the |                                                                |
| >   |                                                                |
| num |                                                                |
| ber |                                                                |
| >   |                                                                |
|  of |                                                                |
| >   |                                                                |
| > v |                                                                |
| > a |                                                                |
| lue |                                                                |
| >   |                                                                |
|  is |                                                                |
| >   |                                                                |
|  40 |                                                                |
| 96. |                                                                |
+-----+----------------------------------------------------------------+
| >   | > When adaptiv e sampling is activ e (v ia the sampling_mode   |
|  ta | > attribute), this represents the desired quality of the       |
| rge | > output images. Lower s will giv e higher quality but take    |
| t_a | > longer to render. Higher v alues will giv e lower quality    |
| dap | > but render quicker. The def ault v alue is 0.08.             |
| >   |                                                                |
| >   |                                                                |
| tiv |                                                                |
| >   |                                                                |
|  e_ |                                                                |
| err |                                                                |
| orv |                                                                |
| > a |                                                                |
| lue |                                                                |
+-----+----------------------------------------------------------------+

> Example usage:
>
> SceneVariables
>
> {
>
> \[\"sampling mode\"\] = 1,
>
> \[\"min adaptive samples\"\] = 16, \[\"max adaptive samples\"\] =
> 4096,
>
> \[\"target adaptive error\"\] = 0.08,
>
> }
>
> ![](media/image3.png)In raas_gui y ou can hit \'8\' to toggle on a
> diagnostic v iew of the number of samples rendered per pixel. The
> brighter the pixel, the higher the sample count. As a reminder, the
> \'N\' key toggles optix denoising which works well in conjunction with
> adaptiv e sampling. So f or this beauty image (abov e), we would a
> pixel heat map like this (below):
>
> Questions and Answers
>
> **What happens if I set min_adaptive_samples too low?**
>
> Setting this attribute too low can cause the algorithm to mis -classif
> y tiles as being prematurely conv erged bef ore they are actually conv
> erged to the desired lev el. If y ou see 8x8 blocky artif acts in the
> f inal image, it\'s likely that y ou\'v e set this v alue too low.
>
> **What happens if I set min_adaptive_samples too high?**
>
> Setting this attribute too high can cause excessiv ely long render
> times. The higher the v alue, the less leeway the algorithm has to mov
> e samples f rom already conv erged tiles to tiles which are in need of
> more samples. This v alue should rarely , if ev er, be set higher than
> 24 or 32, 16 is the def ault currently . **What happens if I set
> max_adaptive_samples too low?**
>
> This is one way of reducing render time but the cav eat is that by
> setting this v alue low, it reduces the algorithms ability t o remov e
> f iref lies. The f iref ly remov al works by throwing more samples at
> pixels where f iref lies are detected, but the number of samples gets
> clamped to the max_adaptiv e_samples v alue regardless of whether f
> iref lies are still present or not.
>
> **What happens if I set max_adaptive_samples too high?**
>
> This can cause excessiv e render times if the target_adaptiv e_error
> attribute is set too low. The trick in f inding good settings is
> setting
>
> max_adaptiv e_sample high enough to remov e f iref lies, and using
> target_adaptiv e_error to control the ov erall render time. We h av e
> discov ered that this is easier said than done howev er.
>
> **What happens if I set target_adaptive_error too low?**
>
> Render times may balloon. This trick is setting this attribute low
> enough such that the image is rendered to the desired nois e lev el,
> but no cleaner.
>
> **What happens if I set target_adaptive_error too high?**
>
> The f inal image may be noisier than desired.
>
> Known Issues
>
> The only way to currently v isualize the SPP count is through a debug
> v iew in raas_gui. Going f orward the intent is to add a n ew AOV ty
> pe containing the exact number samples per pixel.
>
> The min/max samples counts are specif ied a linear v alues, not
> squared v alues as with \"pixel samples\" attribute to allow f or f
> iner g rained control ov er the min SPP. This introduces an unf
> ortunate inconsistency when specif y ing SPP f or the dif f erent
> sampling modes. One possibility to to linearize all sample count
> attributes in the renderer.
>
> Adaptiv e sampling isn\'t supported in v ector mode. If the -exec_mode
> option is set to auto, Moonray will automatically f allback to scalar
> execution if adaptiv e sampling is activ e.
