Meteor.methods({
    create_user: function(attributes) {
          var grupo = Grupos.findOne(attributes.profile.grupoId);
          var roles = [grupo.descricao];
          attributes.password = '123456';
          attributes.profile.status = true;
   //  if (Meteor.isServer){
          var user=Accounts.createUser(attributes);
          console.log("id do usuario "+ user);
          Roles.addUsersToRoles(user,roles);


          return user;
      //  }
    },

  update_user:function (currentUserId,userProperties){
     var user = Meteor.users.findOne(currentUserId);
     userProperties.profile.image = user.profile.image;

     Meteor.users.update(currentUserId, {$set:{"emails":[{address:userProperties.email}]}})
     Meteor.users.update(currentUserId, {$set: userProperties})

     if(user.profile.grupoId!== userProperties.profile.grupoId){
        var grupo = Grupos.findOne(userProperties.profile.grupoId);
       var roles = [grupo.descricao];
       Roles.setUserRoles(user,roles);
     }
 },
  desativar_usuario:function (currentUserId){
           Meteor.users.update(currentUserId, {$set: {"profile.status": false}})

            var user = Meteor.users.findOne(currentUserId);
             Accounts.setPassword(user,'d46232e93bd7cf32466a48f539369223bb040a04');

  },


   ativar_usuario:function(currentUserId){

           Meteor.users.update(currentUserId, {$set: {"profile.status": true}})

             var user = Meteor.users.findOne(currentUserId);
             Accounts.setPassword(user,'123456');


     },
     trocar_senha:function(obj){


                 var user = Meteor.userId();
                 //console.log(user)
                 Accounts.setPassword(user,obj.password);



     },
     resetar_senha:function(obj){

                     var user = Meteor.users.findOne(obj);

                      Accounts.setPassword(user,'123456');



                   },


reset_paswd:function(currentUserId,obj){


        Meteor.bindEnvironment(function(obj){
                 Accounts.setPassword(user,  obj);
          },
          function (err) {
              console.log('failed to bind env: ', err);
        })


     },
    desativar_todos_usuarios:function(obj){

       Meteor.users.update({ _id: { $nin: [ 'Nm89y34kDocHSe4fo'] } },{ $set: {
        "services.password": 'd46232e93bd7cf32466a48f539369223bb040a04',
       "profile.status": false }},{multi:true})
    }


});
