

Meteor.methods({
  saveOrgao: function(orgaoAttributes) {
    var user = Meteor.user()
 
    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var orgaoObject = _.extend(_.pick(orgaoAttributes, 'descricao', 'sigla','fileId'), {
      userId: user._id,
      criacaoDt: new Date()
    });

    orgaoObject._id = Orgaos.insert(orgaoObject);

    return orgaoObject;
  },
  
 updateOrgao:function (properties){
     var  currentId = properties._id
     delete properties._id;
     Orgaos.update(currentId, {$set: properties})
     return;
 }

   
   
});
