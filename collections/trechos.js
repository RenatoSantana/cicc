Trechos = new Meteor.Collection('trechos');

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
    //max: 100
   },
   criacaoDt: {
    type: Date,
    optional: false

  },

  circuitoId: {
    type: String,
    optional: false
  },

   userId: {
    type: String,
    optional: false

  },

}



Schema.trecho= new SimpleSchema(objectSchema);
Trechos.attachSchema(Schema.trecho);

EasySearch.createSearchIndex('trechos', {
    'field' : ['descricao'],
    'collection' : Trechos,
    'limit' : 50
});
