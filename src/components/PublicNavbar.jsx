import {Link} from "react-router-dom";
import logo from "../logo.png";

export const PublicNavbar = () =>{

    return(
        <nav>
            <section>
                <img className="logo" src={logo} alt="logo"/>
                <Link to={"/"}>Home</Link>
            </section>
        </nav>
    )
}