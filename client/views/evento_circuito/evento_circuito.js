Template.evento_circuito_cr.events({
  'submit form': function(e) {
    e.preventDefault();

    var properties = {
      eventoId: this._id,
      circuitoId: $(e.target).find('#cbCircuito').val()
    }

      if(properties!==null&& properties != 'undefined' && properties.circuitoId!=="" &&  properties.eventoId!==""){
    Meteor.call('saveEventoCircuito', properties, function(error, acao) {
                      if (error) {
                         $("#btnsave").removeAttr('disabled')
                               toastr.error("", "Ops");

                              } else {
                                 toastr.success("", "Salvo");
                                 //Router.go("/protocolo_ed/"+acao._id);
                              }
   });

      }else{
        toastr.error("", "Campo obrigatorio");
      }



    }
});

Template.evento_circuito_cr.helpers({


   circuitos:function() {
      return EventoCircuitos.find({eventoId:this._id})
    }
});



Template.eventoCircuitoItem.helpers({

   circuito: function() {
     return Circuitos.findOne({_id:this.circuitoId});

  }


});

Template.evento_circuito_cr.events({
 'click #remove': function(e) {
    e.preventDefault();
     if (confirm("Tem certeza de que deseja remover este item?")) {
        var currentId= this._id;

        Meteor.call('removeEventoCircuito', currentId);

     }

 }

});