Telefones = new Meteor.Collection('telefones');

Schema = {};

objectSchema = {
   _id: {
    type: String,
    optional: true,
    label: " ",
   },
   orgao: {
    type: String,
    optional: false,
    label: "Orgão/Setor:"

   },
   numero: {
    type: String,
    optional: false,
    label: "Telefone :"

   },

  criacaoDt: {
    type: Date,
    optional: true

  },
  userId: {
    type: String,
    optional: true


  },

}



Schema.telefone= new SimpleSchema(objectSchema);
Telefones.attachSchema(Schema.telefone);

EasySearch.createSearchIndex('telefones', {
    'field' : ['orgao','numero'],  // required, searchable field(s)
    'collection' : Telefones,          // required, Mongo Collection
    'limit' : 50                  // not required, default is 10
});





