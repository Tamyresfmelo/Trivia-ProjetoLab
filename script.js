
//declaração de variáveis e pegando as div 
var respostaCorretaBrasil = false
var respostaCorretaDubai = false
var respostaCorretaLondres = false
var divQuestao_1 = document.getElementById("questao_1")
var divQuestao_2 = document.getElementById("questao_2")
var divQuestao_3 = document.getElementById("questao_3")
var divResultado = document.getElementById("resultado")
var divJogo = document.getElementById("jogo")
var divNomeBemVindo = document.getElementById("nome_bem_vindo")
var h2InformacaoResultado = document.getElementById("informacao_resultado")
var nomeJogador = ""
var pontos = 0


//Essa função irá verificar se a resposta selecionada está correta
function respostaBrasil(element){
  //Está acessando o valor do input e vericando com a resposta correta
  if(element.value === "Rio De janeiro"){
    respostaCorretaBrasil = true
  }else{
    respostaCorretaBrasil = false
  }
}
//Essa função está exibindo se a resposta está correta ou não
//E liberando acesso a próxima pergunta
function verRespostaBrasil(){
  if(respostaCorretaBrasil){
    window.alert("Você acertou!")
    pontos+=1
  }else{
    window.alert("Você errou!")
  }
  //Está escondendo a div da primeira pergunda
  divQuestao_1.style.display = "none"
  //Está exibindo a div da segunda pergunta
  divQuestao_2.style.display = "block"
}


//Essa função irá verificar se a resposta selecionada está correta
  function respostaDubai(element){
     //Está acessando o valor do input e vericando com a resposta correta
    if(element.value === "Emirados Arabes"){
      respostaCorretaDubai = true
    }else{
      respostaCorretaDubai = false
    }
  }
//Essa função está exibindo se a resposta está correta ou não
//E liberando acesso a próxima pergunta
function verRespostaDubai(){
  if(respostaCorretaDubai){
    window.alert("Você acertou!")
     pontos+=1
  }else{
    window.alert("Você errou!")
  }
  //Está escondendo a div da segunda pergunda
  divQuestao_2.style.display = "none"
  //Está exibindo a div da terceira pergunta
  divQuestao_3.style.display = "block"
}

//Essa função irá verificar se a resposta selecionada está correta
function respostaLondres(element){
  //Está acessando o valor do input e vericando com a resposta correta
    if(element.value === "Reino Unido"){
      respostaCorretaLondres = true       
    }else{
      respostaCorretaLondres = false
    }
  }
//Essa função está exibindo se a resposta está correta ou não
//E liberando acesso para reiniciar o jogo
function verRespostaLondres(){
  if(respostaCorretaLondres){
    window.alert("Você acertou!")
     pontos+=1
  }else{
    window.alert("Você errou!")
  }
  //Está escondendo a div da terceira pergunda
  divQuestao_3.style.display = "none"
  //Está exibindo a div de resultado
  divResultado.style.display = "block"
  exibirResultado()
}

//A função faz: exibir as perguntas e pegar o nome da jogadora
function comecarJogo(){  
  //pega a div nome_bem_vindo
  var bemVindo = document.getElementById("nome_bem_vindo");
  //pega a div de todo o jogo
  var jogo = document.getElementById("jogo")
  //pega o input que contém o nome da jogadora
  var inputJogador = document.getElementById("nome_jogador")
  //pega bem vindo (o <h2>)
  var nomeJogadorTexto = document.getElementById("nome_jogador_texto")
  //está mostrando a div que contém todas as perguntas
  jogo.style.display = "block"
  //está escondendo a div de bemVindo (que é a primeira tela) após clicar em começar o jogo
  bemVindo.style.display = "none"
  //mostra no início do jogo a mensagem Bem-vinda, jogadora
  nomeJogador = inputJogador.value
  //escreve no <h2> 
  nomeJogadorTexto.innerHTML = "Bem-vinda, " + nomeJogador
}

function exibirResultado(){
  h2InformacaoResultado.innerHTML = nomeJogador + " seu resultado foi: " + pontos +" pontos."  
  divJogo.style.display = "none"
 
}

function reiniciarJogo(){
  divNomeBemVindo.style.display = "block"
  divResultado.style.display = "none"
  divQuestao_1.style.display = "block"
  pontos = 0
}