//video no youtube:
var tela = 1;

//tela de menu principal
var largura = 170;
var altura = 45;
var xMenu1 = 135;
var xMenu2 = 140;
var xMenu3 = 135;
var yMenu1 = 105;
var yMenu2 = 155;
var yMenu3 = 205;

//tela de menu de niveis
var nivelx = 90;
var nively = 40;
var xnivel1 = 21;
var xnivel2 = 125;
var xnivel3 = 225;
var xnivel4 = 325;
var ynivel1 = 80;
var ynivel2 = 130;
var ynivel3 = 180;
var ynivel4 = 230;


//jogo 
var cor = 255;
var x = 350;
var y = 50;
var a = 350;
var b = 120;
var c = 350;
var d = 190;
var e = 350;
var f = 260;
var rObstaculo =45;
var pontos2 = 0
var pontos = 500
var limitedepontos2 = 1
var limitedepontos=0



let img
let img2
let img3
let img4
let img5
let img7
let img8



function preload() {
    img = loadImage('fundoabcd.jpg');
    img2 = loadImage('fundo1.jpg');
    img3 = loadImage('abs.png');
    img4 = loadImage('abs2.jpg');
    img5 = loadImage('abc.jpg');
    img6 = loadImage('educador.jpg');
    img7 = loadImage('pp.jpg');
    img8 = loadImage('mm.jpg');
    img9 = loadImage('emoji.jpg');
}



function setup() {
    createCanvas(450, 350);
}

