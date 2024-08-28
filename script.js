const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {
    enunciado:"Pode dar banho em pets com produtos de humanos?",
    alternativas: [
        {
            texto:"Sim, pois é mais barato.",
            afirmacao:"resposta poitiva, produtos são baratos."
        },
        {
            texto:"Não, é contra indicao pois pode causar problemas de pele e não é composto próprios.",
            afirmacao:"resposta negativa, é o certo a se fazer."
        }
    ]
},
{
    enunciado:"É necessário tampar os ouvidos do pet na hora do banho?",
    alternativas: [
        {
            texto:"Sim, pois é uma área que ele não secam sozinhos e se molhar pode gerar doenças.",
            afirmacao:"respota positiva, a área é sensível."
        },
        {
            texto:"Não, pois não tem nenhum risco.",
            afirmacao:"resposta negativa, sem risco."
        }
    ]
},
{
    enunciado : "Todos os pets precisam de banho?",
    alternativas: [
        {
            texto:"Sim, porque precisam ficar cheirosos.",
            afirmacao:"pets cheirosos."
        },
        {
            texto:"Não, pois muitos não precisam por conta de se limparem sozinhos.",
            afirmacao:"ficam limpos sozinhos."
        }
    ]
}
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas(){
    if (atual > = perguntas.length){
        mostraResultado();
        return;
    };
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
};
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() = > respostaFinal() );
        caixaAlternativas.appendChild(botaoAlternativas);
    };
};
    function respostaFinal(opcaoSelecionada){
        const afirmacao = opcaoSelecionada.afirmacao;
        historiaFinal + = afirmacao + "";
        atual ++;
        mostraPerguntas();

    };
    function mostraResultado(){
        caixaPerguntas.textContent = "Em 2030...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    };

