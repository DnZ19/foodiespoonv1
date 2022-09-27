import React, {useEffect, useState} from 'react';
import HealthyFood from "../components/HealthyFood";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



function Healthy() {

    const [diet, setDiet] = useState([]);

    let params = useParams();

    async function getHealthyRecipes( diet )   {

        try {

            const data = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${ diet }&addRecipeInformation=true&number=5`);
            setDiet(data.data.results);
            console.log(data.data.results);



        } catch (e) {

            console.error( e );

        }

    }

    useEffect(() => {
        getHealthyRecipes(params.diet);
        console.log(params.diet);

    }, [params.diet]);



    return (
        <div>
            <HealthyFood />
            <List>
                {diet.map((item) => {
                    return (
                        <Link
                            to={"/recipe/" + item.id}
                            key={item.id}
                            style={{textDecoration: "none"}}
                        >

                                <Card key={item.id}>
                                <div>
                                    <img src={item.image} alt={item.title}/>
                                </div>

                                <div>
                                    <h4>{item.title}</h4>
                                </div>
                            </Card>

                        </Link>

                    )
                })}
            </List>
        </div>
    );
}

export default Healthy;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  
  width: 100%;
  height: 620px;
  max-height: 620px;
  //border: 1px solid black;
  margin-top: -250px;
  margin-bottom: 33px;
  padding: 0;
  
`;

const Card = styled.div`
  width: 100%;
  height: 100px;
  max-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: start;
  border: 1px solid #262c2c;
  margin: 0 0 15px;
  overflow: auto;
  box-shadow: 3px 3px 3px 3px rgba(77, 79, 79, 0.1);
  border-radius: 5px;
  background: #1C1E20;


  div {
    height: 100px;
    margin: 0;

  }


  img {
    margin: 0;
    height: 100px;
    width: 100px;
    border-radius: 5px 0 5px 0;
    box-shadow: 0px 0px 0px 3px rgba(77, 79, 79, 0.1);


  }

  a {
    text-decoration: none;
  }

  h4 {
    width: 300px;
    text-align: center;
    //border: 1px solid black;
    color: white;
    //padding: 1rem;
    text-decoration-line: none;
  }


`;