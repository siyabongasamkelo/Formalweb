import { Home2styled } from "./Home2.styled";
import { Homefirst } from "../home/Homefirst.styled"
import { Coverdiv } from "../home/Coverdiv.styled"
import { H1 } from "../home/H1.styled"
import { H3 } from "../home/H3.styled"
import { P } from "../home/P.styled"
import { Button } from "./Button";

function Homediv2() {
    return ( 
        <>
            <Homefirst>
                <Coverdiv>
                    <Home2styled>
                        <div className="bothdiv">
                            <div className="coverdiv">
                                <div className="col1">
                                    <div className="leftdiv">
                                        <div className="text">
                                            <div>
                                                <H3>Note !</H3>
                                                <P>We will never start working if no payments were made
                                                    we must get a deposit first
                                                </P>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightdiv">
                                        <div className="text">
                                            <H1>Our Team Is Dedicated</H1>
                                            <P>We always make sure to find strong hardworking strong 
                                                men to do the job we never ever high anyone who's not
                                                qualifies because we understand the danger that can come
                                                with that both to the project and that worker who's not
                                                qualified...
                                            </P>
                                            <div>
                                                <Button>View Team</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col2">
                                    <div className="leftdiv">
                                        <div className="text">
                                            <H1>We Got The Best Managers</H1>
                                            <P>We work with one of the smartest and most experienced peoples ever
                                            Our designers understand exactly what is expected of them and they 
                                            always make sure to deliver under any circumstances with no 
                                            mistakes at all...
                                            </P>
                                        </div>
                                    </div>
                                    <div className="rightdiv">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Home2styled>
                </Coverdiv>
            </Homefirst>
        </>
     );
}

export default Homediv2;