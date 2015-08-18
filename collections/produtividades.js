Produtividades = new Meteor.Collection('produtividades');

Schema = {};

objectSchema = {
   _id: {
    type: String,
    optional: true,
    label: " ",
   },

   efetivo: {
    type: Number,
    min:0,
    optional: false,
    label: "Efetivo do Orgão"
   },

   local: {
    type: Number,
    decimal: true,
    optional: false,
    min:0,
    label: "Barreiras ou Bloqueio Policiais - Locais (unid)"
   },
   veiculoFurtadoRoubado: {
    type: Number,
    optional: false,
    min:0,
    label: "Veículos furtados/Veículos roubados recuperados   (unid)"
   },

   abordagemPessoa: {
    type: Number,
    optional: false,
    min:0,
    label: "Abordagem de Pessoas (unid)"
   },
   abordagemEmbarcacao: {
      type: Number,
      optional: false,
      min:0,
      label: "Abordagem de Embarcações (unid)"
   },

   abordagemCarro: {
      type: Number,
      optional: false,
      min:0,
      label: "Abordagem de Carros (unid)"
   },

   abordagemMoto: {
      type: Number,
      optional: false,
      min:0,
      label: "Abordagem de Motos (unid)"
   },

   abordagemOnibus: {
      type: Number,
      optional: false,
      min:0,
      label: "Abordagem de Ônibus (unid)"
   },

   abordagemCaminhao: {
      type: Number,
      optional: false,
      min:0,
      label: "Abordagem de Caminhões (unid)"
   },

   apreensaoMaconha: {
      type: Number,
      optional: false,
      decimal: true,
      min:0,
      label: "Apreensão de Maconha (Kg)"
   },

  apreensaoPeMaconha: {
      type: Number,
      optional: false,
      decimal: true,
      min:0,
      label: "Apreensão Pé de Maconha (Kg)"
   },

  cocaina: {
      type: Number,
      optional: false,
      decimal: true,
      min:0,
      label: "Apreensão de Cocaína (Kg)"
   },

   pastabase: {
      type: Number,
      optional: false,
      decimal: true,
      min:0,
      label: "Apreensão de Pasta Base (Kg)"
   },

  heroina: {
      type: Number,
      optional: false,
      decimal: true,
      min:0,
      label: "Apreensão de Heroína (Kg)"
   },

  haxixe: {
      type: Number,
      optional: false,
      decimal: true,
      min:0,
      label: "Apreensão de Haxixe (Kg)"
   },

   apreensaoCrack: {
      type: Number,
      optional: false,
      decimal: true,
      min:0,
      label: "Apreensão de Crack (Kg)"
   },



   apreensaoDrogaSintetica: {
      type: Number,
      optional: false,
      decimal: true,
      min:0,
      label: "Apreensão de Drogas Sintéticas (Kg)"
   },

   pessoasPresasEmFlagrantes: {
      type: Number,
      optional: false,
       min:0,
      label: "Pessoas Presas em Flagrantes (Maiores)"
   },

   pessoasApreendidasEmFlagrantes: {
      type: Number,
      optional: false,
      min:0,
      label: "Pessoas Apreendidas em Flagrantes (Menores)"
   },

   pessoasPresasPorMandado: {
      type: Number,
      optional: false,
      min:0,
      label: "Pessoas Presas Por Mandado (Maiores)"
   },

  apreensaoArmaDeFogo: {
      type: Number,
      optional: false,
      min:0,
      label: "Apreensão de Armas de Fogo (Unid)"
   },

  apreensaoMunicao: {
      type: Number,
      optional: false,
      min:0,
      label: "Apreensão de Munições (Unid)"
   },

   apreensaoExplosivo: {
      type: Number,
      optional: false,
      decimal: true,
        min:0,
      label: "Apreensão de Explosivos (Kg)"
   },

  apreensaoVeiculo: {
      type: Number,
      optional: false,
        min:0,
      label: "Apreensão de Veículos (Unid)"
   },

   apreensaoMedicamento: {
      type: Number,
      optional: false,
        min:0,
      label: "Apreensão de Medicamentos (caixa) "
   },

   apreensaoEletronico :{
      type: Number,
      optional: false,
        min:0,
      label: "Apreensão de Eletrônicos (unid)"
   },

  apreensaoAgrotoxico: {
      type: Number,
      optional: false,
      decimal: true,
        min:0,
      label: "Apreensão de Agrotóxicos (Kg)"
   },

  apreensaoCigarro: {
      type: Number,
      optional: false,
        min:0,
      label: "Apreensão de cigarros (maço) "
   },

   autoPrisaoFlagrante: {
      type: Number,
      optional: false,
        min:0,
      label: "Auto Prisão Flagrante (Unidade) "
   },

  mandadoBuscaEApreensao: {
      type: Number,
      optional: false,
        min:0,
      label: "Mandados Busca e Apreensão (Unidade) "
   },

  mandadoDePrisao: {
      type: Number,
      optional: false,
        min:0,
      label: "Mandados de Prisão (Unidade) "
   },



documentosRecolhidos: {
      type: Number,
      optional: false,
        min:0,
      label: "Documentos recolhidos"
   },



animaisRecolhidos: {
      type: Number,
      optional: false,
        min:0,
      label: "Meio Ambiente: Animais recolhidos"
   },


madeiraApreendidas: {
      type: Number,
      optional: false,
      min:0,
      label: "Meio Ambiente: Madeira apreendida"

   },



numeroAutuacoes: {
      type: Number,
      optional: false,
      min:0,
      label: "Número de autuações"

   },


  totalDeAcidentes: {
      type: Number,
      optional: false,
      min:0,
      label: "Total de Acidentes"

   },




 totalDeFeridos: {
      type: Number,
      optional: false,
      min:0,
      label: "Total de vítimas: Feridos"

   },

totalDeMortos: {
      type: Number,
      optional: false,
      min:0,
      label: "Total de vítimas: Mortos"

   },


 plantaoDt: {
    label:"Data do Plantão",
    type: Date,
    optional: false,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }

  },



   criacaoDt: {
    type: Date,
    optional: true

  },

  orgaoId: {
    type: String,
    optional: true
  },


  userId: {
    type: String,
    optional: true

  },

  eventoId: {
    label: "Evento",
    type: String,
    optional: false,

     autoform: {
      type: "select",
            options: function () {

                 var dataAtual = new Date(getServerTime());
                 var user = Meteor.user();
                 var options = [];

                 if (Roles.userIsInRole(user, ["Administrativo"])) {
                         Eventos.find().forEach(function (element) {
                    options.push({
                        label: element.descricao, value: element._id
                    })
                });
                 }else{
                   if(typeof dataAtual!=='undefined'){

                          Eventos.find({$or:[{dtFim: { $gte:dataAtual}},{_id:"ct4Pe4SNEbDPHqxyZ"}]}).forEach(function (element) {
                              options.push({
                                  label: element.descricao, value: element._id
                              })
                          });
                       }
                 }
                return options;
            }
        }
  },

   turno: {
      type: Number,
      allowedValues: [
         1,
         2

      ],
      optional: false,
      label: "Selecione o turno",
      autoform: {
         options: [
            {
               label: "8:00 - 20:00",
               value: 1
            },
            {
               label: "20:00 - 8:00",
               value: 2
            }
         ]
      }
   }


}



Schema.produtividade= new SimpleSchema(objectSchema);
Produtividades.attachSchema(Schema.produtividade);