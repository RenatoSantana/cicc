 Meteor.startup(function () {
     var user = Meteor.userId();
        Session.set("noticias",  Noticias.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
        Session.set("incidentes",Incidentes.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
        Session.set("consideracoes", Consideracoes.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
 });

Template.relatorio_orgao.rendered = function() {
    $('#dataCadastroInicio').datetimepicker();
    $('#dataCadastroFim').datetimepicker();
}



Template.relatorio_orgao.helpers({
   user: function() {
        return Meteor.users.findOne(this.userId);
    },
  
 /*  acoes: function(){
      return Acoes.find().fetch();
   },*/
  
   incidentes: function() {
   //   var user = Meteor.userId();
   ///   return Incidentes.find({userId:user},{sort: {criacaoDt: -1}});
       return Session.get("incidentes");
    },
  
   temIncidente:function(){
        var user = Meteor.userId();
      var incidentes =  Incidentes.find({userId:user}).count();
      if(incidentes >0)
         return true
       else
         return false
   },
   
   temNoticia:function(){
        var user = Meteor.userId();
       var noticias =  Noticias.find({userId:user}).count();
      if(noticias >0)
         return true
       else
         return false
   
   },
   noticias: function(){
      //  var user = Meteor.userId();
       // return Noticias.find({userId:user},{sort: {criacaoDt: -1}}).fetch();
      return Session.get("noticias");
   },

   
    temConsideracoes:function(){
        var user = Meteor.userId();
       var consideracoes =  Consideracoes.find({userId:user}).count();
      if(consideracoes >0)
         return true
       else
         return false
   
   },
   consideracoes: function(){
      //  var user = Meteor.userId();
      //  return Consideracoes.find({userId:user},{sort: {criacaoDt: -1}}).fetch();
        return Session.get("consideracoes");
   },


   orgao: function() {
        return Orgaos.findOne(this.orgaoId);
    },
  
 /* incidente:function(){
    return Protocolos.findOne({_id:this.protocoloId});
  },*/
   
   
   data: function(){
    var time = this.criacaoDt
    return moment(time).locale('pt-BR').format(' DD [de] MMMM YYYY, H:mm');
      
  }
  
   
});


Template.relatorio_orgao.events({
  'submit form': function(e) {
                 e.preventDefault();
   
    var dataInicioVector =  $(e.target).find('#dataCadastroInicio').val().split('/');
    var dataInicio = new Date()
    dataInicio.setDate(dataInicioVector[0]);
    dataInicio.setMonth(dataInicioVector[1]-1);
    
    var anoHoraInicio = dataInicioVector[2].split(" ");
    dataInicio.setFullYear(anoHoraInicio[0]);
    var horaInicio = anoHoraInicio[1].split(":");
    dataInicio.setHours(horaInicio[0], horaInicio[1], 0);
       
   
    var dataFimVector =  $(e.target).find('#dataCadastroFim').val().split('/');
    var dataFim = new Date()
    dataFim.setDate(dataFimVector[0]);
    dataFim.setMonth(dataFimVector[1]-1);
    
    var anoHoraFim = dataFimVector[2].split(" ");
    dataFim.setFullYear(anoHoraFim[0]);
    var horaFim = anoHoraFim[1].split(":");
    dataFim.setHours(horaFim[0], horaFim[1], 0);
    var user = Meteor.userId();
    var data;
   
   
       Session.set("noticias",Noticias.find({userId:user,criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort: {criacaoDt: -1}}).fetch());
        Session.set("incidentes",Incidentes.find({userId:user,criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort: {criacaoDt: -1}}).fetch());
        Session.set("consideracoes",Consideracoes.find({userId:user,criacaoDt: {$gte: dataInicio, $lte: dataFim}},{sort: {criacaoDt: -1}}).fetch());
       

    
     
    
    },
       'click #btnExport2': function(e, template) {
            e.preventDefault();


            createPDF();
     
            
      
      },
    'click #btntrazertudo': function(e) {
                    e.preventDefault();
         var user = Meteor.userId();
         
        Session.set("noticias",  Noticias.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
        Session.set("incidentes",Incidentes.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
        Session.set("consideracoes", Consideracoes.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
       


      }
   

})
var createPDF = function() {
	
   

var pdf = new jsPDF('p', 'pt', 'letter')

// source can be HTML-formatted string, or a reference
// to an actual DOM element from which the text will be scraped.
, source = $('#conteudo')[0]

// we support special element handlers. Register them with jQuery-style
// ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
// There is no support for any other type of selectors
// (class, of compound) at this time.
, specialElementHandlers = {
	// element with id of "bypass" - jQuery style selector
	'#conteudo': function(element, renderer){
		// true = "handled elsewhere, bypass text extraction"
		return true
	}
}

margins = {
    top: 50,
    bottom: 60,
    left: 45,
    width: 522
  };
  // all coords and widths are in jsPDF instance's declared units
  // 'inches' in this case
pdf.fromHTML(
  	source // HTML string or DOM elem ref.
  	, margins.left // x coord
  	, margins.top // y coord
  	, {
  		'width': margins.width // max width of content on PDF
  		, 'elementHandlers': specialElementHandlers
  	},
  	function (dispose) {
  	  // dispose: object with X, Y of the last line add to the PDF
  	  //          this allow the insertion of new lines after html
        pdf.save('relatorio_sisfesta.pdf');
      },
  	margins
  )





//	doc.save('relatorio_sisfestas2.pdf');
}