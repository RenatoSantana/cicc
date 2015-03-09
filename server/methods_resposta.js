


Meteor.methods({
  resposta: function(respostaAttributes) {
    var user = Meteor.user()
 
    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var respostaObject = _.extend(_.pick(respostaAttributes, 'solicitacaoId', 'mensagem'), {
      userId: user._id,
      orgaoId: user.profile.orgaoId,
      criacaoDt: new Date()
    });

    respostaObject._id = Respostas.insert(respostaObject);

    return respostaObject;
  }
 
});
