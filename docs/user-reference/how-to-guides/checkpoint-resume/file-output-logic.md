---
title: File output logic
---
# File output logic
---

Originally, moonray was writing image file to the destination directly.<br>
Currently, non deep Image output logic uses following procedure instead of directly write image
to the final destination.<br>

1. Creates temporary file first.<br>
Temporary directory location is defined by "`tmp_dir`" scene variable.
If scene variable `tmp_dir` is empty, try to use **$TMPDIR** environment variable as temporary
directory name.<br>
If **$TMPDIR** environment variable is also empty, pick **/tmp** as a temporary directory.<br>
This temporary file inside temporary directory is cleaned up by moonray automatically.

2. Copy temporary file to the final destination as temporary filename.<br>
After finish temp file generation into temporary directory. Copy this temporary file to the final
destination location as temporary name.
Temporary name is<br>
<br>
`<final name>` + ".part"<br>
<br>
(like foo/bar/baz.exr.part)

3. Rename to the final name.<br>
After finish temp file copy to the final location, rename copied file to the final name.
At this moment, **".part"** file is disappeared.

This procedure greatly reduce the risk of generating garbage image file regarding unexpected event
like receiving KILL signal. And also this procedure reduce the risk to terminate renderer during
generating multiple checkpoint files generation. Resulting reducing the risk of resume render failure
regarding to the multiple checkpoint files **in-sync** problem.<br>
This procedure is also remote disk friendly operation because we only use copy file and not using
complex seek and other posixI/O operations.<br>
Moonray falls back to the original directly writing destination procedure when your scene involved deep file. <br>
<br>
If you find the **".part"** file with old timestamped, it is garbage file and you may clean up **.part** file.
