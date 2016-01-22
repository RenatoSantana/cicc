//--------------------------------------------------------------------------------------------------//
//--------------------------------------------- Config ---------------------------------------------//
//--------------------------------------------------------------------------------------------------//


var FastRender = {RouteController: RouteController, onAllRoutes: function() {}};
Router.configure({

	layoutTemplate: 'baseLayout',
  autoRender: true,


  waitOn: function() {
   $('html').addClass('app');
    return  [Meteor.subscribe("produtividades"),Meteor.subscribe("incidentesOrgaos"), Meteor.subscribe("protocoloAcao"), Meteor.subscribe("protocolos"),Meteor.subscribe("usuarioEventos"),Meteor.subscribe("telefones"),Meteor.subscribe("eventoCircuitos"),Meteor.subscribe("files"),Meteor.subscribe("consideracoes"), Meteor.subscribe("noticias"), Meteor.subscribe("incidentes"),Meteor.subscribe("solicitacoes"),  Meteor.subscribe("locais"), Meteor.subscribe("acoesOrgao"), Meteor.subscribe("users"),Meteor.subscribe("respostas"),Meteor.subscribe("imagens"),Meteor.subscribe("cameras"),Meteor.subscribe("eventos"),Meteor.subscribe("orgaos"),Meteor.subscribe("grupos"),Meteor.subscribe("circuitos"),Meteor.subscribe("trechos")]
  }



});




Router.map(function() {






 this.route('produtividade_mg', {
          path: '/produtividade_mg/',
          template: 'produtividade_mg',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'produtividade_mg': {to: 'mainContent'},

            },

              data: function() {
                 Session.set("produtividades_mg",null);

              }



      });


     this.route('produtividade', {
          path: '/produtividade/',
          template: 'produtividade_ls',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'produtividade_ls': {to: 'mainContent'},

            },

              data: function() {
                 Session.set("produtividades",null);
                 Session.set("desabilita_produtividade",true);
              }



      });



this.route('new_produtividade', {

          template: 'produtividade_cr',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'produtividade_cr': {to: 'mainContent'},

            }

      });

this.route('produtividade_view', {
          path: '/produtividade_view/:_idProdutividade',
          template: 'produtividade_view',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'produtividade_view': {to: 'mainContent'},

            },

          data: function() { return  Produtividades.findOne(this.params._idProdutividade);  }

      });

this.route('produtividade_ed', {
          path: '/produtividade_ed/:_idProdutividade',
          template: 'produtividade_ed',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'produtividade_ed': {to: 'mainContent'},

            },

          data: function() { return  Produtividades.findOne(this.params._idProdutividade);  }

      });


   this.route('protocolo_ed', {
          path: '/protocolo_ed/:_idProtocolo',
          template: 'protocolo_edit',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'protocolo_edit': {to: 'mainContent'},

            },

          data: function() { return  Protocolos.findOne(this.params._idProtocolo);  }

     	});



  this.route('evento_circuito', {
          path: '/evento_circuito/:_idEvento',
          template: 'evento_circuito_cr',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'evento_circuito_cr': {to: 'mainContent'},

            },

          data: function() {
            return  Eventos.findOne(this.params._idEvento);  }

      });


 this.route('evento_usuario', {
          path: '/evento_usuario/:_idEvento',
          template: 'eventoUsuario',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'eventoUsuario': {to: 'mainContent'},

            },

          data: function() {

            return  Eventos.findOne(this.params._idEvento);

          }

      });


  this.route('protocolo_asc', {
          path: '/protocolo_asc/:_idProtocolo',
          template: 'protocolo_associacao',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'protocolo_associacao': {to: 'mainContent'},

            },

          data: function() { return  Protocolos.findOne(this.params._idProtocolo);  }

     	});




   this.route('trocarpw', {
          path: '/trocarPw/',
          template: 'trocar_senha',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'trocar_senha': {to: 'mainContent'},

            }

     	});
     this.route('relatorio', {
          path: '/relatorio/',
          template: 'relatorio_geral',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'relatorio_geral': {to: 'mainContent'},

            },

            data:function(){
                 Session.set("noticias", Noticias.find({},{sort: {criacaoDt: -1}}).fetch());
                 Session.set("incidentes",Incidentes.find({},{sort: {criacaoDt: -1}}).fetch());
                 Session.set("consideracoes",Consideracoes.find({},{sort: {criacaoDt: -1}}).fetch());
                 Session.set("associaProtocolo",false);
            }

     	});


 this.route('produtividade_geral', {
          path: '/produtividade_geral/',
          template: 'produtividade_geral',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'produtividade_geral': {to: 'mainContent'},

          }
      });


 this.route('rela_prod_cons', {
          path: '/rela_prod_cons/',
          template: 'rela_prod_cons',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'rela_prod_cons': {to: 'mainContent'},

          }
      });




     this.route('relatorio_mg', {
          path: '/relatorio_mg/',
          template: 'relatorio_mg',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'relatorio_mg': {to: 'mainContent'},

          }
      });


    this.route('relatorio_orgao', {
          path: '/relatorio_orgao/',
          template: 'relatorelatorio_orgaorio_geral',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'relatorio_orgao': {to: 'mainContent'},

            },

            data:function(){
                var user = Meteor.userId();
                Session.set("associaProtocolo",false);
                Session.set("noticias",  Noticias.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
                Session.set("incidentes",Incidentes.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
                Session.set("consideracoes", Consideracoes.find({userId:user},{sort: {criacaoDt: -1}}).fetch());
            }

     	});



    this.route('index', {
		   path: '/',

		   layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'baseLayout': {to: 'mainContent'},

        }


     });


   this.route('solicitacao_box', {
       path: '/solicitacao_box/',
       template: 'solicitacao_box',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'solicitacao_box': {to: 'main'},

        }


     });

   this.route('list_usuario', {
       path: '/list_usuario/',
       template: 'list_usuario',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'list_usuario': {to: 'main'},

        }


     });

      this.route('list_evento', {
       path: '/list_evento/',
       template: 'list_evento',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'list_evento': {to: 'main'},

        }


     });

 this.route('mop', {
       path: '/mop/',
       template: 'mop',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'mop': {to: 'main'},

        }


     });

    this.route('list_orgao', {
       path: '/list_orgao/',
       template: 'list_orgao',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'list_orgao': {to: 'main'},

        }


     });

  this.route('atividade', {
       path: '/atividade/',
       template: 'atividade',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'atividade': {to: 'main'},

        }


     });

