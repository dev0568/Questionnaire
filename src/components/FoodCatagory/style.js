import styled from "styled-components";


export const Wrapper = styled.div`
    .Btn:focus{
        box-shadow:none;
    }
    .wrapping{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
    }
    .foodbtn{
        background-color: #e5e9eb!important;
        border-color: #e5e9eb!important;
        color:#4f646d!important;
    }
    .foodbtn:focus{
        box-shadow: none;
    } 
    .foodbtn:hover{
        background-color:#c5cccf!important;
    } 

    .foodbtn.active{
        background-color: #008ba1 !important;
        color: #ffffff !important;

    }
`