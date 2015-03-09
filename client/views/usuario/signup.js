Template.signup.events({
      // event signup
		  "submit  #signup-form": function (e){
                e.preventDefault();
                
              
                  
                Accounts.createUser({
                  
                    username: $(e.target).find('#signup-username').val(),
                    email: $(e.target).find('#signup-email').val(),
                    password: $(e.target).find('#signup-password').val()
                  
                  
                },function(erro){
                  
                  if(erro){
                    alert(erro);
                  }
                })
        
      }
  
  
  
  
  
  
});