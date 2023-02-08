---
title: Arras Doxgen Document
---
# Arras Doxgen Document
---
## mcrt::dataio::ClientReceiverFb
We are using a highly delta coded protocol to receive image data from backend computations.
We call this protocol a "**Pack Tile Codec**". Also, we call the message which uses Pack Tile
codec a "**Progressive Frame**" message.<br>
`ClientReceiverFb` keeps entire images internally and you can properly updat these internal
images by execution of decode action (decodeProgressiveFrame()) for multiple ProgressiveFrame messages
by received order.<br>
You can retrieve the current latest image result from ClientReceiverFb whenever you want.
And also you can get other status and statistical information as well.

<a href="../doxgen/mcrt_dataio/ClientReceiverFb_8h.html" target="_blank">mcrt_dataio::ClientReceiverFb</a>



