import { About2styled } from "./About2.styled"
import { Homefirst } from "../home/Homefirst.styled"
import { Coverdiv } from "../home/Coverdiv.styled"
import { H1 } from "../home/H1.styled"
import { P } from "../home/P.styled"

function Aboutdiv2() {
    return ( 
        <>
            <Homefirst>
                <Coverdiv>
                    <About2styled>
                        <div className="bothdiv">
                            <div className="coverdiv">
                                <div className="col1">
                                    <div className="leftdiv">
                                
                                    </div>
                                    <div className="rightdiv">
                                        <div className="text">
                                            <H1>Cbuilders Was Founded In 2005</H1>
                                            <P>Cbuilders was Founded by Siya Mazibuko the guy who was very very
                                                experienced in civil engineering who was always disagreeing with his
                                                bosses because of the way they do things he then had enough and started
                                                his own construction company...
                                            </P>
                                        </div>
                                    </div>
                                </div>
                                <div className="col2">
                                    <div className="leftdiv">
                                        <div className="text">
                                            <H1>Cbuilders In 2008</H1>
                                            <P>2008 was kind of a break through for the Cbuilders because that
                                                was when they first got a huge deal to help build a small
                                                mall in Mtubatuba they did so well...then they started getting
                                                deals more often... 
                                            </P>
                                        </div>
                                    </div>
                                    <div className="rightdiv">
                                        <div className="text">
                                            <H1>Cbuilders In 2015</H1>
                                            <P>Cbuilders was invited to help build a a very big bridge in Nigeria
                                                working together with Chineke constructions to build one of their
                                                longest and strongest bridges and that projects was very successful
                                                after that the Cbuilders have done a lot of other projects...
                                            </P>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </About2styled>
                </Coverdiv>
            </Homefirst>
        </>
     );
}

export default Aboutdiv2;