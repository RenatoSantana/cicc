

Template.box.helpers({

    user:function() { return Meteor.user(); },

    orgao: function(){
      if(Meteor.user() !=null)
        return Orgaos.findOne({_id:Meteor.user().profile.orgaoId});
       else
        return;
    }
  });
Template.box.events({

   'click #btn-avatar': function () {
       $('.modal-backdrop').removeClass('modal-backdrop');
      $('#editYourAvatarModal').modal();
    },



      // event login
			"click  #logout": function (e){
                e.preventDefault();



                Meteor.logout(function(erro){
                  if(erro){
                    alert("erro");
                  }else{
		  	                Router.go('index');
		  	            }
                })
      },


   "click #imagens":function (e){
      e.preventDefault();
           Session.set("resultImageOk", false);
             Session.set("associaProtocolo",false);
           Router.go("imagem");
    },


    "click #noticias":function (e){
      e.preventDefault();
           Session.set("resultNoticiaOk", false)
             Session.set("associaProtocolo",false);
           Router.go("noticia");
    },

      "click #noticias2":function (e){
      e.preventDefault();
           Session.set("resultNoticiaOk", false)
             Session.set("associaProtocolo",false);
           Router.go("noticia");
    },

    "click #incidentes":function (e){
      e.preventDefault();
           Session.set("resultNoticiaOk", false)
             Session.set("associaProtocolo",false);
           Router.go("incidentes");
    },

      "click #incidentes2":function (e){
      e.preventDefault();
           Session.set("resultNoticiaOk", false)
             Session.set("associaProtocolo",false);
           Router.go("incidentes");
    },

      "click #relatorio":function (e){
          e.preventDefault();

          Session.set("noticias", Noticias.find({},{sort: {criacaoDt: -1}}).fetch());
          Session.set("incidentes",Incidentes.find({},{sort: {criacaoDt: -1}}).fetch());
          Session.set("consideracoes",Consideracoes.find({},{sort: {criacaoDt: -1}}).fetch());
            Session.set("associaProtocolo",false);
          Router.go("relatorio");
    },

      "click #relatorioOrgao":function (e){
          e.preventDefault();
          var user = Meteor.userId();
          Session.set("associaProtocolo",false);
          Session.set("noticias",  Noticias.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
          Session.set("incidentes",Incidentes.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
          Session.set("consideracoes", Consideracoes.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
          Router.go("relatorio_orgao");
    },







});




