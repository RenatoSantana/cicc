

Meteor.methods({
  incidente: function(incidenteAttributes) {
  var user = Meteor.user()
 
    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");
    
    
    
    var incidenteObject = _.extend(_.pick(incidenteAttributes, 'eventoId', 'circuitoId','trechoId','tituloIncidente','descricaoIncidente','fileId','dataDoFato'), {
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
 /*   
    if(incidenteObject.protocoloId!==null && typeof incidenteObject.protocoloId != 'undefined'){
      var protocoloAcoes = ProtocoloAcao.find({protocoloId:incidenteObject.protocoloId}).fetch();
      var tam = protocoloAcoes.length;
      var pos = 0
      var orgaos=[];
      console.log(tam)
      protocoloAcoes.forEach(function(obj) {
        console.log(obj)
        var acao = Acoes.findOne(obj.acaoId);
        if(acao !==null &&  typeof acao != 'undefined' && typeof  acao.orgaoId  != 'undefined'){
            orgaos[pos] =acao.orgaoId
            if(pos < tam)
               pos = pos + 1
        }
    });
       
      incidenteObject.orgaos = orgaos;
      
     }*/

   IncidenteSchema.namedContext("createIncidenteContext").validate(incidenteObject); 
  
    var context = IncidenteSchema.namedContext("createIncidenteContext");
     if (!context.isValid()) {
       // console.log(context.invalidKeys())
        throw new Meteor.Error(400, context.invalidKeys()); 
      }else{
          incidenteObject._id = Incidentes.insert(incidenteObject);
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