Template.historico_evento_cr.events({

  'submit form': function(e,tmp) {

    e.preventDefault();

    var properties = {
       eventoId: $(e.target).find('#cbEvento').val(),

    }

     Meteor.call('saveHistoricoEvento', properties, function(error, ev) {
                          if (error) {
                                     // display the error to the user


                              } else {
                                       toastr.success("", "Salvo");

                              }
            });

  }



});