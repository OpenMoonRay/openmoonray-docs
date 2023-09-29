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
		<td>adaptiveSamplingV1: min max err</td>
		<td>The adaptive sampling values for this render result</td>
	</tr>
	<tr>
		<td>AovFilterMinAdaptiveSamples: <i>N</i></td>
		<td>The minimum adaptive sample number for AOV filter</td>
	</tr>
	<tr>
		<td>progressCheckpointTileSamples: <i>N</i></td>
		<td>The final tile sample totals for this file in checkpoint mode</td>
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
					<td>samplingType</td>
					<td>string</td>
					<td>"ADAPTIVE" or "UNIFORM". Indicates the sampling type</td>
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
 					<td>adaptiveTargetError</td>
					<td>float</td>
					<td>The adaptive sampling target error (which only exists for Adaptive sampling mode)</td>
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
					<td>PixelSamples</td>
					<td>int</td>
					<td>The total number of PIXEL samples</td>
				</tr>
				<tr>
					<td>lightSamples</td>
					<td>int</td>
					<td>The total number of LIGHT samples</td>
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
					<td>renderPrepSec</td>
					<td>float</td>
					<td>The time in seconds spent in the RenderPrep stage</td>
				</tr>
				<tr>
					<td>mcrtSec</td>
					<td>float</td>
					<td>The time in seconds spent in the MCRT computation stage</td>
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
					<td>checkpointAverageSec</td>
					<td>float</td>
					<td>Average time in seconds spent during the checkpoint data output operation, but not including the background  thread writing cost</td>
				</tr>
                <tr>
                    <td>timeSaveSecBySignalCheckpoint</td>
                    <td>float</td>
                    <td>The time in seconds that was saved compared with regular (time/quality) checkpoint if this file is created by signal-based checkpoint logic.</td>
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
                    <td>bgCheckpointWrite</td>
                    <td>bool(true/false)</td>
                    <td>Condition of background checkpoint write logic</td>
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
                    <td>extraSnapshot</td>
                    <td>bool(true/false)</td>
                    <td>Condition of extraSnapshot logic</td>
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
In this example, sample.exr was constructed in single checkpoint render. The file was dumped as a checkpoint file three times. The 3rd checkpoint was created by signal-based checkpoint logic.

```bash
> oiiotool -info -v sample.exr
Reading sample.exr
ENVIR::btyLFT.101.exr : 1920 x  816, 4 channel, half openexr
    12 subimages: 1920x816 [h,h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h], 1920x816 [h,h,h]
    channel list: R, G, B, A
    adaptiveSamplingV1: 2, 16, 0.0015
    AovFilterNumConsistentSamples: 2
    compression: "zip"
    DateTime: "2023:07:13 15:03:35"
    max_adaptive_samples: 16
    min_adaptive_samples: 1
    pixel_samples: 8
    progressCheckpointTileSamples: 446
    resumeHistory: "{
"history":[
{
  "sampling":{
    "samplingType":"ADAPTIVE",
    "minSamples":2,
    "maxSamples":16,
    "adaptiveTargetError":15.000000,
    "sampleResult":{
      "PixelSamples":8698792,
      "lightSamples":122329571,
      "bsdfSamples":252977045,
      "bssrdfSamples":48994734,
      "totalSamples":433000142
    }
  },
  "execEnv":{
    "hostname":"pearldiva.gld.dreamworks.net",
    "numberOfThreads":36,
    "UTCOffsetHours":-8.000000
  },
  "timingDetail":{
    "bgCheckpointWrite":true,
    "startTileSamplesId":0,
    "procStartTime":{"date":"2023/Jul/13 Thu 15:1:29:139","sec":1689285689,"usec":139997},
    "frameStartTime":{"date":"2023/Jul/13 Thu 15:1:29:420","sec":1689285689,"usec":420374},
    "MCRT":[
      {
        "stint":0,
        "extraSnapshot":false,
        "MCRTStartTime":{"date":"2023/Jul/13 Thu 15:2:0:608","sec":1689285720,"usec":608143},
        "MCRTEndTime":{"date":"2023/Jul/13 Thu 15:2:21:69","sec":1689285741,"usec":69478},
        "endTileSamplesId":63
      },
      {
        "stint":1,
        "extraSnapshot":false,
        "MCRTStartTime":{"date":"2023/Jul/13 Thu 15:2:21:547","sec":1689285741,"usec":547620},
        "MCRTEndTime":{"date":"2023/Jul/13 Thu 15:3:10:518","sec":1689285790,"usec":518026},
        "endTileSamplesId":319
      },
      {
        "stint":2,
        "extraSnapshot":true,
        "MCRTStartTime":{"date":"2023/Jul/13 Thu 15:3:11:144","sec":1689285791,"usec":144124},
        "MCRTEndTime":{"date":"2023/Jul/13 Thu 15:3:25:310","sec":1689285805,"usec":310274},
        "endTileSamplesId":445
      }
    ]
  },
  "timingSummary":{
    "renderPrepSec":31.187769,
    "mcrtSec":83.597893,
    "checkpointTotalSecExcludeLast":1.104240,
    "checkpointTotal":3,
    "checkpointAverageSec":0.552120,
    "timeSaveSecBySignalCheckpoint":14.166150
  }
}
]
}"
    oiio:ColorSpace: "Linear"
    oiio:subimagename: "main"
    oiio:subimages: 12
    openexr:chunkCount: 51
>
```
