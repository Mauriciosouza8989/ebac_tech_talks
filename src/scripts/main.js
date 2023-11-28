AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(() => {
    const now = new Date();
    const timeStampAtual = now.getTime()
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60  * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOevento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOevento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOevento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOevento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.querySelector(".contador").innerHTML = `começa em ${diasAteOevento}d ${horasAteOevento}h ${minutosAteOevento}m ${segundosAteOevento}s`

    if(distanciaAteOEvento < 0){
        clearInterval(contaHoras);
        document.querySelector(".contador").innerHTML = `expirou no dia 12/12/2023 às 19:00:00h`;
    }
}, 1000);