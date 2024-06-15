const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
  {
    enunciado:
      "Como você acredita que a tecnologia influencia sua vida social?",
    alternativas: [
      {
        texto: "A tecnologia fortalece minhas conexões sociais e me ajuda a manter contato com amigos e familiares.",
        afirmacao: "Você sentirá que a tecnologia fortalece suas conexões sociais, provavelmente experimenta uma sensação de proximidade e suporte emocional através das interações online. Isso pode levar a uma maior sensação de pertencimento e satisfação nas relações.",
      },
      {
        texto: "A tecnologia me isolou mais, substituindo interações pessoais significativas por comunicações digitais superficiais.",
        afirmacao: "Você sentirá que a tecnologia o isolou mais, enfrentará sentimentos de solidão e desconexão. A dependência excessiva de comunicações digitais superficiais pode levar a relacionamentos menos significativos e uma falta de interações interpessoais genuínas.",
      },
    ],
  },
  {
    enunciado:
      "Qual é sua percepção sobre o impacto da tecnologia em sua produtividade?",
    alternativas: [
      {
        texto:
          "A tecnologia aumenta minha eficiência e me ajuda a realizar tarefas de forma mais rápida e organizada.",
        afirmacao: "Perceberá a tecnologia como uma ferramenta que aumenta sua eficiência, provavelmente experimentará uma maior realização de tarefas e uma sensação de controle sobre seu tempo. Isso pode levar a uma sensação de realização e redução do estresse.",
      },
      {
        texto:
          "A tecnologia me distrai e me torna menos produtivo, constantemente puxando minha atenção para notificações e conteúdo online.",
        afirmacao: "Sentirá que a tecnologia o distrai e prejudica sua produtividade, pode experimentar sentimentos de frustração e sobrecarga. Constantes interrupções de notificações e a tentação de conteúdo online podem dificultar o foco e a conclusão de tarefas.",
      },
    ],
  },
  {
    enunciado:
      "Como você vê o papel da tecnologia na sua saúde mental?",
    alternativas: [
      {
        texto:
          "A tecnologia oferece recursos úteis, como aplicativos de meditação e terapia online, que podem melhorar meu bem-estar emocional.",
        afirmacao: "Reconhece os recursos úteis da tecnologia para sua saúde mental, pode se beneficiar do acesso a aplicativos de meditação e terapia online, o que pode melhorar seu bem-estar emocional. Isso pode resultar em uma maior resiliência ao estresse e uma melhoria na saúde mental.",
      },
      {
        texto:
          "A tecnologia contribui para o estresse e a ansiedade, criando uma pressão constante para estar sempre conectado e comparando minha vida com os outros nas redes sociais.",
        afirmacao: " Percebe a tecnologia como uma fonte de estresse e ansiedade devido à pressão de estar sempre conectada e comparando-se com outros online, isso pode resultar em uma deterioração da saúde mental, incluindo sintomas de ansiedade e depressão.",
      },
    ],
  },
  {
    enunciado:
      "Em sua opinião, como a tecnologia afeta sua capacidade de concentração?",
    alternativas: [
      {
        texto:
          "A tecnologia me permite acessar informações rapidamente e me ajuda a manter o foco em minhas tarefas.",
        afirmacao: "A tecnologia o ajuda a acessar informações rapidamente e a manter o foco, pode experimentar uma sensação de eficácia e realização em suas tarefas. Isso pode levar a uma maior produtividade e satisfação no trabalho ou estudo.",
      },
      {
        texto: "A tecnologia fragmenta minha atenção, tornando difícil me concentrar em uma única atividade por um longo período de tempo.",
        afirmacao: "A tecnologia fragmenta sua atenção e torna difícil a concentração, pode se sentir constantemente distraído e incapaz de completar tarefas de forma eficiente. Isso pode levar a sentimentos de inadequação e estresse.",
      },
    ],
  },
  {
    enunciado:
      "Como você percebe o papel da tecnologia na sua autonomia e liberdade pessoal?",
    alternativas: [
      {
        texto:
          "A tecnologia amplia minhas opções e me dá mais controle sobre minha vida, desde a escolha de entretenimento até a gestão de tarefas diárias.",
        afirmacao: "Você verá a tecnologia como uma ferramenta que amplia suas opções e oferece mais controle sobre sua vida, você pode experimentar uma sensação de empoderamento e liberdade. Isso pode levar a uma maior autonomia na tomada de decisões e na expressão pessoal.",
      },
      {
        texto:
          "A tecnologia restringe minha liberdade, monitorando minhas atividades online e moldando minhas escolhas com algoritmos de recomendação e publicidade direcionada.",
        afirmacao: "Você verá que a tecnologia restringe sua liberdade, monitorando suas atividades online e influenciando suas escolhas, você pode experimentar uma sensação de invasão de privacidade e falta de controle sobre sua própria vida. Isso pode levar a uma perda de confiança na tecnologia e nas instituições que a controlam.",
      },
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2050...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
  
mostraPergunta();