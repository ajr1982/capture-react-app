import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        }
        html{
            @media (max-width: 1700px){
                font-size:80%;
            }
        }
        body{
            background: #1b1b1b;
            font-family: 'Inter', sans-serif;
        }
        button{
            font-weight: bold;
            font-size: 1.1rem;
            cursor: pointer;
            padding: 1rem 2rem;
            border: 3px solid #23d997;
            background: transparent;
            color: #ffffff;
            transition: all 0.5s ease;
            font-family: 'Inter', sans-serif;
            &:hover{
                background-color: #23d997;
            }
        }
        h2{
            font-weight: lighter;
            font-size: 4rem;
        }
        h3{
            color: #ffffff;
        }
        h4{
            font-size: 2rem;
            font-weight: bold;
            
        }
        span{
            font-weight: bold;
            color: #23d997;
        }
        a{
            font-size: 1.1rem;
        }
        p{
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1.4rem;
            line-height: 150%;

        }

`;
export default GlobalStyle;
