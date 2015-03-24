Template.telefone_ls.helpers({
     telefones: function() {
       return Telefones.find({},{sort:{criacaoDt: -1}});
  },

});

AutoForm.addHooks(
  ["telefone_cr"],
  {
    before   : {
      saveTelefone: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      saveTelefone: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("telefone");
     }
  });

AutoForm.addHooks(
  ["telefone_ed"],
  {
    before   : {
      updateTelefone: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      updateTelefone: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("telefone");
     }
});



Template.telefone_cr.helpers({
 telefoneSchema: function() {
    return Schema.telefone;
  },
});


Template.telefone_ed.helpers({
  telefoneDoc: function() {
    return Telefones.findOne(this._id)
  },
   telefoneSchema: function() {
    return Schema.telefone;
  },

});
Template.telefone_cr.rendered = function() {
 $('input[name="numero"]').mask("(999) 9999-9999");

}
Template.telefone_ed.rendered = function() {
 $('input[name="numero"]').mask("(999) 9999-9999");

}

//