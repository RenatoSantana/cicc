Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")],
  
  filter: {
  //  maxSize: 1048576, //in bytes
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png','jpg','jpeg']
    },
     extensions: ['png','jpg','jpeg']
    },
  
  
});
