let infoAgricultura, infoConsumo;
let inputSugestao, botaoEnviar;
let sugestoes = [];

function setup() {
  noCanvas();

  let titulo = createElement('h1', 'Desafios da agricultura e da urbanização');
  titulo.style('font-family', 'Arial');
  titulo.style('color', '#2E8B57'); // verde escuro
  titulo.style('margin-bottom', '20px');

  infoAgricultura = createElement('h2', 'Características da Agricultura');
  infoAgricultura.style('font-family', 'Georgia');
  infoAgricultura.style('color', '#4682B4'); // azul aço

  createP('A agricultura é um fator essencial para a vida humana, pois através dela surge os alimentos para nosso consumo. As principais características da agricultura são:Atividade econômica, Impacto ambiental, Variação de técnicas e tecnologias, Importância social e econômica,');

  infoConsumo = createElement('h2', 'Características Urbanas');
  infoConsumo.style('font-family', 'Georgia');
  infoConsumo.style('color', '#4682B4');

  createP('As características urbanas são totalmente diferentes das rurais, contendo: alta densidade populacional, infraestrutura concentrada, desafios de urbanização, impactos ambientais, diversidade cultural e social, e intervenção humana.');

  let entrevistasTitulo = createElement('h2', 'Entrevistas');
  entrevistasTitulo.style('font-family', 'Georgia');
  entrevistasTitulo.style('color', '#4682B4');

  createP('Entrevista com Agricultor:');
  createDiv('<iframe width="400" height="240" src="https://www.youtube.com/embed/lPi71wP9MrM" frameborder="0" allowfullscreen></iframe>');

  createP('Entrevista com Morador Urbano:');
  createDiv('<iframe width="400" height="240" src="https://www.youtube.com/embed/XzaNB78Trho" frameborder="0" allowfullscreen></iframe>');

  let sugestaoTitulo = createElement('h2', 'Deixe sua sugestão para conter pragas em lavouras:');
  sugestaoTitulo.style('font-family', 'Georgia');
  sugestaoTitulo.style('color', '#4682B4');

  inputSugestao = createInput();
  inputSugestao.attribute('placeholder', 'Escreva aqui...');
  botaoEnviar = createButton('Enviar');
  botaoEnviar.mousePressed(enviarSugestao);

  let sugestoesTitulo = createElement('h3', 'Sugestões da comunidade:');
  sugestoesTitulo.style('font-family', 'Verdana');
  sugestoesTitulo.style('color', '#6A5ACD'); // azul violeta
}

function enviarSugestao() {
  const texto = inputSugestao.value();
  if (texto.trim() !== '') {
    sugestoes.push(texto);
    createP(`• ${texto}`);
    inputSugestao.value('');
  }
}