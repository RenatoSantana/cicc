
Template.relatorio_item_acao.events({
  
  'click #remove': function(e,tmp) {
    e.preventDefault();
     if (confirm("Tem certeza de que deseja remover do relatório este item ?")) {
     //   var currentPostId = this._id;
       $('#'+this._id).remove();
     //   Meteor.call('removePost', currentPostId);
        
     }
  },
  
  
});


Template.relatorio_item_acao.helpers({
  
   user: function() {
        return Meteor.users.findOne(this.userId);
    },
  
  
   orgao: function() {
        return Orgaos.findOne(this.orgaoId);
    },
  
   data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');
      
  },
  imagem:function(){
   
          return Files.findOne({_id:this.fileId})
  
 
  }
  
  
  
});

Template.incidente_rel.helpers({
    user: function() {
        return Meteor.users.findOne(this.userId);
    },
  
   acoes: function(){
      return Acoes.find({incidenteId:this._id}).fetch();
   },

   orgao: function() {
        return Orgaos.findOne(this.orgaoId);
    },
  
 /* incidente:function(){
    return Protocolos.findOne({_id:this.protocoloId});
  },*/
   data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');
      
  }
  
   
});

 Template.incidente_rel.events({

   'click #btnExport': function(e, template) {
           e.preventDefault();
       $("#conteudo").wordExport();
   }

})
