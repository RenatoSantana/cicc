Locais = new Meteor.Collection('locais');

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
   userId: {
    type: String,
    optional: false
    
     
  },
  
}



Schema.local= new SimpleSchema(objectSchema);
Locais.attachSchema(Schema.local);

EasySearch.createSearchIndex('locais', {
    'field' : ['descricao'],  // required, searchable field(s)
    'collection' : Locais,          // required, Mongo Collection
    'limit' : 50                  // not required, default is 10
});
        

        


