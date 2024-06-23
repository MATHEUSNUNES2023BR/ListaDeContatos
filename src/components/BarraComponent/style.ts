import { styled } from "styled-components";

export const BarraIcon = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 2.5rem;
    }
    h1{
        margin-left: 20px;
        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bolder;
        color: #1F2937;
    }
`
export const BarraSearch = styled.input`
    width: 60%;
    height: 40px;
    border-radius: 10px;
    font-size: 1.3rem;
    padding-left: 10px;
    color: #1F2937;
    border: 2px solid #1F2937;
    &:focus{
        border-color: #3B82F6; 
        outline: none; 
    }
`
export const BarraAdd = styled.button`
    font-size: 1rem;
    padding: 0.75rem;
    color: white;
    border: none;
    background-color: #3B82F6;
    border-radius: 15px;
    cursor: pointer;
`
