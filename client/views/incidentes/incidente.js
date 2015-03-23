var handle;

Deps.autorun(function(){
    if(Meteor.user()!==null){
        Meteor.subscribe("orgaos")
        Meteor.subscribe("acoes")
        Meteor.subscribe("acoesOrgao")
        Meteor.subscribe("historicoEventos")
        Meteor.subscribe("eventoCircuitos")
        Meteor.subscribe("eventos")
        Session.set("resultOk",false);



    }
});

Meteor.startup(function () {

       Session.set("resultOk",false);
       Session.set('circuitos',null);



 });


Template.incidente_cr.rendered = function() {
    $('#dataFato').datetimepicker();
}
Template.incidente_ls.rendered = function() {
    $('#dataCadastroInicio').datetimepicker();
    $('#dataCadastroFim').datetimepicker();
}


Template.incidente_ls.events({

   "click #new-incidente":function (e){
      e.preventDefault();
           Session.set('trechos',null);
           Router.go("new_incidente");
    },

    'submit form': function(e) {
                 e.preventDefault();

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

     if (Roles.userIsInRole(user, ["Administrativo","Consulta"])) {
           data = Incidentes.find({criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort:{criacaoDt: -1}}).fetch()

      }else{
           data =  Incidentes.find({orgaos:user.profile.orgaoId,criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort:{criacaoDt: -1}}).fetch()


      }
        Session.set("incidentes",data);
        Session.set("resultOk",true);




    },




});


Template.incidente_ls.helpers({

   isResult:function(){
      return Session.get("resultOk");
   },

   incidentesResult:function(){
   return Session.get("incidentes");
   },

   incidentes: function() {
      if (Session.get("resultOk")) {
      Session.set("resultOk",false);
      return   Session.get("incidentes")
   }else{
           /* var user= Meteor.user();
            if (Roles.userIsInRole(user, ["Cadastro"])) {
                 return  Incidentes.find({},{sort:{criacaoDt: -1}});
            }else   if (Roles.userIsInRole(user, ["Administrativo","Consulta"])) {
                  return  Incidentes.find({},{sort:{criacaoDt: -1}});
            }*/

     return  Incidentes.find({},{sort:{criacaoDt: -1}});
     }
    },

   orgao: function(){
    return Orgaos.findOne(this.orgaoId);
  },

    evento:function(){

       var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()
  if(typeof historico[0] !=='undefined' && typeof historico[0].eventoId !== 'undefined'){
      return Eventos.findOne(historico[0].eventoId)

    }
    return;
    }

});

Template.incidente_cr.helpers({

  acoes:function(){
    return Session.get('acoes_padrao');
  },

   orgao: function(){
    return Orgaos.findOne(this.orgaoId);
  },




   temCircuito:function(){
         if(Session.get('circuitos')!==null){
            if(Session.get('circuitos').length >0)
              return true;
         }else{
           return false;
         }




   }



});

Template.incidenteItem.helpers({
   ownOrgao: function() {
    return this.orgaoId == Meteor.user().profile.orgaoId;
  },
    descricaoResumida: function() {
         if(this.descricaoIncidente.length > 200)
           return this.descricaoIncidente.substr(0,200)+ ' ...';
         else
           return this.descricaoIncidente;
    },

 data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');

  },
 logo: function(){
    var obj = Orgaos.findOne(this.orgaoId);
    return Files.findOne(obj.fileId);
  },

 /*
  incidente:function(){
    return Protocolos.findOne({_id:this.protocoloId});
  },*/


})




