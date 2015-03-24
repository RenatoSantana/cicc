Acoes = new Meteor.Collection('acoes');
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
    label: "Descrição"
   },


   userId: {
    type: String,
    optional: true


  },


   orgaoId: {
    label: "Orgão Responsável",
    type: String,
    optional: false,

     autoform: {
      type: "select",
            options: function () {
                var options = [];
                 Orgaos.find().forEach(function (element) {
                    options.push({
                        label: element.descricao, value: element._id
                    })
                });
                return options;
            }
        }
  },

  criacaoDt: {
    type: Date,
    optional: true
  }



}

Schema.acao= new SimpleSchema(objectSchema);
Acoes.attachSchema(Schema.acao);

EasySearch.createSearchIndex('acoes', {
    'field' : ['descricao'],  // required, searchable field(s)
    'collection' : Acoes,          // required, Mongo Collection
    'limit' : 20 ,
        'use' : 'minimongo'
   // not required, default is 10
});