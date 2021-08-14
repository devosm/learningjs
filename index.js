let scripts = ["forloop","logdata","logicaloperator","math","recapaftergame","shift"]
let scriptsEl = document.getElementById("scripts-el")
let plainTextEl = document.getElementById("plainText-el")

//Adds scripts array to dropdown in index.html
for(i = 0; i < scripts.length; i ++){
    let allScripts = scripts[i]
    scriptsEl.innerHTML += "<option value=" + "\"" + allScripts + "\"" + ">" + allScripts + "</option>"
}

var imported = document.createElement('script');
imported.src = './Learned Scripts/forloop.js';
plainTextEl.innerText = imported