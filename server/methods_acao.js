Meteor.methods({
  saveAcaoOrgao: function(acaoAttributes) {
    var user = Meteor.user()
 
    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var acaoObject = _.extend(_.pick(acaoAttributes, 'incidenteId', 'mensagem'), {
      userId: user._id,
      orgaoId: user.profile.orgaoId,
      criacaoDt: new Date()
    });

    acaoObject._id = AcoesOrgao.insert(acaoObject);

    return acaoObject;
  }
 
});
