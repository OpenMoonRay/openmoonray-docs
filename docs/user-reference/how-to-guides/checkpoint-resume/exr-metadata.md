---
title: EXR metadata
---
# EXR metadata
---
## Format
moonray output several internal checkpoint/resume render informations as metadata of EXR header.
This metadata information is added to the output image when at least one of the following condition
is true.

- checkpoint rendering mode
- resume rendering mode
- resumable_output = true

You can get metadata info by
```
oiiotool -info -v filename.exr
```
<table> <!-- { -->
  <tr>
    <th bgcolor="grey">
        Meta data
    </th>
    <th bgcolor="grey">
        Description
    </th>
  </tr>
  <tr>
    <td>
        progressCheckpointTileSamples: <b>N</b>
    </td>
    <td>
        final tile sample totals for this file under checkpoint mode
    </td>
  </tr>
  <tr>
    <td>
        adaptiveSamplingV1: min max err
    </td>
    <td>
        adaptive sampling parameters for this render result
    </td>
  </tr>
  <tr>
    <td>
        AovFilterMinAdaptiveSamples: <b>N</b>
    </td>
    <td>
        minimum adaptive sample number for AOV filter
    </td>
  </tr>
  <tr>
    <td>
        resumeHistory:	
    </td>
    <td>
        all resume history of this image by JSON format.<br>
        each resume render history info is stored as JSON object inside "history" JSON array.<br>
        one resumeHistory consists of 3 different sections. "sampling", "execEnv", "timingSummary" and "timingDetail".<br>
        "sampling" section includes sampling related information.<br>
        "execEnv" section includes environment related information like hostname and timezone<br>
        "timingSummary" section includes timing summary information<br>
        "timingDetail" recorded all timing detail information<br>
        <br>
        sampling section :
        <table> <!-- { -->
            <tr>
                <th bgcolor="grey"> Key </th>
                <th bgcolor="grey"> Type </th>
                <th bgcolor="grey"> Description </th>
            </tr>
            <tr>
                <td> adaptiveTargetError </td>
                <td> float </td>
                <td> adaptive sampling target error (only exists when ADAPTIVE sampling mode) </td>
            </tr>
            <tr>
                <td> minSamples </td>
                <td> int </td>
                <td> minimum samples per pixel </td>
            </tr>
            <tr>
                <td> maxSamples </td>
                <td> int </td>
                <td> maximum samples per pixel </td>
            </tr>
            <tr>
                <td> samplingType </td>
                <td> string </td>
                <td> "ADAPTIVE" or "UNIFORM". Indicates sampling type </td>
            </tr>
            <tr>
                <td> sampleResult </td>
                <td> </td>
                <td>
                    detail sampling information about internal sampling count.<br>
                    It's useful when want to compare image quality by number.<br>
                    <br>
                    <table> <!-- { -->
                        <tr>
                            <th bgcolor="grey"> Key </th>
                            <th bgcolor="grey"> Type </th>
                            <th bgcolor="grey"> Description </th>
                        </tr>
                        <tr>
                            <td> bsdfSamples </td>
                            <td> int </td>
                            <td> total number of BSDF samples </td>
                        </tr>
                        <tr>
                            <td> bssrdfSamples </td>
                            <td> int </td>
                            <td> total number of BSSRDF samples </td>
                        </tr>
                        <tr>
                            <td> lightSamples </td>
                            <td> int </td>
                            <td> total number of LIGHT samples </td>
                        </tr>
                        <tr>
                            <td> PixelSamples </td>
                            <td> int </td>
                            <td> total number of PIXEL sample </td>
                        </tr>
                        <tr>
                            <td> totalSamples </td>
                            <td> int </td>
                            <td> total of above </td>
                        </tr>
                    </table> <!-- } -->
                </td>
            </tr>
        </table> <!-- } -->

        <br>
        execEnv section :
        <table> <!-- { -->
          <tr>
            <th bgcolor="grey"> Key </th>
            <th bgcolor="grey"> Type </th>
            <th bgcolor="grey"> Description </th>
          </tr>
          <tr>
            <td> hostname </td>
            <td> string </td>
            <td> hostname which generate this file </td>
          </tr>
          <tr>
            <td> numberOfThreads </td>
            <td> int </td>
            <td> Number of threads used by renderer </td>
          </tr>
          <tr>
            <td> UTCOffsetHours </td>
            <td> float </td>
            <td> UTC offset by hours for timezone calculation </td>
          </tr>
          <tr>
            <td> DWA_HOST_RU </td>
            <td> string </td>
            <td> "DWA_HOST_RU" environment value </td>
          </tr>
          <tr>
            <td> DWA_FULL_ID </td>
            <td> string </td>
            <td> "DWA_FULL_ID" environment value </td>
          </tr>
        </table> <!-- } -->
        DWA_HOST_RU and DWA_FULL_ID info are only exists when they are specified as environment valuable.<br>
        <br>

        timingSummary section :
        <table> <!-- { -->
          <tr>
            <th bgcolor="grey"> Key </th>
            <th bgcolor="grey"> Type </th>
            <th bgcolor="grey"> Description </th>
          </tr>
          <tr>
            <td> checkpointAverageSec </td>
            <td> float </td>
            <td> Average time (sec) to spent checkpoint data output operation (not include bg thread write cost) </td>
          </tr>
          <tr>
            <td> checkpointTotalSecExcludeLast </td>
            <td> float </td>
            <td>
              Total time (sec) to spent checkpoint data output operation but not include last checkpoint output cost (also no include bg thread write cost)
            </td>
          </tr>
          <tr>
            <td> checkpointTotal </td>
            <td> int </td>
            <td> Total count to output checkpoint data to the disk </td>
          </tr>
          <tr>
            <td> mcrtSec </td>
            <td> float </td>
            <td> Time (sec) to spent MCRT computation stage </td>
          </tr>
          <tr>
            <td> renderPrepSec </td>
            <td> float </td>
            <td> Time (sec) to spent on renderprep stage </td>
          </tr>
        </table> <!-- } -->
        <br>

        timingDetail section :
        <table> <!-- { -->
          <tr>
            <th bgcolor="grey"> Key </th>
            <th bgcolor="grey"> Type </th>
            <th bgcolor="grey"> Description </th>
          </tr>
          <tr>
            <td> startTileSamplesId </td>
            <td> unsigned int </td>
            <td> start tileSamples id </td>
          </tr>
          <tr>
            <td> procStartTime </td>
            <td> time format </td>
            <td> process start time </td>
          </tr>
          <tr>
            <td> frameStartTime </td>
            <td> time format </td>
            <td> frame computation start time. </td>
          </tr>
          <tr>
            <td> MCRT </td>
            <td> mcrt info format </td>
            <td> MCRT phase detail information consists of multiple checkpoint stint information </td>
          </tr>
        </table> <!-- } -->
        procStartTime is start time of this render process.<br>
        frameStartTime is time of renderPrep start for this frame.<br>
        frameStartTime - procStartTime is spend for process boot / initialize dso and other staff.<br>
        <br>

        time format :
        <table> <!-- { -->
          <tr>
            <th bgcolor="grey"> Key </th>
            <th bgcolor="grey"> Type </th>
            <th bgcolor="grey"> Description </th>
          </tr>
          <tr>
            <td> date </td>
            <td> string </td>
            <td> Human readable time display </td>
          </tr>
          <tr>
            <td> sec </td>
            <td> unsigned long </td>
            <td> sec since the Epoch (1970-01-01 00:00:00 -0000 (UTC)) </td>
          </tr>
          <tr>
            <td> usec </td>
            <td> unsigned long </td>
            <td> microsec portion since the Epoch (1970-01-01 00:00:00 -0000 (UTC)) </td>
          </tr>
        </table> <!-- } -->
        <br>

        mcrt info format : MCRT phase detail timing information. This info consists of multiple checkpoint stint information<br>
        one checkpoint stint info :<br>
        <table> <!-- { -->
          <tr>
            <th bgcolor="grey"> Key </th>
            <th bgcolor="grey"> Type </th>
            <th bgcolor="grey"> Description </th>
          </tr>
          <tr>
            <td> stint </td>
            <td> int </td>
            <td> id of checkpoint stint. start from id = 0 </td>
          </tr>
          <tr>
            <td> MCRTStartTime </td>
            <td> time format </td>
            <td> timing of MCRT computation started </td>
          </tr>
          <tr>
            <td> MCRTEndTime </td>
            <td> time format </td>
            <td> timing of MCRT computation end </td>
          </tr>
          <tr>
            <td> endTileSamplesId </td>
            <td> unsigned int </td>
            <td> end tileSamples Id </td>
          </tr>
        </table> <!-- } -->
        1st MCRTStartTime - frameStartTime = renderPrep time span<br>
        2nd MCRTStartTime - 1stMCRTEndTime = 1st checkpoint output time span<br>
        ...<br>
        Nth MCRTStartTime - (N-1)th MCRTEndTime = (N-1)th checkpoint output time span<br>
    </td>
  </tr>
</table> <!-- } -->

