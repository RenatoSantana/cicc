AutoForm.addHooks(
  ["evento_cr"],
  {

     onSuccess: function(operation, result, template) {
                Router.go("evento");

     },



  }
);

AutoForm.addHooks(
  ["evento_ed"],
  {
    before   : {
      updateEvento: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      updateEvento: CfsAutoForm.Hooks.afterInsert
    },
     onSuccess: function(operation, result, template) {

         Router.go("evento");
     }
});



Template.evento_cr.helpers({
   eventoSchema: function() {
    return Schema.evento;
  }


});

Template.evento_ed.helpers({
  eventoDoc: function() {
    return Eventos.findOne(this._id)
  },
  eventoSchema: function() {
    return Schema.evento;
  }


});





Template.evento_ls.helpers({
     eventos: function() {
    return Eventos.find();
  },

});


Template.eventoItem.helpers({



  dataInicio: function(){
    var time = this.dtInicio
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY');

  },

  dataFim: function(){
    var time = this.dtFim
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY');

  },


})


Template.selectEvento.helpers({
    eventos: function() {
       var dataAtual = new Date(getServerTime());
       var user = Meteor.user();


       if (Roles.userIsInRole(user, ["Administrativo"])) {
                return Eventos.find();
       }else{
         if(typeof dataAtual!=='undefined')
              return Eventos.find({$or:[{dtFim: { $gte:dataAtual}},{_id:"ct4Pe4SNEbDPHqxyZ"}]})
          else
            return;
       }
  },

  isSelected: function(parentPost){
    return parentPost && this._id == parentPost.eventoId ? 'selected' : '';
  }
});