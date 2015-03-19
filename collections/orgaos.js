Orgaos = new Meteor.Collection('orgaos');
Schema = {};


objectSchema = {
   _id: {
    type: String,
    optional: true,
    label: " ",
   },
   descricao: {
    type: String,
    optional: false,
    label: "Nome"
    //max: 100
   },
   sigla: {
    type: String,
    optional: false,
    label: "Sigla"
 //   max: 15

   },

  criacaoDt: {
    type: Date,
    optional: false
  },

  fileId: {
    type: String,
    label: "Foto",
    optional: true,
      autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: "files"
      }
    }
  },

   userId: {
    type: String,
    optional: true
  }




}



Schema.orgao= new SimpleSchema(objectSchema);
Orgaos.attachSchema(Schema.orgao);


EasySearch.createSearchIndex('orgaos', {
    'field' : ['descricao'],  // required, searchable field(s)
    'collection' : Orgaos,          // required, Mongo Collection
    'limit' : 500                  // not required, default is 10
});



