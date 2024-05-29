const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// Para selecionar um país e bandeira especifica, use "/?alpha2=br", substituindo "br" pelo código desejado.
// Os países disponíveis estão no arquivo "paisesUN.json". Este código serve apenas para testes. 
if (urlParams.get('alpha2')) {
    fetch('/guigiusti.github.io/dev/paisesCapitais/bandeirasPaises/paisesLista.json')
    .then((response) => response.json())
    .then((json) => {const keys = Object.keys(json);
        selecionar_imagem(urlParams.get('alpha2').toLowerCase());})
}
// Caso queira jogar, este é o código que rodará normalmente, escolhendo um país da lista de forma randômica. 
// Neste caso, não é necessário inserir nada depois do "/"
if (!urlParams.get('alpha2')) {
fetch('/guigiusti.github.io/dev/paisesCapitais/bandeirasPaises/paisesLista.json')
    .then((response) => response.json())
    .then((json) => {const keys = Object.keys(json);
        const len = keys.length;
        const rnd = Math.floor(Math.random() * len);
        selecionar_imagem(keys[rnd].toLowerCase());}) 
        // Na última linha é enviado o comando com o código do país, dando início ao jogo.
}
