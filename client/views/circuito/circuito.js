Template.selectCircuito.helpers({
  circuitos: function() {
    return Circuitos.find();
  },
  isSelected: function(parentPost){
    return parentPost && this._id == parentPost.circuitoId ? 'selected' : '';
  }
});

Template.selectValueCircuito.helpers({
  circuito: function() {
    return Circuitos.findOne({_id:this.circuitoId});
  },
  isSelected: function(parentPost){
    return parentPost && this._id == parentPost.circuitoId ? 'selected' : '';
  }

});

