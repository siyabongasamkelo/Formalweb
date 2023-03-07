import { Home3styled } from "./Home3.styled";
import { Homefirst } from "../home/Homefirst.styled"
import { Coverdiv } from "../home/Coverdiv.styled"
import { H1 } from "../home/H1.styled"
import { H2 } from "../home/H2.styled"
import { H3 } from "../home/H3.styled"
import { P } from "../home/P.styled"
import { Button } from "./Button";

function Homediv3() {
    return ( 
        <>
            <Homefirst>
                <Coverdiv>
                    <Home3styled>
                        <div className="bothdiv">
                            <div className="coverdiv">
                                <div className="text">
                                    <div className="leftdiv">
                                        <div>
                                            <H2>We provide all type of constructions you need</H2>
                                        </div>
                                    </div>
                                    <div className="rightdiv">
                                        <div>
                                            <P>We've been saying this and we will say it again just hire
                                                us already there's nothing that we cannot do just trust 
                                                us man come on sizoze sikushaye..
                                            </P>
                                            <Button>Hire Us</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pics">
                                    <div className="row1">
                                        <div className="col1">
                                            <div>
                                                <H3>Best Year</H3>
                                                <P>2020 Was our best year we did almost 10
                                                    construction in one year 
                                                </P>
                                            </div>
                                        </div>
                                        <div className="col2">

                                        </div>
                                        <div className="col3">
                                            <div>
                                                <H3>Our Worst Year</H3>
                                                <P>2016 Was our wors year we lost nearly
                                                    40 of our workers due to bad weather
                                                    conditions in Saudi Arabia.. 
                                                </P>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row2">
                                        <div className="col1">

                                        </div>
                                        <div className="col2">
                                            <div className="bhala">
                                                <div>
                                                    <H3>Remember !!!</H3>
                                                    <P>Remember no pay no work we only start working after
                                                        we're paid 
                                                    </P>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row3">
                                        <div className="col1">

                                        </div>
                                        <div className="col2">
                                            <div>
                                                <H3>Our Wishes</H3>
                                                <P>We wish to be one of the biggest construction
                                                    companies in the world not only in africa and 
                                                    we will archive it... 
                                                </P>
                                            </div>
                                        </div>
                                        <div className="col3">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Home3styled>
                </Coverdiv>
            </Homefirst>
        </>
     );
}

export default Homediv3;