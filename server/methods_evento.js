
Meteor.methods({
  saveEvento: function(eventoAttributes) {
    var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var eventObject = _.extend(_.pick(eventoAttributes, 'descricao','dtInicio','dtFim'), {
      userId: user._id,
      criacaoDt: new Date()
    });

    eventObject._id = Eventos.insert(eventObject);

    return eventObject;
  },

   updateEvento:function (properties){
     var  currentId = properties._id
     delete properties._id;
     Eventos.update(currentId, {$set: properties})
     return;
 },




});

