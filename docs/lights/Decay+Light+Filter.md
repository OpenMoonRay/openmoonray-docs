# Decay Light Filter

-   [Introduction](#DecayLightFilter-Introduction)

-   [Attributes](#DecayLightFilter-Attributes)

    -   [falloff near](#DecayLightFilter-falloffnear)

    -   [falloff far](#DecayLightFilter-fallofffar)

    -   [near start](#DecayLightFilter-nearstart)

    -   [near end](#DecayLightFilter-nearend)

    -   [far start](#DecayLightFilter-farstart)

    -   [far end](#DecayLightFilter-farend)

-   [Examples](#DecayLightFilter-Examples)

    -   [No Decay](#DecayLightFilter-NoDecay)

    -   [Fade in and fade out](#DecayLightFilter-Fadeinandfadeout)

    -   [sharp decay (requires a small light
        source)](#DecayLightFilter-sharpdecay(requiresasm)

    -   [Fade in ](#DecayLightFilter-Fadein)

    -   [Fade out](#DecayLightFilter-Fadeout)

    -   [broad decay](#DecayLightFilter-broaddecay)

 

# Introduction

The Decay Light Filter causes the light to fade in and fade out. It is a
linear ramp multiplier.

 

# Attributes

## falloff near

| **Name:**    | falloff_near            |
|--------------|-------------------------|
| **Type:**    | *bool*                  |
| **Default:** | false                   |
| **Comment:** | does the light fade in? |

## falloff far

| **Name:**    | falloff_far              |
|--------------|--------------------------|
| **Type:**    | *bool*                   |
| **Default:** | false                    |
| **Comment:** | does the light fade out? |

## near start

| **Name:**    | near_start                              |
|--------------|-----------------------------------------|
| **Type:**    | *float*                                 |
| **Default:** | 0.0                                     |
| **Comment:** | distance from light to start of fade in |

## near end

| **Name:**    | near_end                              |
|--------------|---------------------------------------|
| **Type:**    | *float*                               |
| **Default:** | 0.0                                   |
| **Comment:** | distance from light to end of fade in |

## far start

| **Name:**    | far_start                                |
|--------------|------------------------------------------|
| **Type:**    | *float*                                  |
| **Default:** | 0.0                                      |
| **Comment:** | distance from light to start of fade out |

## far end

| **Name:**    | far_end                                |
|--------------|----------------------------------------|
| **Type:**    | *float*                                |
| **Default:** | 0.0                                    |
| **Comment:** | distance from light to end of fade out |

#  Examples

 

 

### No Decay

filter = DecayLightFilter("/Scene/lighting/decay") {  
\["falloff near"\] = false,  
\["falloff far"\] = false,  
}

 

<img src="media/image1.jpeg" style="width:4.875in;height:2.73958in" />

 

### Fade in and fade out

filter = DecayLightFilter("/Scene/lighting/decay") {  
\["falloff near"\] = true,  
\["falloff far"\] = true,  
\["near start"\] = 4.0,  
\["near end"\] = 5.0,  
\["far start"\] = 7.0,  
\["far end"\] = 8.0,  
}

<img src="media/image2.png" style="width:4.875in;height:2.73958in" />

 

### sharp decay (requires a small light source)

spot = OldSpotLight("/Scene/lighting/spot") {  
\["lens radius"\] = 0.1,  
}

 

filter = DecayLightFilter("/Scene/lighting/decay") {  
\["falloff near"\] = true,  
\["falloff far"\] = true,  
\["near start"\] = 5.0,  
\["near end"\] = 5.0,  
\["far start"\] = 7.6,  
\["far end"\] = 7.6,  
}

<img src="media/image3.png" style="width:4.875in;height:2.73958in" />

### Fade in 

filter = DecayLightFilter("/Scene/lighting/decay") {  
\["falloff near"\] = true,  
\["falloff far"\] = false,  
\["near start"\] = 4.0,  
\["near end"\] = 5.0,  
}

<img src="media/image4.jpeg" style="width:4.875in;height:2.73958in" />

 

### Fade out

filter = DecayLightFilter("/Scene/lighting/decay") {  
\["falloff near"\] = false,  
\["falloff far"\] = true,  
\["far start"\] = 7.0,  
\["far end"\] = 8.0,  
}

 

<img src="media/image5.jpeg" style="width:4.875in;height:2.73958in" />

 

### broad decay

spot = OldSpotLight("/Scene/lighting/spot") {  
\["lens radius"\] = 1.4,  
}

 

filter = DecayLightFilter("/Scene/lighting/decay") {  
\["falloff near"\] = true,  
\["falloff far"\] = true,  
\["near start"\] = 3.0,  
\["near end"\] = 5.0,  
\["far start"\] = 7.0,  
\["far end"\] = 9.0,  
}

<img src="media/image6.jpeg" style="width:4.875in;height:2.73958in" />
