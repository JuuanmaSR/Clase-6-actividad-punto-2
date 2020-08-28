
function obtenerMayorSalarioAnual(salarios) {
    let mayorSalario = salarios[0];
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i] > mayorSalario) {
            mayorSalario = salarios[i];
        };
    }
    return mayorSalario;
};

function obtenerMenorSalarioAnual(salarios) {
    let menorSalario = salarios[0];
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i] < menorSalario) {
            menorSalario = salarios[i];
        };
    }
    return menorSalario;
};

function obtenerPromedioSalarioAnual(salarios) {
    let acumulador = 0;
    for (let i = 0; i < salarios.length; i++) {
        acumulador += salarios[i];
    }
    return (acumulador / salarios.length).toFixed(2);
};

function obtenerSalarioMensual(salarios) {
    const mesesEnUnAño = 12;
    const salariosMensuales = [];
    for (let i = 0; i < salarios.length; i++) {
        let salarioMensual = salarios[i] / mesesEnUnAño;
        salariosMensuales.push(salarioMensual);
    };
    return salariosMensuales;
};

function obtenerPromedioSalarioMensual(salarioMensual) {
    let acumulador = 0;
    for (let i = 0; i < salarioMensual.length; i++) {
        acumulador += salarioMensual[i];
    };
    return (acumulador / salarioMensual.length).toFixed(2);
};