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
 
 const textTitle = 'Difficult'
 const pathMexicano = '/imagem/mexicano.png'
 //const textSmall = 'texto pequeno'

 //tagged template string
    const title = Title `
    color: #34495e;  
    font-size: 2.5rem; 
    margin-bottom: 3rem;
    ${textTitle} 
     
 `
const mexicano = Character`
    width: 30%;
    margin-left:1rem;
    ${pathMexicano}
`

 root.insertAdjacentHTML('beforeend', title)

 root.insertAdjacentHTML('beforeend', mexicano)
 root.insertAdjacentHTML('beforeend', mexicano)
 root.insertAdjacentHTML('beforeend', mexicano)