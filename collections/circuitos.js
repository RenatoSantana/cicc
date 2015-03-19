Circuitos = new Meteor.Collection('circuitos');

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
    label: "Descrição"
   },
   criacaoDt: {
    type: Date,
    optional: false

  },

   userId: {
    type: String,
    optional: false

  },

 eventoId: {
    type: String,
    optional: true

  },


}



Schema.circuito= new SimpleSchema(objectSchema);
Circuitos.attachSchema(Schema.circuito);

EasySearch.createSearchIndex('circuitos', {
    'field' : ['descricao'],
    'collection' : Circuitos,
    'limit' : 50
});