Meteor.methods({
  saveHistoricoEvento: function(eventoAttributes) {
    var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var eventObject = _.extend(_.pick(eventoAttributes, 'eventoId'), {
      userId: user._id,
      criacaoDt: new Date()
    });

    eventObject._id = HistoricoEventos.insert(eventObject);

    return eventObject;
  }





});