this.route('list_ocorrencia', {
       path: '/list_ocorrencia/',
       template: 'list_ocorrencia',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'list_ocorrencia': {to: 'main'},

        }


     });

    this.route('produtividade_orgao', {
       path: '/produtividade_orgao/',
       template: 'produtividade_orgao',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'produtividade_orgao': {to: 'main'},

        }


     });


     this.route('produtividade_consolidada', {
       path: '/produtividade_consolidada/',
       template: 'produtividade_consolidada',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'produtividade_consolidada': {to: 'main'},

        }


     });



   this.route('register_ocorrencia', {
		   path: '/register_ocorrencia/',
       template: 'register_ocorrencia',
		   layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'register_ocorrencia': {to: 'main'},

        }


     });


this.route('register_incidente', {
       path: '/register_incidente/',
       template: 'register_incidente',
       layoutTemplate: 'baseLayout',
       progressTick : false,
       progressSpinner : false,
       progress : false,
       yieldTemplates: {

          'register_incidente': {to: 'main'},

        }


     });

     this.route('user', {
          path: '/user/',
          template: 'user_ls',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'user_ls': {to: 'mainContent'},

            }

     	});




  this.route('evento', {
          path: '/evento/',
          template: 'evento_ls',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'evento_ls': {to: 'mainContent'},

            }

      });




  this.route('new_evento', {

          template: 'evento_cr',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'evento_cr': {to: 'mainContent'},

            }

      });



  this.route('evento_config', {

          template: 'historico_evento_cr',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'historico_evento_cr': {to: 'mainContent'},

            }

      });





