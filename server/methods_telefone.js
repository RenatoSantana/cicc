Meteor.methods({
  saveTelefone: function(telefoneAttributes) {
    var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var telefoneObject = _.extend(_.pick(telefoneAttributes, 'orgao', 'numero'), {
      userId: user._id,
      criacaoDt: new Date()
    });

    telefoneObject._id = Telefones.insert(telefoneObject);

    return telefoneObject;
  },

 updateTelefone:function (properties){
     var  currentId = properties._id

     delete properties._id;
     Telefones.update(currentId, {$set: properties})
     return;
 }



});
