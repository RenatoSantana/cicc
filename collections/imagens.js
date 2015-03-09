Imagens = new Meteor.Collection('imagens');
Schema = {};
objectSchema = {
   _id: {
    type: String,
    optional: true,
   },
   assunto: {
    type: String,
    optional: false,
    label: "Assunto"
  //  max: 10000
   },
  
   texto: {
    type: String,
    optional: false,
    label: "Texto"
   // max: 10000
   },
  
   observacaoCoordenacao: {
    type: String,
    optional: true,
    label: "Observação"
  //  max: 10000
   },
  
  
  fileId: {
    type: String,
    label: "Foto",
    optional: true,
      autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: "files"
      }
    }
  },
  cameraId: {
    type: String,
    optional: false,
    label: "Câmera",
    autoform: {
      type: "select",
            options: function () {
                var options = [];
                 Cameras.find().forEach(function (element) {
                    options.push({
                        label: element.localizacao, value: element._id
                    })
                });
                return options;
            }
        }
  },
  dataHora: {
    label:"Data/Horário",
    type: Date,
    optional: false,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
    
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
  }
  
 
 
  
}



Schema.imagem= new SimpleSchema(objectSchema);
//SimpleSchema.debug = true;
Imagens.attachSchema(Schema.imagem);


EasySearch.createSearchIndex('imagens', {
    'field' : ['assunto','texto'],  // required, searchable field(s)
    'collection' : Imagens,          // required, Mongo Collection
    'limit' : 10                  // not required, default is 10
});
        

