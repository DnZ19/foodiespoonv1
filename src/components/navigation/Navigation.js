import {FaSearch} from "react-icons/fa";
// import {BsFillCalendar2DateFill} from "react-icons/bs";
import {FiHome} from "react-icons/fi"
import {NavLink} from "react-router-dom";
import {GiThreeLeaves} from "react-icons/gi";
// import {FaCocktail} from "react-icons/fa";
// import {GrSearchAdvanced} from "react-icons/gr";
import styles from "./Navigation.module.css";

function Navigation() {

    const navLinkStyles = ({ isActive }) => {
        return  {

            border: isActive ? "1px solid white" : "2px solid #B7B0B5",
            boxShadow: isActive ? "1px 1px 10px 7px white" : "none",
        }
    }

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
                to="/vegan"
                style={navLinkStyles}
            >
                <GiThreeLeaves/>
            </NavLink>
            {/*<NavLink*/}
            {/*    to="/daily"*/}
            {/*    style={navLinkStyles}*/}
            {/*>*/}
            {/*    <BsFillCalendar2DateFill/>*/}
            {/*</NavLink>*/}
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