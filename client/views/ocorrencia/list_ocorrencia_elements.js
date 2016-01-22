Template.list_ocorrencia.rendered = function() {
// select2
 if ($.fn.select2) {
      $("#select2-option-evento").select2();
      $("#select2-option-orgao").select2();


 }

 $(".combodate").each(function(){
        $(this).combodate();
        $(this).next('.combodate').find('select').addClass('form-control');
 });


}