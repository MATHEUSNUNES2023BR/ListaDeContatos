import { createGlobalStyle } from "styled-components";

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
export default EstiloGlobal