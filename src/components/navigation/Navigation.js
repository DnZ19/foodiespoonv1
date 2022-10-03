import { FaSearch } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti"
import { FiHome } from "react-icons/fi"
import { NavLink } from "react-router-dom";
import { GiThreeLeaves } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md"
import { BsInfoLg } from "react-icons/bs";
import styles from "./Navigation.module.css";
import { useNavigate } from 'react-router-dom';


function Navigation() {

    const navLinkStyles = ({ isActive }) => {
        return  {
            border: isActive ? "0.3px solid white" : "",
            boxShadow: isActive ? "1px 1px 10px 1px white" : "none",
            color: isActive ? "var(--main-style-element-color)" : "#EEEBCE",
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
            <NavLink
                to="/about"
                style={navLinkStyles}
            >
                <BsInfoLg />
            </NavLink>
            <button
                className={styles["back-button"]}
                onClick={() => navigate(-1)}
            >
                <TiArrowBackOutline/>
            </button>
            <NavLink
                to="/account"
                style={navLinkStyles}
            >
                <MdOutlineManageAccounts />
            </NavLink>

        </nav>
    )
}

export default Navigation