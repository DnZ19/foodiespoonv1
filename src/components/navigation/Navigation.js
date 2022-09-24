import {FaSearch} from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti"
import {FiHome} from "react-icons/fi"
import {NavLink} from "react-router-dom";
import {GiThreeLeaves} from "react-icons/gi";
// import {FaCocktail} from "react-icons/fa";
// import {GrSearchAdvanced} from "react-icons/gr";
import styles from "./Navigation.module.css";
import { useNavigate } from 'react-router-dom';


function Navigation() {

    const navLinkStyles = ({ isActive }) => {
        return  {

            border: isActive ? "1px solid white" : "2px solid #B7B0B5",
            boxShadow: isActive ? "1px 1px 10px 7px white" : "none",
        }
    }

    const navigate = useNavigate();

    return (
        <nav
            className={styles["nav"]}
        >

            <NavLink
                to="/Home"
                style={navLinkStyles}
            >
                <FiHome/>
            </NavLink>

            <NavLink
                to="/search"
                style={navLinkStyles}
            >
                <FaSearch/>
            </NavLink>
            <NavLink
                to="/healthy"
                style={navLinkStyles}
            >
                <GiThreeLeaves/>
            </NavLink>
            <button
                className={styles["back-button"]}
                onClick={() => navigate(-1)}
            >
                <TiArrowBackOutline/>
            </button>
            {/*<NavLink*/}
            {/*    to="/drinks"*/}
            {/*    style={navLinkStyles}*/}
            {/*>*/}
            {/*    <FaCocktail />*/}
            {/*</NavLink>*/}
            {/*<NavLink*/}
            {/*    to="/extendedSearch"*/}
            {/*    style={navLinkStyles}*/}
            {/*>*/}
            {/*    <GrSearchAdvanced />*/}
            {/*</NavLink>*/}
        </nav>
    )
}

export default Navigation