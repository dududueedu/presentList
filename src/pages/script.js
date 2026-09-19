const formulario = document.getElementById('form');

formulario.addEventListener('submit', function (evento) {
    // Impede a página de recarregar
    evento.preventDefault();
    // Cria o objeto FormData com os dados do formulário
    const dados = new FormData(formulario);

    // Pega o valor de um campo específico
    const nome = dados.get('nome_convidado');
    const numero_acompanhantes = dados.get('num_acompanhantes');
    const opcao = dados.get('radio_op')

    console.log('Nome:', nome);
    console.log('Número de convidados:', numero_acompanhantes);
    console.log('Confirmou?', opcao)

    if (opcao == "sim") {
        const href = "https://api.whatsapp.com/send?phone=5585992789315&text=";
        const novo = "Eu+gostaria+de+confirmar+minha+presença+e+levarei+" + numero_acompanhantes + "+acompanhantes!"+"+("+nome+")";

        const newlink = href + novo
        console.log(newlink)

        Swal.fire({
            imageUrl: "",
            imageWidth: 300,
            imageHeight: 150,
            imageAlt: "Custom image",
            title: "Estamos quase lá",
            text: "Clique no botão abaixo para finalizar.",
            confirmButtonText: `<a href="${newlink}" target="_blank">CONFIRMAR</a>`,
        });
    } else {
        Swal.fire({
            imageUrl: "",
            imageWidth: 300,
            imageHeight: 150,
            imageAlt: "Custom image",
            title: "Poxa vida",
            text: "Sentiremos sua falta!",
        });
    }

    // Se quiser transformar todos os dados em um objeto comum:
    const objetoDados = Object.fromEntries(dados.entries());
    console.log(objetoDados);
});
//É com grande alegria que gostaríamos de contar você para celebrar conosco um dos momentos mais
                //importantes de nossas vidas.