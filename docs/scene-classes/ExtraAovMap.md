# ExtraAovMap

**MAP SHADER**

Documentation for class ExtraAovMap



---

## <p style="color:blue;">General attributes</p>

## color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bind the root of a map shader network that you want evaluated as an extra aov




## label

**String** 


Default value : 




Sets the LPE label that is used for the extra aov




## post_scatter

**Bool** 


Default value : False




If true, accumulate this aov when scattering off the surface as an indirect ray (after the LPE scatter transition event, after path throughput multiplication), rather than when the surface is first intersected.  The purpose of this setting is to efficiently capture information from all rays that leave a surface that could potentially intersect and trigger aov evaluation on other surfaces.





