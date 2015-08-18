

Meteor.methods({
  saveProdutividade: function(prodAttributes) {
    var user = Meteor.user()

    if (!user)
      throw new Meteor.Error(401, "Você precisa está logado");

    var prodObject = _.extend(_.pick(prodAttributes, 'turno','plantaoDt',  'eventoId','efetivo', 'local','veiculoFurtadoRoubado','abordagemPessoa','abordagemEmbarcacao','abordagemCarro','abordagemMoto'
      ,'abordagemOnibus','abordagemCaminhao','apreensaoMaconha', 'apreensaoPeMaconha','cocaina', 'pastabase' ,'heroina', 'haxixe','apreensaoCrack','apreensaoDrogaSintetica','pessoasPresasEmFlagrantes'
       ,'pessoasApreendidasEmFlagrantes','pessoasPresasPorMandado','apreensaoArmaDeFogo','apreensaoMunicao','apreensaoExplosivo',
       'apreensaoVeiculo','apreensaoMedicamento','apreensaoEletronico','apreensaoAgrotoxico','apreensaoCigarro','autoPrisaoFlagrante'
        ,'mandadoBuscaEApreensao','mandadoDePrisao','documentosRecolhidos','animaisRecolhidos','madeiraApreendidas','numeroAutuacoes', 'totalDeAcidentes','totalDeFeridos','totalDeMortos'), {
      userId: user._id,
      orgaoId: user.profile.orgaoId,
      criacaoDt: new Date()
    });

    prodObject._id = Produtividades.insert(prodObject);
    console.log(prodObject.plantaoDt)
    return prodObject;
  },





});
