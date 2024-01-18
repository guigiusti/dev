fetch('/guigiusti.github.io/dev/README.md')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("devtxt").innerHTML=marked.parse(m)});