import btnsmall from "../btn-small-default.svg";

function Textbtn(props){
    return(
            <div className = "text">
                 <p>{props.text}</p>
                <button className = " btn-small"><img src = {btnsmall} alt =""/></button>
            </div>
);
}

export default Textbtn;