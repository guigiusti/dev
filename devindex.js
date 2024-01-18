fetch('/guigiusti.github.io/dev/README.md')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});