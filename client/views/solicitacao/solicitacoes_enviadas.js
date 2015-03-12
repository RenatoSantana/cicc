var handle;
Deps.autorun(function(){
    if(Meteor.user()!==null){

//  handle= Meteor.subscribeWithPagination('solicitacoesRecebidas', 8);
    }
});

Template.solicitacao_env.helpers({
    solicitacoes: function() {
        var user= Meteor.user();
        return Solicitacoes.find({orgaoId:user.profile.orgaoId});
    },

    evento:function(){
     var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()

      return Eventos.findOne(historico[0].eventoId)
    }



});
