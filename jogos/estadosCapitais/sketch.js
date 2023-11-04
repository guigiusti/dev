const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// Para selecionar um país e bandeira especifica, use "/?sigla2=sp", substituindo "sp" pelo código desejado.
// Os estados disponíveis estão no arquivo "estadosBR.json". Este código serve apenas para testes. 
if (urlParams.get('sigla2')) {
    fetch('/guigiusti.github.io/dev/jogos/estadosCapitais/bandeirasEstados/estadosBR.json')
    .then((response) => response.json())
    .then((json) => {const keys = Object.keys(json);
        selecionar_imagem(urlParams.get('sigla2').toUpperCase());})
}
// Caso queira jogar, este é o código que rodará normalmente, escolhendo um país da lista de forma randômica. 
// Neste caso, não é necessário inserir nada depois do "/"
if (!urlParams.get('sigla2')) {
fetch('/guigiusti.github.io/dev/jogos/estadosCapitais/bandeirasEstados/estadosBR.json')
    .then((response) => response.json())
    .then((json) => {const keys = Object.keys(json);
        const len = keys.length;
        const rnd = Math.floor(Math.random() * len);
        selecionar_imagem(keys[rnd].sigla2.toUpperCase());}) 
        // Na última linha é enviado o comando com o código do país, dando início ao jogo.
}
