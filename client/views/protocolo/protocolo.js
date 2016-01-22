Template.selectProtocolo.helpers({
  protocolos: function() {
    return Protocolos.find({},{sort: {'_id': 1}})
  },
  isSelected: function(parentPost){
    return parentPost && this._id == parentPost.protocoloId ? 'selected' : '';
  }


});
/*

AutoForm.addHooks(
  ["protocolo_cr"],
  {

     onSuccess: function(operation, result, template) {

         Router.go("protocolo");
     },



  }
);

AutoForm.addHooks(
  ["protocolo_edit"],
  {

     onSuccess: function(operation, result, template) {

         Router.go("protocolo");
     },



  }
);

*/
Template.protocolo_edit.helpers({
  protocoloDoc: function() {
    return Protocolos.findOne(this._id)
  }
});

Template.protocolo_ls.helpers({
    protocolos: function() {
        return Protocolos.find({},{sort: {'_id': 1}})
    }


});


Template.protocoloItem.helpers({
    local: function() {
      return Locais.findOne({_id:this.localId})
    },




});

Template.protocolo_associacao.helpers({
    local: function() {
      return Locais.findOne({_id:this.localId})
    },

    acoes:function() {
      return ProtocoloAcao.find({protocoloId:this._id})
    }



});


Template.protocolo_associacao.events({
  'submit form': function(e) {
    e.preventDefault();

    var properties = {
      protocoloId: this._id,
      acaoId: $(e.target).find('#cbAcao').val()
    }

      if(properties!==null&& properties != 'undefined' && properties.protocoloId!=="" &&  properties.acaoId!==""){
    Meteor.call('saveAcao', properties, function(error, acao) {
                      if (error) {
                         $("#btnsave").removeAttr('disabled')
                               toastr.error("", "Ops");

                              } else {
                                 toastr.success("", "Salvo");
                                 //Router.go("/protocolo_ed/"+acao._id);
                              }
   });

      }else{
        toastr.error("", "Campos obrigatorios");
      }



    }
});

Template.selectProtocolo.rendered = function() {

  //$( "#cbProtocolo" ).select2();


}