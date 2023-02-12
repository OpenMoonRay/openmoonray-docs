---
title: Checkpoint and Resume image file output logic
---
# Checkpoint and Resume image file output logic
The image file output logic for non-Deep Images uses following procedure:

1. First create a temporary file.  
	- The temporary directory location for the file is defined by the _tmp_dir_ setting.  
	- If the _tmp_dir_ setting is empty, MoonRay will try to use the  $TMPDIR environment variable as the temporary directory name.
	- If the $TMPDIR environment variable is also empty, MoonRay will then use /tmp as a temporary directory.

This temporary file inside the temporary directory is cleaned up by MoonRay automatically.

2. Copy the temporary file to the final destination using the temporary name.  The temporary name is "<final name>" + ".part".  For example, "foo/bar/baz.exr.part"

3. Rename the copied file to the final name.  This will remove the ".part" of the filename.  For example "foo/bar/baz.exr".

This procedure reduces the risk of generating garbage image files due to an unexpected event such as receiving a KILL signal.  It also reduces the risk to terminate the render while generating multiple checkpoint files. It also reduces the risk of Resume render failure due to an unexpected in-sync problem with multiple checkpoint files.

The procedure is also friendly for remote disk operation because MoonRay only uses file copy operations and does not use complex seek or other Posix I/O operations.

MoonRay will directly write to the final file destination, without the temporary procedure logic when the scene is using Deep Images.

