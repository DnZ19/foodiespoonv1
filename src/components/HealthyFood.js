import styled from "styled-components";
import { NavLink } from "react-router-dom";

function HealthyFood() {

    return (
        <List>
            <NavLink to={"/healthy/Vegan"} style={{textDecoration: "none"}}>
            <Button> Vegan </Button>
            </NavLink>

            <NavLink to={"/healthy/DairyFree"} style={{textDecoration: "none"}}>
            <Button> Dairy Free </Button>
            </NavLink>

            <NavLink to={"/healthy/Vegetarian"} style={{textDecoration: "none"}}>
            <Button> Vegetarian </Button>
            </NavLink>

            <NavLink to={"/healthy/GlutenFree"} style={{textDecoration: "none"}}>
            <Button> Gluten Free </Button>
            </NavLink>

        </List>
    );
}

export default HealthyFood;

const List = styled.div`
  margin-top: 100px;
  margin-left: 427px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 100%;
  width: 200px;
  padding: 5px;
  
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid #33312F;
  margin: 1px;
  background: #33312F;
  color: white;
  font-weight: bold;
  :hover {
    width: 200px;
    height: 50px;
    border: 1px solid black;
    margin: 1px;
    background: white;
    color: #33312F;
    font-weight: bold;
    
  }


`;

