Template.list_usuario.rendered = function() {
// select2
 if ($.fn.select2) {
      $("#select2-option-grupo").select2();
      $("#select2-option-orgao").select2();


 }

 $(".combodate").each(function(){
        $(this).combodate();
        $(this).next('.combodate').find('select').addClass('form-control');
 });


}