# TransformNormalMap

**MAP SHADER**

Documentation for class TransformNormalMap



---

## <p style="color:blue;">Normal attributes</p>

## input_normal

**Vec3f** *bindable*


Default value : [ 0, 0, 1 ]




input normal in either tangent or render space






---

## <p style="color:blue;">General attributes</p>

## decode_input_normal

**Bool** 


Default value : True




decode the input normal if it's in tangent space [0,1] -> [-1,1]




## transform

**Int** *enum*



- tangent to render = 0 (default)

- render to tangent = 1





transform to apply to the normals





