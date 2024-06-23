import { styled } from "styled-components";
import { Modal } from "../ListaDeContatos/style";
export const ContainerModal = styled.div<Modal>`
    display: ${({ativo}) => ativo ? 'block' : 'none'};
    width:40%;
    top: 10vh;
    left: 30%;
    height: 60vh;
    background-color: #FFFFFF;
    position: absolute;
    border-radius: 10px;
    border: 3px solid black;
    z-index: 99;
    @media(max-width: 992px){
        width:70%;
        left: 15%;
    }
    @media(max-width: 576px){
        width:80%;
        top: 17vh;
        left: 10%;
    }
`