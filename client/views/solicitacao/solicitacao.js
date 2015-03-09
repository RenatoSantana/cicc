Template.solicitacaoItem.helpers({

data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');
      
  },
 mensagemResumida: function() {
      if(this.mensagem.length > 250)
        return this.mensagem.substr(0,250)+ ' ...';
      else
        return this.mensagem;
    },
  
logo: function(){
    var obj = Orgaos.findOne(this.orgaoId);
    return Files.findOne(obj.fileId);
  },
});

Template.solicitacao_dt.helpers({
    user: function() {
        return Meteor.users.findOne(this.userId);
    },
  
  respostas: function(){
    return Respostas.find({solicitacaoId:this._id},{sort:{criacaoDt: -1}});
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



Template.solicitacao_dt.events({
  'submit form': function(e) {
    e.preventDefault();
    
     var $elemWrite = $('#write').hasClass('collapse in');
                if($elemWrite){
                     $('#write').removeClass('collapse in');
                     $('#write').addClass('collapse');
                 } 
    var properties = {
      solicitacaoId: this._id,
      mensagem: $(e.target).find('#inputMensagem').val()
    
    }
  if(properties!==null&& properties !='undefined' && properties.mensagem!=="" &&  properties.mensagem.length>0){
    
    Meteor.call('resposta', properties, function(error, resposta) {
                      if (error) {
                                // display the error to the user
                               toastr.error(erro,"ops!");
                      }else{
                        
                        $('#inputMensagem').val(" ");
                      }
   });

  }else{
  toastr.error("Mensagem obrigatória","ops!");
}
    
   
   
   
    }
});
Template.solicitacao_cr.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var properties = {
      assunto: $(e.target).find('#inputAssunto').val(),
      mensagem: $(e.target).find('#inputMensagem').val(),
      orgaoDestinoId: $(e.target).find('#cbOrgao').val()
    }
    
    Meteor.call('solicitacao', properties, function(error, solicitacao) {
                      if (error) {
                         $("#btnsave").removeAttr('disabled')
                                throwErrorSolicitacao(error.reason);
                               
                              } else {
                                 toastr.success("", "Salvo");
                                 Router.go("/solc_detail/"+solicitacao._id);
                              }
   });

    
   
   
   
    }
});