
var handle;
Deps.autorun(function(){
    if(Meteor.user()!==null){
  
//  handle= Meteor.subscribeWithPagination('incidentesDesbloqueados', 8);  
    }
});

Template.incidente_orgao.helpers({
    incidentes: function() {
              var user= Meteor.user();
      if (Roles.userIsInRole(user, ["Cadastro"])) {
        return Incidentes.find({status:"fechado",orgaoId:user.profile.orgaoId},{sort:{criacaoDt: -1}});
      }else   if (Roles.userIsInRole(user, ["Administrativo","Consulta"])) {
        return Incidentes.find({status:"fechado"},{sort:{criacaoDt: -1}});
      }
    }
    

   
});
Template.incidente_orgao.events({

  "click #new-incidente":function (e){
      e.preventDefault();
           Session.set('trechos',null);
           Router.go("new_incidente");
    },
});