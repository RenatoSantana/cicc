
Meteor.methods({
  saveEventoCircuito: function(atributes) {
    var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var object = _.extend(_.pick(atributes, 'eventoId', 'circuitoId'), {
      userId: user._id,
      criacaoDt: new Date()
    });

    object._id = EventoCircuitos.insert(object);

    return object;
  },

  removeEventoCircuito:function(id){
     EventoCircuitos.remove(id)
   },

});
