Protocolos = new Meteor.Collection('protocolos');

Schema = {};

objectSchema = {
   _id: {
     label: " ",
    type: String,
    optional: true,
   },

  codigo: {
    type: String,
    optional: false,
    label: "Número"
   // max: 250
   },
   descricao: {
    type: String,
    optional: false,
    label: "Descrição"
  //  max: 250
   },


   userId: {
    type: String,
    optional: true


  },
/*
   localId: {
    label: "Tipo de Local",
    type: String,
    optional: false,

     autoform: {
      type: "select",
            options: function () {
                var options = [];
                 Locais.find().forEach(function (element) {
                    options.push({
                        label: element.descricao, value: element._id
                    })
                });
                return options;
            }
        }
  },
*/



}

Schema.protocolo= new SimpleSchema(objectSchema);
Protocolos.attachSchema(Schema.protocolo);

// EasySearch.createSearchIndex('protocolos', {
//     'field' : ['descricao'],  // required, searchable field(s)
//     'collection' : Protocolos,          // required, Mongo Collection
//     'limit' : 20 ,
//         'use' : 'minimongo' // not required, default is 10
// });