if(Meteor.isClient){
  Meteor.startup(function(){
       Session.set('resetPass',false);

  })
}

Template.login.events({
      // event login
		  "submit  #login-form": function (e){
                e.preventDefault();
                
                var loginProperties = {
                    username: $(e.target).find('#login-username').val(),
                    password: $(e.target).find('#login-password').val()
                   
                }
                  
                Meteor.loginWithPassword(loginProperties.username,loginProperties.password,function(erro){
                  
                    if(erro){
                     toastr.error("Usuário e/ou senha inválido","ops!")
                    }else{
                         var user= Meteor.user();
                         if (Roles.userIsInRole(user, ["Consulta"])) {  
                            Router.go('noticia');
                         }else if (Roles.userIsInRole(user, ["Videomonitoramento"])) {  
                              Router.go('imagem');
                           }else{
                            Router.go('incid_pnd');
                         }
                    
                    }
                  
                  
                });
        
      }
  
  
  
  
  
  
});