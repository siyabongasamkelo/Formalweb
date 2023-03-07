import { Footerdiv } from "./Footer.styled";
import { P } from "./P.styled";

function Footer() {
    return ( 
        <>
            <Footerdiv>
                <div className="footer">
                    <div className="bothfooter">
                        <div className="leftdiv">
                            <P>Home</P>
                            <P>Collaborations</P>
                            <P>Music</P>
                        </div>
                        <div className="rightdiv">
                            <P>Terms and Conditions</P>
                            <P>About Us</P>
                            <P>Hidden Details</P>
                        </div>
                    </div>
                    
                    <div className="copy">
                        <P>CyberNation 2023&copy;</P>
                    </div>
                </div>
            </Footerdiv>
        </>
     );
}

export default Footer;