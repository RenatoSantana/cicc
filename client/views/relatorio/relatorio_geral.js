 Meteor.startup(function () {
        Session.set("noticias", Noticias.find({},{sort: {criacaoDt: -1}}).fetch());
        Session.set("incidentes",Incidentes.find({},{sort: {criacaoDt: -1}}).fetch());
        Session.set("consideracoes",Consideracoes.find({},{sort: {criacaoDt: -1}}).fetch());
       
 });
Template.relatorio_item_noticia.events({
  
  'click #remove': function(e,tmp) {
    e.preventDefault();
     if (confirm("Tem certeza de que deseja remover do relatório este item ?")) {
     //   var currentPostId = this._id;
       $('#'+this._id).remove();
     //   Meteor.call('removePost', currentPostId);
        
     }
  },
  
  
});

Template.incidente_item_rel.events({
  'click #remove': function(e,tmp) {
    e.preventDefault();
     if (confirm("Tem certeza de que deseja remover do relatório este item ?")) {
     //   var currentPostId = this._id;
       $('#'+this._id).remove();
     //   Meteor.call('removePost', currentPostId);
        
     }
  },
  

})


Template.relatorio_item_noticia.helpers({
  
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
  },
  
  
  
});


Template.relatorio_geral.rendered = function() {
    $('#dataCadastroInicio').datetimepicker();
    $('#dataCadastroFim').datetimepicker();
}


Template.relatorio_geral.events({

    'submit form': function(e) {
                 e.preventDefault();
    var orgao = $(e.target).find('#cbOrgao').val()
    var dataInicioVector =  $(e.target).find('#dataCadastroInicio').val().split('/');
    var dataInicio = new Date()
    dataInicio.setDate(dataInicioVector[0]);
    dataInicio.setMonth(dataInicioVector[1]-1);
    
    var anoHoraInicio = dataInicioVector[2].split(" ");
    dataInicio.setFullYear(anoHoraInicio[0]);
    var horaInicio = anoHoraInicio[1].split(":");
    dataInicio.setHours(horaInicio[0], horaInicio[1], 0);
       
   
    var dataFimVector =  $(e.target).find('#dataCadastroFim').val().split('/');
    var dataFim = new Date()
    dataFim.setDate(dataFimVector[0]);
    dataFim.setMonth(dataFimVector[1]-1);
    
    var anoHoraFim = dataFimVector[2].split(" ");
    dataFim.setFullYear(anoHoraFim[0]);
    var horaFim = anoHoraFim[1].split(":");
    dataFim.setHours(horaFim[0], horaFim[1], 0);
    var user= Meteor.user();
    var data;
   if(orgao!==""){
   
          Session.set("noticias",Noticias.find({orgaoId:orgao,criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort: {criacaoDt: -1}}).fetch());
           Session.set("incidentes",Incidentes.find({orgaoId:orgao,criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort: {criacaoDt: -1}}).fetch());
           Session.set("consideracoes",Consideracoes.find({orgaoId:orgao,criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort: {criacaoDt: -1}}).fetch());
   }else{
        Session.set("noticias",Noticias.find({criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort: {criacaoDt: -1}}).fetch());
           Session.set("incidentes",Incidentes.find({criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort: {criacaoDt: -1}}).fetch());
           Session.set("consideracoes",Consideracoes.find({criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort: {criacaoDt: -1}}).fetch());
   }


     
    
    },
      'click #btntrazertudo': function(e) {
                    e.preventDefault();

         
        Session.set("noticias", Noticias.find({},{sort: {criacaoDt: -1}}).fetch());
        Session.set("incidentes",Incidentes.find({},{sort: {criacaoDt: -1}}).fetch());
        Session.set("consideracoes",Consideracoes.find({},{sort: {criacaoDt: -1}}).fetch());
       


      }
   
 

});


Template.relatorio_geral.helpers({
    user: function() {
        return Meteor.users.findOne(this.userId);
    },
  
   acoes: function(){
      return Acoes.find().fetch();
   },
  
   incidentes: function() {
    //   var user = Meteor.user();
  //     var orgao = Orgaos.findOne();
      // return Incidentes.find({},{sort: {criacaoDt: -1}});
       return Session.get("incidentes")
    },
  
   noticias: function(){
   //   return Noticias.find({},{sort: {criacaoDt: -1}}).fetch();
        return  Session.get("noticias")
   },
   
   consideracoes:function(){
     // return Consideracoes.find({},{sort: {criacaoDt: -1}}).fetch();
      return Session.get("consideracoes")
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


Template.incidente_item_rel.helpers({
    user: function() {
        return Meteor.users.findOne(this.userId);
    },
  
acoesOrgao: function(){
      return AcoesOrgao.find({incidenteId:this._id},{sort: {criacaoDt: -1}});
   },

   orgao: function() {
        return Orgaos.findOne(this.orgaoId);
    },
  circuito:function(){
    return Circuitos.findOne({_id:this.circuitoId});
  },
  trecho:function(){
    return Trechos.findOne({_id:this.trechoId});
  },
   data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');
      
  }, 
   imagem:function(){   
          return Files.findOne({_id:this.fileId})
  }
  
  
   
});



 Template.relatorio_geral.events({

   'click #btnExport': function(e, template) {
           e.preventDefault();
       $("#conteudo").wordExport();
   }
    
     

})
 
 
 Template.relatorioConsideracaoItem.helpers({
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
      
  },
  orgao: function() {
        return Orgaos.findOne(this.orgaoId);
    },
  
  
  
   
});

Template.relatorioConsideracaoItem.events({
  'click #remove': function(e,tmp) {
    e.preventDefault();
     if (confirm("Tem certeza de que deseja remover do relatório este item ?")) {
     //   var currentPostId = this._id;
       $('#'+this._id).remove();
     //   Meteor.call('removePost', currentPostId);
        
     }
  },
  

})
