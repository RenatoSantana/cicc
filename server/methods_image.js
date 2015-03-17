

Meteor.methods({
  saveImagem: function(imageAttributes) {
    var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");
      var historico = HistoricoEventos.find({},{limit:1,sort: {criacaoDt: -1}}).fetch()
    var imageObject = _.extend(_.pick(imageAttributes, 'dataHora', 'assunto', 'texto','cameraId','fileId'), {
      userId: user._id,
      orgaoId: user.profile.orgaoId,
      criacaoDt: new Date(),
      eventoId:null
    });
imageObject.eventoId=historico[0].eventoId;

     if(imageObject!==null && typeof imageObject != 'undefined'){
      if(imageObject.cameraId === ""){
         imageObject.cameraId  = null;

      }
       if(imageObject.assunto === ""){
         imageObject.assunto  = null;

      }

    }

   imageObject._id = Imagens.insert(imageObject);

    return imageObject;
  },


   update_imagem:function (currentId,properties){

     Imagens.update(currentId, {$set: properties})
 }



});
