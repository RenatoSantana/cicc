 Template.testeExport.events({

   'click a.word-export': function(e, template) {
           e.preventDefault();
       $("#page-content").wordExport();
   }

})
Template.layout.helpers({
  images: function() { 
    return  DBFiles.findOne({user:Meteor.userId()});
  }
 })

 Template.layout.events({
      'submit form': function(e, template) {
       e.stopPropagation();
       e.preventDefault();
        
         var file = template.find('#fileinput').files[0];
         // var meteoruser = Meteor.userId();
          var reader = new FileReader();
          var teste = '';
          reader.onload = function(e) {
         
             teste = DBFiles.insert({src:e.target.result});
             alert(teste);
          };
          reader.readAsDataURL(file);
         
         
      }
  });


 Template.testePdf.events({
    
       'click #btnExport': function(e, template) {
       var doc = new jsPDF();

      doc.text(20, 20, 'This is the default font.');

      doc.setFont("courier");
      doc.text(20, 30, 'This is courier normal.');

      doc.setFont("times");
      doc.setFontType("italic");
      doc.text(20, 40, 'This is times italic.');

      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.text(20, 50, 'This is helvetica bold.');

      doc.setFont("courier");
      doc.setFontType("bolditalic");
      doc.text(20, 60, 'This is courier bolditalic.');
      doc.save('Test.pdf');
 
        
      }
  });


