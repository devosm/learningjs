let scripts = ["forloop","logdata","logicaloperator","math","recapaftergame","shift"]
let scriptsEl = document.getElementById("scripts-el")

//Adds scripts array to dropdown in index.html
for(i = 0; i < scripts.length; i ++){
    let allScripts = scripts[i]
    scriptsEl.innerHTML += "<option value=" + "\"" + allScripts + "\"" + ">" + allScripts + "</option>"
    console.log(allScripts)
}
