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


Meteor.publish('eventoCircuitos', function () {
     return EventoCircuitos.find();

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


 Meteor.publish('telefones', function () {
     return Telefones.find();

 });


 Meteor.publish('circuitos', function () {
     return Circuitos.find();

 });

Meteor.publish('usuarioEventos', function () {
     return UsuarioEventos.find();

 });

Meteor.publish('solicitacoes', function() {
    var user = Meteor.users.findOne(this.userId);
    var usuarioEventos = UsuarioEventos.find({userId:this.userId})
    var eventoIds = usuarioEventos.map(function(p) { return p.eventoId });



     if (Roles.userIsInRole(user, ["Administrativo", "Cadastro","VideoMonitoramento"])) {

          return Solicitacoes.find({eventoId: {$in: eventoIds}})
     }
     this.stop();
   return;
});

Meteor.publish('consideracoes', function() {
    var user = Meteor.users.findOne(this.userId);
    var usuarioEventos = UsuarioEventos.find({userId:this.userId})
    var eventoIds = usuarioEventos.map(function(p) { return p.eventoId });
     if (Roles.userIsInRole(user, ["Administrativo"])) {
     //   console.log(Consideracoes.find({eventoId: {$in: eventoIds}}).fetch())
        return Consideracoes.find({eventoId: {$in: eventoIds}});
     }else if(Roles.userIsInRole(user, ["Cadastro","VideoMonitoramento"])){
        return Consideracoes.find({userId:this.userId,eventoId: {$in: eventoIds}});
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
    var user = Meteor.users.findOne(this.userId);
    var usuarioEventos = UsuarioEventos.find({userId:this.userId})
    var eventoIds = usuarioEventos.map(function(p) { return p.eventoId });
   //console.log(eventoIds)
    if (Roles.userIsInRole(user, ["Consulta","Administrativo"])) {
    return Eventos.find();
    }else  if (Roles.userIsInRole(user, ["Cadastro","Videomonitoramento",])) {
         return Eventos.find({_id: {$in: eventoIds}})

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
      return Respostas.find({$or:[{eventoId:'ct4Pe4SNEbDPHqxyZ'} ,{criacaoDt: {$gt : evento.dtInicio, $lt:evento.dtFim}}]});
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
      return AcoesOrgao.find({$or:[{eventoId:'ct4Pe4SNEbDPHqxyZ'} ,{criacaoDt: {$gt : evento.dtInicio, $lt:evento.dtFim}}]});
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
     var user = Meteor.users.findOne(this.userId);
    var usuarioEventos = UsuarioEventos.find({userId:this.userId})
    var eventoIds = usuarioEventos.map(function(p) { return p.eventoId });
     console.log(Noticias.find().fetch())
    if (Roles.userIsInRole(user, ["Administrativo"])) {

     //  return  Noticias.find({eventoId: {$in: eventoIds}});
      return  Noticias.find();
    }else if (Roles.userIsInRole(user, ["Cadastro"])){
	      return  Noticias.find({eventoId: {$in: eventoIds}});
    }else if(Roles.userIsInRole(user, ['Consulta','VideoMonitoramento'])){
        return Noticias.find({bloqueio:false,eventoId: {$in: eventoIds}});
    }else{

       return Noticias.find({bloqueio:false,status:"publica"});

    }

});


Meteor.publish('incidentes', function() {
    var user = Meteor.users.findOne(this.userId);
    var usuarioEventos = UsuarioEventos.find({userId:this.userId})
    var eventoIds = usuarioEventos.map(function(p) { return p.eventoId });
      if (Roles.userIsInRole(user, ["Cadastro"])) {
           return Incidentes.find({bloqueio:false,eventoId: {$in: eventoIds}});
      }else if (Roles.userIsInRole(user, ["Administrativo","Consulta"])) {

           return Incidentes.find({bloqueio:false},{sort:{criacaoDt: -1}});
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

