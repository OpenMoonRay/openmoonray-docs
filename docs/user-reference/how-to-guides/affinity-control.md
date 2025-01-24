---
title: Affinity Control
---
# Affinity Control

## Purpose
The purpose of the affinity control is to maximize CPU/Memory cache coherency and minimize inter NUMA-node
memory access activities, especially for the massive read/write memory access like vector mode bundled queue
and pool entries. Setting the CPU and Memory affinity options can improve rendering performance, especially
for hosts with a large number of NUMA nodes.

## Command line Options
There are several options related to CPU/Memry affinity control for MoonRay:

```bash
-cpu_affinity    <cpuIdDef>
-socket_affinity <socketIdDef>
-mem_affinity    on|off
-auto_affinity   on|off
```

There are two different affinity categories, CPU and Memory.<br>
There are two options to specify CPU affinity: "-cpu_affinity" and "-socket_affinity".<br>
There is one option to control memory affinity: "-mem_affinity".<br>
There is also an option for controlling affinity at a high level: "-auto_affinity". <br>
<br>
These options are related to NUMA architecture and only work in Linux environments.<br>
On Mac, the options exist but are ignored at runtime because Mac is a unified memory
architecture and does not require NUMA-related CPU/Memory affinity control.
<br>
In this section, we explain the explicit CPU and Memory affinity options.
The next section will explain the higher-level affinity control options.

## CPU (physical socket or core) affinity control
```
-socket_affinity <id-def-string>
-cpu_affinity    <id-def-string>
```
You can run the MoonRay process attached to the physical cores by using one of 2 different CPU affinity
control options. "-socket_affinity" is used for physical socket-based control. And "-cpu_affinity" is
used for physical core-based control.<br>
<br>
We can get the same control of "-socket_affinity" option using "-cpu_affinity" if you carefully consider
which core# belongs to which socket. However, this is not as user-friendly, so we provide a "-socket_affinity"
option for simplifying the socket-based CPU affinity control.
"-cpu_affinity" option allows us to attach the MoonRay process to the cores in a more detailed way
like some cores of particular sockets. This is useful when you want to run MoonRay inside a
particular NUMA node.<br>
These CPU affinity controls maximize L1, L2, and L3 cache coherency.<br>
<br>
Both options use id-def-string as an argument. The same id-def-string format is used for both options
but the meaning is different. The id-def-string for "-socket_affinity" indicates physical socket-id
and the id-def-string for "-core_affiity" indicates physical core-id.<br>
<br>
### Format of id-def-string
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
4. Special "all" keyword<br>
        For example, some host has 2 sockets and each Socket has 8 cores 
```
        "all"       -> 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 (If used for -cpu_affinity)
                    -> 0 1 (If used for -socket_affinity)
```
<br>

