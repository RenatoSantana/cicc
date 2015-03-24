Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")],

  filter: {
    maxSize: 486400, //in bytes
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png','jpg','jpeg']
    },
    // extensions: ['png','jpg','jpeg']

    onInvalid: function (message) {
      if (Meteor.isClient) {
           toastr.error("A imagem não pode ultrapassar o tamanho de 600 kb.");
      }else{
        console.log(message);
      }
    }

    }




});
