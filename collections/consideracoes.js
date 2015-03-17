Consideracoes = new Meteor.Collection('consideracoes');
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
    label: "Consideração"
    //max: 100
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

eventoId: {
    type: String,
    optional: true

  },




}



Schema.consideracao= new SimpleSchema(objectSchema);

Consideracoes.attachSchema(Schema.consideracao);


EasySearch.createSearchIndex('consideracoes', {
    'field' : ['descricao'],  // required, searchable field(s)
    'collection' : Consideracoes,          // required, Mongo Collection
    'limit' : 500                  // not required, default is 10
});



