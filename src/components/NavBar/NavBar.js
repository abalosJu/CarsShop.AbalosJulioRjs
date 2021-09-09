import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../img/logo.png";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = ()  => {

    return <div className="NavBar">        
        
        <div className="container">
            <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="60" height="42"/>CarsShop
            </a>
        </div>

        <ul>
            <li><a className="linkNavBar" href="#">Comprar</a></li>
            <li><a className="linkNavBar" href="#">Vender</a></li>
            <li><a className="linkNavBar" href="#">Nosotros</a></li>
        </ul>
        <CartWidget />

    </div>
}

export default NavBar