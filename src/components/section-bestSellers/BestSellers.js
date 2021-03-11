import './bestSellers.css';

function BestSellers(){
    return(
        <div className="bg">
                      <div id = "circle"></div>
            <div id = "circle-m">M</div>
            <div className = "flex-container bestseller ">
                <div className = "flex-container2">
                    <h1 className = "third">Best Sellers </h1>
                    <button><p className = "shop">shop</p></button>
                </div>
            <div className = "flex-container2 items"> 
            <div className = "product"><div className = "item"></div> <strong><p>product1 name</p></strong> <p>$80</p></div>
            <div className = "product"><div className = "item"></div> <strong><p>product1 name</p></strong> <p>$60</p></div>
            <div className = "product"><div className = "item"></div> <strong><p>product1 name</p></strong> <p>$100</p></div>
                
                </div>
            </div>
        </div>
);
}

export default BestSellers;