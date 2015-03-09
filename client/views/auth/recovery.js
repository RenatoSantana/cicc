 Session.set('resetToken',Accounts._resetPasswordToken);
Meteor.startup(function () {
        // my code here
    });
Template.recovery.events({
  
  
  "submit  #new-password": function (e){
     e.preventDefault();

     var recoveryProperties = {
                          password: $(e.target).find('#new-password-password').val()
     }
     
     Accounts.resetPassword(Session.get('resetToken'),recoveryProperties.password,function(erro){
             
             if(erro){
                      toastr.error(error.reason,"ops!");
              }else{
                toastr.success("","Salvo");
                
              }
      });
    
  },
  
  "submit  #recovery-form": function (e){
           e.preventDefault();
    
           var recoveryProperties = {
                          email: $(e.target).find('#recovery-email').val()


            }
           
           Accounts.forgotPassword({email:recoveryProperties.email},function(erro){
             
             if(erro){
                      alert(erro);
              }else{
                alert('To reset your password, simply click the link below.')
              }
           });
           
  
  
  
  }
  
  
});

Template.recovery.helpers({
  
  resetPassword:function (t){
    
     if(Accounts._resetPasswordToken){
       
      Session.set('resetToken',Accounts._resetPasswordToken);
      Session.set('resetPass',true);
       
     }
    
   return  Session.get('resetPass');
    
    
  }
  
  
});







