Template.produtividade_consolidada.rendered = function() {

criarTabelaProdutividadeConsolidada();

}




criarTabelaProdutividadeConsolidada = function(){ var data = [
  ["", "Polícia Militar", "Polícia Cívil", "Polícia Federal", "Total"],
  ["Efetivo do Orgão", 10, 11, 12, 13],
  ["Barreiras ou Bloqueio Policiais - Locais (unid)", 20, 11, 14, 13],
  ["Veículos furtados/Veículos roubados recuperados (unid)", 30, 15, 12, 13],
  ["Abordagem de Pessoas (unid)", 30, 15, 12, 13],
  ["Abordagem de Embarcações (unid)", 30, 15, 12, 13],
  ["Abordagem de Carros (unid)", 30, 15, 12, 13],
  ["Abordagem de Motos (unid)", 30, 15, 12, 13],
  ["Abordagem de Ônibus (unid)", 30, 15, 12, 13],
  ["Abordagem de Caminhões (unid)", 30, 15, 12, 13],
  ["Apreensão de Maconha (Kg)", 30, 15, 12, 13],
  ["Apreensão Pé de Maconha (Kg)", 30, 15, 12, 13],
  ["Apreensão de Cocaína (Kg)", 30, 15, 12, 13],
  ["Apreensão de Pasta Base (Kg)", 30, 15, 12, 13],
  ["Apreensão de Heroína (Kg)", 30, 15, 12, 13],
  ["Apreensão de Haxixe (Kg)", 30, 15, 12, 13],
  ["Apreensão de Crack (Kg)", 30, 15, 12, 13],
  ["Apreensão de Drogas Sintéticas (Kg)", 30, 15, 12, 13],
  ["Pessoas Presas em Flagrantes (Maiores)", 30, 15, 12, 13],
  ["Pessoas Apreendidas em Flagrantes (Menores)", 30, 15, 12, 13],
  ["Pessoas Presas Por Mandado (Maiores)", 30, 15, 12, 13],
  ["Pessoas Presas Por Mandado (Maiores)", 30, 15, 12, 13],
  ["Apreensão de Armas de Fogo (Unid)", 30, 15, 12, 13],
  ["Apreensão de Munições (Unid)", 30, 15, 12, 13],
  ["Apreensão de Explosivos (Kg)", 30, 15, 12, 13],
  ["Apreensão de Veículos (Unid)", 30, 15, 12, 13],
  ["Apreensão de Medicamentos (caixa)", 30, 15, 12, 13],
  ["Apreensão de Eletrônicos (unid)", 30, 15, 12, 13],
  ["Apreensão de Agrotóxicos (Kg)", 30, 15, 12, 13],
  ["Apreensão de cigarros (maço)", 30, 15, 12, 13],
  ["Auto Prisão Flagrante (Unidade)", 30, 15, 12, 13],
  ["Mandados Busca e Apreensão (Unidade)", 30, 15, 12, 13],
  ["Mandados de Prisão (Unidade)", 30, 15, 12, 13],
  ["Documentos recolhidos", 30, 15, 12, 13],
  ["Meio Ambiente: Animais recolhidos", 30, 15, 12, 13],
  ["Meio Ambiente: Madeira apreendida", 30, 15, 12, 13],
  ["Número de autuações", 30, 15, 12, 13],
  ["Total de Acidentes", 30, 15, 12, 13],
  ["Total de vítimas: Feridos", 30, 15, 12, 13],
  ["Total de vítimas: Mortos", 30, 15, 12, 13],





];

var container = document.getElementById('tabelaProdutividadeConsolidada');
var formatFistColumn,formatFistCell;
formatFistColumn = function(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.style.fontWeight = 'bold';

};

formatFistCell = function(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.style.fontWeight = 'bold';

};

var dynamicColumns = [];
 var col1 = new Object();
     col1.data = 0;
     col1.renderer=formatFistColumn;
     col1.width = 400;
     col1.readOnly = true;
     dynamicColumns.push(col1);

for (var i = 1; i < 20; i++) {
    var col = new Object();
    col.data = i;
    col.width = 200;
    dynamicColumns.push(col);
}



var hot = new Handsontable(container, {

  data: data,
  minSpareRows: 1,
  rowHeaders: true,
  colHeaders: true,
  contextMenu: false,
  fixedRowsTop: 1,
  fixedColumnsLeft: 1,
  minCols:20,
  minRows:40,
  maxRows:40,
   columns:dynamicColumns,

  cells: function (row, col, prop) {
    if (row === 0) {
      this.renderer = formatFistCell;

    }
     this.readOnly = true;
  }


});






}
