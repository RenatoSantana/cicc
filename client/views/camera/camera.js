Template.selectCamera.helpers({
  cameras: function() {
    return Cameras.find();
  },
  isSelected: function(parentPost){
    return parentPost && this._id == parentPost.cameraId ? 'selected' : '';
  }
});



Template.selectCamera.rendered = function() {

  $( "#cbCamera" ).select2();

  	
}