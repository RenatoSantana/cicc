Template.respostaItem.helpers({
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
