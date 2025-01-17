---
title: Affinity Control
---
# Affinity Control

## Purpose
The purpose of the affinity control is to maximize CPU/Memory cache coherency and minimize inter NUMA-node
memory access activities, especially for the massive read/write memory access like vector mode bundled queue
and pool entries. Using CPU and Memory affinity options, rendering speed might gain especially if your host
has many NUMA-nodes like 8. (But improvement would depend on the hardware environment.)

## Command line Options
We have several different options related to CPU / Memory affinity control for MoonRay.
The following are MoonRay's command line options that relate to affinity control

```bash
-cpu_affinity    <cpuIdDef>
-socket_affinity <socketIdDef>
-mem_affinity    on|off
-auto_affinity   on|off
```

There are 2 different affinity categories, CPU and Memory.<br>
We have 2 different options to specify CPU affinity. They are -cpu_affinity and -socket_affinity.<br>
We have 1 option to control Memory Affinity. This is -mem_affinity <br>
We also have special useful options for affinity control at a higher level and this is -auto_affinity.<br>
<br>
These options are related to NUMA architecture and only work on Linux environments.<br>
On Mac, all the options exist but these options are ignored at runtime because Mac is a unified memory
architecture and does not make sense regarding NUMA-related CPU/Memory affinity control.
<br>
In this section, explain CPU and Memory affinity options first. Then will explain higher-level affinity
control options next.

## CPU (physical socket or core) affinity control
```
-socket_affinity <id-def-string>
-cpu_affinity    <id-def-string>
```
You can run the moonray process attached to the physical cores by using one of 2 different CPU affinity
control options. "-socket_affinity" is used for physical socket-based control. And "-cpu_affinity" is
used for physical core-based control.<br>
<br>
We can get the same control of "-socket_affinity" option using "-cpu_affinity" if you carefully consider
which core# belongs to which socket. However, this is not as user-friendly, so we provide a "-socket_affinity"
option for simplifying the socket-based CPU affinity control.
"-cpu_affinity" option allows us to attach the MoonRay process to the cores in a more detailed way
like partial cores of particular sockets. This is useful when you want to run MoonRay inside a
particular NUMA node.<br>
<br>
Both options use id-def-string as an argument. The same id-def-string format is used for both options
but the meaning is different. The id-def-string for "-socket_affinity" indicates physical socket-id
and the id-def-string for "-cpu_affiity" indicates physical core-id.<br>
<br>
Format of id-def-string for "-socket_affinity" and "-cpu_affinity" option
1. list of IDs: separator is ','(comma) without space.
```
        "0,1,2"     -> 0 1 2
        "9,8,5"     -> 5 8 9
        "9,5,7"     -> 5 7 9
```
2. range def by '-' (dash) without space
```
        "0-3"       -> 0 1 2 3
        "1-3,8-9"   -> 1 2 3 8 9
        "5-7,0-2"   -> 0 1 2 5 6 7
```
3. You can use both the list of IDs and range def at the same time
```
        "0-2,3,4-6" -> 0 1 2 3 4 5 6
        "4,7-8,1-3" -> 1 2 3 4 7 8
```
4. Special keyword of meaning all<br>
        For example, some host has 2 sockets and each CPU has 8 cores 
```
        "all"       -> 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 (If used for -cpu_affinity)
                    -> 0 1 (If used for -socket_affinity)
```

You can simply specify <id-def-string> to the "-socket_affinity" option
```
-socket_affinity <id-def-string>

example

        -socket_affinity 0   : only use socket 0
        -socket_affinity all : use all sockets (i.e. use entire CPU cores)
```
You can specify <id-def-string> and also special value -1 for "-cpu-affinity" option
```
-cpu_affinity <id-def-string> : specify affinity CPU info by CPU core id.
or
-cpu_affinity -1 : This is a special case. force to disable all CPU affinity control.

example

        -cpu_affinity 0-3    : 0,1,2,3
        -cpu_affinity -1     : force to disable all CPU affinity control.
        -cpu_affinity all    : use all CPU cores.
```

## Combination of "-socket_affinity" and "-cpu_affinity"
(This is a "-auto_affinity off" case, Explain "-auto_affinity on" in the later).

* If you specify "-cpu_affinity" then MoonRay gets cpu-based control. If you specify "-cpu_affinity -1",
CPU affinity control is disabled.
* If you specify "-socket_affinity" then MoonRay gets socket-based control
* If you specify both "-socket_affinity" and "-cpu_affinity", MoonRay gets cpu-based control
(socket_affinity setting is ignored).
* If you specify neither of "-socket_affinity" and "-cpu_affinity" then CPU-affinity is disabled.

## Memory affinity control
Memory affinity option requires on or off argument
```
-mem_affinity on|off
```
You can specify memory affinity control by this option. This option works if the CPU affinity control
(-cpu_affinity or -socket_affinity options) is enabled. If CPU affinity control is disabled,
regardless of your mem_affinity setting, memory affinity control is automatically disabled.<br>
<br>
If memory affinity is enabled, all the MCRT threads allocate internal queues and pool memory from
a particular NUMA-node which is the MCRT thread belong to. This special memory management reduces
lots of the inter NUMA-node memory access penalties which causes slow down the rendering a lot.
Also can maximize L1, L2, and L3 cache coherency better.

## High level affinity control
Moonray provides high-level useful options and this is very powerful and easy to use.
```
-auto_affinity on|off
```
This option requires on or off argument.
The default is on.<br>
If auto affinity is on, CPU and Memory affinity condition is decided by the following logic.

1. if moonray runs on all the cores of the machines, Moonray automatically sets both CPU and
Memory affinity on. You don’t need to specif y -cpu_affiniyty , -socket_affinity", and
"-mem_affinity" options individually.
2. If Moonray runs on partial cores (i.e. not using entire machines), CPU and Memory affinity
are automatically disabled at this moment. However, this behavior will be changed in the
future and decide affinity setting more intelligently.

If auto affinity is off, fall back to the regular way and analyze "-cpu_affinity",
"-socket_affinity", and "-mem_affinity" options. This means if you want to specify detailed
affinity info by "-cpu_affinity", "-socket_affinity", and "-mem_affinity" options,
you have to specify "-auto_affinity of".

## Default and affinity disabled configuration
The default is "-auto_affinity on".
<br>
If you specify "-auto_affinity off" and nothing is specified about "-cpu_affinity" and
"-socket_affinity", "-cpu_affinity" and "-socket_affinity" definition is empty.
This means CPU affinity is disabled. However, if Moonray uses entire cores of the machine,
CPU affinity is automatically enabled for the MCRT phase.
But this is only CPU affinity and memory affinity is still off.
<br>
If you want to disable CPU affinity completely. you have to set both of 
"-auto_affinity off" and "-cpu_affinity -1"

