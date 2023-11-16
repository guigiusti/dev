function arquivoCSV(){
    fetch('cidade_in.json')
    .then((response) => response.json())
    .then((json) => {const keys = Object.keys(json);
        const len = keys.length;
        const rnd = Math.floor(Math.random() * len);
        selecionar_video(json[rnd][' link']);}) 
}
function selecionar_video(link){
    const links = link;
    console.log(links)
    const urlParams = new URLSearchParams(links);
    link = "https://youtube.com/embed/" + urlParams.get('https://www.youtube.com/watch?v') + "?loop=1&controls=0&playlist=" + urlParams.get('https://www.youtube.com/watch?v');
    const video = document.getElementById("video"); 
    video.src = link;
    return;
}
arquivoCSV()