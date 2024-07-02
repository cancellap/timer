// Variáveis globais
let segundos = 0;
let timer = null;
const relogioElement = document.querySelector('.relogio');

// Função para formatar os segundos em HH:MM:SS
function getFormattedTime(seconds) {
    const data = new Date(seconds * 1000);
    return data.toISOString().substr(11, 8);
}

// Função para iniciar o relógio
function startRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogioElement.textContent = getFormattedTime(segundos);
    }, 1000);
}

// Função principal para configurar eventos
function configurarRelogio() {
    document.addEventListener('click', function (e) {
        const elementClicked = e.target;

        if (elementClicked.classList.contains('zerar')) {
            relogioElement.classList.remove('rodando');
            clearInterval(timer);
            relogioElement.classList.remove('pausado');
            relogioElement.textContent = '00:00:00';
            segundos = 0;
        }
        if (elementClicked.classList.contains('iniciar')) {
            clearInterval(timer);
            relogioElement.classList.add('rodando');
            relogioElement.classList.remove('pausado');
            startRelogio();
        }
        if (elementClicked.classList.contains('pausar')) {
            clearInterval(timer);
            relogioElement.classList.remove('rodando');
            relogioElement.classList.add('pausado');
        }
    });
}

// Inicialização do relógio
configurarRelogio();
