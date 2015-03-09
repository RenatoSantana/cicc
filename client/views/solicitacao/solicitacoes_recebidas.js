var handle;
Deps.autorun(function(){  if(Meteor.user()!==null){
    
 // handle= Meteor.subscribeWithPagination('solicitacoesEnviadas', 8);  
}
});

Template.solicitacao_rcb.helpers({
    solicitacoes: function() {
        var user= Meteor.user();
        return Solicitacoes.find({orgaoDestinoId:user.profile.orgaoId});
    }

   
});


