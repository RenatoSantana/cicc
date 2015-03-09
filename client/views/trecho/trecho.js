Template.selectTrecho.helpers({
  trechos: function() {
    return Session.get('trechos');
  },
  isSelected: function(parentPost){
    return parentPost && this._id == parentPost.trechoId ? 'selected' : '';
  }
});