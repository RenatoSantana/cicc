var handle;
Deps.autorun(function(){
  if(Meteor.user()!==null){



  }
});

Template.noticia_publicada_ls.helpers({

  noticias:function(){
    var user = Meteor.user();

       if (Roles.userIsInRole(user, ["Administrativo"])) {

             return  Noticias.find({bloqueio:false},{sort:{criacaoDt: -1}});
       }else{

              return  Noticias.find({bloqueio:false,orgaoId:user.profile.orgaoId},{sort:{criacaoDt: -1}});
       }
  },

   noticiasCount:function(){
    var user = Meteor.user();
    return  Noticias.find({bloqueio:false,orgaoId:user.profile.orgaoId}).count();
  },

  evento:function(){
     var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()

      return Eventos.findOne(historico[0].eventoId)
    }


})