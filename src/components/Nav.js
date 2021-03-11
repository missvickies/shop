import './nav.css';
import './styles.css';

function Nav(){

    return(
        <div id="nav">
            <ul>
                <li> <a href="#Home">
            <div id = "logo">
            <svg width="80" height="77" viewBox="0 0 80 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="logo">
<rect id="Rectangle 13" x="1" y="1" width="78" height="75" rx="37.5" stroke="#F4F5F7" stroke-width="2"/>
<path id="M" d="M51.725 46H44.25V45.05C44.5833 44.8833 44.9083 44.7417 45.225 44.625C45.5417 44.5083 45.8833 44.4083 46.25 44.325V33.875L46.375 30.95H46.175L45.35 33.625L40.525 46H39.375L34.575 33.725L33.675 30.8H33.45L33.475 33.975V44.225C33.7917 44.2917 34.1417 44.4 34.525 44.55C34.9083 44.7 35.2667 44.8667 35.6 45.05V46H29.5V45.05C29.7667 44.9167 30.0917 44.7583 30.475 44.575C30.875 44.3917 31.25 44.2667 31.6 44.2V30.175C31.2667 30.1083 30.9083 30.0167 30.525 29.9C30.1583 29.7833 29.8333 29.6333 29.55 29.45V28.5H36.325L40.15 38.675L40.875 41.075H40.9L41.65 38.625L45.55 28.5H51.75V29.45C51.4667 29.6167 51.1583 29.7667 50.825 29.9C50.5083 30.0167 50.1833 30.1083 49.85 30.175V44.35C50.2 44.4167 50.5333 44.5167 50.85 44.65C51.1833 44.7833 51.475 44.9167 51.725 45.05V46Z" fill="#F4F5F7"/>
</g>
</svg>
            </div>
            </a>
            </li>
            <li><a href="#Shop">Shop</a></li>
            <li><a href="#Search">Search</a></li>
            <li><a href="#Shoppingcart">shopping cart <div id = "shopping-cart-items">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="18" height="18" rx="9" fill="#5C7457"/>
</svg>
</div></a> 
            
</li>
            </ul>
        </div>
    )
}

export default Nav;