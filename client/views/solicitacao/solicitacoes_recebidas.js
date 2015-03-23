Template.solicitacao_rcb.helpers({
    solicitacoes: function() {
        var user= Meteor.user();
        return Solicitacoes.find({orgaoDestinoId:user.profile.orgaoId});
    },



});


