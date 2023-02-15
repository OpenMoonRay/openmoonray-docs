---
title: About Arras
---

# About Arras

The core of <span class="define">Arras</span> is a system for communicating between processes using messages. It is used to split a program into multiple components, each running in its own process. Some of the reasons you might want to do this are:

- To distribute execution of a program across multiple machines.
- To isolate components from each other. For example, splitting into multiple processes can help with conflicts between compilers or different versions of the same library.
- To make a program configurable by allowing components to be assembled in different ways.

A single Arras component (i.e. a process) is called a <span class="define">computation</span>. An assembly of communicating computations forming a "program" is called a <span class="define">session</span>.

An Arras client communicates with a session using messages : both to provide input data and to collect results. Clients can be standalone programs or plugins to applications like Maya or Houdini.

## Arras and MoonRay

MoonRay provides several Arras computations. These can be used:

- To allow multimachine MoonRay renders. Applying multiple computations on different machines to the same render results in an almost linear speedup of the shading phase.
- To support remote MoonRay renders. This can be used both for performance reasons and for cross-platform support. For example, you can integrate a Windows application with MoonRay by running the render computation processes in a Linux container or on a different machine.
- To  avoid conflicts between host applications and the MoonRay libraries. Building and maintaining several versions of a system like MoonRay, in order to be compatible with multiple different host applications, can be troublesome : Arras helps to avoid the need to do this.

We generally recommend using Arras to add MoonRay support into existing applications. It is possible to link directly to the MoonRay libraries, without using Arras. However this requires a MoonRay build that is compatible with the application, and can lead to problems. The most common issues that we see are "pauses" caused by interactions between the application GUI threads and the threads that MoonRay uses to render. These can be hard to diagnose and fix, particularly if you don't have access to the application source code.

The MoonRay Hydra plugin, HdMoonRay, uses Arras as its primary means of communicating with MoonRay.

## MoonRay Arras Client Plugins

You can integrate interactive MoonRay rendering into an application using an Arras client plugin. If the application supports Hydra, the easiest way to do this is to use the HdMoonRay Hydra plugin. You can also write a new client plugin that does not require Hydra, using the Arras client API.

## Local and distributed modes

In <span class="define">local mode</span> Arras starts a single render process on the same machine as the client. This provides the benefits of isolation from the the main client application, but doesn't support remote or multi-machine rendering. The code to start a local mode session is in the Arras client library, so you don't need any additional services or setup to use local mode.

In <span class="define">distributed mode</span>, Arras uses a service called <span class="define">Coordinator</span> to manage a *pool* of render machines. Coordinator allocates machines in the pool as the client requests them, based on the remaining CPU and memory resources on each machine. As well as a running Coordinator service, distributed mode requires a service called <span class="define">Node</span> running on each machine in the pool.

The client plugin code required to use local mode and distributed mode is essentially the same. When requesting a new Arras session, the client provides the URL of a Coordinator service that it wants to use. If it uses the string "local:" in place of an actual Coordinator endpoint, Arras automatically uses local mode. 
