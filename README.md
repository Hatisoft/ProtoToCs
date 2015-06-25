# ProtoToCs

This is a simple Node.js script to compile Protocol Buffers for C#

##Prerequisites

I follow a convention on my folder structure. Where the folders called protos will contain two sub-folder:
* Raw: Contains the non compiled files (.proto files).
* Compiled: Output folder of the compilation (.cs files).

If you are using NGet for the dependencies of your project  I would recommend to use the tools that are distributed with the package gRPC Tools, in any other case during compilation you should provide the directory for two executables (protoc and grpc_csharp_plugin.exe).

Last for not least the execution will require you to have installed node.js.

##Run

node ProtoToCs.js `<ProjectFolder>` `<ToolsFolder>`

Where:
*`<ProjectFolder>`: Is the root of your project
*`<ToolsFolder>`: Is the folder containing protoc and grpc_csharp_plugin executables.

