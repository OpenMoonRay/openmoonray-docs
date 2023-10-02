---
title: EXR Header Metadata
---
# EXR Header Metadata

## Format
MoonRay outputs internal Checkpoint and Resume render information as metadata of the EXR header.  The metadata information is added to the output image file when at least one of the following settings is true.

- _checkpoint_rendering_ = true
- _resume_rendering_ = true
- _resumable_output_ = true

The metadata information can be retrieved by the command-line
```bash
oiiotool -info -v filename.exr
```

The following is a description of the available metadata information:

<table> 
	<tr>
		<th>Meta data</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>progressCheckpointTileSamples: <i>N</i></td>
		<td>The final tile sample totals for this file in checkpoint mode</td>
	</tr>
	<tr>
		<td>adaptiveSamplingV1: min max err</td>
		<td>The adaptive sampling values for this render result</td>
	</tr>
	<tr>
		<td>AovFilterMinAdaptiveSamples: <i>N</i></td>
		<td>The minimum adaptive sample number for AOV filter</td>
	</tr>
	<tr>
		<td>resumeHistory:</td>
		<td>
			All resume history of this image in JSON format. Each resume render history info is stored as a JSON object inside the "history" JSON array.  One resumeHistory consists of four different sections: "sampling", "execEnv", "timingSummary" and "timingDetail".
			<ul>
				<li>The "sampling" section includes sampling related information</li>
				<li>The "execEnv" section includes environment related information, such as hostname and timezone</li>
				<li>The "timingSummary" section includes summary timing information</li>
				<li>The "timingDetail" records all detailed timing information</li>
			</ul>
		</td>
	</tr>
</table>
<table>
	<tr>
		<td><h5>sampling section:</h5></td>
	</tr>
	<tr>
		<td>
			<table>
				<tr>
					<th>Key</th>
					<th>Type</th>
					<th>Description</th>
				</tr>
				<tr>
 					<td>adaptiveTargetError</td>
					<td>float</td>
					<td>The adaptive sampling target error (which only exists for Adaptive sampling mode)</td>
				</tr>
				<tr>
					<td>minSamples</td>
					<td>int</td>
					<td>The minimum samples per pixel</td>
				</tr>
				<tr>
					<td>maxSamples</td>
					<td>int</td>
					<td>The maximum samples per pixel</td>
				</tr>
				<tr>
					<td>samplingType</td>
					<td>string</td>
					<td>"ADAPTIVE" or "UNIFORM". Indicates the sampling type</td>
				</tr>
				<tr>
					<td>sampleResult</td>
					<td colspan=2>Detailed sampling information about the internal sampling count. This is useful to compare image quality by a sampling number.</td>
				</tr>
				<tr>
					<td colspan=3><h5>sample result:</h5></td>
				</tr>
				<tr>
					<th>Key</th>
					<th>Type</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>bsdfSamples</td>
					<td>int</td>
					<td>The total number of BSDF samples</td>
				</tr>
				<tr>
					<td>bssrdfSamples</td>
					<td>int</td>
					<td>The total number of BSSRDF samples</td>
				</tr>
				<tr>
					<td>lightSamples</td>
					<td>int</td>
					<td>The total number of LIGHT samples</td>
 				</tr>
				<tr>
					<td>PixelSamples</td>
					<td>int</td>
					<td>The total number of PIXEL samples</td>
				</tr>
				<tr>
					<td>totalSamples</td>
					<td>int</td>
					<td>The total of the above samples</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
<table>
	<tr>
		<td><h5>execEnv section:</h5></td>
	</tr>
	<tr>
		<td>
			<table>
				<tr>
					<th>Key</th>
					<th>Type</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>hostname</td>
					<td>string</td>
					<td>The hostname which generated this file</td>
				</tr>
				<tr>
					<td>numberOfThreads</td>
					<td>int</td>
					<td>The number of threads used by renderer</td>
				</tr>
				<tr>
					<td>UTCOffsetHours</td>
					<td>float</td>
					<td>The UTC offset, in hours, for timezone calculation</td>
				</tr>
				<tr>
					<td>DWA_HOST_RU</td>
					<td>string</td>
					<td>The "DWA_HOST_RU" environment value</td>
				</tr>
				<tr>
					<td>DWA_FULL_ID</td>
					<td>string</td>
					<td>The "DWA_FULL_ID" environment value</td>
				</tr>
				<tr>
					<td colspan=3>Note that DWA_HOST_RU and DWA_FULL_ID info only exists when they are specified as environment variables</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
