

Meteor.methods({
  incidente: function(incidenteAttributes,acoes) {
  var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");



    var incidenteObject = _.extend(_.pick(incidenteAttributes, 'eventoId', 'circuitoId','trechoId','tituloIncidente','descricaoIncidente','fileId','dataDoFato','temProtocolo','protocoloId'), {
      userId: user._id,
      orgaoId: user.profile.orgaoId,
      status :"aberta",
      criacaoDt: new Date(),
      bloqueio: false
    });




    if(incidenteObject!==null && typeof incidenteObject != 'undefined'){
      if(incidenteObject.eventoId === ""){
         incidenteObject.eventoId = null;

      }
     if(incidenteObject.circuitoId === ""){
         incidenteObject.circuitoId = null;

      }

       if(incidenteObject.trechoId === ""){
         incidenteObject.trechoId = null;

      }

      if(incidenteObject.descricaoIncidente === ""){
         incidenteObject.descricaoIncidente = null;

      }

     if(incidenteObject.tituloIncidente === ""){
         incidenteObject.tituloIncidente = null;

      }
    }


   IncidenteSchema.namedContext("createIncidenteContext").validate(incidenteObject);

    var context = IncidenteSchema.namedContext("createIncidenteContext");
     if (!context.isValid()) {
       // console.log(context.invalidKeys())
        throw new Meteor.Error(400, context.invalidKeys());
      }else{
          incidenteObject._id = Incidentes.insert(incidenteObject);
      }

     if(incidenteObject._id!==null && typeof incidenteObject._id != 'undefined'){
       IncidentesOrgaos.insert({ incidenteId: incidenteObject._id, orgaoId: user.profile.orgaoId })

        if(acoes != null && typeof acoes != 'undefined' && acoes.length > 0){
             acoes.forEach(function(obj) {

                IncidentesOrgaos.insert({ incidenteId: incidenteObject._id, orgaoId: obj.orgaoId })

             });

        }

     }


    return incidenteObject;
  },

  fecharIncidente:function (currentId){
     var properties ={
       bloqueio:false,
       status :'fechado'
     }
     Incidentes.update(currentId, {$set: properties});


 },

  reabrirIncidente:function (currentId){
     var properties ={
       bloqueio:false,
       status :'aberta'
     }
     Incidentes.update(currentId, {$set: properties});


 },


    removerIncidente:function (currentId){
     var properties ={
       bloqueio:true,

     }
     Incidentes.update(currentId, {$set: properties});


 },

});