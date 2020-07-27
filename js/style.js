const style = `<style>
   :root{
       --line-height:10px;
       --color-base: #182C61;
   } 
   
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
    display: flex;
    flex-direction: column;
    align-items:center;
    box-sizing: border-box;    
    font-family: 'Comfortaa', cursive;
    background-color: #e74c3c;
    text-align: center;
    width: 40vw;
    min-width: 750px;
    height: 70vh;
    padding-top: 3rem; 
    padding-bottom: 3rem;
    }
</style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', style)