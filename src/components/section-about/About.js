import './About.css';
import btnsmall from "../btn-small-default.svg";

function About(){
    return(
            <div className = "flex-container2">
                <div className = "bg circle-pictures">
                <div id = "circle-small"></div>

                    <div className = "circle-picture"></div>
                    <div className = "circle-picture"></div>
                    <div className = "circle-picture"></div>
                </div>
                <div className = "text">
                <h1>Since 2014 we have been creating and acquiring pieces for the home, chosen with the purpose to be both artful and functional. Our aim is to slow down and focus on what’s important, championing sustainably sourced and slow-made products.</h1>
                <p>read more</p>
                <button className = " btn-small"><img src = {btnsmall} alt =""/></button>
                </div>
            </div>
);
}

export default About;