var shownorhide = 0;

// Esta primeira função faz carregar a imagem
function selecionar_imagem(country_code) {
    fetch('/guigiusti.github.io/dev/jogos/estadosCapitais/bandeirasEstados/estadosBR.json')
    .then((response) => response.json())
    .then((json) => {for (key in json) {if (json[key].ordem == country_code) {console.log("foi");
    const img = document.querySelector("img"); 
    img.src = '/guigiusti.github.io/dev/jogos/estadosCapitais/bandeirasEstados/svg/' + json[key].sigla2 + '.svg';
    dados_do_pais(country_code); // Após carregar a imagem, chama a função para carregar os dados do país
    return;}}})
    
}

// Faz esconder o botão e faz mostrar os dados carregados, quando se aperta o botão HTML
function showhide() {
    document.getElementById('txt').hidden = false; // Faz o texto aparecer
    document.getElementById('button_showhide_id').hidden = true; // Faz o botão sumir
}

//Procura nos arquivos JSON o nome do país e sua capital, em português
function dados_do_pais(country_code) {
    const pais = country_code.toUpperCase();
    fetch('/guigiusti.github.io/dev/jogos/estadosCapitais/bandeirasEstados/estadosBR.json')
    .then((response) => response.json())
    .then((json) => {for (key in json) {if (json[key].sigla2 === pais) {criar_texto("Capital: "+json[key].capital,"capital");
    return;}}})
    fetch('/guigiusti.github.io/dev/jogos/estadosCapitais/bandeirasEstados/estadosBR.json')
    .then((response) => response.json())
    .then((json) => {for (key in json) {if (json[key].sigla2 === pais) {criar_texto("Estado: "+json[key].estado,"estado");
    return;}}}) // A função criar_texto por fim é chamada para disponibilizar os dados encontrados
}

// Aqui os dados encontrados são transformados em elementos de texto
// Continuando escondidos, esperando o pressionar do botão HTML para serem revelados
function criar_texto (texto,id_texto) {
    var texto_na_tela = document.createElement("h2")
    var texto_na_tela_node = document.createTextNode(texto)
    var texto_na_tela_space = document.createElement("br")
    texto_na_tela.setAttribute("id",id_texto)
    texto_na_tela.appendChild(texto_na_tela_node)
    texto_na_tela.appendChild(texto_na_tela_space)
    document.getElementById('txt').hidden = true
    document.getElementById("txt").appendChild(texto_na_tela);
    // if (urlParams.get('alpha2')) {showhide()} // Código de teste, faz automaticamente aparecer o texto (cont...)
    // quando iniciado com o parâmetro "/?alpha2="
}