import contact from "../images/contact.jpg"
import styled from 'styled-components';

export const Contactstyled = styled.div`
    height: 100%;
    width: 100%;
    .bothdiv{
        height: 90%;
        width: 100%;
        .coverdiv{
            height: 100%;
            width: 100%;
            .box{
                height: 100%;
                width: 100%;
                .row1{
                    height: 50%;
                    width: 100%;
                    display: flex;
                    .leftdiv{
                        width: 70%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        div{
                            width: 60%;
                            margin-top: 5%;
                        }
                    }
                    .rightdiv{
                        
                    }
                }
                .row2{
                    height: 50%;
                    width: 100%;
                    display: flex;
                    .leftdiv{
                        width: 70%;
                        height: 100%;
                        background-image: url(${contact});
                        background-size: cover;
                        background-position: center;
                        h2{
                            margin-top: 30%;
                            margin-left: 5%;
                            color: white;
                        }
                        p{
                            color: white;
                            margin-left: 5%;
                        }
                    }
                    .rightdiv{
                        width: 30%;
                        height: 100%;
                        background-color: #3c3f47;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .text{
                            width: 70%;
                            height: 30%;
                            margin-top: 10%;
                            p{
                                color: rgb(220, 220, 220);
                            }
                            h3{
                                color: rgb(225, 225, 225);
                            }
                            .socials{
                                width: 100%;
                                height: 30%;
                                display: flex;
                                align-items: center;
                                svg{
                                    height: 25px;
                                    fill: rgb(220, 220, 220);
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
            }
        }
    }

    @media (min-width: 481px) and (max-width: 768px) {
        .bothdiv{
        height: 90%;
        width: 100%;
        .coverdiv{
            height: 100%;
            width: 100%;
            .box{
                height: 100%;
                width: 100%;
                .row1{
                    height: 50%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .leftdiv{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        div{
                            width: 80%;
                            margin-top: 5%;
                        }
                    }
                    .rightdiv{
                        
                    }
                }
                .row2{
                    height: 50%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .leftdiv{
                        width: 100%;
                        height: 100%;
                        
                    }
                    .rightdiv{
                        width: 100%;
                        height: 100%;
                        background-color: #3c3f47;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .text{
                            width: 80%;
                            height: 30%;
                            margin-top: 10%;
                            .socials{
                               
                            }
                        }
                    }
                }
            }
        }
    }   
    }

    @media (max-width: 480px) {
        .bothdiv{
        height: 90%;
        width: 100%;
        .coverdiv{
            height: 100%;
            width: 100%;
            .box{
                height: 100%;
                width: 100%;
                .row1{
                    height: 50%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .leftdiv{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        div{
                            width: 100%;
                            margin-top: 5%;
                        }
                    }
                    .rightdiv{
                        
                    }
                }
                .row2{
                    height: 50%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    .leftdiv{
                        width: 100%;
                        height: 100%;
                        background-image: url(${contact});
                        background-size: cover;
                        background-position: center;
                        h2{
                            margin-top: 30%;
                            margin-left: 5%;
                            color: white;
                        }
                        p{
                            color: white;
                            margin-left: 5%;
                        }
                    }
                    .rightdiv{
                        width: 100%;
                        height: 100%;
                        background-color: #3c3f47;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .text{
                            width: 70%;
                            height: 30%;
                            margin-top: 10%;
                            p{
                                color: rgb(220, 220, 220);
                                text-align: left;
                            }
                            h3{
                                color: rgb(225, 225, 225);
                            }
                            .socials{
                                width: 100%;
                                height: 30%;
                                display: flex;
                                align-items: center;
                                margin-top: 3%;
                                svg{
                                    height: 25px;
                                    fill: rgb(220, 220, 220);
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
            }
        }
    }   
    }
`;