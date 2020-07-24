//pega a tag no html e adiciona um texto

const root = document.querySelector('.element')
//const title = ' <h1>Difficult</h1>'
//root.insertAdjacentHTML('beforeend', title)








// função que cria sozinha e passa parametros


//function newElement(tag, content){
 //const title = `<${tag}>${content}</${tag}>`

 //root.insertAdjacentHTML('beforeend', title)
//}

 //newElement('h2', 'iasy')
 //newElement('p', 'Meu nome é douglas')






 //array com caracteristicas css no js 
 // e que usa o outro index.js
 
 const textTitle = 'Bob'
 const textSmall = 'texto pequeno'

// tagged template string
 const title = Title `
     color: red;  //primeira posição do css
     ${textTitle}  // primeira posição de texto
     font-size: 30px;  // segunda posição do css
     ${textSmall}  
 `
 root.insertAdjacentHTML('beforeend', title)