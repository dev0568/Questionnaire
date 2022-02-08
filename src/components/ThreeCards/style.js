import styled from "styled-components";


export const Wrapper = styled.div`
    .subhead1{
        color: #008ba1!important;
        // font-size:12px;
        // margin-bottom: 10   px;

    }
    p{
        color: #8accd6!important;
        font-size:12px;
        margin-bottom: 10   px;

    }
    .SelectButton{
        color: #212529;
        background-color: #ffffff;
        border-color: #8accd6;
        font-size: 12px;
        margin: 3px;
    }
    .SelectButton:hover{
        color: #212529;
        background-color: #8accd6;
        border-color: #8accd6;
    }
    .SelectButton:focus{
        outline: none !important;
        box-shadow: none;
        border: none
    }

    .tick{
        font-size: 25px;
        color: #8accd6;
        border: none;
    }
    .tick:focus{
        outline: none !important;
        box-shadow: none;
        border: none;
        background: none;
    }
`