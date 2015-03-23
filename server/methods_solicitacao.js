

Meteor.methods({
  solicitacao: function(solicitacaoAttributes) {
    var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var solicitacaoObject = _.extend(_.pick(solicitacaoAttributes, 'assunto', 'mensagem','orgaoDestinoId','eventoId'), {
      userId: user._id,
      orgaoId: user.profile.orgaoId,
      criacaoDt: new Date(),

    });


      if(solicitacaoObject!==null && typeof solicitacaoObject != 'undefined'){
          if(solicitacaoObject.orgaoDestinoId === ""){
             solicitacaoObject.orgaoDestinoId = null;

          }
        if(solicitacaoObject.assunto === ""){
             solicitacaoObject.assunto = null;

          }

         if(solicitacaoObject.mensagem === ""){
             solicitacaoObject.mensagem = null;

          }

    }

      SolicitacaoSchema.namedContext("createSolicitacaoContext").validate(solicitacaoObject);

    var context = SolicitacaoSchema.namedContext("createSolicitacaoContext");
     if (!context.isValid()) {
        throw new Meteor.Error(400, context.invalidKeys());
      }

    solicitacaoObject._id = Solicitacoes.insert(solicitacaoObject);

    return solicitacaoObject;
  }





});
