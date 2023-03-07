import { Headerstyle } from "./Header.styled";
import {H3} from "./H3.styled"
import { Link } from "react-router-dom"
import {Button} from  "./Button"
import Hamburger from "./Hamburger" 
import { useState } from "react"

function Header() {
    const [showit, setshowit] = useState(false)

    const isShown = ()=>{
        setshowit(!showit)
        console.log(showit)
    }

    return ( 
        <>
            <Headerstyle>
                <H3>Cbuilders</H3>
                <nav>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/aboutus" >About us</Link></li>
                        <li><Link to="/contact" >Contact Us</Link></li>
                        <li><Button>Hire Us</Button></li>
                    </ul>
                </nav>
                <svg onClick={isShown} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg>
                {showit ? <Hamburger clicked={isShown}/> : ''}
            </Headerstyle>
        </>
     );
}

export default Header;