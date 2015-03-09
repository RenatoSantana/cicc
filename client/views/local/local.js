Template.selectLocal.helpers({
  locais: function() {
    return Locais.find();
  }
 
});

Template.selectLocal.rendered = function() {

  $("#cbLocal").select2();

  	
}

AutoForm.addHooks(
  ["local_cr"],
  {
 before: {
      insert: function(doc, template) {
         doc.userId = Meteor.userId();
         doc.criacaoDt = new Date()
         return doc;
      }
   
    },
     onSuccess: function(operation, result, template) {
       
         Router.go("new_local");
     }
  });
  
AutoForm.addHooks(
  ["local_edit"],
  {
     onSuccess: function(operation, result, template) {
       
         Router.go("new_local");
     }
});
  



Template.local_edit.helpers({
  localDoc: function() {
    return Locais.findOne(this._id)
  }
});


Template.local_cr.helpers({
 localchema: function() {
    return Schema.local;
  },
 locais: function() {
    return Locais.find();
  }
});

