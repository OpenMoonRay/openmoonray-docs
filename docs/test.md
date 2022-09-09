---
title: Randy test
# uncomment if you want MathJax formatting available
maths: 1
---


Randy testing


##### To create a code snippet with C++ style formatting 

~~~ c++
void
debugPrintThreadID(const char *contextString)
{
    if (!contextString) contextString = "-- Thread ID = ";
    pid_t tid = syscall(SYS_gettid);

    // This printing is thread safe.
    std::printf("%s%d\n", contextString, tid);
    std::fflush(stdout);
}
~~~

``` c++
// This function round a floating point number to a certain lowest significant bit from the right
// Rounding is away from zero
finline float roundFloat(const float in, const uint8_t lsb)
{
    float out = in;
    unsigned int *outInt = reinterpret_cast<unsigned int*>(&out);
    if (((*outInt) & 0x7f800000) == 0) return 0; // make all denormalized coding zero
    if (((*outInt) | 0x807fffff) == 0xffffffff) return out; // Inf and NaN remains the same
    *outInt += 1<<lsb;
    *outInt &= ((unsigned int)(-1))<<lsb;
    return out;
}
```

##### Math
$\sqrt{3x-1}+(1+x)^2$

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

##### shell

``` shell
$ moonray_gui -in scene.rdla -in scene.rdlb -out scene.exr
```
