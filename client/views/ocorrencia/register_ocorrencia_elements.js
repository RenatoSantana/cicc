Template.register_ocorrencia.rendered = function() {



//combodate
$(".combodate").each(function(){
        $(this).combodate();
        $(this).next('.combodate').find('select').addClass('form-control');
 });


// select2
 if ($.fn.select2) {
      $("#select2-option-evento").select2();
       $("#select2-option-classificacao").select2();

 }


    // slim-scroll
    $('.no-touch .slim-scroll').each(function(){
        var $self = $(this), $data = $self.data(), $slimResize;
        $self.slimScroll($data);
        $(window).resize(function(e) {
            clearTimeout($slimResize);
            $slimResize = setTimeout(function(){$self.slimScroll($data);}, 500);
        });

    $(document).on('updateNav', function(){
      $self.slimScroll($data);
    });
    });

    if ($.support.pjax) {
    $(document).on('click', 'a[data-pjax]', function(event) {
      event.preventDefault();
      var container = $($(this).data('target'));
      $.pjax.click(event, {container: container});
    })
  }


//sgywn
   function initToolbarBootstrapBindings() {
    var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
          'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
          'Times New Roman', 'Verdana'],
          fontTarget = $('[title=Font]').siblings('.dropdown-menu');
    $.each(fonts, function (idx, fontName) {
        fontTarget.append($('<li><a data-edit="fontName ' + fontName +'" style="font-family:\''+ fontName +'\'">'+fontName + '</a></li>'));
    });
   // $('a[title]').tooltip({container:'body'});
    $('.dropdown-menu input').click(function() {return false;})
        .change(function () {$(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');})
      .keydown('esc', function () {this.value='';$(this).change();});

    $('[data-role=magic-overlay]').each(function () {
      var overlay = $(this), target = $(overlay.data('target'));
      overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
    });
    if ("onwebkitspeechchange" in document.createElement("input")) {
      var editorOffset = $('#editor').offset();
      // $('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+$('#editor').innerWidth()-35});
    } else {
      $('#voiceBtn').hide();
    }
    };
    function showErrorAlert (reason, detail) {
        var msg='';
        if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
        else {
            console.log("error uploading file", reason, detail);
        }
        $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+
         '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
    };
  initToolbarBootstrapBindings();
    $('#editor').wysiwyg({ fileUploadError: showErrorAlert} );







}