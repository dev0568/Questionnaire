import styled from "styled-components";

export const Wrapper = styled.div`

    .select__option--is-focused {
        background-color: #cde4e7!important;
        color: #ffffff;
    }
    .select__option--is-selected{
        background-color: #8accd6!important;
    }
    .select__single-value{
        color: #000;
    }
    .wrap{
        max-width: 767px;
        // padding: 0 20px;
        margin: 0 auto;
    }
    .basic-multi-select{
        margin-bottom: 20px;
    }
    .foodbtn{
        background-color: #e5e9eb!important;
        border-color: #e5e9eb!important;
        color:#4f646d!important;
    }
    .select__control--is-selected{   
        background-color: red;
    }
`