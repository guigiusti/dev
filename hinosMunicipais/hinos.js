function arquivoCSV(){
    fetch('cidade_in.json')
    .then((response) => response.json())
    .then((json) => {const keys = Object.keys(json);
        const len = keys.length;
        const rnd = Math.floor(Math.random() * len);
        atualiza_pagina(json[rnd][' link'])});}
function atualiza_pagina(link_recieve){
    document.getElementById("button_update").onclick = function () {
        window.open(link_recieve, "_blank");location.reload();
    };
}
arquivoCSV()