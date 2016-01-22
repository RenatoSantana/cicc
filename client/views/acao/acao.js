/*AutoForm.addHooks(
  ["acao_cr"],
  {
   before: {
      insert: function(doc, template) {
         doc.userId = Meteor.userId();
         doc.criacaoDt = new Date()
         return doc;
      }

    },
      after: {
      insert: function(error, result, template) {
         toastr.success(result.descricao, "Salvo");
      },

    }

  }
);


AutoForm.addHooks(
  ["acao_edit"],
  {

     onSuccess: function(operation, result, template) {

         Router.go("acao");
     },



  }
);
*/

Template.acao_edit.helpers({
  acaoDoc: function() {
    return Acoes.findOne(this._id)
  }
});

Template.acaoItem.helpers({
    user: function() {
        return Meteor.users.findOne(this.userId);
    },
    data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');

  },
   imagem: function() {
       var orgao= Orgaos.findOne(this.orgaoId);
        return Files.findOne(orgao.fileId);
    },


});



Template.selectAcao.rendered = function() {

  $( "#cbAcao" ).select2();


}

Template.selectAcao.helpers({
    acoes:function(){
    return Acoes.find({},{sort:{criacaoDt: -1}})
  },
/* isSelected: function(parentPost){
    return parentPost && this._id == parentPost.profile.acaoId ? 'selected' : '';
  }*/

orgao:function(){
     return Session.get("orgao_selected")
  }



});

Template.selectAcao.events({
 'change #cbAcao': function(e,t){

   var acao  = t.find('#cbAcao').value;
   if(typeof acao !== 'undefined'){
        acao = Acoes.findOne(acao);
        var orgao = Orgaos.findOne(acao.orgaoId)
       Session.set('orgao_selected', orgao);


   }else{
       Session.set('orgao_selected',null);
   }
  }


});


Template.acaoViewItem.helpers({
   acao: function() {
     handler = Acoes.findOne({_id:this.acaoId});
     return handler
  },


});


Template.acao_cr.rendered = function() {

  $( "#cbOrgao" ).select2();


}
Template.acao_cr.helpers({
   acaoSchema: function() {
    return Schema.acao;
  },

  acoes:function(){
    return Acoes.find({},{sort:{criacaoDt: -1}})
  }




});


Template.acaoCadastradaItem.helpers({
   acaoSchema: function() {
    return Schema.acao;
  },

  orgao:function(){
    return Orgaos.findOne({_id:this.orgaoId})
  }




});
var handler;
Template.protocoloAcaoItem.helpers({
   acaoSchema: function() {
    return Schema.acao;
  },

  acao:function(){
     handler =Acoes.findOne({_id:this.acaoId})
    return handler
  },

   orgao:function(){

    return Orgaos.findOne({_id:handler.orgaoId})
  }



});

Template.protocoloAcaoItem.events({
 'click #remove': function(e) {
    e.preventDefault();
     if (confirm("Tem certeza de que deseja remover este item?")) {
        var currentId= this._id;

        Meteor.call('removeProtocoloAcao', currentId);

     }

 }

});

Template.acaoIncidenteView.helpers({

 logo: function(){
    var obj = Orgaos.findOne(this.orgaoId);
    return Files.findOne(obj.fileId);
  },

  descricao:function(){
    return this.descricao;
  }




})