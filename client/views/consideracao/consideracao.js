Template.consideracao_cr.helpers({
   consideracaoSchema: function() {
    return Schema.consideracao;
  },

  consideracoes:function(){

     return Consideracoes.find({userId:Meteor.userId()},{sort: {criacaoDt: -1}})
  }




});


AutoForm.addHooks(
  ["consideracao_cr"],
  {
   before: {
      insert: function(doc, template) {
         doc.userId = Meteor.userId();
         doc.criacaoDt = new Date()
         doc.orgaoId = Meteor.user().profile.orgaoId
         var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()
         doc.eventoId = historico[0].eventoId;
         return doc;
      }

    },
      after: {
      insert: function(error, result, template) {
         toastr.success("", "Salvo");
      },

    }

  }
);

Template.consideracaoItem.helpers({
    user: function() {
        return Meteor.users.findOne(this.userId);
    },


  logo: function(){
    var obj = Orgaos.findOne(this.orgaoId);
    return Files.findOne(obj.fileId);
  },

  data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');

  }



});



Template.consideracao_cr.helpers({

    desabilitaSubmit:function(){
        var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch();
        if(typeof historico[0] !=='undefined' && typeof historico[0].eventoId !== 'undefined'){
            var evento =  Eventos.findOne(historico[0].eventoId);
             var dataAtual = new Date();
            if(evento.dtFim < dataAtual)
              return false;
            else
              return true;
       }
       return false;
  }


});