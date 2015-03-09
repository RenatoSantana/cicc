Noticias = new Meteor.Collection('noticias');
Schema = {};

objectSchema = {
   _id: {
     label: " ",
    type: String,
    optional: true,
   },

   titulo: {
    type: String,
    optional: false,
    label: "Título"
   // max: 250
   },
   texto: {
    type: String,
    optional: false,
    label: "Texto"
  //  max: 10000
   },

   fonte: {
    type: String,
    optional: false,
    label: "Fonte"
    //max: 500
   },

  criacaoDt: {
    type: Date,
    optional: true
  },

   userId: {
    type: String,
    optional: true
  },

   orgaoId: {
    type: String,
    optional: true
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

  status: {
    type: String,
    optional: true,
    label: "Notícia",
    autoform: {
      type: "select-radio-inline",
      value: "privada"

    }
  },

  bloqueio: {
    type: Boolean,
    optional: true
  },

  userValitatorId: {
    type: String,
    optional: true
  },




}

Schema.noticia= new SimpleSchema(objectSchema);
Noticias.attachSchema(Schema.noticia);
EasySearch.createSearchIndex('noticias', {
    'field' : ['texto','titulo'],  // required, searchable field(s)
    'collection' : Noticias,          // required, Mongo Collection
    'limit' : 20 ,                // not required, default is 10
     'use' : 'minimongo'
});








