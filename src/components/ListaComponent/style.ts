import { styled } from "styled-components";

export const ListaContainer = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 1.1fr 2.5fr 1fr 1.4fr;
    gap: 20px;
    width: 90%;
    height: 10vh;
    margin: 0 auto;
    align-items: center;
    background-color: #F9FAFB;
    margin-top: 30px;
    border-bottom: 1px solid gray;
    box-shadow: 2px 1px 2px #3B82F6;
    @media(max-width: 1080px){
        width: 90%;
        gap: 5px;
        grid-template-columns: 0.7fr 1.1fr 2.3fr 1fr;
        grid-template-rows: auto auto;
        height: 18vh;
    }
    @media(max-width: 700px){ 
        width: 100%;
        display: grid;
        padding: 0;
        align-content:center;
        grid-template-columns: 0.2fr 1fr 1fr;
        grid-template-rows: repeat(3, 50px);
    }
    @media(max-width: 576px){ 
        grid-template-rows: repeat(3, 40px);
        height: 180px;
    }
`
export const ListaFoto= styled.img`
    width: 72px;
    margin: 0 auto;
    padding: 10px;
    background-color: #22C55E;
    border-radius: 50%;
    @media(max-width: 700px){ 
        width: 56px;
        margin: 0;
        grid-row: 1/3;
        grid-column: 3;
        margin-left: auto;
    }
`

export const ListaNome= styled.div`
    .iconimg{
        display: block;
        width: 1.5rem;
        margin: 0 auto;
        margin-bottom: 15px;
    }
    input{
        width: 100%;
        text-align: center;
        border: none;
        background: transparent;
        font-size: 1rem;
        color: #1F2937;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bolder;

    }
    @media(max-width: 700px){ 
        display: grid;
        grid-template-columns: 0.1fr 1fr;
        align-content: center;
        align-items: center;
        padding-left: 5px;
        .iconimg{
            margin: 0;
            width: 1.2rem;
            display: inline;
        }
        input{
            width: 80%;
            text-align: start;
        }
        margin: 0;
        height: 40px;
        grid-row: 1;
        grid-column: 1 / -1;
    }
`
    
export const ListaEmail= styled(ListaNome)`
 @media(max-width: 700px){ 
        margin: 0;
        grid-column: 1 / -1;
        grid-row: 2;
    }
`
export const ListaTelefone= styled(ListaNome)`
 @media(max-width: 700px){ 
        width: 80%;
        margin: 0;
        grid-column: 1 / -1;
        grid-row: 3;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 1080px){        
        display: grid;
        width: 40%;
        margin-left: auto;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-column: 1 / -1;
    }
    @media(max-width: 700px){ 
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        margin-left: auto;
        grid-column: 3;
        grid-row: 3;
        margin-bottom: 5px;
    }
`
export const ListaButtonEditar = styled.button`
    width: 6vw;
    margin: 0 auto;
    background-color: #EB6B29;
    font-size: 0.8rem;
    padding: 0.6vw;
    border: none;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    @media(max-width: 1080px){ 
        width: 80px;
        padding: 10px;
    }
    @media(max-width: 700px){ 
        width: 75px;
    }
    @media(max-width: 370px){ 
        width: 65px;
        font-size: 0.75rem;
    }
    
`
export const ListaButtonRemover = styled(ListaButtonEditar)`
    background-color:#EB1414;
`
export const ListaButtonSalvar= styled(ListaButtonEditar)`
    background-color: #22C55E;
`
export const ListaButtonCancelar= styled(ListaButtonEditar)`
    background-color: #1F2937;
`