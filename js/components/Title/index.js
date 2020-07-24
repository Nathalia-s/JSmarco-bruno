//função para apresentar variaveis na tela 
// usando tamplate string 

function Title (css, textContent, smallContent){
    console.log(css)

    return `<h1 style= "${css[0]}${css[1]}">
    
                 ${textContent}
                <small>${smallContent}</small

             </h1>`
}