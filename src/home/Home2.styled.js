import guy from "../images/guy.jpg"
import plan from "../images/plan.jpg"

import styled from 'styled-components';

export const Home2styled = styled.div`
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
                    width: 50%;
                    background-image: url(${guy});
                    background-position: center;
                    background-size: cover;
                    display: flex;
                    align-items: flex-end;
                    .text{
                        height: 70%;
                        width: 40%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-image: linear-gradient(rgba(60, 63, 71,0.8),rgba(60, 63, 71,0.8));
                        div{
                            height: 80%;
                            width: 80%;
                            h3,p{
                                color: white;
                            }
                        }
                    }
                }
                .rightdiv{
                    height: 100%;
                    width: 50%;
                    display: flex;
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 60%;
                        margin-left: 10%;
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
            .col2{
                height: 50%;
                width: 100%;
                display: flex;
                background: rgb(60, 63, 71);
                .leftdiv{
                    height: 100%;
                    width: 50%;
                    display: flex;
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 60%;
                        margin-left: 10%;
                        h1,p{
                            color: white;
                        }
                        p,button{
                            margin-top: 5%;
                            text-align: justify;
                        }
                    }
                }
                .rightdiv{
                    height: 100%;
                    width: 50%;
                    background-image: url(${plan});
                    background-position: center;
                    background-size: cover;
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
                    align-items: flex-end;
                    .text{
                        height: 60%;
                        width: 40%;
                        div{
                            height: 80%;
                            width: 80%;
                    
                        }
                    }
                }
                .rightdiv{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 80%;
                        margin-left: 10%;
                        button{
                            margin-top: 5%;
                            display: none;
                        }
                    }
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
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 80%;
                        margin-left: 10%;
                
                    }
                }
                .rightdiv{
                    height: 100%;
                    width: 100%;
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
                    background-image: url(${guy});
                    background-position: center;
                    background-size: cover;
                    display: flex;
                    align-items: flex-end;
                    .text{
                        height: 70%;
                        width: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-image: linear-gradient(rgba(60, 63, 71,0.8),rgba(60, 63, 71,0.8));
                        div{
                            height: 80%;
                            width: 90%;
                            h3,p{
                                color: white;
                            }
                        }
                    }
                }
                .rightdiv{
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 80%;
                        margin-left: 10%;
                        h1,p{
                            color: white;
                        }
                        p{
                            margin-top: 5%;
                            text-align: justify;
                        }
                        button{
                            margin-top: 5%;
                            display: none;
                        }
                    }
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
                    align-items: center;
                    .text{
                        height: 80%;
                        width: 80%;
                        margin-left: 10%;
                        h1,p{
                            color: white;
                        }
                        p,button{
                            margin-top: 5%;
                            text-align: justify;
                        }
                    }
                }
                .rightdiv{
                    height: 100%;
                    width: 100%;
                    background-image: url(${plan});
                    background-position: center;
                    background-size: cover;
                }
            }
        }
    }
    }
`;