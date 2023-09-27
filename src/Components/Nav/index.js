import { Link } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="navigation">
            <Link to="/login">
                Login
            </Link>
        </nav>
    )
}

export default Nav