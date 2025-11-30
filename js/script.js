// ----------------------------
// PROBLEMA 1: CARBONO-14
// ----------------------------

// constante k:  e^(-k*5730) = 1/2
let k = Math.log(0.5) / 5730;

// porcentaje restante
let fraccion = 0.7745;

// calcular tiempo: fraccion = e^(k*t)
let t1 = Math.log(fraccion) / k;

// redondear
let t1_redondeado = Math.round(t1);

// ----------------------------
// PROBLEMA 2: ENFRIAMIENTO DE NEWTON
// ----------------------------

// datos
let Ts = 69;       // temperatura ambiente
let T1 = 79.5;     // a t = 0
let T2 = 78.0;     // a t = 1 hora
let T0 = 98.6;     // temp normal

// calcular constante k usando dos mediciones
let k2 = Math.log((T2 - Ts) / (T1 - Ts)); // t2=1 hora

// encontrar tiempo desde la muerte: T(t) = Ts + (T0 - Ts)e^(k2*t)
let t2 = Math.log((T1 - Ts) / (T0 - Ts)) / k2;

// convertir t en horas y minutos
let horas = Math.floor(t2);
let minutos = Math.round((t2 - horas) * 60);

// hora encontrada: 9:18 PM - t2 horas
let horaBase = 21 + 18/60; // 21.3 horas

let horaMuerte = horaBase - t2;

let horaFinal = Math.floor(horaMuerte);
let minFinal = Math.round((horaMuerte - horaFinal) * 60);

if (minFinal < 10) minFinal = "0" + minFinal;

// ----------------------------
// Mostrar Resultados en la Página
// ----------------------------
document.getElementById("resultado1").innerHTML =
    `El rastro tiene aproximadamente <b>${t1_redondeado} años</b>.`;

document.getElementById("resultado2").innerHTML =
    `La muerte ocurrió aproximadamente a las <b>${horaFinal}:${minFinal}</b> horas.`;
