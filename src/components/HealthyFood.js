import styled from "styled-components";
import { NavLink } from "react-router-dom";

function HealthyFood() {

    return (
        <List>
            <NavLink to={"/healthy/Vegan"}>
                <h4>Vegan</h4>
            </NavLink>
            <NavLink to={"/healthy/DairyFree"}>
                <h4>Dairy Free</h4>
            </NavLink>
            <NavLink to={"/healthy/Vegetarian"}>
                <h4>Vegetarian</h4>
            </NavLink>
            <NavLink to={"/healthy/GlutenFree"}>
                <h4>Gluten Free</h4>
            </NavLink>
        </List>
    );
}

export default HealthyFood;

const List = styled.div`
  diplay: flex;
  justify-content: center;
  margin: 2rem 0rem;

`;