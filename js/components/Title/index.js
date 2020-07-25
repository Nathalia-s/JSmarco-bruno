//função para apresentar variaveis na tela 
// usando tamplate string 

function Title (css, textContent){
    console.log(css)

    return `<h1 style= "${css[0]}${css[1]}">
    
                 ${textContent}
                
            </h1>`
}