this.route('evento_ed', {
          path: '/evento_edit/:_idEvento',
          template: 'evento_ed',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'evento_ed': {to: 'mainContent'},

            },

           data: function() { return  Eventos.findOne(this.params._idEvento);  }


      });



  this.route('consideracao', {
          template: 'consideracao_cr',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'consideracao_cr': {to: 'mainContent'},

            }

     	});
      this.route('new_user', {
          template: 'user_cr',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'user_cr': {to: 'mainContent'},

            }

     	});

      this.route('new_local', {
          template: 'local_cr',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'local_cr': {to: 'mainContent'},

            }

     	});


  this.route('recovery', {
          template: 'recovery',
          layoutTemplate: 'baseLayout'

     	});





     this.route('edit_user', {
          path: '/edit_user/:_idUser',
          template: 'user_ed',
          layoutTemplate: 'baseLayout',
        yieldTemplates: {

              'user_ed': {to: 'mainContent'},

            },


          data: function() {

            return  Meteor.users.findOne(this.params._idUser);  }

     	});


     this.route('orgao', {
          path: '/orgao/',
          template: 'orgao_ls',
          layoutTemplate: 'baseLayout',

        yieldTemplates: {

              'orgao_ls': {to: 'mainContent'},

            },

     	});

     this.route('new_orgao', {

          template: 'orgao_cr',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'orgao_cr': {to: 'mainContent'},

            },

     	});



   this.route('acao_ed', {
          path: '/acao_edit/:_idAcao',
          template: 'acao_edit',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'acao_edit': {to: 'mainContent'},

            },

           data: function() { return  Acoes.findOne(this.params._idAcao);  }


     	});

   this.route('local_ed', {
          path: '/local_edit/:_idLocal',
          template: 'local_edit',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'local_edit': {to: 'mainContent'},

            },

           data: function() { return  Locais.findOne(this.params._idLocal);  }


     	});



   this.route('edit_orgao', {
          path: '/edit_orgao/:_idOrgao',
          template: 'orgao_ed',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'orgao_ed': {to: 'mainContent'},

            },



          data: function() {

       //     Session.set("orgao_selected",Orgaos.findOne(this.params._idOrgao) )
            return Orgaos.findOne(this.params._idOrgao)



          }

     	});



   this.route('edit_telefone', {
          path: '/edit_telefone/:_idTelefone',
          template: 'telefone_ed',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'telefone_ed': {to: 'mainContent'},

            },



          data: function() {

       //     Session.set("orgao_selected",Orgaos.findOne(this.params._idOrgao) )
            return Telefones.findOne(this.params._idTelefone)



          }

      });





     this.route('telefone', {
          path: '/telefone/',
          template: 'telefone_ls',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'telefone_ls': {to: 'mainContent'},

            },


     	});

 this.route('new_telefone', {

          template: 'telefone_cr',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'telefone_cr': {to: 'mainContent'},

            },


      });

   this.route('mgr', {
          path: '/mgr/',
          template: 'manager',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'manager': {to: 'mainContent'},

            },


     	});


    this.route('noticia', {
          path: '/noticia/',
          template: 'noticia_ls',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'noticia_ls': {to: 'mainContent'},

            },
          waitOn: function() {
              Meteor.subscribe("users")
              Meteor.subscribe('noticias');
          }

     	});


     this.route('atividades', {
          path: '/atividades/',
          template: 'noticia_ls_vt',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'noticia_ls_vt': {to: 'mainContent'},

            },
          waitOn: function() {
              Meteor.subscribe("users")
             // Meteor.subscribe('noticias', {sort: {criacaoDt: -1}, limit: 16});
          },
          data: function() {
              return {
                noticias: Noticias.find({}, {sort: {criacaoDt: -1}})
             }
          }
     	});


   this.route('noticia_publicada', {
          path: '/noticia_publicada/',
          template: 'noticia_publicada_ls',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'noticia_publicada_ls': {to: 'mainContent'},

            },

     	});




     this.route('incidentes', {
          path: '/incidentes/',
          template: 'incidente_ls',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'incidente_ls': {to: 'mainContent'},

            },

     	});


   this.route('incid_pnd', {
          path: '/incid_pnd/',
          template: 'incidente_pendente',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'incidente_pendente': {to: 'mainContent'},

            },



     	});




   this.route('incid_db', {
          path: '/incid_db/',
          template: 'incidente_orgao',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'incidente_orgao': {to: 'mainContent'},

            },


     	});


       this.route('new_incidente', {
          template: 'incidente_cr',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'incidente_cr': {to: 'mainContent'},

            },

            data: function() {
              Session.set('acoes_padrao',ProtocoloAcao.find({protocoloId:'0'}).fetch());
             }

     	});





   this.route('acao', {
          path: '/acao/',
          template: 'acao_cr',
          layoutTemplate: 'baseLayout',
           yieldTemplates: {

              'acao_cr': {to: 'mainContent'},

            },


     	});


   this.route('protocolo', {
          path: '/protocolo/',
          template: 'protocolo_ls',
          layoutTemplate: 'baseLayout',
           yieldTemplates: {

              'protocolo_ls': {to: 'mainContent'},

            },


     	});

  this.route('new_protocolo', {
          path: '/new_protocolo/',
          template: 'protocolo_cr',
          layoutTemplate: 'baseLayout',
           yieldTemplates: {

              'protocolo_cr': {to: 'mainContent'},

            },


     	});


    this.route('new_noticia', {
          path: '/new_noticia/',
          template: 'noticia_cr',
          layoutTemplate: 'baseLayout',
           yieldTemplates: {

              'noticia_cr': {to: 'mainContent'},

            },


     	});



  this.route('noticia_vt', {
          path: '/noticia_vt/:_idNoticia',
          template: 'noticia_vt',
          layoutTemplate: 'baseView',

           yieldTemplates: {

              'noticia_vt': {to: 'mainContent'},

            },

        /*  data: function() {
              var obj =Noticias.findOne(this.params._idNoticia)
               Session.set("idNoticiaVT",this.params._idNoticia)
               Session.set("selectedNoticiaVt",obj)
            return {

              noticia:Session.get("selectedNoticiaVt")
            }

          }*/


          data: function() { return  Noticias.findOne(this.params._idNoticia);  }

     	});

   this.route('noticia_exp', {
          path: '/noticia_exp/:_idIncidente',
          template: 'noticia_ex',
          yieldTemplates: {

              'noticia_ex': {to: 'mainContent'},

            },
          layoutTemplate: 'baseView',
           data: function() {
                 var incidente = Incidentes.findOne(this.params._idIncidente)
               //  var noticia
                 if(incidente!==null && typeof incidente != 'undefined'){
                    //  var protocolo =Protocolos.findOne({_id:incidente.protocoloId})
                      var orgao =Orgaos.findOne({_id:incidente.orgaoId})
                      obj = {
                        //titulo:incidente.descricao,
                        titulo:incidente.tituloIncidente,
                        texto: incidente.descricaoIncidente,
                        fonte:orgao.descricao
                      }

                      Session.set("selectedNoticia",obj)
                 }


             return {

               noticia : Session.get("selectedNoticia")

             }
          }


     	});


   this.route('view_n_pb', {
          path: '/view_n_pb/:_idNoticia',
          template: 'noticia_public_view',
          progressTick : false,
          progressSpinner : false,
          progress : false,
          yieldTemplates: {

              'noticia_public_view': {to: 'mainContent'},

            },
          layoutTemplate: 'baseView',

          data: function() { return  Noticias.findOne(this.params._idNoticia);  }

     	});

     this.route('view_n_pv', {
          path: '/view_n_pv/:_idNoticia',
          template: 'noticia_view',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'noticia_view': {to: 'mainContent'},

            },

          data: function() { return  Noticias.findOne(this.params._idNoticia);  }

     	});


     this.route('new_imagem', {

          template: 'imagem_cr',
          layoutTemplate: 'baseLayout',
            yieldTemplates: {

              'imagem_cr': {to: 'mainContent'},

            },

     	});


   this.route('imagem', {
          path: '/imagem/',
          template: 'imagem_ls',
          layoutTemplate: 'baseLayout',

          yieldTemplates: {

              'imagem_ls': {to: 'mainContent'},

            },

   /*   data:function(){
          var user = Meteor.user()
          var dados=null;
          if (Roles.userIsInRole(user, ["Cadastro"])) {
            dados= Imagens.find({orgaoId:user.profile.orgaoId},{sort:{criacaoDt:-1}});
          }else if (Roles.userIsInRole(user, ["Administrativo"])) {
             dados= Imagens.find({},{sort:{criacaoDt:-1}});
          }

         return{
            imagens:dados
         }
      }*/

     	});

   this.route('imagem_view', {
          path: '/imagem_view/:_idImagem',
          template: 'imagem_view',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'imagem_view': {to: 'mainContent'},

            },


           data: function() { return  Imagens.findOne(this.params._idImagem);  }

     	});


    this.route('solicitacao', {
          path: '/solicitacao/',
          template: 'solicitacao_env',
          layoutTemplate: 'baseLayout',
           yieldTemplates: {

              'solicitacao_env': {to: 'mainContent'},

            },

     	});

   this.route('solicitacao_rcb', {
          path: '/solic_rcb/',
          template: 'solicitacao_rcb',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'solicitacao_rcb': {to: 'mainContent'},

            },

     	});



     this.route('solic_new', {
          template: 'solicitacao_cr',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'solicitacao_cr': {to: 'mainContent'},

            },

     	});

      this.route('solc_detail', {
          path: '/solc_detail/:_idSolicitacao',
          template: 'solicitacao_dt',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'solicitacao_dt': {to: 'mainContent'},

            },


          data: function() { return  Solicitacoes.findOne(this.params._idSolicitacao);  }


     	});




   this.route('incidente_rel', {
          path: '/incidente_rel/:_idIncidente',
          template: 'incidente_rel',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'incidente_rel': {to: 'mainContent'},

            },


          data: function() { return  Incidentes.findOne(this.params._idIncidente);  }


     	});
         this.route('inci_detail', {
          path: '/inci_detail/:_idIncidente',
          template: 'incidente_dt',
          layoutTemplate: 'baseLayout',
          yieldTemplates: {

              'incidente_dt': {to: 'mainContent'},

            },


          waitOn: function() {
            Meteor.subscribe("incidentes")
          },

          data: function() { return  Incidentes.findOne(this.params._idIncidente);  }


     	});





 });
