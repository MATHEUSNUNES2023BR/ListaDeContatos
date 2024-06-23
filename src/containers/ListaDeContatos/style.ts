import { styled } from "styled-components";
export type Modal = {
    ativo: boolean;
}
export const ContainerContato = styled.div<Modal>`
    margin-top: 20px;
    height: 81vh;
    overflow-y: scroll;
    padding: 10px;
    background-color: white;
    @media (max-width: 700px){
        padding: 8px;
    }
    position: relative;
    z-index: ${({ ativo }) => ativo ? -1 : 1};
`
