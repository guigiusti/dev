fetch('/guigiusti.github.io/dev/dev.md')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("devtxt").innerHTML=marked.parse(m)});