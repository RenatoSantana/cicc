Template.solicitacao_menu.helpers({
    solicitacoesEnvCount: function() {
        var user= Meteor.user();
        return Solicitacoes.find({orgaoId:user.profile.orgaoId}).count();
    },
  
   solicitacoesRecConut: function() {
        var user= Meteor.user();
        return Solicitacoes.find({orgaoDestinoId:user.profile.orgaoId}).count();
    }

   
});