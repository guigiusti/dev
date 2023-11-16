function arquivoCSV(){
    fetch('cidade_in.json')
    .then((response) => response.json())
    .then((json) => {const keys = Object.keys(json);
        const len = keys.length;
        const rnd = Math.floor(Math.random() * len);
        selecionar_video(json[rnd][' link'])});}
function selecionar_video(link) {
    const link_yt = link
    setTimeout(5)
    console.log(link_yt)
    const links = link_yt;
    const urlParams = new URLSearchParams(links);
    const link_send = "https://youtube.com/embed/" + urlParams.get('https://www.youtube.com/watch?v') + "?loop=1&controls=0&playlist=" + urlParams.get('https://www.youtube.com/watch?v');
    atualiza_pagina(link_send)
}
function atualiza_pagina(link_recieve){
    document.getElementById("button_update").onclick = function () {
        window.open(link_recieve, "_blank");location.reload();
    };
}
arquivoCSV()