/*


if (Orgaos.find().count() === 0) {

    Orgaos.insert({
      descricao: 'Policia Civil-BA',
      sigla : 'PC',


    });

    Orgaos.insert({
      descricao: 'Policia Milita-BA',
      sigla : 'PM',


    });

    Orgaos.insert({
      descricao: 'Guarda Municipal -SSA',
      sigla : 'GM',


    });




}


if (Grupos.find().count() === 0) {

    Grupos.insert({
      descricao: 'Consulta',
      descricaoLabel: 'Consulta'
    });

  Grupos.insert({
    descricao: 'Cadastro',
    descricaoLabel: 'Cadastro'

  });

  Grupos.insert({
    descricao: 'Administrativo',
    descricaoLabel: 'Administração'


  });

   Grupos.insert({
    descricao: 'Videomonitoramento',
    descricaoLabel: 'Videomonitoramento'

  });


}


if (Eventos.find().count() === 0) {

    Eventos.insert({
      descricao: 'Lavagem do Bonfim - 2015',


    });

   Eventos.insert({
       descricao: 'Carnaval - 2015',


   });



}
/*

if (Locais.find().count() === 0) {

  Locais.insert({

      descricao: 'ROTA URBANA'

    });

   Locais.insert({

       descricao: 'ROTA URBANA - RODOVIA FEDERAL'

   });

  Locais.insert({

       descricao: 'ROTA URBANA - RODOVIA FEDERAL'

   });

  Locais.insert({

       descricao: 'ROTA NÃO URBANA - RODOVIA FEDERAL'

   });


  Locais.insert({

       descricao: 'ESTAÇÃO AQUAVIÁRIA - BARCAS, BALSA, FERRY BOAT'

   });


  Locais.insert({

       descricao: 'ESTAÇÃO FERROVIÁRIA'

   });


  Locais.insert({

       descricao: 'ESTAÇÃO METROVIÁRIA - METRÔ SUBTERRÂNEO'

   });


   Locais.insert({

       descricao: 'ESTAÇÃO METROVIÁRIA - METRÔ SUPERFÍCIE'

   });



}
*/

  if (Meteor.users.find().count() === 0) {
   var properties = {
             username: 'admin',
             email:'admin@admin.com',
             password :'cicc2015',
             roles:['Administrativo'],
             profile :{  nome:'Admin',

                       telefone: '123456',
                       orgaoId: Orgaos.findOne()._id,
                       grupoId: Grupos.findOne()._id,
                       image: null
                    }
    }

 var id=   Accounts.createUser(properties);
           console.log("id do usuario "+ id);
    var roles = ['Administrativo']
    Roles.addUsersToRoles(id,roles);


}