Template.incidente_dt.helpers({
    user: function() {
        return Meteor.users.findOne(this.userId);
    },

  acoesOrgao: function(){
      return AcoesOrgao.find({incidenteId:this._id},{sort: {criacaoDt: -1}});
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
  logo: function(){
    var obj = Orgaos.findOne(this.orgaoId);
     if(obj !==null &&obj.fileId!==null)
           return Files.findOne(obj.fileId);
     return "";
  },

  status:function(){
    if(this.status === 'fechado')
      return false;
    else
      return true;
  },

   imagem:function(){

          return Files.findOne({_id:this.fileId})


  }






});

Template.incidente_dt.events({
  'submit form': function(e) {
    e.preventDefault();

     var $elemWrite = $('#write').hasClass('collapse in');
                if($elemWrite){
                     $('#write').removeClass('collapse in');
                     $('#write').addClass('collapse');
                 }
    var properties = {
      incidenteId: this._id,
      mensagem: $(e.target).find('#inputMensagem').val()

    }

 if(properties!==null&& properties != 'undefined' && properties.mensagem !=="" &&  properties.mensagem.length>0){
    Meteor.call('saveAcaoOrgao', properties, function(error, resposta) {
                      if (error) {
                                // display the error to the user

                      }else{

                        $('#inputMensagem').val(" ");
                      }
   });

    } else{
  toastr.error("Mensagem obrigatória","ops!");
    }
},

  'click #btnFechar': function(e) {
       e.stopPropagation();
       e.preventDefault();
       var currentId = this._id;


     Meteor.call('fecharIncidente',currentId, function(error) {


                              if (error) {

                                toastr.error(error.reason);

                              } else {
                                 toastr.success("", "Incidente Fechado");

                              }
                   });
  },


   'click #btnExcluir': function(e) {
       e.stopPropagation();
       e.preventDefault();
       var currentId = this._id;

 if (confirm("Tem certeza de que deseja excluir este incidente ?")) {
     Meteor.call('removerIncidente',currentId, function(error) {


                              if (error) {

                                toastr.error(error.reason);

                              } else {
                                 toastr.success("", "Incidente Excluído");
                                 Router.go("incidentes")
                              }
                   });

 }
  },


   'click #btnReabrir': function(e) {
     e.stopPropagation();
     e.preventDefault();
       var currentId = this._id;


     Meteor.call('reabrirIncidente',currentId, function(error) {


                              if (error) {

                                toastr.error(error.reason);

                              } else {
                                 toastr.success("", "Incidente Reaberto");

                              }
                   });
  }


});


Template.incidente_cr.events({
  'submit form': function(e,tmp) {
    e.stopPropagation();
    e.preventDefault();


    var properties = {

      eventoId :$(e.target).find('#cbEvento').val(),
      circuitoId: 'SJTo3AsDZpAw6uKer',
      trechoId: 'm77YQRNbCheHZDY29',
      tituloIncidente:$(e.target).find('#inputTitulo').val(),
      descricaoIncidente: $(e.target).find('#inputDescricao').val(),
      dataDoFato: $(e.target).find('#dataFato').val(),
      fileId: null

    }

    if(Session.get("temCircuito")){
      properties.circuitoId=$(e.target).find('#cbCircuito').val();
      properties.trechoId=$(e.target).find('#cbTrecho').val();

    }

    var dataFatoVector =  $(e.target).find('#dataFato').val().split('/');
    var data = new Date()
    data.setDate(dataFatoVector[0]);
    data.setMonth(dataFatoVector[1]-1);

    var anoHora = dataFatoVector[2].split(" ");
    data.setFullYear(anoHora[0]);
    var hora = anoHora[1].split(":");
    data.setHours(hora[0], hora[1], 0);
    properties.dataDoFato =data;

    properties.fileId = tmp.find('#fileinput').files[0];


     if(properties!==null && typeof properties != 'undefined' && properties.fileId!==null && typeof properties.fileId != 'undefined'){
        var fileObj = Files.insert(properties.fileId);
       properties.fileId = fileObj._id;


     }


     Meteor.call('incidente', properties, function(error, incidente) {
                          if (error) {
                                     // display the error to the user
                             $("#btnsave").removeAttr('disabled');
                                throwErrorIncidente(error.reason);

                              } else {
                                       toastr.success("", "Salvo");
                                       Router.go('/inci_detail/'+incidente._id);
                              }
            });



  },


  'change #cbProtocolo': function(e,t){

   var protocolo  = t.find('#cbProtocolo').value;
   if(typeof protocolo != 'undefined'){
       var acoes = ProtocoloAcao.find({protocoloId:protocolo}).fetch();
       if(acoes===null || acoes.length === 0){
       toastr.error("", "Este protocolo não possui ações, verifique com o Admin");
         $("#btnsave").attr('disabled', 'disabled');
       }else{
         $("#btnsave").removeAttr('disabled');
       }
       Session.set('acoes_padrao', acoes);

   }else{
       Session.set('acoes_padrao',null);
   }
  },

   'change #cbLocal': function(e,t){

   var local  = t.find('#cbLocal').value;
   if(typeof local != 'undefined'){
     var protocolos = Protocolos.find({localId:local}).fetch();
       Session.set('protocolos_select',protocolos);
       Session.set('acoes_padrao',null);
           if(protocolos===null || protocolos.length === 0){
                 Session.set('protocolos_select',null);
                 t.find('#cbProtocolo').value = ""
           }


   }else{
       Session.set('protocolos_select',null);
       Session.set('acoes_padrao',null);
   }
  },

    'change #cbCircuito': function(e,t){

   var circuito  = t.find('#cbCircuito').value;
   if(typeof circuito != 'undefined'){
       var trechos = Trechos.find({circuitoId:circuito}).fetch();
       if(trechos===null || trechos.length === 0){

         $("#btnsave").attr('disabled', 'disabled');
       }else{
         $("#btnsave").removeAttr('disabled');
       }
       Session.set('trechos', trechos);

   }else{
       Session.set('trechos',null);
   }
  },

  'change #cbEvento': function(e,t){

   var evento  = t.find('#cbEvento').value;
   var circuitos = null;
   if(typeof evento != 'undefined'){
       var eventoCircuitos = EventoCircuitos.find({eventoId:evento})

       var circuitoIds = eventoCircuitos.map(function(p) { return p.circuitoId });
       if(circuitoIds===null || circuitoIds.length === 0){

         $("#btnsave").attr('disabled', 'disabled');
       }else{
         $("#btnsave").removeAttr('disabled');
          circuitos = Circuitos.find({_id: {$in: circuitoIds}}).fetch()
       }


       Session.set('circuitos', circuitos);

   }else{
       Session.set('circuitos',null);
   }
  }
});