### CPU affinity option example
You can simply specify id-def-string to the "-socket_affinity" option
```
-socket_affinity <id-def-string>

example
        -socket_affinity 0   : only use socket 0
        -socket_affinity all : use all sockets (i.e. use entire CPU cores)
```
You can specify id-def-string or also special value -1 for "-cpu_affinity" option
```
-cpu_affinity <id-def-string> : specify affinity CPU info by CPU core id.
or
-cpu_affinity -1 : This is a special case. force to disable all CPU affinity control.

example
        -cpu_affinity 0-3   : 0,1,2,3
        -cpu_affinity -1    : force to disable all CPU affinity control.
        -cpu_affinity all   : use all CPU cores.
```
<br>
### Combination of "-socket_affinity" and "-cpu_affinity"
(This applies to the "-auto_affinity off" case. We explain "-auto_affinity on"
in the [later section](#high-level-affinity-control)).

* If you specify "-cpu_affinity" then MoonRay gets cpu-based control. If you specify "-cpu_affinity -1",
CPU affinity control is disabled.
* If you specify "-socket_affinity" then MoonRay gets socket-based control
* If you specify both "-socket_affinity" and "-cpu_affinity", MoonRay gets cpu-based control
(socket_affinity setting is ignored).
* If you specify neither of "-socket_affinity" and "-cpu_affinity" then CPU/Mem affinity is disabled
(See [here](#default-and-affinity-disabled-configuration) for more details).
<br>

## Memory affinity control
Memory affinity option requires on or off argument
```
-mem_affinity on|off
```
You can specify memory affinity control by this option. This option works if the CPU affinity control
("-cpu_affinity" or "-socket_affinity" options) is enabled. If CPU affinity control is disabled,
regardless of your "-mem_affinity" setting, memory affinity control is automatically disabled.<br>
<br>
If memory affinity is enabled, all the MCRT threads allocate internal queues and pool memory from
a particular NUMA-node which is the MCRT thread belong to. This special memory management reduces
lots of the inter NUMA-node memory access penalties which causes slowdown in the rendering a lot for
vector and XPU mode.

## High level affinity control
MoonRay provides high-level useful options and this is very powerful and easy to use.
```
-auto_affinity on|off
```
This option requires on or off argument.
The default is on.<br>
If auto affinity is on, CPU and Memory affinity condition is decided by the following logic.

1. If MoonRay runs on all the cores of the machines, MoonRay automatically sets both CPU and
Memory affinity on. You don't need to specify "-cpu_affinity", "-socket_affinity", and
"-mem_affinity" options individually.
2. If MoonRay runs on partial cores (i.e. not using the entire machine by using a small number
for "-threads" MoonRay command line options), CPU and Memory affinity are automatically disabled
at this moment. However, this behavior may be changed in the future to determine ideal affinity
settings more intelligently.

If auto affinity is off, the behavior is to fall back to the regular way and analyze "-cpu_affinity",
"-socket_affinity", and "-mem_affinity" options. This means if you want to specify detailed
affinity control by "-cpu_affinity", "-socket_affinity", and "-mem_affinity" options,
you have to specify "-auto_affinity off".

## Default and affinity disabled configuration
The default is "-auto_affinity on".<br>
<br>
If you specify "-auto_affinity off" and nothing is specified about "-cpu_affinity" and
"-socket_affinity", then "-cpu_affinity" and "-socket_affinity" definition is empty,
this means CPU affinity is disabled at this time. And also automatically Mem affinity is disabled
as well. But this is related to the default behavior of empty settings of "-cpu_affinity" and
"-socket_affinity". Default behaviour might be changed in the future version of MoonRay.<br>
<br>
If you want to disable all Affinity control completely, you must set both
"-auto_affinity off" and "-cpu_affinity -1". (memory affinity is automatically
off when CPU affinity is disabled). Future version of any default behaviour change does not
affect this and always disable all Affinity controls.

## Log Message
MoonRay outputs Affinity conditions to the log regardless of using -info options of MoonRay.<br>
The machine specs of the following examples are as follows.<br>
```
2 sockets
Total 384 HT cores.
8 NUMA-node
```
You can see 2 different info. One is for RenderPrep and another one is for MCRT.
MoonRay dumps RenderPrep affinity information at the time of RenderPrep starting.
MCRT info is output at the beginning of the MCRT stage.
Output formatting might be changed depending on the different versions.

### Example1: Using entire cores
This is an example of the following option.
```
-auto_affinity on
```
RenderPrep affinity control output:<br>
```
RenderPrep pid:2137518 CpuAffinityMask (cpuTotal:384) {
  cpuId(383~352) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(351~320) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(319~288) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(287~256) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(255~224) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(223~192) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(191~160) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(159~128) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(127~ 96) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId( 95~ 64) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId( 63~ 32) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId( 31~  0) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
}
```
This indicates actively used cores as a bit pattern. In this case, all the cores are ON.<br>
This is an example of MCRT phase output:<br>
```
MOONRAY MCRT thread pool {
  CPU-affinity control enabled : all : CPU-Tbl (total:384) {0-383}
  MEM-affinity control enabled : active-NUMA-node (total:8) {0-7}
}
```
MCRT info summarizes CPU/Memory affinity information.

### Example2: Only using socket0 with memory affinity on
If MoonRay uses only socket 0 using following the options:
```
-auto_affinity off -socket_affinity 0 -mem_affinity on
```
RenderPrep output is like this:
```
RenderPrep Socket-affinity 0 cpuIdTbl (total:192) {0-95,192-287}
RenderPrep pid:2141457 CpuAffinityMask (cpuTotal:384) {
  cpuId(383~352) bit(0000-0000-0000-0000/0000-0000-0000-0000) hex(    -    )
  cpuId(351~320) bit(0000-0000-0000-0000/0000-0000-0000-0000) hex(    -    )
  cpuId(319~288) bit(0000-0000-0000-0000/0000-0000-0000-0000) hex(    -    )
  cpuId(287~256) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(255~224) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(223~192) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId(191~160) bit(0000-0000-0000-0000/0000-0000-0000-0000) hex(    -    )
  cpuId(159~128) bit(0000-0000-0000-0000/0000-0000-0000-0000) hex(    -    )
  cpuId(127~ 96) bit(0000-0000-0000-0000/0000-0000-0000-0000) hex(    -    )
  cpuId( 95~ 64) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId( 63~ 32) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
  cpuId( 31~  0) bit(1111-1111-1111-1111/1111-1111-1111-1111) hex(ffff-ffff)
}
```
This indicates MoonRay only uses cores that belong to socket-0.<br>
MCRT affinity info output is like this:<br>
```
MOONRAY MCRT thread pool {
  CPU-affinity control enabled : CPU-Tbl (total:192) {0-95,192-287}
  MEM-affinity control enabled : active-NUMA-node (total:4) {0-3}
}
```
### Example3:  Disabled all affinity
If MoonRay disables all affinity control by following options:
```
-auto_affinity off -cpu_affinity -1
```
RenderPrep output is like this:
```
RenderPrep CPU-affinity control disabled
```
and MCRT affinity info output is like this:
```
MOONRAY MCRT thread pool {
  MCRT-CPU-affinity control disabled : numRenderThreads:384
  MEM-affinity control disabled
}
```

## Technical Details
If you specify CPU affinity control, this affinity info applies to the both RenderPrep phase and the MCRT phase.
However, the behavior is a slightly different between RenderPrep and MCRT.<br>
At the RenderPrep stage, CPU affinity control is process-based. We don't know which thread is attached
to which cores at runtime because threads are generated by TBB thread pool on the fly during the RenderPrep
stage. However, at the process level all the thread activities are bounded to the user defined CPU ids and
it looks as thought the process is attached to the particular sets of CPU cores and this MoonRay process never
uses cores which are not listed in the defined core ids.<br>
At the MCRT stages, CPU affinity control works more precisely. MoonRay is using its own thread pool
(i.e. not the TBB thread pool) and it precisely controls which MCRT thread is attached to which core.
This maximizes the CPU cache coherency much better.<br>
<br>
Memory affinity control is tightly related to CPU affinity control and works on the MCRT threads
of the MCRT phase only. We cannot apply any memory affinity effect to the RenderPrep phase at this moment. 
Memory affinity of MCRT phase is designed to optimize the bundled architecture of MoonRay which is used by vector
and XPU modes. Accessing the internal bundled queue and pool gets lots of benefits from memory affinity because
all the critical memory accessing is only happening inside the NUMA node to which each MCRT thread belongs.
This situation reduces inter NUMA-node memory access penalties a lot and therefore rendering speed is enhanced. 
The memory management regarding scalar mode does not change anything even if we set "-mem_affinity on" at this time.
However, scalar performance may be increased a bit because L1, L2, and L3 cache coherency is improved by using
CPU affinity control.