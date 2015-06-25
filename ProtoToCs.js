var fs = require('fs');
var output = function(error, stdout, stderr){
   console.log(stdout);
   console.log(stderr);
   if(error != null)
       console.log(error);
}
var compileProtoFile = function(protoFolder, compilerPath){
   var rawDir = protoFolder + '\\raw';
   var compileDir = protoFolder + '\\compiled';
   var files = fs.readdirSync(rawDir);
   for (var i in files) {
      var exec = require('child_process').exec;
      console.log('Compiling '+files[i]+': started');
      var runString = compilerPath + 'protoc -I '+ rawDir +' --csharp_out='+ compileDir +' --grpc_out='+ compileDir +' --plugin=protoc-gen-grpc='+ compilerPath +'grpc_csharp_plugin.exe '+rawDir+'\\'+files[i];
      exec(runString, output);
      console.log('Compiling '+files[i]+': done');
   }
}
var compileAllProtoFolders = function (currentPath, compilerPath) {
   var files = fs.readdirSync(currentPath);
   for (var i in files) {
      var currentFile = currentPath + '\\' + files[i];
      var stats = fs.statSync(currentFile);
      if (stats.isDirectory()) {
         if(files[i] == 'protos')
            compileProtoFile(currentFile, compilerPath);
         else
            compileAllProtoFolders(currentFile, compilerPath);
      }
   }
}
compileAllProtoFolders(process.argv[2], process.argv[3]);
