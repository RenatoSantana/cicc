Deps.autorun(function(){
        Session.setDefault("resultImageOk", false)
    });

  Meteor.startup(function () {
        Session.set("resultImageOk", false)
    });
AutoForm.addHooks(
  ["imagem_cr"],
  {
    before   : {
      saveImagem: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      saveImagem: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("imagem");
     }
  }
);
Template.imagem_ls.helpers({
    imagens: function() {
      if (Session.get("resultImageOk")) {
            Session.set("resultImageOk",false);
          return Session.get("imagens");
      }else{
          var user = Meteor.user()
          if (Roles.userIsInRole(user, ["Cadastro"])) {
            return Imagens.find({orgaoId:user.profile.orgaoId},{sort:{criacaoDt:-1}});
          }else if (Roles.userIsInRole(user, ["Administrativo"])) {
             return Imagens.find({},{sort:{criacaoDt:-1}});
          }
      }
    },

    imagensResult:function(){
       return Session.get("imagens");
    },
    isResultImagem:function(){
        return Session.get("resultImageOk");
    }




});

Template.imagem_ls.rendered = function() {
    $('#dataCadastroInicio').datetimepicker();
    $('#dataCadastroFim').datetimepicker();
}

Template.imagem_ls.events({



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
           data = Imagens.find({criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort:{criacaoDt: -1}}).fetch()

      }else{
         data =   Imagens.find({orgaoId:user.profile.orgaoId,criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort:{criacaoDt: -1}}).fetch()


      }
        Session.set("imagens",data);
        Session.set("resultImageOk",true);

    },



});

Template.imagem_cr.rendered = function() {
  $( "#cbCamera" ).select2();
 // $('#dataHora').datetimepicker();

}


Template.imagem_cr.helpers({

   imagemSchema: function() {
    return Schema.noticia;
  },



});

Template.imagemItem.helpers({
    assuntoResumido: function() {
        if(this.assunto.length >100)
            return this.assunto.substr(0,100)+ ' ...';
       else
         return this.assunto;
    },

     observacaoResumida: function() {
       if(this.texto.length >100)
            return this.texto.substr(0,100)+ ' ...';
       else
         return this.texto;
    },

   data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');

   },

   logo: function(){
    var obj = Orgaos.findOne(this.orgaoId);
    return Files.findOne(obj.fileId);
  }
})


Template.imagem_view.helpers({

   user: function() {
        return Meteor.users.findOne(this.userId);
    },

   data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');

  },
 logo: function(){
    var obj = Orgaos.findOne(this.orgaoId);
    return Files.findOne(obj.fileId);
  },

  imagem:function(){
          return Files.findOne({_id:this.fileId})
  }


});


Template.imagem_view.events({

  	  "submit form": function (e){

            e.preventDefault();

         var $elemWrite = $('#write').hasClass('collapse in');
                if($elemWrite){
                     $('#write').removeClass('collapse in');
                     $('#write').addClass('collapse');
                 }
            var current = this._id;

            var properties = {
                   observacaoCoordenacao: $(e.target).find('#inputMensagem').val(),
                   imagem: this.imagem
            }


 if(properties!==null&& properties !== 'undefined' && properties.observacaoCoordenacao !=="" &&  properties.observacaoCoordenacao.length>0){
           Meteor.call('update_imagem', current,properties, function(error) {
                              if(error){
                                      // display the error to the user
                             //     throwErrorImage(error.reason);
                            }else{
                                 toastr.success("", "Salvo");

                                 $('#inputMensagem').val(" ");
                                }
          });
 } else{
  toastr.error("Observação obrigatória","ops!");
    }


      }
});