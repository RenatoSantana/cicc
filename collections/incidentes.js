objectSchema = {
   _id: {
    type: String,
    optional: true,
   },
   
   tituloIncidente: {
    type: String,
    optional: false,
    label: "Título"
 //   max: 10000
   },
   descricaoIncidente: {
    type: String,
    optional: false,
    label: "Descrição"
 //   max: 10000
   },
  
  dataDoFato: {
    type: Date,
    optional: false
  },
  criacaoDt: {
    type: Date,
    optional: false
  },
   
   eventoId: {
    type: String,
    optional: false,
    label:"Evento"
  },
   
  trechoId: {
    type: String,
    optional: false,
    label:"Trecho"
  },
   
    circuitoId: {
    type: String,
    optional: false,
    label:"Circuito"
  },
   
    protocoloId: {
    type: String,
    optional: true,
    label:"Protocolo"
  },

   userId: {
    type: String,
    optional: false
  },
  
   orgaoId: {
    type: String,
    optional: false
  },
  
 /* orgaos: {
    type: [String],
    optional: false
  },*/
   
   fileId: {
    type: String,
    optional: true
  },
  
  status: {
    type: String,
    optional: false
  },
     bloqueio: {
    type: Boolean,
    optional: false
  },
  
  
}


Incidentes = new Meteor.Collection('incidentes');

IncidenteSchema= new SimpleSchema(objectSchema);

Incidentes.attachSchema(IncidenteSchema);


EasySearch.createSearchIndex('incidentes', {
    'field' : ['tituloIncidente','descricaoIncidente'],  
    'collection' : Incidentes,          
    'limit' : 50 ,          
    'use' : 'minimongo'
});
        

        


