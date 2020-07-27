//const stateItems = [true, false, false]

//function showItems(stateItems) {
//  const items =  stateItems.map(state => {
//       if(state) {
//           return  itemActive
//       }
//       return item
//    })

//    console.log(items.join(' '))

 //  return items.join('')
//}


//const Action = (css) =>(
//    `<li> style= "${css}"></li>`
//)

const Item = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)

const Active = (css, content = '') => (
    `<li style="${css}">${content}</li>`
)

const Slide = (css, content = '') => (
    `<ul style="${css}">${content}</ul>`
)

const item = Item`
list-style:none;
height: calc(var(--line-height)*4);
width: calc(var(--line-height)*4);
border-radius: 50%;
background-color : var(--color-base);
`
const  active = Active`
list-style:none;
height: calc(var(--line-height)*2);
width: calc(var(--line-height)*2);
border-radius: 50%;
background-color: #e74c3c;
`

const slide = Slide`
  display:flex;
  align-items:center;
  justify-content: space-between;
  position: relative;
  width: 80%;
  height: var(--line-height);
  background-color: var(--color-base);
  margin-top: auto;
  ${item + item +item}
  `

