import Textbtn from "./Text-button.js";
import "./card.css";
function Collection(){
    return(
        <div>
             <div className = "flex-container">
            <h1> shop by collection</h1>
            </div>
            <div className = "bg">
                 <div className = "collection-card">
                <Textbtn text = "chains"/>
                <div className = "collection-img chains"></div>
            </div>
            <div className = "collection-card">
                <Textbtn text = "bracelets"/>
                <div className = "collection-img bracelets"></div>
            </div>
            </div>
            </div>
);
}

export default Collection;