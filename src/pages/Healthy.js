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

            const data = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${ diet }&number=6`);
            setDiet(data.data.results);
            console.log(data.data.results);
            console.log(diet);


        } catch (e) {

            console.error( e );

        }

    }

    useEffect(() => {
        getHealthyRecipes(params.diet)
    }, [params.diet])



    return (
        <div>
            <HealthyFood />
            <Grid>
                {diet.map((item) => {
                    return (
                        <Link to={"/recipe/" + item.id}>
                            <Card key={item.id}>
                                <img src={item.image} alt={item.title}/>
                                <h4>{item.title}</h4>

                            </Card>
                        </Link>

                    )
                })}
            </Grid>
        </div>
    );
}

export default Healthy;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  grid-gap: 2rem;
  border: 1px solid black;
  margin-top: -250px;
  
`;

const Card = styled.div`
img {
  width: 100%;
  border-radius: 2rem;
}
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
  

`;