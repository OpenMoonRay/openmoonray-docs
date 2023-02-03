---
title: On-resume LUA script execution
---
# On-resume LUA script execution
---

You can specify LUA script which is executed just after resume data load operation under resume
rendering regardless of resume render started properly or fall back to normal render.
```
["on_resume_script"] = <filename>
```
Default is empty and on-resume script functionality is disabled.<br>
This LUA script is executed under a freshly constructed LUA execution environment (lua_State) and
there is no way to access other LUA environments like RDLA parser and post-checkpoint script execution
internally.<br>
This LUA script is executed exclusively and all MCRT threads are stopped until on-resume script execution
is completed. Keep in mind if you run a very long task by on-resume script, MCRT computation is suspended
until on-resume script is done.<br>
Moonray provides several resume related information as LUA's global variables.
All the information is stored inside an associative array named as "**resume**".
So LUA script can get resume related information via global variable "**resume**".<br>
<br>
You should **NOT** use **os.exit()** from on-resume script. if you use **os.exit()** inside
the on-resume LUA script, moonray crash.<br>
<br>

## On-resume script LUA global variables

**associative item (=element) name** | **type** | **description**
---------- | ---------- | ----------
resumeStartStatus | bool | result of resume start condition
resumeFiles	| string array | all resume file names of resume render
resumeParam | dictionary | resume start condition (See below for detail of resumeParam dictionary)
resumeHistory | array of dictionary | resumeHistory information from resume file metadata

<br>
resumeParam dictionary LUA global parameter name and description

**associative item (=element) name** | **type** | **description**
---------- | ---------- | ----------
progressCheckpointTileSamples | int | resume start tile sample number
AovFilterNumConsistentSample | int | AovFilterNumConsistent samples number
sampling | string | resume sampling mode. "uniform" or "adaptive"
adaptiveSampleParameters | float[3]	| adaptive sample parameters.<br>[0] = min adaptive sample.<br>[1] = max adaptive sample.<br>[2] = adaptive target error.

<br>

