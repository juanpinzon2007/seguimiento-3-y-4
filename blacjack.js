let manos = [[], []];
let turno = 0;
let plantados = [false, false];

function inicializarJuego() {
    manos = [[], []];
    turno = 0;
    plantados = [false, false];
    actualizarInterfaz();
}

function obtenerCarta() {
    return Math.floor(Math.random() * 10) + 2;
}

function jugar() {
    if (!plantados[turno]) {
        manos[turno].push(obtenerCarta());
        if (sumarPuntos(turno) > 21) {
            plantados[turno] = true;
        }
        cambiarTurno();
        actualizarInterfaz();
    }
}

function sumarPuntos(jugador) {
    return manos[jugador].reduce((a, b) => a + b, 0);
}

function plantarse() {
    plantados[turno] = true;
    cambiarTurno();
    if (plantados[0] && plantados[1]) {
        determinarGanador();
    }
    actualizarInterfaz();
}

function cambiarTurno() {
    turno = (turno + 1) % 2;
}

function determinarGanador() {
    let puntos = [sumarPuntos(0), sumarPuntos(1)];
    let mensaje = "";
    if (puntos[0] > 21 && puntos[1] > 21) mensaje = "Ambos pierden";
    else if (puntos[0] > 21) mensaje = "Jugador 2 gana";
    else if (puntos[1] > 21) mensaje = "Jugador 1 gana";
    else if (puntos[0] > puntos[1]) mensaje = "Jugador 1 gana";
    else if (puntos[1] > puntos[0]) mensaje = "Jugador 2 gana";
    else mensaje = "Empate";
    
    console.log(mensaje);
}

function actualizarInterfaz() {
    for (let i = 0; i < 2; i++) {
        console.log(`Jugador ${i + 1}: ${manos[i].join(", ")} - Puntos: ${sumarPuntos(i)} ${plantados[i] ? "(Plantado)" : ""}`);
    }
}
