    let listaDeNumerosSorteados = [];
    let numeroLimite = 100;
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 1;

    /*let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Jogo do número secreto';
    let subtitulo = document.querySelector('p');
    subtitulo.innerHTML = 'Escolha um numero de 0 a 100';*/
    //SUBSTITUINDO O CODIGO ANTERIOR PARA UMA BOA PRÁTICA

    function exibirNaTela(tag,texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

    }
    

    function mensagemInicial() {

    exibirNaTela('h1','Jogo do número secreto');
    exibirNaTela('p','Escolha um numero de 0 a 100');

    }

    mensagemInicial();

    function verificarChute (){
    // a linha da variavel palpite pega atraves do .value o valor que é colocando no input
        let palpite = document.querySelector('input').value
        console.log(numeroSecreto)

            if(palpite==numeroSecreto){
                exibirNaTela('h1','Vc acertou!');
                let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
                let mensagemTentativas =`Vc venceu o computador e descobriu o numero secreto com ${tentativas} ${palavratentativa}! Parabéns`
            
                exibirNaTela('p',mensagemTentativas );
                document.getElementById('reiniciar').removeAttribute('disabled');

            }else{

                if(numeroSecreto > palpite){
                    exibirNaTela('p','o número secreto é maior');
                }else{
                    exibirNaTela('p','número secreto é menor');
                }
                tentativas ++;
                limpaCampo();
            }
          
        }

        function gerarNumeroAleatorio() {
            let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
            let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
        
            if (quantidadeDeElementosNaLista == numeroLimite) {
                listaDeNumerosSorteados = [];
            }
            if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
                return gerarNumeroAleatorio();
            } else {
                listaDeNumerosSorteados.push(numeroEscolhido);
                console.log(listaDeNumerosSorteados)
                return numeroEscolhido;
            }
        }
        
    function limpaCampo(){

        palpite = document.querySelector('input');
        palpite.value = '';
    }

    function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limpaCampo();
        tentativas =1 ;
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true)

    }
   