<br>
## Example
This checkpoint0.exr was constructed by 2 different resume render run. First run creates checkpoint file
2 times and 2nd run creates checkpoint file 2 times.
```
$ oiiotool -info -v checkpoint0.exr
Reading checkpoint0.exr
result0.exr          :  640 x  360, 10 channel, half/float/half/float/float/float/float/float/float/float openexr
    channel list: alpha (half), alpha aux (float), heat (half), weight (float), beauty aux.R (float), beauty aux.G (float), beauty aux.B (float), beauty.R (float), beauty.G (float), beauty.B (float)
    adaptiveSamplingV1: 16, 4096, 0.002
    AovFilterMinAdaptiveSamples: 16
    compression: "zip"
    DateTime: "2020:02:28 12:03:51"
    PixelAspectRatio: 1
    progressCheckpointTileSamples: 262144
    resumeHistory: "{
"history":[
{
  "sampling":{
    "samplingType":"ADAPTIVE",
    "minsamples":16,
    "maxSamples":4096,
    "adaptiveTargetError":20.000000,
    "sampleResult":{
      "PixelSamples":2534400,
      "lightSamples":263001357,
      "bsdfSamples":253638901,
      "bssrdfSamples":0,
      "totalSamples":519174658
    }
  },
  "execEnv":{
    "hostname":"pearldiva.gld.dreamworks.net",
    "numberOfThreads":36,
    "UTCOffsetHours":-8.000000
  },
  "timingDetail":{
    "startTileSamplesId":0,
    "procStartTime":{"date":"2020/Feb/28 Fri 9:36:31:122","sec":1582911391,"usec":122668},
    "frameStartTime":{"date":"2020/Feb/28 Fri 9:36:31:239","sec":1582911391,"usec":239244},
    "MCRT":[
      {
        "stint":0,
        "MCRTStartTime":{"date":"2020/Feb/28 Fri 9:36:32:275","sec":1582911392,"usec":275429},
        "MCRTEndTime":{"date":"2020/Feb/28 Fri 9:36:34:544","sec":1582911394,"usec":544933},
        "endTileSamplesId":63
      },
      {
        "stint":1,
        "MCRTStartTime":{"date":"2020/Feb/28 Fri 9:36:34:724","sec":1582911394,"usec":724029},
        "MCRTEndTime":{"date":"2020/Feb/28 Fri 9:36:53:694","sec":1582911413,"usec":694280},
        "endTileSamplesId":703
      }
    ]
  },
  "timingSummary":{
    "renderPrepSec":1.036185,
    "mcrtSec":21.239756,
    "checkpointTotalSecExcludeLast":0.179096,
    "checkpointTotal":2,
    "checkpointAverageSec":0.089548
  }
}
,
{
  "sampling":{
    "samplingType":"ADAPTIVE",
    "minSamples":16,
    "maxSamples":4096,
    "adaptiveTargetError":20.000000,
    "sampleResult":{
      "PixelSamples":1651242,
      "lightSamples":171567352,
      "bsdfSamples":165628605,
      "bssrdfSamples":0,
      "totalSamples":338847199
    }
  },
  "execEnv":{
    "hostname":"pearldiva.gld.dreamworks.net",
    "numberOfThreads":36,
    "UTCOffsetHours":-8.000000,
    "DWA_HOST_RU":"1234.5678",
    "DWA_FULL_ID":"121126862.1.4.101.1"
  },
  "timingDetail":{
    "startTileSamplesId":704,
    "procStartTime":{"date":"2020/Feb/28 Fri 12:3:25:695","sec":1582920205,"usec":695025},
    "frameStartTime":{"date":"2020/Feb/28 Fri 12:3:26:95","sec":1582920206,"usec":95499},
    "MCRT":[
      {
        "stint":0,
        "MCRTStartTime":{"date":"2020/Feb/28 Fri 12:3:33:831","sec":1582920213,"usec":831233},
        "MCRTEndTime":{"date":"2020/Feb/28 Fri 12:3:34:749","sec":1582920214,"usec":749350},
        "endTileSamplesId":787
      },
      {
        "stint":1,
        "MCRTStartTime":{"date":"2020/Feb/28 Fri 12:3:34:996","sec":1582920214,"usec":996935},
        "MCRTEndTime":{"date":"2020/Feb/28 Fri 12:3:50:476","sec":1582920230,"usec":476337},
        "endTileSamplesId":262143
      }
    ]
  },
  "timingSummary":{
    "renderPrepSec":7.735734,
    "mcrtSec":16.397518,
    "checkpointTotalSecExcludeLast":0.247585,
    "checkpointTotal":2,
    "checkpointAverageSec":0.123793
  }
}
]
}"
    screenWindowCenter: 0, 0
    screenWindowWidth: 1
    oiio:ColorSpace: "Linear"
    oiio:subimages: 1
$
```


