// * Variaveis globais
let qtdCliques = 0;
let segundos = 0;
let cliquesPorMinuto = 0;

//Ao carregar a página, executa a função cronometro
window.onload =()=>{
    cronometro();
}

// Função para lidar com // o clique do botão
function handleClick(){
    qtdCliques++; //Mesma coisa que qtdCliques = qtdCliques + 1
    atualizaContador();
    geraPosiçaobotao();


} 
//Gera uma nova posição para o botão
function geraPosiçaobotao(){
    let botao = document.getElementsByTagName('botao');
    botao.styles.position = 'absolute';
    botao.styles.left = ((Math.ramdom()*90)+10)+'%';
     botao.styles.top = ((Math.ramdom()*90)+10)+'%';
}

function atualizaContador(){
    let container = document.getElementById('quantidade-cliques');
    console.log(container)
    container.innerText = qtdCliques;

}

// Cronômetro de execução
function cronometro(){             
    setTimeout(()=>{
        atualizaCronometro();
        calculaCliquesPorMinuto()
        cronometro();
},1000)

}
//Calcular Cliques por minuto
function atualizaCronometro(){
    let elemento_cronometro = document.getElementById('cronometro')
    elemento_cronometro.innerText = segundos;
}

function calculaCliquesPorMinuto(){
   
   
   
    CliquePorMinuto = cliques/(segundos/60)


}


//atualiza o CPM
function atualizaCPM(){
    let cpm = document.getElementById('cpm')
    cpm.innerText = cliquesPorMinuto;
    
}