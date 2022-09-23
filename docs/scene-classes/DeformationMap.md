# DeformationMap

**MAP SHADER**

Documentation for class DeformationMap



---

## <p style="color:blue;">General attributes</p>

## output_mode

**Int** *enum*



- RGB = 0

- deformation_S = 1

- deformation_T = 2

- deformation_avg = 3 (default)





Controls output: 

		    RGB - R = deformation along S, G = deformation along T, B = average deformation from ref space 

		    deformation_S - deformation along S 

		    deformation_T - deformation along T 

		    deformation_avg - average deformation from ref space




## use_warning_color

**Bool** 


Default value : False




If derivatives are missing or zero output the warning color erroring out




## warning_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Warning color to output when derivatives are missing or zero





