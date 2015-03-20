
Meteor.methods({
  saveEventoUsuario: function(atributes) {
    var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var object = _.extend(_.pick(atributes, 'eventoId', 'userId'), {
      criacaoDt: new Date()
    });

    object._id = UsuarioEventos.insert(object);

    return object;
  },

  removeEventoUsuario:function(id){
     UsuarioEventos.remove(id);
   },

});


