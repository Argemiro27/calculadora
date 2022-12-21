import styled from "styled-components";

export const Container = styled.div `

    .operation-keys{
        background-color: #340769;
    }

    .result{
        border-radius: 5px;
        background-color: #080808;
        margin-bottom: 15px;
        padding: 5px;
        min-height: 25px;
        font-size: 15px;
        display: flex;
        justify-content: right;
    }

    .calculator{
        display: block;
        max-width: cover;
        position: absolute;
        padding: 30px;
        left: 37%;
        top: 10%;
        border-top: 40px solid #080808;
        border-left: 5px solid #080808;
        border-right: 5px solid #080808;
        border-bottom: 40px solid #080808;
        border-radius: 20px;
        background-color: #1a1a1a;
        color: #fff;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        box-shadow: 3px 4px 5px 0px rgba(0,0,0,0.61);
    }
    .equal{
        background-color: #340769;
    }
`

