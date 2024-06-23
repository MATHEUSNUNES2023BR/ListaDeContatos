import { styled } from "styled-components";

export const ListaContainer = styled.div`
    display: flex;
    width: 80%;
    height: 6rem;
    margin: 0 auto;
    padding-left: 15px;
    align-items: center;
    background-color: #F9FAFB;
    margin-top: 30px;
    border-bottom: 1px solid gray;
    box-shadow: 2px 1px 2px #3B82F6;
    .iconimg{
        width: 20px;
        margin-right: 5px;
    }
`

export const ListaFoto= styled.img`
    height: 80%;
    padding: 10px;
    margin-right: 2rem;
    background-color: #22C55E;
    border-radius: 50%;
`
export const ListaNome= styled.input`
    border: none;
    width: 15%;
    margin-right: 4rem;
    background: transparent;
    font-size: 1.1vw;
    color: #1F2937;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bolder;
    border: none;
    outline: none;
`
export const ListaEmail= styled(ListaNome)`
    width: 25%;
`
export const ListaTelefone= styled(ListaNome)`
`