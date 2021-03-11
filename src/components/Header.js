import './header.css';
import btnsmall from "./btn-small-default.svg";
import btnldr from "./btn-load-hover.svg";
import Btnlarge from "./btn-large.js";

function Header(){
    return(
        <div className="hero-image">
            <div className = "flex-container hero">
                <div className="hero-text">
                    <h1>Hand Made</h1>
                    <h1>Delicate Jewelry</h1>
                    <p>Take a look </p>
                    <button className = " btn-small"><img src = {btnsmall} alt =""/></button>
                </div>
                {/* <img src = {btnldr} alt =""></img> */}
               
            </div>
            {/* <div><Btnlarge/></div> */}
        </div>
);
}

export default Header;