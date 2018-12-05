let c, planets, count = 0;

let sun = new Planet(300, 300, 20, null, null, null, 'orange')
let earth = new Planet(200, 300, 5, sun, 1.1, 110, 'blue')
let moon = new Planet(100, 200, 3, earth, 4, 20, 'grey')
let mercury = new Planet(200, 300, 5, sun, 0.6, 80, 'brown')
let venus = new Planet(200, 300, 5, sun, 0.8, 100, 'green')
let mars = new Planet(200, 300, 5, sun, 1.3, 115, 'blue')
let jupiter = new Planet(200, 300, 10, sun, 1.5, 120, 'brown')
let jmoon1 = new Planet(100, 200, 3, jupiter, 1, 25, 'grey')
let jmoon2 = new Planet(100, 200, 3, jupiter, 1.5, 20, 'grey')
let saturn = new Planet(200, 300, 10, sun, 2, 140, 'purple')
let smoon1 = new Planet(100, 200, 3, saturn, 1.3, 20, 'grey')
let smoon2 = new Planet(100, 200, 3, saturn, 1.4, 22, 'grey')
let smoon3 = new Planet(100, 200, 3, saturn, 1.5, 24, 'grey')
let smoon4 = new Planet(100, 200, 3, saturn, 1.6, 26, 'grey')
let smoon5 = new Planet(100, 200, 3, saturn, 1.7, 28, 'grey')
let smoon6 = new Planet(100, 200, 3, saturn, 1.8, 30, 'grey')
let smoon7 = new Planet(100, 200, 3, saturn, 1.9, 32, 'grey')
let uranus = new Planet(200, 300, 5, sun, 2, 280, 'blue')
let neptune = new Planet(200, 300, 5, sun, 2, 280, 'blue')
let pluto = new Planet(200, 300, 5, sun, 2, 280, 'blue')

planets = [
    sun,
    earth,
    moon,
    mercury,
    venus,
    mars,
    jupiter,
    jmoon1,
    jmoon2,
    saturn,
    smoon1,
    smoon2,
    smoon3,
    smoon4,
    smoon5,
    smoon6,
    smoon7,
    uranus,
    neptune,
    pluto
]

function init (){
    c = document.createElement('canvas');
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    let container = document.getElementById('canvas');
    container.appendChild(c);

    loop();
}

function loop (){
    setTimeout(() => {
        count++
        draw();
        update();
        loop();
    }, 25);
}

function update (){
    planets.forEach((planet) => {
        planet.update();
    })
}

function draw(){
    let ctx = c.getContext('2d');
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    planets.forEach((planet) => {
        planet.draw(ctx);
    })
}

document.onload = init();



