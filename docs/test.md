---
title: Randy test
# uncomment if you want MathJax formatting available
maths: 1
---


Randy testing


##### To create a code snippet with C++ style formatting 

``` c++
void
debugPrintThreadID(const char *contextString)
{
    if (!contextString) contextString = "-- Thread ID = ";
    pid_t tid = syscall(SYS_gettid);

    // This printing is thread safe.
    std::printf("%s%d\n", contextString, tid);
    std::fflush(stdout);
}
```

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
$ "moonray_gui" -in scene.rdla -in scene.rdlb -out scene.exr
```


``` shell
[user&#64;linuxbox imx-bootlets-src-10.05.02]$ make CROSS_COMPILE=arm-none-eabi-  clean
rm -rf *.sb
rm -f sd_mmc_bootstream.raw
rm -f linux_prep/board/*.o
...
Files:
rm -f power_prep.o eabi.o
Build output:
make[1]: Leaving directory `/home/...'
[user@linuxbox imx-bootlets-src-10.05.02]$ make CROSS_COMPILE=arm-none-eabi-
make[1]: Entering directory `/home/...'
...
@echo "generating U-Boot boot stream image"
#elftosb2 -z -c ./uboot_prebuilt.db -o imx23_uboot.sb
echo "generating kernel bootstream file sd_mmc_bootstream.raw"
generating kernel bootstream file sd_mmc_bootstream.raw
#Please use cfimager to burn xxx_linux.sb. The below way will no
#work at imx28 platform.
> test
$ test
rm -f sd_mmc_bootstream.raw
[user@linuxbox imx-bootlets-src-10.05.02]$
pi@raspberrypi ~ $ sudo sh -c "echo 17 > /sys/class/gpio/export"
pi@raspberrypi ~ $ sudo sh -c "echo out > /sys/class/gpio/gpio17/direction"
pi@raspberrypi ~ $ sudo sh -c "echo 1 > /sys/class/gpio/gpio17/value"
pi@raspberrypi ~ $ sudo sh -c "echo 0 > /sys/class/gpio/gpio17/value"
pi@raspberrypi ~ $
[user@linuxbox ~]$ # copy other stuff to the SD card
root@imx233-olinuxino-micro:~# lsmod
  Not tainted
[user@linuxbox ~]$ tail -n 2 /mnt/rpi/etc/inittab
#Spawn a getty on Raspberry Pi serial line
T0:23:respawn:/sbin/getty -L ttyAMA0 115200 vt100
pi@raspberrypi:~/Adafruit-WebIDE$mkdir tmp
pi@raspberrypi:~/Adafruit-WebIDE$ npm config set tmp tmp
pi@raspberrypi:~/Adafruit-WebIDE$ npm install
pi@raspberrypi ~/Adafruit-WebIDE $ ifconfig eth0
eth0      Link encap:Ethernet  HWaddr b5:33:ff:33:ee:aq
          inet addr:10.42.0.60  Bcast:10.42.0.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:21867 errors:0 dropped:0 overruns:0 frame:0
          TX packets:8684 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:27338495 (26.0 MiB)  TX bytes:1268356 (1.2 MiB)
[root@alarmpi ~]# python2 pagekite.py www raspberrypi.pagekite.me AND 22 ssh:raspberrypi.pagekite.me
>>> Hello! This is pagekite.py v0.5.4a.                         
    [CTRL+C = Stop]
    Connecting to front-end 178.79.140.143:443 ...
    - Protocols: http http2 http3 https websocket irc finger httpfinger raw
    - Ports: 79 80 443 843 2222 3000 4545 5222 5223 5269 5670 6667 8000 8080
    - Ports: 8081 9292
    - Raw ports: 22 virtual
    Quota: You have 2560.00 MB, 31 days and 5 connections left.
<> Flying localhost:22 as ssh://raspberrypi.pagekite.me:22/ (HTTP proxied)
<> Flying builtin HTTPD as https://raspberrypi.pagekite.me/
    - https://raspberrypi.pagekite.me/
<< pagekite.py [flying]   Kites are flying and all is well.
[root@alarmpi ~]#

[andy@rodeo rails-app]$ curl -H &quot;Factory: hangar" -H "Accept: application/json" --data '{"account": {"name":"Test Account"}}' ...
curl: (6) Could not resolve host: ...
[andy@rodeo rails-app]$ curl -H "Factory: hangar" \
                             -H "Accept: application/json"\
                             --data '{"account": {"name":"Test Account"}}'\
                             ...
curl: (6) Could not resolve host: ...
$ curl -H <span class="s2">"Factory: hangar"\
       -H "Accept: application/json"\
       --data '{"account": {"name&":&quot;Test Account"}}'\
       ...
curl: (6) Could not resolve host: ...
```