## Example of on-resume script LUA global varialbes
This is an example of a "**on-resume**" script LUA global variable. (item may vary depending on the versions).<br>
<br>
LUA global variable example for uniform sampling
```
resume = {
    resumeStartStatus = true, -- result of resume status
    resumeFiles = { -- which file we are using for resume file(s)
        "/usr/pic1/tkato/MOONRAY-3595-onResumeScript/work/resume0.exr",
        "/usr/pic1/tkato/MOONRAY-3595-onResumeScript/work/resume1.exr"
    },
    resumeParam = {
        progressCheckpointTileSamples = 832
        AovFilterNumConsistentSamples = 64
        sampling = "uniform"
    },
    resumeHistory = {
        history = { -- resume history info from exr metadata
            execEnv = {
                hostname = "pearldiva.gld.dreamworks.net",
                numberOfThreads = 36,
                UTCOffsetHours = -8.0
            },
            timingSummary = {
                checkpointTotal = 3,
                checkpointAverageSec = 0.0092080002650619,
                renderPrepSec = 0.77061098814011,
                mcrtSec = 20.910980224609,
                checkpointSec = 0.018415000289679
            },
            sampling = {
                samplingType = "UNIFORM",
                minSamples = 64,
                maxSamples = 64,
                sampleResult = {
                    PixelSamples = 2995200,
                    bsdfSamples = 249533116
                    bssrdfSamples = 0,
                    lightSamples = 229721923,
                    totalSamples = 482250239,
                }
            },
            timingDetail = {
                startTileSamplesId = 0,
                bgCheckpointWrite = true,
                procStartTime = {
                    sec = 1614881470,
                    usec = 403882,
                    date = "2021/Mar/4 Thu 10:11:10:403"
                },
                frameStartTime = {
                    sec = 1614881470,
                    usec = 447255,
                    date = "2021/Mar/4 Thu 10:11:10:447"
                },
                MCRT {
                    { -- MCRT[1], 1st stint
                        stint = 0,
                        endTileSamplesId = 63,
                        MCRTStartTime = {
                            sec = 1614881471,
                            usec = 217866,
                            date = "2021/Mar/4 Thu 10:11:11:217"
                        },
                        MCRTEndTime = {
                            sec = 1614881473,
                            usec = 164637,
                            date = "2021/Mar/4 Thu 10:11:13:164"
                        }
                    },
                    { -- MCRT[2], 2nd stint
                        stint = 1,
                        endTileSamplesId = 447,
                        MCRTStartTime = {
                            sec = 1614881473,
                            usec = 172278,
                            date = "2021/Mar/4 Thu 10:11:13:172"
                        },
                        MCRTEndTime = {
                            sec = 1614881482,
                            usec = 723726,
                            date = "2021/Mar/4 Thu 10:11:22:723"
                        }
                    },
                    { -- MCRT[3], 3rd stint
                        stint = 2,
                        endTileSamplesId = 831,
                        MCRTStartTime = {
                            sec = 1614881482,
                            usec = 734500,
                            date = "2021/Mar/4 Thu 10:11:22:734"
                        },
                        MCRTEndTime = {
                            sec = 1614881492,
                            usec = 147263,
                            date = "2021/Mar/4 Thu 10:11:32:147"
                        }
                    }
                }
            }
        }
    }
}
```
<br>
LUA global variable example for adaptive sampling
```
resume = {
    resumeStartStatus = true, -- result of resume status
    resumeFiles = { -- which file we are using for resume file(s)
        "/usr/pic1/tkato/MOONRAY-3595-onResumeScript/work/resume0.exr",
        "/usr/pic1/tkato/MOONRAY-3595-onResumeScript/work/resume1.exr"
    },
    resumeParam = {
        progressCheckpointTileSamples = 9920,
        AovFilterNumConsistentSamples = 4,
        sampling = "adaptive",
        adaptiveSampleParameters = {
            4.0,
            4096.0,
            6.0000004768372
        }
    },
    resumeHistory = {
        history = { -- resume history info from exr metadata
            execEnv = {
                hostname = "pearldiva.gld.dreamworks.net",
                numberOfThreads = 36,
                UTCOffsetHours = -8.0
            },
            timingSummary = {
                checkpointTotal = 2,
                checkpointAverageSec = 0.0081120003014803,
                renderPrepSec = 0.71837097406387,
                mcrtSec = 108.80061340332,
                checkpointSec = 0.0081120003014803
            },
            sampling = {
                samplingType = "ADAPTIVE",
                adaptiveTargetError = 6.0,
                minSamples = 4,
                maxSamples = 4096,
                sampleResult = {
                    PixelSamples = 15697448,
                    bsdfSamples = 1293230538,
                    bssrdfSamples = 0,
                    lightSamples = 1209119177,
                    totalSamples = -1776920133
                }
            },
            timingDetail = {
                startTileSamplesId = 0,
                bgCheckpointWrite = true,
                procStartTime = {
                    sec = 1614883251,
                    usec = 826812,
                    date = "2021/Mar/4 Thu 10:40:51:826"
                },
                frameStartTime = {
                    sec = 1614883251,
                    usec = 867073,
                    date = "2021/Mar/4 Thu 10:40:51:867"
                },
                MCRT = {
                    { -- MCRT[1], 1st stint
                        stint = 0,
                        endTileSamplesId = 63,
                        MCRTStartTime = {
                            sec = 1614883252,
                            usec = 585444,
                            date = "2021/Mar/4 Thu 10:40:52:585"
                        },
                        MCRTEndTime = {
                            sec = 1614883254,
                            usec = 520904,
                            date = "2021/Mar/4 Thu 10:40:54:520"
                        }
                    },
                    { -- MCRT[2], 2nd stint
                        stint = 1,
                        endTileSamplesId = 9919,
                        MCRTStartTime = {
                            sec = 1614883254,
                            usec = 529016,
                            date = "2021/Mar/4 Thu 10:40:54:529"
                        },
                        MCRTEndTime = {
                            sec = 1614883361,
                            usec = 394167,
                            date = "2021/Mar/4 Thu 10:42:41:394"
                        }
                    }
                }
            }
        }
    }
}
```
<br>
LUA global variable example when resume failed then fall back to regular render situation
```
resume = {
    resumeStartStatus = false
}
```

