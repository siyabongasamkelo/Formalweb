import styled from 'styled-components';
export const Headerstyle = styled.header`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav{
        width: 40%;
        ul{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            li{
                list-style: none;
                display: inline;
                a{
                    color: black;
                    text-decoration: none;
                    transition: 0.5s ease-in-out;
                    &:hover{
                        color: #007fff;
                    }
                }
            }
        }
    }
    svg{
        display: none;
        fill: rgb(46, 46, 46);
    }

    @media (min-width: 481px) and (max-width: 768px) {
        nav{
            background-color: red;
            ul{
                display: none;
            }
        }
        svg{
            display: block;
        }
    }



    @media (max-width: 480px) {
        nav{
            background-color: red;
            ul{
                display: none;
            }
        }
        svg{
            display: block;
        }
    }
`;