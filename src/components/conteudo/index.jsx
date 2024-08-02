import React, { useState } from 'react'
import ai from './ai.png'
import styled from 'styled-components'

const ContMod = styled.div`
    width: 100%;
    height: 100%;

  .container-conteudo{
    margin: 50px 0;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 30px;
    box-shadow: 4px 4px 20px 0px rgb(238, 241, 243);
    gap: 10px;
  }

  .container-conteudo img{
    width: 500px;
    height: 500px;
  }

  h1{
    font-size: 34px;
    margin-bottom: 10px;
  }

  p{
    font-size: 20px;
  }

  .container-info{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .container-info input{
    padding: 10px;
    border-radius: 15px;
    font-family: "Orbitron", sans-serif;
    color: #020da1;
    font-size: 20px;
    font-weight: 900;
  }

  .container-info button{
    border-radius: 16px;
    background: #08016de1;
    padding: 16px 24px;
    width: 100%;
    font-family: "Orbitron", sans-serif;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    border: 1px solid #fff;
    margin-top: 10px;
    transition: .5s;
  }

  .container-info button:hover{
    background: #03002eef;
  }

  @media (max-width: 800px){
    .container-conteudo{
      margin: 0 10px;
    }
    
    .container-conteudo img{
      width: 50%;
      height: 100%;
    }

    h1,
    p {
      font-size: 90%;
    }

    .container-info{
      display: block;

    }
    .container-info input{
      width: 90%;
    }

    .container-info button{
      width: 80%;
      height: auto;
      font-size: 16px;
    }
  }

  @media (max-width: 590px){
    .container-txt{
      margin: 5px 0 20px 0;
    }

    img{
      height: 100%;
    }

    p{
      font-size: 14px;
    }

    .container-info input{
      padding: 0 5px;
      font-size: 16px;
      width: 90%;
    }

    .container-info button{
      padding: 5px 15px;
      font-size: 14px;
    }

    .try {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 440px){
    h1{
      display: none;
    }

    .container-info button{
      margin-top: 5px;
    }
  }
`

// Gerar o Numero Aleatorio
const gerarNumeroAleatorio = (numeroMaximo, listaDeNumeroSorteado) => {
  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);

  if(listaDeNumeroSorteado.lenght === numeroMaximo){
    listaDeNumeroSorteado = [];
  }

  if(listaDeNumeroSorteado.includes(numeroEscolhido)){
    return
    gerarNumeroAleatorio(numeroMaximo, listaDeNumeroSorteado);
  } else {
    listaDeNumeroSorteado.push(numeroEscolhido);
    return numeroEscolhido;
  }
};

const Conteudo = () => {
  const [numeroMaximo] = useState(10);
  const [numeroSecreto, setNumeroSecreto] = useState(() => gerarNumeroAleatorio(10, []));
  const [tentativas, setTentativas] = useState(1);
  const [listaDeNumeroSorteado, setListaDeNumeroSorteado] = useState([]);
  const [titulo, setTitulo] = useState('Numero Secreto (Jogo)');
  const [mensagem, setMensagem] = useState('Escolha um numero entre 1 e 10: ');
  const [chute, setChute] = useState('');
  const [jogoEncerrado, setJogoEncerrado] = useState(false);

  // Mensagens de Inicio
  const exibirBoasVindas = () => {
    setTitulo('Numero Secreto (Jogo)');
    setMensagem('Escolha um numero entre 1 e 10: ');
  }

  // Verificar o Chute
  const verificarChute = () => {
    if(parseInt(chute) === numeroSecreto) {
      setTitulo('Você Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Descobriu o Número Sercreto com ${tentativas} ${palavraTentativa}!`;
      setMensagem(mensagemTentativas); 
      setJogoEncerrado(true);
    } else {
      if(chute > numeroSecreto){
        setMensagem('O número é MENOR.');
      }else{
        setMensagem('O número é MAIOR.')
      }
      setTentativas(tentativas + 1);
      setChute('');
    }
  };

  // Reiniciar o Jogo
  const reiniciarJogo = () => {
    let novaLista = [];
    let novoNumero = gerarNumeroAleatorio(numeroMaximo, novaLista);
    setListaDeNumeroSorteado(novaLista);
    setNumeroSecreto(novoNumero);
    setTentativas(1);
    setJogoEncerrado(false);
    exibirBoasVindas();
    setChute('');
  };

  return (
    <ContMod>
      <div className="container-conteudo">
        <div className="container-info">
          <div className="container-txt">
            <h1>{titulo}</h1>
            <p>{mensagem}</p>
          </div>
          <input 
            type="number" 
            value={chute} 
            onChange={(e) => setChute(e.target.value)} 
            disabled={jogoEncerrado}
            min="1"
            max="10" 
            className="container-input"
          />

          <div className="try container-btn">
            <button 
              className="container-btn" 
              onClick={verificarChute}
              disabled={jogoEncerrado}
            >
              Chutar
            </button>

            <button
              id='reiniciar' 
              className="container-btn" 
              onClick={reiniciarJogo} 
              disabled={!jogoEncerrado}
            >
              Reiniciar
            </button>
          </div>
        </div>
        <img src={ai} alt=""/>
      </div>
      
    </ContMod>
  )
}

export default Conteudo
