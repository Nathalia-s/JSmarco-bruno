const pathMexicano = '/imagem/mexicano.png'

const mexicano = Character`
    width: 25%;
    ${pathMexicano}
`
const WrapperCharacters = (css, children) => (`
        <div style= "${css}">${children}</div>
    `
)

const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    ${mexicano + mexicano + mexicano}
`