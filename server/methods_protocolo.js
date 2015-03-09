

Meteor.methods({
  saveAcao: function(attributes) {
    var user = Meteor.user()
 
    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var object = _.extend(_.pick(attributes, 'protocoloId', 'acaoId'), {
      userId: user._id,
      orgaoId: user.profile.orgaoId,
      criacaoDt: new Date()
    });

    object._id = ProtocoloAcao.insert(object);

    return object;
  },
  
  
    removeProtocoloAcao:function(id){
     ProtocoloAcao.remove(id)
   },
 
});
