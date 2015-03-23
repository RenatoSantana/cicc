Deps.autorun(function(){
        Session.setDefault("resultNoticiaOk", false)
    });
  Meteor.startup(function () {
        Session.set("resultNoticiaOk", false)
    });

AutoForm.addHooks(
  ["noticia_cr"],
  {
    before   : {
      saveNoticia: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      saveNoticia: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("/view_n_pv/"+result._id);
     },



  }
);

AutoForm.addHooks(
  ["noticia_ex"],
  {
    before   : {
      saveNoticia: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      saveNoticia: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("/view_n_pv/"+result._id);
     }
  }
);
AutoForm.addHooks(
  ["noticia_vt"],
  {

   before   : {
      validarNoticia: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      validarNoticia: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("/view_n_pv/"+result);
     },

  }
);




Template.noticia_ls.events({



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

     if (Roles.userIsInRole(user, ["Administrativo"])) {
           data = Noticias.find({criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort:{criacaoDt: -1}}).fetch()

      }else{
           data =  Noticias.find({bloqueio:false,criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort:{criacaoDt: -1}}).fetch()


      }
        Session.set("noticias",data);
        Session.set("resultNoticiaOk",true);







    },



});

Template.noticia_ls.rendered = function() {
    $('#dataCadastroInicio').datetimepicker();
    $('#dataCadastroFim').datetimepicker();
}

Template.noticia_ls.helpers({
 noticiasResult:function(){
    return Session.get("noticias");
  },
 isResultNoticia:function(){
      return Session.get("resultNoticiaOk");
   },
  orgao: function(){
      return Orgaos.findOne({_id:this.orgaoId});
    },
  noticias:function(){
      if (Session.get("resultNoticiaOk")) {
          Session.set("resultNoticiaOk",false);
          return   Session.get("noticias")
      }else{
            var user = Meteor.user();
            if (Roles.userIsInRole(user, ["Administrativo"])) {
               return  Noticias.find({},{sort:{criacaoDt: -1}});
            }else{

               return  Noticias.find({bloqueio:false},{sort:{criacaoDt: -1}});
            }
    }
  },
     evento:function(){
     var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()

      return Eventos.findOne(historico[0].eventoId)
    }



})


Template.news.helpers({

  noticiasPublicas:function(){

    // Meteor.subscribe("noticias")
    return  Noticias.find({bloqueio:false,status:"publica"});
  },
  mostrarLoading:function(){
       if(Noticias.find({bloqueio:false,status:"publica"}).count >16){
         return true;
       }else{
         return false;
       }
  }
})



Template.noticia_ex.helpers({

    selectedNoticiaDoc: function () {
    return Session.get("selectedNoticia");
  },

   selectedType: function () {
    return "select-radio-inline";
  },


   optionsHelper: function () {
    return [

      {label: "Pública", value: 'publica' },
      {label: "Privada", value: 'privada'}

    ];
  }

})

Template.noticiaItem.helpers({

   ownOrgao: function() {
    return this.orgaoId == Meteor.user().profile.orgaoId;
  },
    orgao: function(){
      return Orgaos.findOne({_id:this.orgaoId});
    },

  data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');

  },
  textoResumido: function() {
          if(this.texto.length >150)
              return this.texto.substr(0,150)+ ' ...';
          else
             return this.texto;
    },

     tituloResumido: function() {
         if(this.titulo.length > 60)
            return this.titulo.substr(0,60) + ' ...';
         else
           return this.titulo;
    },

      bloqueada:function(){
        return this.bloqueio;
      }

})



Template.noticia_cr.events({

    'keyup  input[name=titulo]' : function(e,tmp) {

      if($('input[name=status][value=privada]').is(':checked')===false && $('input[name=status][value=publica]').is(':checked')===false){
         $('input[name=status][value=privada]').prop("checked",true)
      }

      $('input[type=file]').prop("accept","image/*")


    },

   'click  input[type=file]' : function(e,tmp) {
      $('input[type=file]').prop("accept","image/*")

    }
});

Template.noticiaItem.events({
  'submit form': function(e,tmp) {
       e.stopPropagation();
       e.preventDefault();
       var currentId = this._id;


     Meteor.call('noticia_bloqueio',currentId, function(error) {


                              if (error) {

                                throwError(error.reason);

                              } else {
                                 toastr.success("", "Bloqueio Efetuado");

                              }
                   });
  }
});

Template.noticiaPublicaItem.helpers({
    textoResumido: function() {
          if(this.texto.length >150)
              return this.texto.substr(0,150)+ ' ...';
          else
             return this.texto;
    },

     tituloResumido: function() {
         if(this.titulo.length > 60)
            return this.titulo.substr(0,60) + ' ...';
         else
           return this.titulo;
    },

  data: function(){
        var time = this.criacaoDt
        return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');

  },

    orgao: function(){
      return Orgaos.findOne({_id:this.orgaoId});
    },

  imagem:function(){
          return Files.findOne({_id:this.fileId})
  }


})

Template.noticia_public_view.helpers({


 data: function(){
        var time = this.criacaoDt
        return moment(time).locale('pt-BR').format(' [Publicada em] DD [de] MMMM YYYY [às] H:mm');

  },
    orgao: function(){
      return Orgaos.findOne({_id:this.orgaoId});
    },
  imagem:function(){
    return Files.findOne({_id:this.fileId})
  }
})

Template.noticia_view.helpers({
    urlResumida: function() {
       if(this.fonte!=null && this.fonte.length>55)
          return this.fonte.substr(0,55)+ ' ...';
      else
          return this.fonte;
    },
   data: function(){
        var time = this.criacaoDt
        return moment(time).locale('pt-BR').format(' [Publicada em] DD [de] MMMM YYYY [às] H:mm');

  },
  orgao: function(){
      return Orgaos.findOne({_id:this.orgaoId});
    },

  imagem:function(){
    return Files.findOne({_id:this.fileId})
  },

   bloqueada:function(){

        return this.bloqueio;

  }


})




Template.noticia_cr.helpers({
   noticiaSchema: function() {
    return Schema.noticia;
  },

   selectedType: function () {
    return "select-radio-inline";
  },


   optionsHelper: function () {
    return [

      {label: "Pública", value: 'publica' },
      {label: "Privada", value: 'privada'}

    ];
  },

    desabilitaSubmit:function(){
        var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch();
        if(typeof historico[0] !=='undefined' && typeof historico[0].eventoId !== 'undefined'){
            var evento =  Eventos.findOne(historico[0].eventoId);
             var dataAtual = new Date();
            if(evento.dtFim < dataAtual)
              return false;
            else
              return true;
       }
       return false;
  }


});

Template.noticia_view.events({

 'click #btnExcluir': function(e) {
       e.stopPropagation();
       e.preventDefault();
       var currentId = this._id;

 if (confirm("Tem certeza de que deseja excluir esta notícia? ?")) {
     Meteor.call('removerNoticia',currentId, function(error) {


                              if (error) {

                                toastr.error(error.reason);

                              } else {
                                 toastr.success("", "Notícia Excluído");
                                 Router.go("noticia")
                              }
                   });

 }
  },

});