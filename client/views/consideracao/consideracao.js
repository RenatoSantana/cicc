Template.consideracao_cr.helpers({
   consideracaoSchema: function() {
    return Schema.consideracao;
  },
  
  consideracoes:function(){
     
     return Consideracoes.find({userId:Meteor.userId()},{sort: {criacaoDt: -1}})
  }
  
  
 
  
});


AutoForm.addHooks(
  ["consideracao_cr"],
  {
   before: {
      insert: function(doc, template) {
         doc.userId = Meteor.userId();
         doc.criacaoDt = new Date()
         doc.orgaoId = Meteor.user().profile.orgaoId
         return doc;
      }
   
    },
      after: {
      insert: function(error, result, template) {
         toastr.success("", "Salvo");
      },

    }
   
  }
);

Template.consideracaoItem.helpers({
    user: function() {
        return Meteor.users.findOne(this.userId);
    },
  
   
  logo: function(){
    var obj = Orgaos.findOne(this.orgaoId);
    return Files.findOne(obj.fileId);
  },
  
  data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');
      
  }
  
  
   
});