import styled from 'styled-components';

export const Footerdiv = styled.div`
    height: 25vh;
    width: 100%;
    background-color: #355c7d;
    background-color: rgb(36, 36, 36);
    display: flex;
    align-items: center;
    .footer {
        height: 80%;
        width: 100%;
        color: white;
        cursor: pointer;
        p{
            padding: 0;
            margin: 0;
            padding-top: 5px;
            color: rgb(223, 223, 223);
        }
        .bothfooter {
            width: 100%;
            height: 60%;
            display: flex;
            justify-content: center;
            .leftdiv {
                width: 15%;
                height: 100%;
                text-align: left;
            }
            .rightdiv {
                width: 15%;
                height: 100%;
                text-align: left;
            }
        }
        .copy {
            text-align: center;
        }
    }

    @media (min-width: 481px) and (max-width: 768px) {
        height: 40vh;
        .footer {
        height: 80%;
        width: 100%;
        color: white;
        cursor: pointer;
        p{
            padding: 0;
            margin: 0;
            padding-top: 5px;
            color: rgb(223, 223, 223);
        }
        .bothfooter {
            width: 100%;
            height: 60%;
            display: flex;
            justify-content: center;
            .leftdiv {
                width: 30%;
                height: 100%;
                text-align: left;
            }
            .rightdiv {
                width: 30%;
                height: 100%;
                text-align: left;
            }
        }
        .copy {
            text-align: center;
        }
    }   
        
    }

    @media (max-width: 480px) {
        height: 30vh;
        .footer{
            height: 100%;
            color: white;
            .bothfooter{
                height: 80%;
                flex-direction: column;
                .leftdiv{
                    width: 100%;
                    p{
                        color: white;
                    }
                }
                .rightdiv{
                    width: 100%;
                    p{
                        color: white;
                    }
                }
            }
        }
        .copy {
            height: 20%;
            p{
                color: white;
            }
        }
    }
`;