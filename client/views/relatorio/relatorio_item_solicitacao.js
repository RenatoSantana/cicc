Template.relatorio_item_solicitacao.helpers({
    user: function() {
        return Meteor.users.findOne(this.userId);
    },

  respostas: function(){
    return Respostas.find({solicitacaoId:this._id},{sort:{criacaoDt: -1}});
  },


logo: function(){
    var obj = Orgaos.findOne(this.orgaoId);
    if(typeof obj !=='undefined' &&typeof obj.fileId !=='undefined')
        return Files.findOne(obj.fileId);

    return ''

  },



data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');

  }





});


Template.relatorio_item_solicitacao.events({
  'click #remove': function(e,tmp) {
    e.preventDefault();
     if (confirm("Tem certeza de que deseja remover do relatório este item ?")) {
     //   var currentPostId = this._id;
       $('#'+this._id).remove();
     //   Meteor.call('removePost', currentPostId);

     }
  },


})