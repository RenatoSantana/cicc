Meteor.startup(function () {
  
  //  process.env.MAIL_URL = //'smtp://postmaster%sandbox431603df231a4c1d85a2cb654b591b3e.mailgun.org:c942a80b6b5d70491499540cd92420b0@smtp.mailg//un.org:587';
 process.env.MAIL_URL="smtp://renatosilva.dcc%40gmail.com:zurich2014@smtp.gmail.com:465/";
 // process.env.MAIL_URL="smtp://envio.ba.gov.br/";
  Accounts.emailTemplates.from = "Verifique o link";
});