<table>
	<tr>
		<td><h5>timingSummary section:</h5></td>
	</tr>
	<tr>
		<td>
			<table>
				<tr>
 					<th>Key</th>
					<th>Type</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>checkpointAverageSec</td>
					<td>float</td>
					<td>Average time in seconds spent during the checkpoint data output operation, but not including the background  thread writing cost</td>
				</tr>
				<tr>
					<td>checkpointTotalSecExcludeLast</td>
					<td>float</td>
					<td>The total time in seconds spent during the checkpoint data output operation but not including the last checkpoint output cost, nor the background thread writing cost</td>
				</tr>
				<tr>
 					<td>checkpointTotal</td>
					<td>int</td>
					<td>The total count of output checkpoint data writtent to the disk</td>
				</tr>
				<tr>
					<td>mcrtSec</td>
					<td>float</td>
					<td>The time in seconds spent in the MCRT computation stage</td>
				</tr>
				<tr>
					<td>renderPrepSec</td>
					<td>float</td>
					<td>The time in seconds spent in the RenderPrep stage</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
<table>
	<tr>
		<td><h5>timingDetail section:</h5></td>
	</tr>
	<tr>
		<td>
			<table>
				<tr>
					<th>Key</th>
					<th>Type</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>startTileSamplesId</td>
 					<td>unsigned int</td>
					<td>start tileSamples id</td>
				</tr>
				<tr>
					<td>procStartTime</td>
					<td>time format</td>
					<td>Process start time (start time of this render process)</td>
				</tr>
				<tr>
					<td>frameStartTime</td>
					<td>time format</td>
					<td>Frame computation start time (the renderPrep start time for this frame)</td>
				</tr>
				<tr>
					<td>MCRT</td>
					<td>MCRT info format</td>
					<td>The detailed MCRT phase information consists of multiple checkpoint stint information</td>
				</tr>
				<tr>
					<td colspan=3>Note that calculating the (frameStartTime - procStartTime) is useful to determine the spend for process boot time, including initializing dso's and related activities.</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
<table>
	<tr>
		<td><h5>time format:</h5></td>
	</tr>
	<tr>
		<td>
			<table>
				<tr>
					<th>Key</th>
					<th>Type</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>date</td>
					<td>string</td>
					<td>Human readable time display</td>
				</tr>
				<tr>
					<td>sec</td>
					<td>unsigned long</td>
					<td>Seconds since the Epoch (1970-01-01 00:00:00 -0000 (UTC))</td>
				</tr>
				<tr>
					<td>usec</td>
					<td>unsigned long</td>
					<td>Microseconds since the Epoch (1970-01-01 00:00:00 -0000 (UTC))</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
<table>
	<tr>
		<td>
			<h5>MCRT info format:</h5> detailed MCRT phase timing information. This info consists of multiple checkpoint stint information.
			<br><br>
			Each checkpoint stint info:
		</td>
	</tr>
	<tr>
		<td>
			<table>
				<tr>
					<th>Key</th>
					<th>Type</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>stint</td>
					<td>int</td>
					<td>ID of the checkpoint stint. Start from id = 0</td>
				</tr>
				<tr>
					<td>MCRTStartTime</td>
					<td>time format</td>
					<td>Timing of when the MCRT computation started</td>
				</tr>
				<tr>
					<td>MCRTEndTime</td>
					<td>time format</td>
					<td>Timing of when the MCRT computation ended</td>
				</tr>
				<tr>
					<td>endTileSamplesId</td>
					<td>unsigned int</td>
					<td>The end tileSamples ID</td>
				</tr>
				<tr>
					<td colspan=3>
						Note:
						Calculating the first (MCRTStartTime - frameStartTime) would equal renderPrep time span.<br>
						Calculating the second (MCRTStartTime - 1stMCRTEndTime) would equal the first checkpoint output time span.<br>
						...<br>
						Calculating the (<i>N</i>th MCRTStartTime - (<i>N</i>-1 )th MCRTEndTime) would equal the (<i>N</i>-1 )th checkpoint output time span<br>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>  

## Example Metadata Output
In this example, checkpoint0.exr was constructed in two different Resume render runs. The first run created a checkpoint file twice and the second run also created a checkpoint file twice.

```bash
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


