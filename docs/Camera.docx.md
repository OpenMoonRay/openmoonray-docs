# Camera

> Attributes
>
> near
>
> f ar mb
>
> mb shutter open
>
> mb shutter close mb shutter bias pixel sample map
>
> Pixel Sample Map Usage Example:

### Attributes

> near

+---------------------------------------------+------------------------+
| > **Name:**                                 | > near                 |
+=============================================+========================+
| > **Type:**                                 | > *float*              |
+---------------------------------------------+------------------------+
| > **Default:**                              | > 1.0                  |
+---------------------------------------------+------------------------+

> far

+--------------------------------------+-------------------------------+
| > **Name:**                          | > f ar                        |
+======================================+===============================+
| > **Type:**                          | > *float*                     |
+--------------------------------------+-------------------------------+
| > **Default:**                       | > 10000.0                     |
+--------------------------------------+-------------------------------+

> mb

+---------------------------------------------+------------------------+
| > **Name:**                                 | > mb                   |
+=============================================+========================+
| > **Type:**                                 | > *bool*               |
+---------------------------------------------+------------------------+
| > **Default:**                              | > f alse               |
+---------------------------------------------+------------------------+

> mb shutter open

+---------------------------+------------------------------------------+
| > **Name:**               | > mb_shutter_open                        |
+===========================+==========================================+
| > **Type:**               | > *float*                                |
+---------------------------+------------------------------------------+
| > **Default:**            | > -0.25                                  |
+---------------------------+------------------------------------------+

> mb shutter close

+---------------------------+------------------------------------------+
| > **Name:**               | > mb_shutter_close                       |
+===========================+==========================================+
| > **Type:**               | > *float*                                |
+---------------------------+------------------------------------------+
| > **Default:**            | > 0.25                                   |
+---------------------------+------------------------------------------+

> mb shutter bias

+----------------------------+-----------------------------------------+
| > **Name:**                | > mb_shutter_bias                       |
+============================+=========================================+
| > **Type:**                | > *float*                               |
+----------------------------+-----------------------------------------+
| > **Default:**             | > 0.0f                                  |
+----------------------------+-----------------------------------------+

> pixel sample map

+----------------------+-----------------------------------------------+
| > **Name:**          | > pixel_sample_map                            |
+======================+===============================================+
| > **Type:**          | > *string*                                    |
+----------------------+-----------------------------------------------+
| > **Default:**       | > \"\"                                        |
+----------------------+-----------------------------------------------+
| > **Comment:**       | > f ile path to a gray scale image            |
+----------------------+-----------------------------------------------+

### Pixel Sample Map Usage

> A pixel sample map is a gray scale image that multiplies the number of
> pixel samples per pixel. This can be usef ul when certain parts of a f
> rame conv erge more slowly than other parts. The image map is squashed
> / stretch to f it the region window of the f rame. The gray scale v
> alues can be greater than 1 in order to supersample the pixels.

##### Example:

> Grimmel\'s white hair is quite noisy
>
> SceneVariables { \[\"pixel samples\"\] = 4
>
> }
>
> PerspectiveCamera { \[\"pixel sample map\"\] = \"\"
>
> }
>
> All pixels hav e 16 samples
>
> ![](media/image1.jpeg){width="7.017077865266842in" height="3.9375in"}
>
> ![](media/image2.jpeg){width="7.0in" height="3.9375in"}We can mask it
> with this image
>
> The white pixels = 1, and the grey pixels = 0.25.
>
> Now we set
>
> SceneVariables {
>
> \[\"pixel samples\"\] = 8
>
> }
>
> PerspectiveCamera { \[\"pixel sample map\"\] = \"hair_mask.png\"
>
> }
>
> ![](media/image3.jpeg){width="6.999998906386701in"
> height="3.9375in"}And this dev otes more pixel samples to the hair!
> The hair region has 64 samples, and ev ery where else had 16 samples.
