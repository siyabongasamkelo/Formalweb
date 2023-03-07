import { Link } from "react-router-dom"
import styled from 'styled-components';

export const Hamburgerdiv = styled.div`
    width: 80%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px rgb(94, 94, 94);
    .hammenu{
        height: 90%;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .cancel{
            height: 10%;
            display: flex;
            justify-content: flex-end;
            svg{
                fill: #355c7d;
                fill: #007fff;
            }
        }
        .links {
            height: 60%;
            div {
                height: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-bottom: 1px solid #007fff;
                a{
                    text-decoration: none;
                    color: #355c7d;
                    color: #007fff;
                }
            }
        }
    }
`;

function Hamburger(props) {
    return ( 
        <>
            <Hamburgerdiv>
                <div className="hammenu">
                    <div className="cancel">
                        <svg onClick={props.clicked} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m16.5 33.6 7.5-7.5 7.5 7.5 2.1-2.1-7.5-7.5 7.5-7.5-2.1-2.1-7.5 7.5-7.5-7.5-2.1 2.1 7.5 7.5-7.5 7.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>
                    </div>
                    <div className="links">
                        <div><Link to="/" >Home</Link></div>
                        <div><Link to="/aboutus" >About Us</Link></div>
                        <div><Link to="/contact" >Contact</Link></div>
                    </div>
                </div>
                
            </Hamburgerdiv>
        </>
     );
}

export default Hamburger;