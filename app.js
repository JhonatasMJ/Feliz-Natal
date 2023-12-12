const natal = new Date ("December 25, 2023 00:00:00").getTime()

const atualizar = setInterval(function(){
    const dataAtual= new Date().getTime();
    const restante = natal - dataAtual;

    const dias = Math.floor(restante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((restante % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    const mensagemElement = document.getElementById("contagem")

    if (restante <= 0) {
        clearInterval(dias);
        mensagemElement.innerHTML = "Feliz Natal!";
        mensagemElement.classList.add("mensagem-natal");
        
    }
}, 1000);

