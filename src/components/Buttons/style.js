import styled from "styled-components";

export const Wrapper = styled.div` 
.submitbtn {
    margin:20px;
    color: #1f4349!important;
    background-color: #fbb800;
    border-color: #fbb800;
    border-radius: 50rem!important;
    width: 150px;
    justify-content: space-between;
    display:flex;
    align-items: center;
    padding:8px 12px;
    font-size: 13px;
    font-weight: bold;
}
.submitbtn:hover{
    color: #212529;
    background-color: #d59c00;
    border-color: #c89300;
}
.prevbtn {
    margin:20px;
    color: #1f4349!important;
    background-color: transparent;
    border-color: #848d9a;
    border-radius: 50rem!important;
    width: 150px;
    justify-content: space-between;
    display:flex;
    align-items: center;
    padding:8px 12px;
    font-size: 13px;
    font-weight: bold;
}
.prevbtn:hover{
    color: #212529;
    background-color: #ececec;
}
.btn-sec{
    display: flex;
    justify-content:center;
}
.prevbtn:focus {
    box-shadow: none;
}
.submitbtn:focus{
    box-shadow: none;
}
`