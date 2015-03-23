

Template.solicitacao_env.helpers({
    solicitacoes: function() {
        var user= Meteor.user();
        return Solicitacoes.find({orgaoId:user.profile.orgaoId});
    }
});
