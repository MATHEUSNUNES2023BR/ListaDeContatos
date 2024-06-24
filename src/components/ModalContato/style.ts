import { styled } from "styled-components";

export const ContainerContato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`
export const ModalNome = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span{
        width: 10%;
        font-size: 2rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    input{
        width: 60%;
        height: 50px;
        border-radius: 10px;
        font-size: 1.4rem;
    }
    @media (max-width: 992px){
        span{
            font-size: 4vw;
        }
    }
    @media (max-width: 576px){
        span{
            font-size: 4.5vw;
            width:25%;
        }
        input{
            width: 70%;
            height: 34px;
        }
    }

`
export const ModalEmail = styled(ModalNome)`
`
export const ModalTelefone = styled(ModalNome)`
`
export const ModalButtonContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const ModalButtonSalvar = styled.button`
    width: 40%;
    font-size: 1.8rem;
    background-color: #22C55E;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    @media (max-width: 992px){
        font-size: 1.5rem;
    }
    @media (max-width: 576px){
        width: 45%;
        font-size: 5.2vw;
    }
`
export const ModalButtonCancelar = styled(ModalButtonSalvar)`
    background-color: #1F2937;
`