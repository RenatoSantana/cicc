if (Circuitos.find().count() === 0) {

   
    Circuitos.insert({
      descricao: 'BATATINHA',
      userId : 'indenfinido',
      eventoId: null,
      criacaoDt: new Date()
      
    });
   
    Circuitos.insert({
      descricao: 'CIRCUITO OSMAR - CENTRO',
      userId : 'indenfinido',
      eventoId: null,
      criacaoDt: new Date()
      
    });
   
   
   
   
    Circuitos.insert({
      descricao: 'CIRCUITO DODO - ORLA',
      userId : 'indenfinido',
      eventoId: null,
      criacaoDt: new Date()
      
    });
   
   
   Circuitos.insert({
      descricao: 'CIRCUITO INTERIOR',
      userId : 'indenfinido',
      eventoId: null,
      criacaoDt: new Date()
      
    });
   
   Circuitos.insert({
      descricao: 'FORA DO CIRCUITO',
      userId : 'indenfinido',
      eventoId: null,
      criacaoDt: new Date()
      
    });
   
   

   
   

}









if (Trechos.find().count() === 0) {

   
Trechos.insert({
      descricao: 'FORA DO CIRCUITO',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'FORA DO CIRCUITO'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'TRECHO INTERIOR',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO INTERIOR'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'CENTENARIO (DPT / H STO AMARO)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});



Trechos.insert({
      descricao: 'ONDINA (LADEIRA DO CALABAR)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'ONDINA (OTHON PALACE - ONDINA APART HOTEL)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'ONDINA (BECO DO CESAR TOWER - RUA ESCRAVO MIGUEL)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});


Trechos.insert({
      descricao: 'BARRA (AFONSO CELSO- MORRO DO GAVAZA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});
Trechos.insert({
      descricao: 'CENTENARIO (VITORIA CENTER - SABINO SILVA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});


Trechos.insert({
      descricao: 'CENTENARIO (VITORIA CENTER / ENTRADA DO CALABAR)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'CENTENARIO (DO HABIBS AO SHOPPING BARRA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'BARRA  (VITORIA CENTER - SHOPPING BARRA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});


Trechos.insert({
      descricao: 'BARRA  (BARRAVENTO - MONUMENTO DO  CRISTO)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'BARRA (LARGO DA GRACA - PORTO DA BARRA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'ONDINA (INSTITUTO BAIANO DE REAB - REST SUKIAK)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});


Trechos.insert({
      descricao: 'ONDINA (ENT ADHEMAR DE BARROS / INST BAIANO REAB)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'ONDINA (ENTRADA ZOOLOGICO/ MONUMENTO C ANDRADE)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});



Trechos.insert({
      descricao: 'ONDINA (ENTRADA ADHEMAR DE BARROS - ZOOLOGICO)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'ONDINA (ONDINA APART HOTEL / ENT A DE BARROS)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});
Trechos.insert({
      descricao: 'ONDINA (SALVADOR PRAIA HOTEL - OTHON)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});


Trechos.insert({
      descricao: 'ONDINA (CLUBE ESPANHOL / SALVADOR PRAIA HOTEL)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});


Trechos.insert({
      descricao: 'BARRA (MORRO DO CRISTO / CLUBE ESPANHOL)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'BARRA (BARRA CENTER - BARRAVENTO)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});
Trechos.insert({
      descricao: 'BARRA (POUSADA MARCOS/ BARRA CENTER)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'BARRA (FAROL DA BARRA - P. MARCOS)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'BARRA (HOSPITAL ESPANHOL - FAROL DA BARRA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'BARRA (PORTO DA BARRA - HOSPITAL  ESPANHOL)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO DODO - ORLA'})._id,
      criacaoDt: new Date()
      
});
   
   
Trechos.insert({
      descricao: 'LARGO DO PELOURINHO /BX SAPATEIROS(R JJ SEABRA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'BATATINHA'})._id,
      criacaoDt: new Date()
      
});

Trechos.insert({
      descricao: 'TERREIRO DE JESUS / LARGO DO PELOURINHO',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'BATATINHA'})._id,
      criacaoDt: new Date()
      
});
Trechos.insert({
      descricao: 'PRACA DA SE / BX DOS SAPATEIROS (RUA J J SEABRA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'BATATINHA'})._id,
      criacaoDt: new Date()
      
 });


Trechos.insert({
      descricao: 'PRACA DA SE / TERREIRO DE JESUS',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'BATATINHA'})._id,
      criacaoDt: new Date()
      
 });

Trechos.insert({
      descricao: 'PRACA MUNICIPAL  / PRACA DA SE',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'BATATINHA'})._id,
      criacaoDt: new Date()
      
 });

Trechos.insert({
      descricao: 'RUA DA AJUDA /LADEIRA DA PRACA',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'BATATINHA'})._id,
      criacaoDt: new Date()
      
 });
   
 
Trechos.insert({
      descricao: 'RUA CHILE / PRACA MUNICIPAL',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'BATATINHA'})._id,
      criacaoDt: new Date()
      
    });
   

   Trechos.insert({
      descricao: 'BX DOS SAPATEIROS (AQUIDABA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'BATATINHA'})._id,
      criacaoDt: new Date()
      
    });
   
   
   Trechos.insert({
      descricao: 'MERCES (CASA ITALIA - ROSARIO)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
   Trechos.insert({
      descricao: 'MERCES (ROSARIO - PRACA DA PIEDADE)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
   
    Trechos.insert({
      descricao: 'PIEDADE (PRACA DA PIEDADE - LADEIRA DE SAO BENTO)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
   
    Trechos.insert({
      descricao: 'SAO BENTO (LADEIRA DE S BENTO - PCA CASTRO ALVES)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
    Trechos.insert({
      descricao: 'CARLOS GOMES (SULACAP - FUND POLITECNICA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
   
    Trechos.insert({
      descricao: 'CARLOS GOMES (FUNDACAO POLITECNICA- DECON)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
    Trechos.insert({
      descricao: 'AFLITOS - (DELEGACIA  D CONSUMIDOR - CASA DITALIA0',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });


    Trechos.insert({
      descricao: 'PASSEIO PUBLICO (CASA D ITALIA - ENT COR VITORIA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
   
    Trechos.insert({
      descricao: 'CAMPO GRANDE (ENT COR VITORIA -  TCA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });

   
   Trechos.insert({
      descricao: 'VITORIA - INICIO CORDA VITORIA -  LARGO DA GRACA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });

   Trechos.insert({
      descricao: 'CANELA (HOSP DAS CLINICAS- PROC DA REPUBLICA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });


     Trechos.insert({
      descricao: 'LARGO DOIS DE JULHO',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
    Trechos.insert({
      descricao: 'CARLOS GOMES (BECO DE MARIA PAZ)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
    Trechos.insert({
      descricao: 'PIEDADE (JOANA ANGELICA - ESTACAO DA LAPA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });

   Trechos.insert({
      descricao: 'VALE DO CANELA (LARGO DO CAMPO GRANDE)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });

   Trechos.insert({
      descricao: 'COMERCIO (LADEIRA AV CONTORNO  - MERCADO MODELO)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });
   
    Trechos.insert({
      descricao: 'COMERCIO (TERMINAL DA FRNCA - AV DA FRANCA)',
      userId : 'indenfinido',
      circuitoId: Circuitos.findOne({descricao:'CIRCUITO OSMAR - CENTRO'})._id,
      criacaoDt: new Date()
      
    });



     
   
   
}
