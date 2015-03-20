

Template.eventoUsuario.events({
  'submit form': function(e) {
    e.preventDefault();

    var properties = {
      eventoId: this._id,
      userId: $(e.target).find('#cbUsuario').val()
    }

      if(properties!==null&& properties != 'undefined' && properties.circuitoId!=="" &&  properties.eventoId!==""){
    Meteor.call('saveEventoUsuario', properties, function(error, usuario) {
                      if (error) {
                         $("#btnsave").removeAttr('disabled')
                               toastr.error("", "Ops");

                              } else {
                                 toastr.success("", "Salvo");

                              }
   });

      }else{
        toastr.error("", "Campo obrigatorio");
      }



    },


});

Template.eventoUsuario.helpers({


   usuarios:function() {
      return UsuarioEventos.find({eventoId:this._id})
    }
});




Template.usuarioEventoItem.helpers({


   user: function() {
     return Meteor.users.findOne(this.userId);
   }

});


Template.usuarioEventoItem.events({



 'click #remove': function(e) {
    e.preventDefault();
     if (confirm("Tem certeza de que deseja remover este usuário?")) {
        var currentUserId= this._id;

        Meteor.call('removeEventoUsuario', currentUserId);

     }

 }

});

