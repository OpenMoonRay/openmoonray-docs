---
title: Building

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000

box_url: https://dreamworks.box.com/s/yemnny3cq7yducyru0rg94grv7ff6f87
box_scenes_url: https://dreamworks.app.box.com/folder/170035927320

# strip the .zip extension from the filenames, it is added later when appropriate
filename_source: openmoonray_source_01Nov
filename_image: openmoonray_image_01Nov
filename_minicoord: minicoord_20Sep

release_dir: /tmp/openmoonray_release
parent_dir: parent_dir
download_dir: download_dir

moonray_version: 1.0.0.9999
---

## Download the Example Scenes
There are several example scenes in .zip format which can be found
[here]({{ page.box_scenes_url }}).
Start by downloading one or more of the scenes and unzip:

```bash
unzip <{{ page.download_dir }}>/bedroom.zip
```

## Building in a Container
### Creating the Source Tree
Building OpenMoonRay will create a peer directory to the source tree for the build artifact, so you
may want to create a unique parent directory to create the source tree in, eg. **{{ page.parent_dir }}**.
Note that "{{ page.parent_dir}}" is just an arbitrary name - substitute any name you'd like, or maybe it
is already in a unique directory.

The important thing to remember is that expanding the source dump will always create a directory
named **./openmoonray** wherever you expand it, and the build is configured to store the intermediate
build products in a peer directory so multiple instances of moonray source in one directory will tend
to collide.

Download the latest source zip file located [here]({{ page.box_url }})
(currently **{{ page.filename_source }}.zip**)

Unzipping the source directory:
```bash
mkdir {{ page.parent_dir }}
cd {{ page.parent_dir }}
unzip <{{ page.download_dir }}>/{{ page.filename_source }}.zip
cd openmoonray
```

### Creating the Install Directory
You can choose any name, eg. **{{ page.release_dir }}**, but you'll need to use that name everywhere
this name occurs throughout the instructions.

(Using **{{ page.release_dir }}** will make these instructions easier!)

```bash
mkdir -p {{ page.release_dir }}

# ... or remove any previous installation
rm -rf {{ page.release_dir }}*
```

### The Build Docker Container
The provided Docker container is both a build environment for OpenMoonRay and a runtime environment.
It contains the tools and libraries that are needed for building and running OpenMoonRay as we work
out understandable instructions for creating a working environment in an uncontained Linux
environment.

To launch the container you will need the package **docker-19.03** or greater with permissions
enabled for running Docker. The compiler environment in the container is **gcc-9.3**.

Many libraries that OpenMoonRay depends on are simply installed in **/usr/lib64** in the Docker
image with yum/rpm.  Others are installed into **/baked_packages/packages** in the image. The file
**/baked_packages/packages/environment.sh** is executed during creation of a shell in the Docker image to
initialize the environment for where the libraries are stored.

The container has a copy of a prebuilt OpenMoonRay install tree at
**/baked_packages/packages/remaining/openmoonray/{{ page.moonray_version }}/ext** that allows
the image to be used without building OpenMoonRay.

Alternatively, a writable install directory can be overlayed on that directory to allow new builds
to be built and run inside of the container and for the new install directory to persist when the
container is destroyed. 

### Downloading the Docker image

While still in the openmoonray source directory … download the latest image from
[here]({{ page.box_url }})
(currently **{{ page.filename_image }}.zip**)
```bash
unzip <{{ page.download_dir }}>/{{ page.filename_image }}.zip

# {{ page.filename_image }} is a self extracting Docker
# image, so it needs permissions to execute
chmod +x {{ page.filename_image }}
```

### Launching the Container
Some useful options for launching the container:

| option | description |
|----------|-----------|
| `--x11`    | allows running gui programs. (May not be usable on all machine configurations) |
| `-v <optional data directory>` | maps in data that can be used for a render. This will be needed if you're going to render immediately after your build. |
| `` -v `dirname $PWD` `` | maps the parent directory of the current directory (which should be the source directory) into the container so that the interim build directory can be written above the source tree inside the container. |
| `-v <overlay_example>` | Overlays the OpenMoonRay install directory to where the built-in OpenMoonRay build is stored ( see actual path below )|

&lt;overlay_example&gt; (which would not easily fit in the above table) *{{ page.release_dir }}:/baked_packages/packages/remaining/openmoonray/{{ page.moonray_version }}/ext:shared*

Launch the container:
```bash
{{ page.filename_image }} --x11 [-v <optional data directory>] -w $PWD -v `dirname $PWD` -v {{ page.release_dir }}:/baked_packages/packages/remaining/openmoonray/{{ page.moonray_version }}/ext:shared
```

The container loads the image and a container shell is created.

### Build and Install OpenMoonray
Build from the source and install using the container shell:

```bash
cmake --preset container-release
cmake --build --preset container-release
# install into the directory where the container environment points to
# which is actually {{ page.release_dir }} outside of the container
cmake --install ../build-release/openmoonray --prefix /baked_packages/packages/remaining/openmoonray/{{ page.moonray_version }}/ext
```

