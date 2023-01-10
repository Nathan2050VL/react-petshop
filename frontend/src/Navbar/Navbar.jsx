import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            <Link to="/cart">Cart</Link>

        </nav>
    );
}

export default Navbar;