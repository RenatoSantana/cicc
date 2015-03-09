Template.esInput.events({
   
   'keyup [type=text]': function(e) {
           e.preventDefault();
          Session.set("resultOk",false);
      }

});