### Render
Render using the same container session:
```bash
# go to the scene directory
cd <data directory>

# then render with or without a GUI
moonray -in scene.rdla -in scene.rdlb
# or...
moonray_gui -in scene.rdla -in scene.rdlb
# ...Done

# exit the container and destroy it
exit
```

## Running Later Using Your Own Build
Create a container mapping in your build, but no need to map in the source tree:

```bash
{{ page.filename_image }} [--x11] -v <data directory> -v /tmp/openmoonray_release:/baked_packages/packages/remaining/openmoonray/{{ page.moonray_version }}/ext:shared
```

Render:
```bash
# go to the scene directory
cd <data directory>

# then render with or without a GUI
moonray -in scene.rdla -in scene.rdlb
# or...
moonray_gui -in scene.rdla -in scene.rdlb
# ...Done

# exit the container and destroy it
exit
```

## Running Using Pre-Built Moonray
Create a container without overriding the moonray build in the container
```bash
{{ page.filename_image }} [--x11] -v <data directory>
```

Render:
```bash
# go to the scene directory
cd <data directory>

# go to the scene directory
cd <data directory>
# then render with or without a GUI
moonray -in scene.rdla -in scene.rdlb
-or-
moonray_gui -in scene.rdla -in scene.rdlb
# when done, exit the container and it will be destroyed
exit
```

## Running Arras Using Pre-Built Moonray
**Run the mini-coordinator**

Download the latest mini-coordinator from
[here](https://dreamworks.box.com/s/yemnny3cq7yducyru0rg94grv7ff6f87)
(currently **{{ page.filename_minicoord }}.zip**)

The mini-coordinator keeps track of where everything is running so
processes can find each other. There will be one instance of that and you will need to pass the
hostname where it is running to other processes.

```bash
unzip <download directory>/{{ page.filename_minicoord }}.zip
./{{ page.filename_minicoord }} -c arras_minicoord
```

**Run arras nodes for computation**

Depending on how fast you want to render you will run some number
of arras computation processes. On each of these systems run:

```bash
# The arras computation nodes require access to the render data on disk. The nodes don't inherently require running
# in the directory where the data is but the provided example scenes use relative paths so for these you need to run
# in the data directory. If the scenes aren't set up with relative directories then it's just important that the data disk is
# mapped into the container using -v <path> rather than using the "-v $PWD -w $PWD" options.
cd <data directory>
<path>/{{ page.filename_image }} -v $PWD -w $PWD -- arras4_node --ipc-dir /tmp/tantalus_common -l 5 --no-consul --coordinator-host ${cooordinator_hostname} --coordinator-port 8888
```

**Run arras_render client**

```bash
# coordinator_hostname is the machine where mini-coordinator is running.
# node_count is the number of nodes you will be running on. Can be set with
node_count=curl -s http://${coordinator_hostname}:8888/status | python -c 'import sys, json; print (json.load(sys.stdin)["nodes"])'

cd <data directory>
<path>/{{ page.filename_image }} --gpu -v $PWD -w $PWD -- arras_render --current-env --fps 24 -t 3600 --port 8888 --aov-interval 0 --showStats --overlay --exr /tmp/test.exr -s mcrt_progressive_n --num-mcrt ${node_count} --host ${coordinator_hostname} --rdl scene.rdla --rdl scene.rdlb
```

## Running Arras Using Your Own Moonray Build
**Run the mini-coordinator**

Download the mini-coordinator zip located [here](https://dreamworks.box.com/s/yemnny3cq7yducyru0rg94grv7ff6f87)
(currently **{{ page.filename_minicoord }}.zip**) if you haven't already.
```bash
unzip <download directory>/{{ page.filename_minicoord }}.zip
./{{ page.filename_minicoord }} -c arras_minicoord
```

The mini-coordinator keeps track of where  everything is running so processes can find each other.
There will be one instance of that and you will need to pass the hostname where it is running to
other processes.

**Run arras nodes for computation**

Depending on how fast you want to render you will run some number of arras computation processes.
On each of these systems run:

```bash
# The arras computation nodes require access to the render data on disk. The nodes don't inherently require running
# in the directory where the data is but the provided example scenes use relative paths so for these you need to run
# in the data directory. If the scenes aren't set up with relative directories then it's just important that the data disk is
# mapped into the container using -v <path> rather than using the "-v $PWD -w $PWD" options.
cd <data directory>
<path>/{{ page.filename_image }} -v $PWD -w $PWD -- arras4_node --ipc-dir /tmp/tantalus_common -l 5 --no-consul --coordinator-host ${cooordinator_hostname} --coordinator-port 8888
```

**Run arras_render client**

```bash
# coordinator_hostname is the machine where mini-coordinator is running
# node_count is the number of nodes you will be running on. Can be set with
node_count=curl -s http://${coordinator_hostname}:8888/status | python -c 'import sys, json; print (json.load(sys.stdin)["nodes"])'

cd <data directory>
<path>/{{ page.filename_image }} --gpu -v $PWD -w $PWD -- arras_render --current-env --fps 24 -t 3600 --port 8888 --aov-interval 0 --showStats --overlay --exr /tmp/test.exr -s mcrt_progressive_n --num-mcrt ${node_count} --host ${coordinator_hostname} --rdl scene.rdla --rdl scene.rdlb
```






