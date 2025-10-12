let mostrarSegundos = false;

function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const horasFormatadas = horas.toString().padStart(2, '0');
    const minutosFormatados = minutos.toString().padStart(2, '0');
    const segundosFormatados = segundos.toString().padStart(2, '0');

    const formatoHora = mostrarSegundos
        ? `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`
        : `${horasFormatadas}:${minutosFormatados}`;

    document.getElementById("clock").innerText = formatoHora;
}

document.body.addEventListener("click", () => {
    mostrarSegundos = !mostrarSegundos;
    atualizarRelogio();
});

setInterval(atualizarRelogio, 1000);

atualizarRelogio();