window.location.pathname = "/"
fetch('/guigiusti.github.io/textosbase/textos-index.html')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("devtxt").innerHTML=marked.parse(m)});