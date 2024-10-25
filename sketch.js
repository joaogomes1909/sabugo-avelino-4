function setup() {
  createCanvas(400, 400);//tamanho
}

function draw() {//desenhar
  background("white");//fundo
  fill("black");//cor
  textSize(64);//tamanho da letra
  textAlign(CENTER, CENTER)//
  
  let maximo = width;
  let minimo = 0;
  let palavra = "Caminhante";//palavra
  let quantidade = map(mouseX, 0, width, 1, palavra.length);//velocidade de apareimento
  let parcial = palavra.substring(0,quantidade);
  text(parcial,200,200);
  
//  if(mouseX < 50){
//    let palavra = "C";
//    text(palavra, 200, 200);
//  } else {
//    let palavra = "Caminhante";
//    text(palavra, 200, 200);
//  }
}
