import worker from "../images/worker.jpg"
import constt from "../images/constt.jpg"
import construction from "../images/construction.jpg"
import done from "../images/done.jpg"
import done2 from "../images/done2.jpg"

import styled from 'styled-components';

export const Home3styled = styled.div`
    height: 100%;
    width: 100%;
    .bothdiv{
        height: 100%;
        width: 100%;
        .coverdiv{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .text{
                height: 15%;
                display: flex;
                justify-content: space-between;
                display: none;
                .leftdiv{
                    width: 40%;
                    height: 100%;
                }
                .rightdiv{
                    width: 30%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    div{
                        button{
                            margin-top: 5%;
                        }
                    }
                }
            }
            .pics{
                height: 80%;
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                .row1{
                    height: 100%;
                    width: 30%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .col1{
                        height: 28.75%;
                        background-color: #007fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        div{
                            height: 80%;
                            width: 80%;
                            h3 ,p{
                                color: white;
                            }
                        }
                    }
                    .col2{
                        height: 40%;
                        background-image: url(${worker});
                        background-position: center;
                        background-size: cover;
                    }
                    .col3{
                        //height: 25%;
                        height: 28.75%;
                        background: rgb(60, 63, 71);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        div{
                            height: 80%;
                            width: 80%;
                            h3 ,p{
                                color: white;
                            }
                        }
                    }
                }
                .row2{
                    height: 100%;
                    width: 30%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .col1{
                        height: 59.25%;
                        background-image: url(${constt});
                        background-position: center;
                        background-size: cover;
                    }
                    .col2{
                        height: 39.25%;
                        background-image: url(${done});
                        background-position: center;
                        background-size: cover;
                        display: flex;
                        justify-content: start;
                        align-items: flex-end;
                        .bhala{
                            background-image: linear-gradient(rgba(0, 127, 255,0.7),rgba(0, 127, 255,0.7)) ;
                            height: 50%;
                            width: 70%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            div{
                                height: 90%;
                                width: 70%;
                                h3 ,p{
                                    color: white;
                                }
                            }
                        }
                    }
                    
                }
                .row3{
                    height: 100%;
                    width: 30%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .col1{
                        height: 33.75%;
                        background-image: url(${done2});
                        background-position: center;
                        background-size: cover;
                    }
                    .col2{
                        height: 30%;
                        background-color: #007fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        div{
                            height: 80%;
                            width: 80%;
                            h3 ,p{
                                color: white;
                            }
                        }
                    }
                    .col3{
                        height: 33.75%;
                        background-image: url(${construction});
                        background-position: center;
                        background-size: cover;
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
            .text{
                .leftdiv{
                    
                }
                .rightdiv{
                   
                }
            }
            .pics{
                .row1{
                    .col1{
                       
                        div{
                           
                        }
                    }
                    .col2{
                       
                    }
                    .col3{
                        //height: 25%;
                        
                    }
                }
                .row2{
                    .col1{
                        height: 59.25%;
                        background-image: url(${constt});
                        background-position: center;
                        background-size: cover;
                    }
                    .col2{
                        height: 39.25%;
                        background-image: url(${done});
                        background-position: center;
                        background-size: cover;
                        display: flex;
                        justify-content: start;
                        align-items: flex-end;
                        .bhala{
                            background-image: linear-gradient(rgba(0, 127, 255,0.7),rgba(0, 127, 255,0.7)) ;
                            height: 50%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            div{
                                height: 90%;
                                width: 70%;
                                h3 ,p{
                                    color: white;
                                }
                            }
                        }
                    }
                    
                }
                .row3{
                    .col1{
                       
                    }
                    .col2{
                        
                        div{
                           
                        }
                    }
                    .col3{
                        
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
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .text{
                height: 15%;
                display: flex;
                justify-content: space-between;
                display: none;
                .leftdiv{
                    width: 40%;
                    height: 100%;
                }
                .rightdiv{
                    width: 30%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    div{
                        button{
                            margin-top: 5%;
                        }
                    }
                }
            }
            .pics{
                height: 80%;
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                .row1{
                    height: 100%;
                    width: 30%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .col1{
                        height: 28.75%;
                        background-color: #007fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        div{
                            height: 80%;
                            width: 80%;
                            h3 ,p{
                                color: white;
                                display: none;
                            }
                        }
                    }
                    .col2{
                        height: 40%;
                        background-image: url(${worker});
                        background-position: center;
                        background-size: cover;
                    }
                    .col3{
                        //height: 25%;
                        height: 28.75%;
                        background: rgb(60, 63, 71);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        div{
                            height: 80%;
                            width: 80%;
                            h3 ,p{
                                color: white;
                                display: none;
                            }
                        }
                    }
                }
                .row2{
                    height: 100%;
                    width: 30%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .col1{
                        height: 59.25%;
                        background-image: url(${constt});
                        background-position: center;
                        background-size: cover;
                    }
                    .col2{
                        height: 39.25%;
                        background-image: url(${done});
                        background-position: center;
                        background-size: cover;
                        display: flex;
                        justify-content: start;
                        align-items: flex-end;
                        .bhala{
                            background-image: linear-gradient(rgba(0, 127, 255,0.7),rgba(0, 127, 255,0.7)) ;
                            height: 50%;
                            width: 70%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            display: none;
                            div{
                                height: 90%;
                                width: 70%;
                                h3 ,p{
                                    color: white;
                                }
                            }
                        }
                    }
                    
                }
                .row3{
                    height: 100%;
                    width: 30%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .col1{
                        height: 33.75%;
                        background-image: url(${done2});
                        background-position: center;
                        background-size: cover;
                    }
                    .col2{
                        height: 30%;
                        background-color: #007fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        div{
                            height: 80%;
                            width: 80%;
                            h3 ,p{
                                color: white;
                                display: none;
                            }
                        }
                    }
                    .col3{
                        height: 33.75%;
                        background-image: url(${construction});
                        background-position: center;
                        background-size: cover;
                    }
                }
            }
        }
    }   
    }
`;