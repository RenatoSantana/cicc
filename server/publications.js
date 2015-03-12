// Authorized users can manage user accounts
Meteor.publish("users", function () {
  var user = Meteor.users.findOne(this.userId);
  //    console.log('publishing teste', user._id)
  if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento"])) {
  //  console.log('publishing users', this.userId)
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1, roles: 1}});
    //return Meteor.users.find();
  } else if (Roles.userIsInRole(user, ["Administrativo"])) {
  //  console.log('publishing users', this.userId)
  //  return Meteor.users.find({}, {fields: {emails: 1, profile: 1, roles: 1}});
    return Meteor.users.find();
  }

  this.stop();
  return;
});

 Meteor.publish('files', function () {
     return Files.find();

 });

 Meteor.publish('historicoEventos', function () {
     return HistoricoEventos.find();

 });


 Meteor.publish('trechos', function () {
     return Trechos.find();

 });
 Meteor.publish('circuitos', function () {
     return Circuitos.find();

 });

Meteor.publish('solicitacoes', function() {
    var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()
    var evento = Eventos.findOne(historico[0].eventoId);
    var user = Meteor.users.findOne(this.userId);
     if (Roles.userIsInRole(user, ["Administrativo", "Cadastro","VideoMonitoramento"])) {
        return Solicitacoes.find({criacaoDt: {$gt : evento.dtInicio, $lt:evento.dtFim}});
     }
     this.stop();
   return;
});

Meteor.publish('consideracoes', function() {
    var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()
    var evento = Eventos.findOne(historico[0].eventoId);
    var user = Meteor.users.findOne(this.userId);
     if (Roles.userIsInRole(user, ["Administrativo"])) {
        return Consideracoes.find({criacaoDt: {$gt : evento.dtInicio, $lt:evento.dtFim}});
     }else if(Roles.userIsInRole(user, ["Cadastro","VideoMonitoramento"])){
        return Consideracoes.find({userId:this.userId,criacaoDt:{$gt : evento.dtInicio, $lt:evento.dtFim}});
     }
     this.stop();
   return;
});

Meteor.publish('protocoloAcao', function() {

  var user = Meteor.users.findOne(this.userId);

  if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
      return ProtocoloAcao.find();
  }
   this.stop();
   return;
});

Meteor.publish("eventos", function() {
    var user = Meteor.users.findOne(this.userId)
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
    return Eventos.find();
    }
     this.stop();
     return;

});

Meteor.publish('locais', function() {
    var user = Meteor.users.findOne(this.userId)
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
      return Locais.find();
    }
     this.stop();
     return;
});
Meteor.publish('respostas', function() {
    var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()
    var evento = Eventos.findOne(historico[0].eventoId);
    var user = Meteor.users.findOne(this.userId);
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
      return Respostas.find({criacaoDt: {$gt : evento.dtInicio, $lt:evento.dtFim}});
    }
     this.stop();
     return;
});

Meteor.publish('acoes', function() {
    var user = Meteor.users.findOne(this.userId)
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
      return Acoes.find();
    }
     this.stop();
     return;
});

Meteor.publish('acoesOrgao', function() {
    var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()
    var evento = Eventos.findOne(historico[0].eventoId);
    var user = Meteor.users.findOne(this.userId);
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
      return AcoesOrgao.find({criacaoDt:{$gt : evento.dtInicio, $lt:evento.dtFim}});
    }
    this.stop();
     return;
});

Meteor.publish('imagens', function() {
    var user = Meteor.users.findOne(this.userId)
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
      return Imagens.find();
    }
     this.stop();
     return;
});

Meteor.publish('cameras', function() {
    var user = Meteor.users.findOne(this.userId)
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
      return Cameras.find();
    }

     this.stop();
     return;
});





Meteor.publish('noticias', function() {
    var user = Meteor.users.findOne({_id:this.userId});
    var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()
    var evento = Eventos.findOne(historico[0].eventoId);

    if (Roles.userIsInRole(user, ["Administrativo"])) {
       return  Noticias.find({criacaoDt: {$gt : evento.dtInicio, $lt:evento.dtFim}},{sort: {criacaoDt: -1}});
    }else if (Roles.userIsInRole(user, ["Cadastro"])){
	      return  Noticias.find({criacaoDt: {$gt : evento.dtInicio, $lt:evento.dtFim}},{sort: {criacaoDt: -1}});
    }else if(Roles.userIsInRole(user, ['Consulta','VideoMonitoramento'])){
        return Noticias.find({bloqueio:false,criacaoDt: {$gt : evento.dtInicio, $lt:evento.dtFim}},{sort: {criacaoDt: -1}});
    }else{

       return Noticias.find({bloqueio:false,status:"publica",criacaoDt: {$gt : evento.dtInicio, $lt:evento.dtFim}},{sort: {criacaoDt: -1}});

    }

});


Meteor.publish('incidentes', function() {
      var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()
      var evento = Eventos.findOne(historico[0].eventoId);
      var user = Meteor.users.findOne(this.userId);
      if (Roles.userIsInRole(user, ["Cadastro"])) {
         return Incidentes.find({criacaoDt:{$gt : evento.dtInicio, $lt:evento.dtFim},bloqueio:false},{sort:{criacaoDt: -1}});
      }else if (Roles.userIsInRole(user, ["Administrativo","Consulta"])) {
         return Incidentes.find({criacaoDt:{$gt : evento.dtInicio, $lt:evento.dtFim},bloqueio:false},{sort:{criacaoDt: -1}});
      }
     this.stop();
     return;
});


Meteor.publish('grupos', function() {
    var user = Meteor.users.findOne(this.userId)
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
      return Grupos.find();
    }
    this.stop();
     return;

});

Meteor.publish("orgaos", function() {
    var user = Meteor.users.findOne(this.userId)
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
		return Orgaos.find();
    }
    this.stop();
     return;
});



Meteor.publish('protocolos', function() {
    var user = Meteor.users.findOne(this.userId)
    if (Roles.userIsInRole(user, ["Cadastro","Consulta","Videomonitoramento","Administrativo"])) {
      return Protocolos.find();
    }
     this.stop();
     return;


});