

Template.user_cr.rendered = function() {
$('input[name="numero"]').mask("(00) 0000-00009")

}

Template.user_ed.rendered = function() {
$('input[name="numero"]').mask("(00) 0000-00009")
}

Template.trocar_senha.events({
      // event signup
		  "submit  #usuario-form": function (e){
                e.preventDefault();

         var properties = {
             password: $(e.target).find('#inputSenha').val(),
              password2: $(e.target).find('#inputSenha2').val()
         }

               if(properties.password == properties.password2 ){

                 Meteor.call('trocar_senha',properties, function(error) {
                        if (error) {
                                // display the error to the user
                                //toastr.error("Erro", "Ops");
                              } else {

                                toastr.success("", "Senha alterada");
                                 Meteor.logout(function(erro){
                                  if(erro){
                                    //alert("erro");
                                    Router.go('index');
                                  }else{
                                        Router.go('index');
                                    }
                                })
                              }
                    });


               }else{
                   toastr.error("Senhas distintas","ops!");
                }

         }

});


Template.user_cr.events({
      // event signup
		  "submit  #usuario-form": function (e){
                e.preventDefault();



         var properties = {

             username: $(e.target).find('#inputCpf').val(),
             email: $(e.target).find('#inputEmail').val(),
             password: $(e.target).find('#inputSenha').val(),
             password2: $(e.target).find('#inputSenha2').val(),
             profile :{  nome: $(e.target).find('#inputNome').val(),
                       telefone: $(e.target).find('#inputTelefone').val(),
                       orgaoId: $(e.target).find('#cbOrgao').val(),
                       grupoId: $(e.target).find('#cbGrupo').val(),
                       image: null
                    }
    }


       Meteor.call('create_user', properties, function(error, usuario) {


                              if (error) {
                                // display the error to the user
                                 toastr.error(error.reason,"ops!");
                                     $("#btnsave").removeAttr('disabled');

                              } else {
                                 toastr.success("","Salvo");
                                Router.go('user')
                              }
                           });



  }

});




Template.user_ed.helpers({

   email: function (){
      if(this.emails[0]!==null)
          return  this.emails[0].address;
      else
          return '';

   }
}),

Template.user_ed.events({

     // event signup
		  "click  #btnReset": function (e){
              e.preventDefault();
      var currentUser = this._id;




  Meteor.call('resetar_senha', currentUser, function(error) {
                        if (error) {
                                // display the error to the user
                                toastr.error("Erro", "Ops");
                              } else {
                                toastr.success("", "Senha Resetada");
                              }
   });
  },








   // event signup
		  "submit  #usuario-form": function (e){
              e.preventDefault();
      var currentUser = this._id;

      var properties = {
             username: $(e.target).find('#inputCpf').val(),
             email: $(e.target).find('#inputEmail').val(),
             profile :{  nome: $(e.target).find('#inputNome').val(),
                       telefone: $(e.target).find('#inputTelefone').val(),
                       orgaoId: $(e.target).find('#cbOrgao').val(),
                       grupoId: $(e.target).find('#cbGrupo').val()

                    }
    }

  Meteor.call('update_user', currentUser,properties, function(error) {
                        if (error) {
                                // display the error to the user
                                toastr.error("Erro", "Ops");
                              } else {
                                toastr.success("", "Salvo");
                              }
   });
  }
});
Template.usuarioItem.helpers({
    orgao: function(){
      return Orgaos.findOne({_id:this.profile.orgaoId});
    },

   status:function(){
        if(typeof this.profile.status === 'undefined'|| this.profile.status===true){
          return false
        }else{
          return true;
        }

    }
});

Template.user_ls.helpers({
    users: function() {
        return Meteor.users.find();
    }


});


Template.selectUsuario.helpers({
 users: function() {
        return Meteor.users.find();
    }
});


Template.usuarioItem.events({

      "click  #btnDesativar": function (e){
              e.preventDefault();
      var currentUser = this._id;

  Meteor.call('desativar_usuario', currentUser, function(error) {
                        if (error) {
                                // display the error to the user
                                toastr.error("Erro", "Ops");
                              } else {
                                toastr.success("", "Desativado");
                              }
   });
  },

"click  #btnAtivar": function (e){
              e.preventDefault();
       var currentUser = this._id;

  Meteor.call('ativar_usuario', currentUser ,function(error) {
                        if (error) {
                                // display the error to the user
                                toastr.error("Erro", "Ops");
                              } else {
                                toastr.success("", "Ativado");
                              }
   });
  },

});
