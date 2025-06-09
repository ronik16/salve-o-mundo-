let plantas = [];
let lixo = [];

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
}

function draw() {
  background(200, 255, 200);
  fill(0);
  text("Clique para plantar. Evite o lixo!", width / 2, 20);

  // Desenha plantas
  for (let p of plantas) {
    fill(34, 139, 34);
    ellipse(p.x, p.y, 20, 40);
  }

  // Desenha lixo
  for (let l of lixo) {
    fill(120);
    rect(l.x, l.y, 15, 15);
  }

  // Verifica colisões (ex: planta sobre lixo)
  for (let p of plantas) {
    for (let l of lixo) {
      if (dist(p.x, p.y, l.x, l.y) < 20) {
        fill(255, 0, 0);
        text("Evite plantar sobre lixo!", width / 2, height - 20);
      }
    }
  }
}

function mousePressed() {
  if (random(1) < 0.2) {
    // Às vezes aparece lixo
    lixo.push({ x: mouseX, y: mouseY });
  } else {
    // Planta
    plantas.push({ x: mouseX, y: mouseY });
  }
}
