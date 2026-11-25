
const boton = document.getElementById("comenzar");

boton.addEventListener("click", mostrarAcertijo);

function agregarBotonPista(pista) {
    const botonPista = document.getElementById("mostrar-pista");
    const textoPista = document.getElementById("texto-pista");

    botonPista.addEventListener("click", () => {
        const visible = textoPista.hidden;

        textoPista.hidden = !visible;
        botonPista.textContent = visible
            ? "Ocultar pista"
            : "Mostrar pista 💡";
    });

    textoPista.textContent = pista;
}

function mostrarAcertijo() {
    document.querySelector(".inicio").innerHTML = `
        <p class="subtitulo">PRIMER ENIGMA</p>
        <h1>Una prenda especial</h1>
        <div class="separador">✦ ✧ ✦</div>

        <p class="mensaje">
            No soy un vestido ni tampoco un abrigo,
            pero en tus jornadas suelo estar contigo.
            Negra como la noche, conozco tu labor.
            ¿Qué prenda soy?
        </p>

        <button id="mostrar-pista" type="button">
            Mostrar pista 💡
        </button>

        <p id="texto-pista" class="pregunta" hidden></p>

        <br><br>
        <input id="respuesta" placeholder="¿Qué prenda soy?">
        <br><br>
        <button id="comprobar">Comprobar</button>
        <p id="resultado" class="pregunta"></p>
    `;

    agregarBotonPista(
        "Es una prenda negra que utilizas cuando vas a trabajar."
    );

    document.getElementById("comprobar")
        .addEventListener("click", comprobarRespuesta);
}

function comprobarRespuesta() {
    const respuesta = document.getElementById("respuesta")
        .value.trim().toLowerCase();

    if (respuesta === "bata negra" || respuesta === "la bata negra" || respuesta === "la bata" || respuesta=== "bata") {
        mostrarPalabraSecreta();
    } else {
        document.getElementById("resultado").textContent =
            "Esa no es la respuesta. ¡Inténtalo otra vez!";
    }
}

function mostrarPalabraSecreta() {
    document.querySelector(".inicio").innerHTML = `
        <p class="subtitulo">PRIMER DESTINO</p>
        <h1>El armario...</h1>
        <div class="separador">✦ ✧ ✦</div>

        <p class="mensaje">
            ¡Has resuelto el acertijo!
            Ahora busca el sobre escondido
            en tu armario.
        </p>

        <p class="pregunta">
            Dentro encontrarás una palabra secreta.
        </p>

        <input id="clave" placeholder="Escribe la palabra secreta">
        <br><br>
        <button id="desbloquear">Desbloquear</button>
        <p id="resultado" class="pregunta"></p>
    `;

    document.getElementById("desbloquear")
        .addEventListener("click", comprobarClave);
}

function comprobarClave() {
    const clave = document.getElementById("clave")
        .value.trim().toLowerCase();

    if (clave === "trabajadora") {
        mostrarSegundoAcertijo();
    } else {
        document.getElementById("resultado").textContent =
            "La palabra no coincide. Busca bien el sobre.";
    }
}

function mostrarSegundoAcertijo() {
    document.querySelector(".inicio").innerHTML = `
        <p class="subtitulo">SEGUNDO ENIGMA</p>
        <h1>Otros mundos</h1>
        <div class="separador">✦ ✧ ✦</div>

        <p class="mensaje">
            No soy una ventana, pero te llevo a otros mundos.
            No soy un televisor, aunque juntos somos un gran equipo.
            Aquí alguien de esta casa disfruta sus aventuras.
            ¿Dónde debes buscar?
        </p>

        <button id="mostrar-pista" type="button">
            Mostrar pista 💡
        </button>

        <p id="texto-pista" class="pregunta" hidden></p>

        <br><br>
        <input id="respuesta" placeholder="¿Dónde debes buscar?">
        <br><br>
        <button id="comprobar">Comprobar</button>
        <p id="resultado" class="pregunta"></p>
    `;

    agregarBotonPista(
        "Busca el lugar donde yo juego videojuegos. 🎮"
    );

    document.getElementById("comprobar")
        .addEventListener("click", comprobarSegundoAcertijo);
}

function comprobarSegundoAcertijo() {
    const respuesta = document.getElementById("respuesta")
        .value.trim().toLowerCase();

    if (
        respuesta === "play" ||
        respuesta === "play 5" ||
        respuesta === "ps5" ||
        respuesta === "playstation" ||
        respuesta === "playstation 5" ||
        respuesta === "la play"
    ) {
        mostrarSegundoDestino();
    } else {
        document.getElementById("resultado").textContent =
            "Todavía no has encontrado el lugar. ¡Inténtalo otra vez!";
    }
}

function mostrarSegundoDestino() {
    document.querySelector(".inicio").innerHTML = `
        <p class="subtitulo">SEGUNDO DESTINO</p>
        <h1>¡La aventura continúa!</h1>
        <div class="separador">✦ ✧ ✦</div>

        <p class="mensaje">
            ¡Correcto! Ahora busca el segundo sobre
            cerca del lugar donde juegas videojuegos.
        </p>

        <p class="pregunta">
            Dentro encontrarás otra palabra secreta.
        </p>

        <input id="clave" placeholder="Escribe la segunda palabra">
        <br><br>
        <button id="desbloquear">Desbloquear</button>
        <p id="resultado" class="pregunta"></p>
    `;

    document.getElementById("desbloquear")
        .addEventListener("click", comprobarSegundaClave);
}


