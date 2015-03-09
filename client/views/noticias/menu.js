

Template.menuBloqueio.helpers({
  
   noticia:function(){
     return Session.get("idNoticiaVT");
     
   }
  
})

Template.menuValidacao.helpers({
  
  
   noticiasPublicadas:function(){
    var user = Meteor.user();  
       if (Roles.userIsInRole(user, ["Administrativo"])) {
         
             return  Noticias.find({bloqueio:false}).count();
       }else{
   
              return  Noticias.find({bloqueio:false,orgaoId:user.profile.orgaoId}).count();
       }
  },
    
  noticiasBloqueadas:function(){
    var user = Meteor.user();
    if (Roles.userIsInRole(user, ["Cadastro"])) {
       return  Noticias.find({bloqueio:true,status:"privada",orgaoId:user.profile.orgaoId}).count();
    }else if (Roles.userIsInRole(user, ["Administrativo"])) {
       return  Noticias.find({bloqueio:true,status:"privada"}).count();
    }
  
  },
  

   incidenteAbertos: function() {
        var user= Meteor.user();
      
         if (Roles.userIsInRole(user, ["Cadastro"])) {
            return Incidentes.find({status:'aberta', orgaoId:user.profile.orgaoId}).count();
         }else if (Roles.userIsInRole(user, ["Administrativo"])) {
           return Incidentes.find({status:'aberta'}).count();
         }
    },
  
   incidentesFechado: function() {
              var user= Meteor.user();
      if (Roles.userIsInRole(user, ["Cadastro"])) {
        return Incidentes.find({status:'fechado',orgaoId:user.profile.orgaoId}).count();
      }else   if (Roles.userIsInRole(user, ["Administrativo"])) {
        return Incidentes.find({status:'fechado'}).count();
      }
    },
   solicitacoesEnvCount: function() {
        var user= Meteor.user();
      if(user!==null)
         return Solicitacoes.find({orgaoId:user.profile.orgaoId}).count();
    },
  
   solicitacoesRecConut: function() {
        var user= Meteor.user();
        if(user!==null)
          return Solicitacoes.find({orgaoDestinoId:user.profile.orgaoId}).count();
    }

   
})


