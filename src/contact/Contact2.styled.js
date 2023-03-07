import start from "../images/start.jpg"
import styled from 'styled-components';

export const Contact2styled = styled.div`
    height: 100%;
    width: 100%;
    .bothdiv{
        height: 100%;
        width: 100%;
        .coverdiv{
            height: 100%;
            width: 100%;
            .col1{
                height: 50%;
                width: 100%;
                display: flex;
                background-color: rgb(60, 63, 71);
                .leftdiv{
                    height: 100%;
                    width: 100%;
                    background-image: url(${start});
                    background-position: center;
                    background-size: cover;
                    
                }
            }
            .col2{
                height: 50%;
                width: 100%;
                display: flex;
                background: rgb(60, 63, 71);
                .leftdiv{
                    height: 100%;
                    width: 50%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 60%;
                        margin-left: -10%;
                        h1,p{
                            color: white;
                            padding-left: 5%;
                        }
                        svg{
                            fill: white;
                        }
                        div{
                            display: flex;
                            width: 80%;
                            margin-top: 5%;
                        }
                        .socials{
                            svg{
                                height: 30px;
                                transition: 0.5s ease-in-out;
                                cursor: pointer;
                                &:hover{
                                    fill: #007fff;
                                }
                            }
                        }
                    }
                        
                    }
                }
                .rightdiv{
                    height: 100%;
                    width: 50%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 60%;
                        margin-left: -20%;
                        h1,p{
                            color: white;
                        }
                        p{
                            margin-top: 5%;
                            text-align: justify;
                        }
                        button{
                            margin-top: 5%;
                        }
                    }
                }
            }
        }

        @media (min-width: 481px) and (max-width: 768px) {
            .bothdiv{
        height: 100%;
        width: 100%;
        .coverdiv{
            height: 100%;
            width: 100%;
            .col1{
                height: 50%;
                width: 100%;
                display: flex;
                flex-direction: column;
                background-color: rgb(60, 63, 71);
                .leftdiv{
                    height: 100%;
                    width: 100%;
                    background-image: url(${start});
                    background-position: center;
                    background-size: cover;
                }
            }
            .col2{
                height: 50%;
                width: 100%;
                display: flex;
                flex-direction: column;
                background: rgb(60, 63, 71);
                .leftdiv{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 80%;
                        margin-left: 0%;
                        .socials{
                            svg{
                                height: 30px;
                            }
                        }
                    }
                    
                    }
                }
                .rightdiv{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 80%;
                        margin-left: 0%;
                        h1,p{
                            color: white;
                        }
                        p{
                            margin-top: 5%;
                            text-align: justify;
                        }
                        button{
                            margin-top: 5%;
                        }
                    }
                }
            }
        }
        }
    
        @media (max-width: 480px) {
            .bothdiv{
            height: 100%;
            width: 100%;
            .coverdiv{
                height: 100%;
                width: 100%;
                .col1{
                    height: 50%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: rgb(60, 63, 71);
                    .leftdiv{
                        height: 100%;
                        width: 100%;
                        background-image: url(${start});
                        background-position: center;
                        background-size: cover;
                    }
                }
                .col2{
                    height: 50%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    background: rgb(60, 63, 71);
                    .leftdiv{
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                        .text{
                            height: 80%;
                            width: 90%;
                            margin: 0;
                            h1,p{
                                color: white;
                                padding-left: 5%;
                            }
                            svg{
                                fill: white;
                            }
                            div{
                                display: flex;
                                width: 100%;
                                margin-top: 5%;
                            }
                            .socials{
                                svg{
                                    height: 30px;
                                    transition: 0.5s ease-in-out;
                                    cursor: pointer;
                                    &:hover{
                                        fill: #007fff;
                                    }
                                }
                            }
                        }
                            
                        }
                    }
                    .rightdiv{
                        height: 100%;
                        width: 100%;
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                        .text{
                            height: 80%;
                            width: 90%;
                            margin: 0;
                            margin-top: -10%;
                            h1{
                                text-align: left;
                            }
                        }
                    }
                }
            }   
        }
`;