function comprobarSegundaClave() {
    const clave = document.getElementById("clave")
        .value.trim().toLowerCase();

    if (clave === "divertida") {
        mostrarTercerAcertijo();
    } else {
        document.getElementById("resultado").textContent =
            "Esa palabra no es correcta. ¡Revisa el sobre!";
    }
}

function mostrarTercerAcertijo() {
    document.querySelector(".inicio").innerHTML = `
        <p class="subtitulo">TERCER Y ÚLTIMO ENIGMA</p>
        <h1>Los guardianes</h1>
        <div class="separador">✦ ✧ ✦</div>

        <p class="mensaje">
            Tres guardianes descansan en silencio,
            son suaves como nubes y no conocen el movimiento.
            Siempre están conmigo, aunque no pueden hablar,
            y junto a ellos el último secreto podrás encontrar.
        </p>

        <button id="mostrar-pista" type="button">
            Mostrar pista 💡
        </button>

        <p id="texto-pista" class="pregunta" hidden></p>

        <br><br>
        <input id="respuesta" placeholder="¿Quiénes son los guardianes?">
        <br><br>
        <button id="comprobar">Comprobar</button>
        <p id="resultado" class="pregunta"></p>
    `;

    agregarBotonPista(
        "No son personas ni animales de verdad, pero son suaves, abrazables y decoran mi habitación. 🧸"
    );

    document.getElementById("comprobar")
        .addEventListener("click", comprobarTercerAcertijo);
}

function comprobarTercerAcertijo() {
    const respuesta = document.getElementById("respuesta")
        .value.trim().toLowerCase();

    if (
        respuesta === "peluches" ||
        respuesta === "los peluches" ||
        respuesta === "hielito"
    ) {
        mostrarTercerDestino();
    } else {
        document.getElementById("resultado").textContent =
            "Los guardianes siguen esperando. ¡Inténtalo otra vez!";
    }
}

function mostrarTercerDestino() {
    document.querySelector(".inicio").innerHTML = `
        <p class="subtitulo">ÚLTIMO DESTINO</p>
        <h1>Los guardianes te esperan</h1>
        <div class="separador">✦ ✧ ✦</div>

        <p class="mensaje">
            ¡Has descubierto quiénes son!
            Ahora ve a mi habitación y busca
            el sobre que está junto a los guardianes.
        </p>

        <p class="pregunta">
            Dentro encontrarás la última palabra secreta.
        </p>

        <input id="clave" placeholder="Escribe la última palabra">
        <br><br>
        <button id="desbloquear">Desbloquear</button>
        <p id="resultado" class="pregunta"></p>
    `;

    document.getElementById("desbloquear")
        .addEventListener("click", comprobarTerceraClave);
}

function comprobarTerceraClave() {
    const clave = document.getElementById("clave")
        .value.trim().toLowerCase();

    if (clave === "cariñosa") {
        mostrarTesoroFinal();
    } else {
        document.getElementById("resultado").textContent =
            "La palabra no coincide. ¡Busca bien entre los guardianes!";
    }
}



function mostrarTesoroFinal() {
    document.querySelector(".inicio").innerHTML = `
        <p class="subtitulo">EL ÚLTIMO ENIGMA</p>
        <h1>El tesoro escondido</h1>
        <div class="separador">✦ ✧ ✦</div>

        <p class="mensaje">
            El último tesoro está cerca de un lugar peculiar,
            donde la ropa da vueltas sin parar.
            No es una habitación para descansar,
            pero allí tu sorpresa podrás encontrar.
        </p>

        <button id="mostrar-pista" type="button">
            Mostrar pista 💡
        </button>

        <p id="texto-pista" class="pregunta" hidden></p>

        <br><br>
        <input id="respuesta-final" placeholder="¿Dónde está el tesoro?">
        <br><br>
        <button id="comprobar-final">Comprobar</button>

        <p id="resultado" class="pregunta"></p>
    `;

    agregarBotonPista(
        "Busca cerca de ese aparato que utilizas para lavar la ropa. 🧺"
    );

    document.getElementById("comprobar-final")
        .addEventListener("click", comprobarTesoro);
}

function comprobarTesoro() {
    const respuesta = document.getElementById("respuesta-final")
        .value.trim().toLowerCase();

    if (
        respuesta.includes("lavadora") ||
        respuesta.includes("balcon") ||
        respuesta.includes("lavadero") ||
        respuesta.includes("cocina")
     ) {
        mostrarUbicacionTesoro();
    } else {
        document.getElementById("resultado").textContent =
            "¡Casi! Piensa en el lugar donde la ropa se lava. 🧺";
    }
}

function mostrarUbicacionTesoro() {
    document.querySelector(".inicio").innerHTML = `
        <p class="subtitulo">MISIÓN COMPLETADA</p>
        <h1>¡Encontraste el tesoro!</h1>
        <div class="separador">✦ ✧ ✦</div>

        <p class="mensaje">
            ¡Lo lograste! Has superado todos los enigmas.
            Tu última misión es buscar tu sorpresa
            en el balcón de la cocina, cerca de la lavadora.
        </p>

        <div class="separador">✦ ♡ ✦</div>

        <h2>Gracias por ser mi mamá ❤️</h2>
        <p class="firma">Con mucho cariño.</p>
    `;
}
