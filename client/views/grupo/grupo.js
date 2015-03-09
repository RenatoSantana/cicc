Template.selectGrupo.helpers({
  grupos: function() {
    return Grupos.find();
  },
  isSelected: function(parentPost){
    return parentPost && this._id == parentPost.profile.grupoId ? 'selected' : '';
  }
});