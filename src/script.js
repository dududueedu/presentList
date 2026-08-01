// Define a data de destino (Ano, Mês [0-11], Dia, Hora, Minuto, Segundo)
// Nota: O mês no JS começa em 0 (Janeiro = 0, Dezembro = 11)
const dataAlvo = new Date(2026, 9, 11, 23, 59, 59).getTime(); // Ex: 31 de Dezembro de 2026 às 23:59:59

const timerDisplay = document.getElementById('timer');

function atualizarContagem() {
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;

    // Se a data já passou
    if (diferenca <= 0) {
        timerDisplay.textContent = "Tempo esgotado!";
        clearInterval(intervalo);
        return;
    }

    // Cálculos matemáticos para conversão de milissegundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Formatação com zero à esquerda
    const d = dias < 10 ? `0${dias}` : dias;
    const h = horas < 10 ? `0${horas}` : horas;
    const m = minutos < 10 ? `0${minutos}` : minutos;
    const s = segundos < 10 ? `0${segundos}` : segundos;

    // Atualiza a tela
    timerDisplay.textContent = `${d} Dias | ${h} Horas | ${m} Minutos | ${s} Segundos`;
}

// Atualiza a cada 1 segundo (1000ms)
const intervalo = setInterval(atualizarContagem, 1000);

// Executa imediatamente ao carregar a página
atualizarContagem();