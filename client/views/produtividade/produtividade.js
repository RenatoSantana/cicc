AutoForm.addHooks(
  ["produtividade_cr"],
  {
    before   : {

      saveProdutividade: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      saveProdutividade: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("produtividade");
     }

  });


AutoForm.addHooks(
  ["produtividade_ed"],
  {

     onSuccess: function(operation, result, template) {

         Router.go("produtividade");
     },



  }
);
Template.produtividade_cr.helpers({
 produtividadeSchema: function() {
    return Schema.produtividade;
  },
});


Template.produtividade_ed.helpers({
  produtividadeDoc: function() {
    return Produtividades.findOne(this._id)
  }
});

Template.produtividade_ls.helpers({


    produtividades: function() {

           return Session.get("produtividades");

    },

    desabilitaProdutividade:function(){
      return  Session.get("desabilita_produtividade");
    }


});

Template.produtividade_ls.events({

  'change #cbEvento': function(e,t){

   var evento  = t.find('#cbEvento').value;

   evento = Eventos.findOne({_id:evento});
   if(typeof evento != 'undefined'){
     var diferenciaData = diferencaDias(evento.dtInicio,evento.dtFim)
      diferenciaData = diferenciaData +1;
      diferenciaData = 2*diferenciaData;



         var user= Meteor.user();
         var quantidadeProdutividade = 0;
         if (Roles.userIsInRole(user, ["Administrativo"])) {
             quantidadeProdutividade = Produtividades.find({eventoId:evento._id},{sort:{criacaoDt: -1}}).count();
             Session.set("produtividades", Produtividades.find({eventoId:evento,eventoId:evento._id},{sort:{criacaoDt: -1}}).fetch())
         }else {
            Session.set("produtividades",Produtividades.find({orgaoId:user.profile.orgaoId,eventoId:evento._id},{sort:{criacaoDt: -1}}).fetch())
            quantidadeProdutividade = Produtividades.find({orgaoId:user.profile.orgaoId,eventoId:evento._id},{sort:{criacaoDt: -1}}).count();
         }


         if(quantidadeProdutividade <  diferenciaData ){
            Session.set("desabilita_produtividade",true);
         }else{
            Session.set("desabilita_produtividade",false);
         }


   }

  }
});




Template.produtividadeItem.helpers({

 data: function(){
    var time = this.plantaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY ');

  },

  turno:function(){
       if(this.turno === 1)
          return '8:00 - 20:00'
       if(this.turno === 2)
          return '20:00 - 8:00'
  }
});


Template.produtividadeItemView.helpers({

 data: function(){
    var time = this.plantaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY ');

  },

  turno:function(){
       if(this.turno === 1)
          return '8:00 - 20:00'
       if(this.turno === 2)
          return '20:00 - 8:00'
  }
});

Template.produtividade_mg.events({

  'click #btnpesquisar': function(e,t){

   var orgao  = t.find('#cbOrgao').value;
   var evento  = t.find('#cbEvento').value;

   if(typeof evento != 'undefined' && typeof orgao != 'undefined'){



         var user= Meteor.user();
         if (Roles.userIsInRole(user, ["Administrativo"])) {

             Session.set("produtividades_mg", Produtividades.find({eventoId:evento,orgaoId:orgao},{sort:{criacaoDt: -1}}).fetch())
         }




   }

  }
});

Template.produtividade_mg.helpers({


    produtividades: function() {
         var user= Meteor.user();
       if (Roles.userIsInRole(user, ["Administrativo"])) {
           return Session.get("produtividades_mg");
         }
    },



});


Template.produtividade_view.helpers({

 data: function(){
    var time = this.plantaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY ');

  },

  turno:function(){
       if(this.turno === 1)
          return '8:00 - 20:00'
       if(this.turno === 2)
          return '20:00 - 8:00'
  },

   orgao: function() {
        return Orgaos.findOne(this.orgaoId);
    },

   evento: function() {
        return Eventos.findOne(this.eventoId);
    },
});
