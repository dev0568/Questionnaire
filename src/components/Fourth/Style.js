import styled from "styled-components";

export const Wrapper = styled.div`
    h1{
        color: #008ba1 !important;
        font-weight: 500;
    }
    .subheading{
        color: #008ba1 !important;
        text-align: left;
        font-size: 12px;
    }
    .para{
        color: #000 !important;
        text-align: left;
        font-size: 10px !important;
    }
    .viewbtn {
        color: #212529;
        background-color: #fbb800;
        border-color: #fbb800;
        border-radius: 50rem!important;
        width: 100px;
        justify-content: space-between;
        display:flex;
        align-items: center;
        padding:8px 12px;
        font-size: 7px;
        font-weight: bold;
        text-align: left;
    }
    .viewbtn:hover{
        color: #212529;
        background-color: #d59c00;
        border-color: #c89300;
    }
    .viewbtn:focus{
        outline: none;
        box-shadow: none;
    }
`