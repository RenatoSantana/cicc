throwError = function(message) {
  
  var context = NoticiaSchema.namedContext("createNoticiaContext");
  for(i=0;i < message.length; i++){
    toastr.error(context.keyErrorMessage(message[i].name),"Ops!");
  }
  
}


throwErrorIncidente = function(message) {
  
  var context = IncidenteSchema.namedContext("createIncidenteContext");
  for(i=0;i < message.length; i++){
    toastr.error(context.keyErrorMessage(message[i].name),"Ops!");
  }
  
}

throwErrorOrgao = function(message) {
  
  var context = OrgaoSchema.namedContext("createOrgaoContext");
  for(i=0;i < message.length; i++){
    toastr.error(context.keyErrorMessage(message[i].name),"Ops!");
  }
  
}


throwErrorImage = function(message) {
  
  var context = ImagemSchema.namedContext("createImagemContext");
  for(i=0;i < message.length; i++){
    toastr.error(context.keyErrorMessage(message[i].name),"Ops!");
  }
  
}


throwErrorSolicitacao = function(message) {
  
  var context = SolicitacaoSchema.namedContext("createSolicitacaoContext");
  for(i=0;i < message.length; i++){
    toastr.error(context.keyErrorMessage(message[i].name),"Ops!");
  }
  
}


