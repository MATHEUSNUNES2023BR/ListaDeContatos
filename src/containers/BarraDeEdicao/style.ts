import { styled } from "styled-components";

export const BarraContainer = styled.div`
    width: 100%;
    display: grid;
    height: 104px;
    justify-items: center;
    grid-template-columns: 1fr 1.2fr 1fr;
    align-items: center;
    border-bottom: 1px solid #F3F4F6;
    background-color: #F3F4F6;
    @media (max-width: 700px){
        grid-template-columns: 1.5fr 1.5fr 0.8fr;
    }
    @media (max-width: 576px){
        grid-template-columns: 0.8fr 1.5fr;
    }
`