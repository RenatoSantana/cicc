
Meteor.methods({
  saveNoticia: function(noticiaAttributes) {

    var user = Meteor.user()


    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

           var   noticiaObject = _.extend(_.pick(noticiaAttributes, 'titulo', 'texto', 'categoriaId','fonte','fileId','status','eventoId'), {
                userId: user._id,
                orgaoId: user.profile.orgaoId,
                criacaoDt: new Date(),
                bloqueio: false


              });


    if (Roles.userIsInRole(user, ["Cadastro"])) {
        noticiaObject.status ='privada';
        noticiaObject.bloqueio= true;
    }

    noticiaObject._id = Noticias.insert(noticiaObject);
    return noticiaObject;
  },

 noticia_bloqueio:function (currentId){
     var properties ={
       bloqueio:true,
       status :'privada'
     }
     Noticias.update(currentId, {$set: properties});
    /* isValid = NoticiaSchema.namedContext("createNoticiaContext").validate(properties);
     var context = NoticiaSchema.namedContext("createNoticiaContext");

     if (!context.isValid()) {
        throw new Meteor.Error(400, context.invalidKeys());

      }else{

      }*/

 },
  validarNoticia:function (properties){
     properties.bloqueio=false;
     properties.userValitatorId =Meteor.userId();
     var currentId = properties._id
     delete properties._id;

     Noticias.update(currentId, {$set: properties});
     return  currentId;

 },


    removerNoticia:function (currentId){

     Noticias.remove(currentId);


 },



});

