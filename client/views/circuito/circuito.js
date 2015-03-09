Template.selectCircuito.helpers({
  circuitos: function() {
    return Circuitos.find();
  },
  isSelected: function(parentPost){
    return parentPost && this._id == parentPost.circuitoId ? 'selected' : '';
  }
});