import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {useState} from "react";

function HealthyFood() {

    const [activeTab, setActiveTab] = useState("vegan");

    return (
        <List>
            <NavLink
                to={"/healthy/Vegan"}
                style={{textDecoration: "none"}}
                className={activeTab === "vegan" ? "active" : ""}
                onClick={() => setActiveTab("vegan")}
            >
            <Button> Vegan </Button>
            </NavLink>

            <NavLink to={"/healthy/DairyFree"} style={{textDecoration: "none"}}>
            <Button
                className={activeTab === "dairyFree" ? "active" : ""}
                onClick={() => setActiveTab("dairyFree")}

            > Dairy Free </Button>
            </NavLink>

            <NavLink to={"/healthy/Vegetarian"} style={{textDecoration: "none"}}>
            <Button
                className={activeTab === "vegetarian" ? "active" : ""}
                onClick={() => setActiveTab("vegetarian")}

            > Vegetarian </Button>
            </NavLink>

            <NavLink to={"/healthy/GlutenFree"} style={{textDecoration: "none"}}>
            <Button
                className={activeTab === "glutenFree" ? "active" : ""}
                onClick={() => setActiveTab("glutenFree")}

            > Gluten Free </Button>
            </NavLink>

        </List>
    );
}

export default HealthyFood;


const List = styled.div`
  margin-top: 100px;
  margin-left: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid black;
  height: 100%;
  width: 200px;
  padding: 5px;
  
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #33312F;
  margin: 1px;
  background: #33312F;
  color: white;
  font-weight: bold;
  text-align: left;
  padding-left: 5px;
  :hover {
    width: 100px;
    height: 50px;
    border: 1px solid black;
    margin: 1px;
    background: white;
    color: #33312F;
    font-weight: bold;
    text-align: left;
    padding-left: 5px;
    
  }
  .active & {
    width: 110px;
    border: 1px solid black;
    background: white;
    color: #33312F;
    font-weight: bold;
  }


`;

