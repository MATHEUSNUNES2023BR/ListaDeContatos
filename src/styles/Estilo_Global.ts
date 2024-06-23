import styled, { createGlobalStyle } from "styled-components";
import { Modal } from "../containers/ListaDeContatos/style";
const EstiloGlobal = createGlobalStyle`
    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        @media(max-width: 820px){
            font-size: 15px;
        }
        @media(max-width: 700px){
            font-size: 18px;
        }
        @media(max-width: 440px){
            font-size: 15px;
        }
    }
`
export const ContainerGlobal = styled.div<Modal>`
    width: 100vw;
    height: 100vh;
    background-color: ${({ ativo }) => ativo ? 'rgba(0,0,0,0.4)' : 'none'};
`
export default EstiloGlobal