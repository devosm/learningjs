let scripts = ["forloop","logdata","logicaloperator","math","recapaftergame","shift"]
let scriptsBtn = document.getElementById("script-btn")
let plainTextEl = document.getElementById("plainText-el")

//Adds scripts array to dropdown in index.html
for(i = 0; i < scripts.length; i ++){
    let allScripts = scripts[i]
    scriptsBtn.innerHTML += "<button>" + allScripts + "</button>"
}

/* var imported = document.createElement('script');
imported.src = './Learned Scripts/forloop.js'; */