var handle;
Deps.autorun(function(){
   if(Meteor.user()!==null){
   //    handle= Meteor.subscribeWithPagination('noticiasPrivadasBloqueadas', 30);
   }
});

Template.noticia_ls_vt.helpers({

  noticias:function(){
    var user = Meteor.user();
   if (Roles.userIsInRole(user, ["Administrativo"])) {
      return  Noticias.find({bloqueio:true,status:"privada"},{sort:{criacaoDt: -1}});
   }else{
      return  Noticias.find({bloqueio:true,status:"privada",orgaoId:user.profile.orgaoId},{sort:{criacaoDt: -1}});
   }
  },

  evento:function(){
     var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()

      return Eventos.findOne(historico[0].eventoId)
    }


})


Template.noticia_vt.helpers({
   /* orgao: function(){
      return Orgaos.findOne({_id:this.orgaoId});
    },*/

   /* protocolo: function(){
      return Protocolos.findOne({_id:this.protocoloId});
    },*/
    selectedNoticiaDoc: function () {
    return Noticias.findOne(this._id);
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
 imagem:function(){

          return Files.findOne({_id:this.fileId})


  },

  bloqueada:function(){

        return this.bloqueio;

  }


})
