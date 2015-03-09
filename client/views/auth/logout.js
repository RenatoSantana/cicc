Template.logout.events({
      // event login
			"click  #logout": function (e){
                e.preventDefault();
                
           
                  
                Meteor.logout(function(erro){
                  if(erro){
                    toastr.error(erro);
                  }else{
		  	                Router.go('index');
		  	            }
                })
  }
  
  
  
  
  
  
});



Template.logout.helpers({
    nome: function() {
            var currentUser = Meteor.user();
            var nome = currentUser.profile.nome.split(" ");
                return nome[0];
            }
    
  
    

   
})
