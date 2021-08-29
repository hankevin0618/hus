import { Link } from "react-router-dom";
import { authService } from "../myBase"

const Header = ({ isLoggedIn }) => {
    const onLogout = () => {
        authService.signOut()
        window.location.reload()
    }
    return (
        <header className="row">
            <h1 className="text-center mt-5">HUS</h1>
            <nav className="col-12 d-md-flex mt-3 justify-content-center">
                <ul className="d-md-flex my-0">
                    <li className="mx-5 p-2" >National</li>
                    <li className="mx-5 p-2" >International</li>
                    <li className="mx-5 p-2" >Sports</li>
                    <li className="mx-5 p-2" >Business</li>
                    <li className="mx-5 p-2" >Entertainment</li>
                </ul>
                {isLoggedIn
                    ? <button onClick={onLogout} className="transparent-button">Logout</button>
                    : <Link to="/login" className="p-2 login-button" >Login</Link>
                }

            </nav>
        </header>
    )
}

export default Header;