function draw() {
     if (limitedepontos >= pontos){
     tela=28
     }

    if (pontos2 >= limitedepontos2) {
        pontos2 = 0
        x = 350;
        y = 50;
        a = 350;
        b = 120;
        c = 350;
        d = 190;
        e = 350;
        f = 260;

    }

    background(220);
    // Tela do menu
    if (tela == 1) {
        background(img);
        //Menu com duas Opções
        //iniciar do jogo
        textAlign(LEFT);
        textSize(26);
        textStyle(BOLDITALIC);

        if (mouseX > xMenu1 && mouseX < xMenu1 + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) {
            stroke(1);
            fill('#008080');
            rect(xMenu1, yMenu1, largura, altura, 15);
            if (mouseIsPressed) {
                tela = 4
            }
        }
        fill(300);
        noStroke();
        text("Iniciar", 180, 140)

        //Menu de niveis

        if (mouseX > xMenu2 && mouseX < xMenu2 + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
            stroke(1);
            fill('#008080');
            rect(xMenu2, yMenu2, largura, altura, 15)
            if (mouseIsPressed) {
                tela = 2
            }
        }
        fill(300);
        noStroke(1);
        text("   Niveis", 156, 190);

        //informaçoes

        if (mouseX > xMenu3 && mouseX < xMenu3 + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura) {
            stroke(1);
            fill('#008080');
            rect(xMenu3, yMenu3, largura, altura, 15)
            if (mouseIsPressed) {
                tela = 5
            }
        }
        fill(300);
        noStroke();
        text("   Informações", 120, 240)

        //creditos
        textSize(14);
        if (mouseX > 360 && mouseX < 360 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(200);
            fill('#008080');
            rect(360, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 6
            }
        }

        fill(300);
        noStroke();
        text("Creditos", 368, 323);

    }
    // menu de nivel
    else if (tela == 2) {
        background(img2)
        // menu de nivel 1
        textAlign(LEFT);
        textSize(14);

        //menu
        if (mouseX > xnivel1 && mouseX < xnivel1 + nivelx && mouseY > ynivel1 && mouseY < ynivel1 + nively) {
            stroke(20)
            fill(300)
            rect(xnivel1, ynivel1, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 1
            }
        }
        fill(0)
        noStroke()
        text(" Menu", 48, 105)

        //nivel 1
        if (mouseX > xnivel1 && mouseX < xnivel1 + nivelx && mouseY > ynivel2 && mouseY < ynivel2 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel1, ynivel2, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 4
            }
        }
        fill(0)
        noStroke()
        text("Nivel 1", 48, 155)
        //nivel 2
        if (mouseX > xnivel1 && mouseX < xnivel1 + nivelx && mouseY > ynivel3 && mouseY < ynivel3 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel1, ynivel3, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 7
            }
        }
        fill(0)
        noStroke()
        text("Nivel 2", 48, 205)

        //nivel 3
        if (mouseX > xnivel1 && mouseX < xnivel1 + nivelx && mouseY > ynivel4 && mouseY < ynivel4 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel1, ynivel4, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 8
            }
        }
        fill(0)
        noStroke()
        text("Nivel 3", 48, 255)

        //nivel 4
        if (mouseX > xnivel2 && mouseX < xnivel2 + nivelx && mouseY > ynivel1 && mouseY < ynivel1 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel2, ynivel1, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 9
            }
        }
        fill(0)
        noStroke()
        text("Nivel 4", 152, 105)

        //nivel 5
        if (mouseX > xnivel2 && mouseX < xnivel2 + nivelx && mouseY > 130 && mouseY < 110 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel2, ynivel2, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 10
            }
        }
        fill(0)
        noStroke()
        text("Nivel 5", 152, 155)

        //nivel 6
        if (mouseX > xnivel2 && mouseX < xnivel2 + nivelx && mouseY > 197 && mouseY < ynivel3 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel2, ynivel3, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 11
            }
        }
        fill(0)
        noStroke()
        text("Nivel 6", 152, 205)

        //nivel 7
        if (mouseX > xnivel2 && mouseX < xnivel2 + nivelx && mouseY > ynivel4 && mouseY < ynivel4 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel2, ynivel4, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 12
            }
        }
        fill(0)
        noStroke()
        text("Nivel 7", 152, 255)

        //nivel 8
        if (mouseX > xnivel3 && mouseX < xnivel3 + nivelx && mouseY > ynivel1 && mouseY < ynivel1 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel3, ynivel1, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 13
            }
        }
        fill(0)
        noStroke()
        text("Nivel 8", 252, 105)

        //nivel 9
        if (mouseX > xnivel3 && mouseX < xnivel3 + nivelx && mouseY > ynivel2 && mouseY < 110 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel3, ynivel2, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 14
            }
        }
        fill(0)
        noStroke()
        text("Nivel 9", 252, 155)

        //nivel 10
        if (mouseX > xnivel3 && mouseX < xnivel3 + nivelx && mouseY > 197 && mouseY < ynivel3 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel3, ynivel3, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 15
            }
        }
        fill(0)
        noStroke()
        text("Nivel 10", 248, 205)

        //nivel 11
        if (mouseX > xnivel3 && mouseX < xnivel3 + nivelx && mouseY > ynivel4 && mouseY < ynivel4 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel3, ynivel4, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 16
            }
        }
        fill(0)
        noStroke()
        text("Nivel 11", 248, 255)

        //nivel 12
        if (mouseX > xnivel4 && mouseX < xnivel4 + nivelx && mouseY > ynivel1 && mouseY < ynivel1 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel4, ynivel1, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 17
            }
        }
        fill(0)
        noStroke()
        text("Nivel 12", 348, 105)

        //nivel 13
        if (mouseX > xnivel4 && mouseX < xnivel4 + nivelx && mouseY > ynivel2 && mouseY < ynivel2 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel4, ynivel2, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 18
            }
        }
        fill(0)
        noStroke()
        text("Nivel 13", 348, 155)

        //nivel 14
        if (mouseX > xnivel4 && mouseX < xnivel4 + nivelx && mouseY > ynivel3 && mouseY < ynivel3 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel4, ynivel3, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 19
            }
        }
        fill(0)
        noStroke()
        text("Nivel 14", 348, 205)

        //Menu de nivei2
        if (mouseX > xnivel4 && mouseX < xnivel4 + nivelx && mouseY > ynivel4 && mouseY < ynivel4 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel4, ynivel4, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 3
            }
        }
        image(img3, 355, 235, 30, 30)

    }
    //menu de nivel 2
    else if (tela == 3) {
        background(img2)
        textAlign(LEFT);
        textSize(14);

        //seta
        if (mouseX > xnivel1 && mouseX < xnivel1 + nivelx && mouseY > ynivel1 && mouseY < ynivel1 + nively) {
            stroke(20)
            fill(300)
            rect(xnivel1, ynivel1, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 2
            }
        }
        image(img4, 48, 85, 40, 30);
        //nivel 15
        if (mouseX > xnivel1 && mouseX < xnivel1 + nivelx && mouseY > ynivel2 && mouseY < ynivel2 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel1, ynivel2, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 20
            }
        }
        fill(0)
        noStroke()
        text("Nivel 15", 48, 155)
        //nivel 16
        if (mouseX > xnivel1 && mouseX < xnivel1 + nivelx && mouseY > ynivel3 && mouseY < ynivel3 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel1, ynivel3, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 21
            }
        }
        fill(0)
        noStroke()
        text("Nivel 16", 48, 205)

        //nivel 17
        if (mouseX > xnivel1 && mouseX < xnivel1 + nivelx && mouseY > ynivel4 && mouseY < ynivel4 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel1, ynivel4, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 22
            }
        }
        fill(0)
        noStroke()
        text("Nivel 17", 48, 255)

        //nivel 18
        if (mouseX > xnivel2 && mouseX < xnivel2 + nivelx && mouseY > ynivel1 && mouseY < ynivel1 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel2, ynivel1, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 23
            }
        }
        fill(0)
        noStroke()
        text("Nivel 18", 152, 105)

        //nivel 19
        if (mouseX > xnivel2 && mouseX < xnivel2 + nivelx && mouseY > ynivel2 && mouseY < ynivel2 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel2, ynivel2, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 24
            }
        }
        fill(0)
        noStroke()
        text("Nivel 19", 152, 155)

        //nivel 20
        if (mouseX > xnivel2 && mouseX < xnivel2 + nivelx && mouseY > ynivel3 && mouseY < ynivel3 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel2, ynivel3, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 25
            }
        }
        fill(0)
        noStroke()
        text("Nivel 20", 152, 205)

        //nivel 21
        if (mouseX > xnivel2 && mouseX < xnivel2 + nivelx && mouseY > ynivel4 && mouseY < ynivel4 + nively) {
            stroke(0)
            fill(300)
            rect(xnivel2, ynivel4, nivelx, nively, 15)
            if (mouseIsPressed) {
                tela = 27
            }
        }
        fill(0)
        noStroke()
        text("Nivel 21", 152, 255)

    }


    //nivel 1
    else if (tela == 4) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            tela = 7
            pontos2++

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('189+63', 28, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {

           


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('189+63', 28, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

         


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('189+63', 28, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {

            

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('189+63', 28, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('250', x - 20, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('252', a - 20, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('255', c - 20, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('251', e - 20, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)
      
       


    }
    //nivel 2
    else if (tela == 7) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('21+92', 40, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {

            tela = 8
            pontos2++


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('21+92', 40, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('21+92', 40, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('21+92', 40, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('113', x - 20, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('110', a - 20, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('114', c - 20, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('111', e - 20, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 3
    else if (tela == 8) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 9

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('82-65', 40, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('82-65', 40, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('82-65', 40, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('82-65', 40, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('19', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('17', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('18', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('16', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 4
    else if (tela == 9) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('69-55', 40, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('69-55', 40, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('69-55', 40, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 10


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('69-55', 40, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('16', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('17', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('18', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('14', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 5
    else if (tela == 10) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('253-91', 35, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('253-91', 35, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 11


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('253-91', 35, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('253-91', 35, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('166', x - 20, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('163', a - 20, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('162', c - 20, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('170', e - 20, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 6
    else if (tela == 11) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('99+61', 40, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('99+61', 40, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 12


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('99+61', 40, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('99+61', 40, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('164', x - 22, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('165', a - 22, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('160', c - 22, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('162', e - 22, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 7
    else if (tela == 12) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('44+33', 40, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 13

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('44+33', 40, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('44+33', 40, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('44+33', 40, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('77', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('75', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('79', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('74', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 8
    else if (tela == 13) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('2x9', 50, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('2x9', 50, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 14


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('2x9', 50, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('2x9', 50, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('19', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('17', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('18', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('16', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 9
    else if (tela == 14) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('9x7', 50, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('9x7', 50, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 15


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('9x7', 50, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('9x7', 50, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('62', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('61', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('63', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('64', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 10
    else if (tela == 15) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 16

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('30/5', 45, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('30/5', 45, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('30/5', 45, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('30/5', 45, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('8', x - 8, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('6', a - 8, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('7', c - 8, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('5', e - 8, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 11
    else if (tela == 16) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('60/3', 45, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('60/3', 45, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('60/3', 45, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 17

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('60/3', 45, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('24', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('21', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('22', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('20', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        
    }
    //nivel 12
    else if (tela == 17) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

           

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('90/30', 40, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 18


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('90/30', 40, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('90/30', 40, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('90/30', 40, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('3', x - 8, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('4', a - 8, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('2', c - 8, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('5', e - 8, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        ;
    }
    //nivel 13
    else if (tela == 18) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 19

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('55/5', 45, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('55/5', 45, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('55/5', 45, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('55/5', 45, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('12', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('11', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('13', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('14', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        
    }
    //nivel 13
    else if (tela == 19) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('62x6', 40, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('62x6', 40, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('62x6', 40, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 20


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('62x6', 40, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('375', x - 22, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('373', a - 22, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('374', c - 22, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('372', e - 22, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        
    }
    //nivel 14
    else if (tela == 20) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('56x2', 40, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 21


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('56x2', 40, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('56x2', 40, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('56x2', 40, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('112', x - 22, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('113', a - 22, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('114', c - 22, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('111', e - 22, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        
    }
    //nivel 15
    else if (tela == 21) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(2x5)/2', 35, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(2x5)/2', 35, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 22


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(2x5)/2', 35, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {

            


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(2x5)/2', 35, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('7', x - 5, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('6', a - 5, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('5', c - 5, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('4', e - 5, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        
    }
    //nivel 16
    else if (tela == 22) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 23

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(8/2)-4', 45, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(8/2)-4', 35, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(8/2)-4', 35, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(8/2)-4', 35, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('1', x - 5, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('0', a - 5, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('2', c - 5, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('3', e - 5, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

    }
    //nivel 17
    else if (tela == 23) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(5x6)+3', 30, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(5x6)+3', 30, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 24


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(5x6)+3', 30, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 2 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(5x6)+3', 30, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('30', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('32', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('33', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('34', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)


    }
    //nivel 18
    else if (tela == 24) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(9x8)-50', 28, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(9x8)-50', 28, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(9x8)-50', 28, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 25


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(9x8)-50', 28, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('25', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('24', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('26', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('22', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        
    }
    //nivel 19
    else if (tela == 25) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 26

        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(20x5)/4', 28, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(20x5)/4', 28, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(20x5)/4', 28, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(20x5)/4', 28, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('24', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('25', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('30', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('28', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        
    }
    //nivel 20
    else if (tela == 26) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(25x6)/5', 28, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(25x6)/5', 28, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 27


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(25x6)/5', 28, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(25x6)/5', 28, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('25', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('35', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('30', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('34', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        
    }
    //nivel 21
    else if (tela == 27) {


        background(img5)
        textSize(25);

        //expressao

        if (dist(a, b, 70, 150) < rObstaculo + 20) {



        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(80x6)/5', 28, 155)
        }
        if (dist(x, y, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(80x6)/5', 28, 155)
        } if (dist(c, d, 70, 150) < rObstaculo + 20) {

            pontos2++
            tela = 28


        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(80x6)/5', 28, 155)
        } if (dist(e, f, 70, 150) < rObstaculo + 20) {




        } else {
            fill('#5f9ea0')
            ellipse(70, 150, 3 * rObstaculo, 2 * rObstaculo)

            fill(0)
            text('(80x6)/5', 28, 155)

        }
        //bloco 1
        if (mouseIsPressed && dist(x, y, mouseX, mouseY) < 40) {
            x = mouseX
            y = mouseY
        }
        fill('#f0f8ff')
        ellipse(x, y, 45, 45)
        stroke(0)

        fill(0)
        text('97', x - 13, y + 6)

        if (mouseIsPressed && dist(a, b, mouseX, mouseY) < 40) {
            a = mouseX
            b = mouseY
        }

        fill('#f0f8ff')
        ellipse(a, b, 45, 45)
        stroke(0)

        fill(0)
        text('92', a - 13, b + 6)

        if (mouseIsPressed && dist(c, d, mouseX, mouseY) < 40) {
            c = mouseX
            d = mouseY
        }

        fill('#f0f8ff')
        ellipse(c, d, 45, 45)
        stroke(0)

        fill(0)
        text('96', c - 13, d + 6)


        if (mouseIsPressed && dist(e, f, mouseX, mouseY) < 40) {
            e = mouseX
            f = mouseY
        }
        fill('#f0f8ff')
        ellipse(e, f, 45, 45)
        stroke(0)

        fill(0)
        text('91', e - 13, f + 6)


        textSize(15);
        if (mouseX > 300 && mouseX < 300 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(30);
            fill(0);
            rect(300, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }

        }
        textSize(18)
        fill(200)
        text('Menu', 312, 310, 20, 20)

        
    }


    //info sobre o jogo
    else if (tela == 5) {
        background(img8);
        fill(0);
        textSize(15);
        noStroke();

        text("Ano: 6º ano do ensino fundamental." + '\n' + '' + '\n' + "Materia:  (EF06MA03); (EF06MA15). " + '\n' + '\n' + 'jogo tem o intuito de trabalhar as quatro operações básicas. Na tela do jogo aparacera uma elipse maior com uma expressão a ser resolvida pelo aluno, onde ele terá que arrastar a elipse menor que contem a resposta ate ela, se acertar pasara para a proxima fase, ate que complete o jogo.', 20, 20, 360, 260)

        textSize(15);
        if (mouseX > 295 && mouseX < 295 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(200);
            fill(300);
            rect(295, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }
        }

        fill(0);
        noStroke();
        text("VOLTAR", 300, 323);

    }

    //creditos
    else if (tela == 6) {
        background(0);
        //desenvolvedor
        fill(240);
        textSize(13);
        noStroke();
        textAlign(CENTER);
        text("Desenvolvedor", -10, 20, 260, 260)
        image(img7, 40, 50, 150, 150)
        fill(240);
        textSize(12);
        noStroke();
        textAlign(CENTER);
        text("Nome:joão Vitor G. Fernades", -10, 210, 260, 260)

        //Educador
        fill(240);
        textSize(13);
        noStroke();
        textAlign(CENTER);
        text("Licenciado", 190, 20, 260, 260)
        image(img6, 240, 50, 150, 150)
        textSize(12);
        noStroke();
        textAlign(CENTER);
        text("Nome:Maria Janikeza A. G. Dias", 190, 210, 260, 260)

        textSize(15);
        if (mouseX > 48 && mouseX < 48 + 70 && mouseY > 300 && mouseY < 300 + 35) {
            stroke(200);
            fill(300);
            rect(48, 300, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 1
            }
        }

        fill(150);
        noStroke();
        text("VOLTAR", 80, 323);

    }

    //Game over
    else if (tela == 28) {
        background(img5);

        fill(300)
        rect(25, 25, 400, 300, 10);


        fill(0);
        textSize(30);
        noStroke();

        text('Você finalizou o jogo!', 85, 40, 360, 260)

        textSize(15);
        if (mouseX > 185 && mouseX < 185 + 70 && mouseY > 180 && mouseY < 180 + 35) {
            stroke(200);
            fill(200);
            rect(185, 180, 70, 35, 15);
            if (mouseIsPressed) {
                tela = 2
            }
        }

        fill(0);
        noStroke();
        text("Reiniciar", 192, 199);

        image(img9, 170, 80, 100, 100)
    }
}