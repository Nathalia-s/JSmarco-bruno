const style = `<style>
    *{
        margin: 0;
        padding: 0;
        border: none;
    }
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #bdc3c7;
    }

    .element {
    box-sizing: border-box;    
    font-family: 'Comfortaa', cursive;
    background-color: #e74c3c ;
    text-align: center;
    padding-top: 3rem; 
    width: 40vw;
    min-width: 750px;
    height: 70vh;
    }
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', style)