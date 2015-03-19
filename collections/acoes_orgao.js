AcoesOrgao = new Meteor.Collection('acoesOrgao');
Schema = {};

objectSchema = {
   _id: {
     label: " ",
    type: String,
    optional: true,
   },

   mensagem: {
    type: String,
    optional: false,
    label: "Mensagem",
   // max: 250
   },


   userId: {
    type: String,
    optional: false


  },


   orgaoId: {
    label: "Orgão Responsável",
    type: String,
    optional: false

   },

   incidenteId: {
    type: String,
    optional: true


  },
  criacaoDt: {
    type: Date,
    optional: true
  }




}

Schema.acaoOrgao= new SimpleSchema(objectSchema);
//SimpleSchema.debug = true;
AcoesOrgao.attachSchema(Schema.acaoOrgao);

EasySearch.createSearchIndex('acoesOrgao', {
    'field' : ['mensagem'],  // required, searchable field(s)
    'collection' : AcoesOrgao,          // required, Mongo Collection
    'limit' : 10                  // not required, default is 10
});