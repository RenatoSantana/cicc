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

                                         Meteor.logout(function(erro){
                  if(erro){

                  }else{
                        Router.go('index');
                    }
                })
                              }
            });

  },




 'click #btndesativar': function(e) {
       e.stopPropagation();
       e.preventDefault();


 if (confirm("Tem certeza de que deseja excluir esta notícia? ?")) {
     Meteor.call('desativar_todos_usuarios', function(error) {


                              if (error) {

                                toastr.error(error.reason);

                              } else {
                                 toastr.success("", "Notícia Excluído");
                                 Router.go("noticia")
                              }
                   });

 }
  },



});