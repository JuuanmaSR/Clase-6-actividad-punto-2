//SECCION BOTONES !!!


document.querySelector(`#boton-agregar`).onclick = function (event) {

    const indice = obtenerIndice();

    crearIntegrante(indice);

    mostrarBotonCalcular();
    mostrarBotonReiniciar();

    event.preventDefault();
};



document.querySelector(`#boton-quitar`).onclick = function (event) {

    borrarIntegrante();

    event.preventDefault();
};



document.querySelector(`#boton-reiniciar`).onclick = function (event) {

    reiniciar();
    event.preventDefault();
};



document.querySelector(`#boton-calcular`).onclick = function (event) {

    const salarios = obtenerSalarios();
    const salarioMensual = obtenerSalarioMensual(salarios)

    document.querySelector(`#mayor-salario`).innerText = obtenerMayorSalarioAnual(salarios);
    document.querySelector(`#menor-salario`).innerText = obtenerMenorSalarioAnual(salarios);
    document.querySelector(`#promedio-salario`).innerText = obtenerPromedioSalarioAnual(salarios);
    document.querySelector(`#promediomensual-salario`).innerText = obtenerPromedioSalarioMensual(salarioMensual);

    mostrarResultados();
    event.preventDefault();
};
//SECCION MOSTRAR CREAR Y OBTENER !!!
function mostrarBotonCalcular() {
    document.querySelector(`#boton-calcular`).className = ``;

};

function mostrarResultados() {
    document.querySelector(`#resultado-analisis`).className = ``;
}

function mostrarBotonReiniciar() {
    document.querySelector(`#boton-reiniciar`).className = ``;
};

function obtenerIndice() {
    let $indice = document.querySelectorAll(`.integrante`)
    indice = $indice.length;
    return indice + 1;
};

function crearIntegrante(indice) {
    const $div = document.createElement(`div`);
    $div.className = `integrante`;



    const $label = document.createElement(`label`);
    $label.textContent = `Salario anual del integrante #: ${indice}`;
    const $input = document.createElement(`input`);
    $input.className = `salario-integrante`;
    $input.type = Number;

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector(`#integrantes-familiares`);
    $integrantes.appendChild($div);
};

function obtenerSalarios() {
    const $salarios = document.querySelectorAll(`.integrante input`);
    const salarios = [];
    for (let i = 0; i < $salarios.length; i++) {
        if ($salarios[i].value === 0 || $salarios[i].value === ``) {
            continue;
        };
        salarios.push(Number($salarios[i].value));
    };
    return salarios;
}
//SECCION BORRAR OCULTAR Y REINICIAR !! 
function borrarIntegrante() {
    document.querySelector(`#integrantes-familiares`).lastChild.remove();
}

function reiniciar() {
    ocultarResultados();
    ocultarTodosLosIntegrantes();
    ocultarBotonReiniciar();
    ocultarBotonCalcular();
};

function ocultarBotonReiniciar() {
    document.querySelector(`#boton-reiniciar`).className = `oculto`;
};

function ocultarBotonCalcular() {
    document.querySelector(`#boton-calcular`).className = `oculto`;
};

function ocultarTodosLosIntegrantes() {
    let $integrantes = document.querySelectorAll(`.integrante`);
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();

    };
};

function ocultarResultados() {
    document.querySelector(`#resultado-analisis`).className = `oculto`;

};
