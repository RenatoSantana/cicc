/*AutoForm.addHooks(
  ["orgao_cr"],
  {
    before   : {
      saveOrgao: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      saveOrgao: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("orgao");
     }
  });

AutoForm.addHooks(
  ["orgao_ed"],
  {
    before   : {
      updateOrgao: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      updateOrgao: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("orgao");
     }
});

*/

Template.orgao_cr.helpers({
 orgaoSchema: function() {
    return Schema.orgao;
  },
});

Template.orgao_cr.events({
 'click  input[type=file]' : function(e,tmp) {
      $('input[type=file]').prop("accept","image/*")

}
  });

Template.orgao_ed.events({
 'click  input[type=file]' : function(e,tmp) {
      $('input[type=file]').prop("accept","image/*")

    }
});

Template.orgao_ed.helpers({
  orgaoDoc: function() {
    return Orgaos.findOne(this._id)
  },
   orgaoSchema: function() {
    return Schema.orgao;
  },

});

Template.orgao_ls.helpers({
    orgaos: function() {
        return Orgaos.find({},{sort:{descricao: 1}});
    }


});


Template.orgaoItem.helpers({

 imagem:function(){
          return Files.findOne({_id:this.fileId})

  }

})

Template.selectOrgao.helpers({
  orgaos: function() {
    return Orgaos.find({},{sort:{descricao: 1}});
  },
  isSelected: function(parentPost){
    return parentPost && this._id == parentPost.profile.orgaoId ? 'selected' : '';
  }
});

