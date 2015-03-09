objectSchema = {
   
  _id: {
    type: String,
    optional: true,
   },
   assunto: {
    type: String,
    optional: false,
    label: "Assunto"
  //  max: 100000
   },
  
  mensagem: {
    type: String,
    optional: false,
    label: "Mensagem"
 //   max: 100000
  },
   
 

   userId: {
    type: String,
    optional: false
  },
  
  
   orgaoId: {
    type: String,
    optional: false
  },
  
   orgaoDestinoId: {
    type: String,
    optional: false
  },
  
    criacaoDt: {
    type: Date,
    optional: false
  }
  
  
 
  
}


Solicitacoes = new Meteor.Collection('solicitacoes');

SolicitacaoSchema= new SimpleSchema(objectSchema);

Solicitacoes.attachSchema(SolicitacaoSchema);


EasySearch.createSearchIndex('solicitacoes', {
    'field' : ['assunto', 'mensagem'],  // required, searchable field(s)
    'collection' : Solicitacoes,          // required, Mongo Collection
    'limit' : 50                  // not required, default is 10
});
        

