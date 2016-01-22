Eventos = new Meteor.Collection('eventos');
Schema = {};

objectSchema = {
   _id: {
     label: " ",
    type: String,
    optional: true,
   },

   descricao: {
    type: String,
    optional: false,
    label: "Nome do Evento"

   },


  dtInicio: {
    type: Date,
    optional: false,
    label: "Data inicial"
  },


  dtFim: {
    type: Date,
    optional: false,
    label: "Data final"
  },

 criacaoDt: {
    type: Date,
    optional: true,
    label: "Data final"
  },
  userId: {
    type: String,
    optional: true
  }




}


Schema.evento=new SimpleSchema(objectSchema);
Eventos.attachSchema(Schema.evento);

// EasySearch.createSearchIndex('eventos', {
//     'field' : ['descricao'],  // required, searchable field(s)
//     'collection' : Eventos,          // required, Mongo Collection
//     'limit' : 500                  // not required, default is 10
// });

