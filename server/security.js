Files.allow({
  download: function () {
    return true;
  },
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },

   remove: function () {
    return true;
  },
  fetch: null
});
Noticias.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return true;
    },
  remove: function () {
    return false;
  }


});

IncidentesOrgaos.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return false;
    },
  remove: function () {
    return false;
  }
});

Orgaos.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return true;
    },
  remove: function () {
    return false;
  }
});


UsuarioEventos.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return true;
    },
  remove: function () {
    return true;
  }
});


Telefones.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return true;
    },
  remove: function () {
    return false;
  }
});

Eventos.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return true;
    },
  remove: function () {
    return false;
  }
});

Locais.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return true;
    },
  remove: function () {
    return false;
  }
});

AcoesOrgao.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return false;
    },
  remove: function () {
    return false;
  }
});

Protocolos.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return true;
    },
  remove: function () {
    return false;
  }
});





ProtocoloAcao.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return true;
    },
  remove: function () {
    return true;
  }
});
Acoes.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return true;
    },
  remove: function () {
    return true;
  }
});

Consideracoes.allow({
  insert: function () {
    return true;
  },
  update: function () {
      return false;
    },
  remove: function () {
    return false;
  }
});
