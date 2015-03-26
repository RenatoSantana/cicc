Consideracoes = new Meteor.Collection('consideracoes');
Schema = {};


objectSchema = {
   _id: {
    type: String,
    optional: true,
    label: " ",
   },
   descricao: {
    type: String,
    optional: false,
    label: "Consideração"
    //max: 100
   },


  criacaoDt: {
    type: Date,
    optional: true
  },



   userId: {
    type: String,
    optional: true
  },

   orgaoId: {
    type: String,
    optional: true
  },

 eventoId: {
    label: "Evento",
    type: String,
    optional: false,

     autoform: {
      type: "select",
            options: function () {

                 var dataAtual = new Date(getServerTime());
                 var user = Meteor.user();
                 var options = [];

                 if (Roles.userIsInRole(user, ["Administrativo"])) {
                         Eventos.find().forEach(function (element) {
                    options.push({
                        label: element.descricao, value: element._id
                    })
                });
                 }else{
                   if(typeof dataAtual!=='undefined'){

                            Eventos.find({$or:[{dtFim: { $gte:dataAtual}},{_id:"ct4Pe4SNEbDPHqxyZ"}]}).forEach(function (element) {
                              options.push({
                                  label: element.descricao, value: element._id
                              })
                          });
                       }
                 }
                return options;
            }
        }
  },



}



Schema.consideracao= new SimpleSchema(objectSchema);

Consideracoes.attachSchema(Schema.consideracao);


EasySearch.createSearchIndex('consideracoes', {
    'field' : ['descricao'],  // required, searchable field(s)
    'collection' : Consideracoes,          // required, Mongo Collection
    'limit' : 500                  // not required, default is 10
});



