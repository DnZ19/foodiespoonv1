import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    async function getPopular() {


        try {

            const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`);
            setPopular(api.data.recipes);
            console.log(api.data.recipes);

        } catch (e) {
            console.error(e)
        }
    }


    return (
        <div>
            <Wrapper>
                <h3>Popular Recipes</h3>

                <Splide
                    options={{
                        type: "loop",
                        perPage: 1,
                    }}
                >
                    {popular.map((recipe) => {
                        return (

                                <SplideSlide
                                    key={recipe.id}
                                >
                                    <Slide>
                                        <Card>
                                            <Link
                                                to={"/recipe/" + recipe.id}
                                            >
                                                <h3>{recipe.sourceName}</h3>
                                                <p>{recipe.title}</p>
                                                <img src={recipe.image} alt={recipe.title}/>
                                                <Gradient />


                                            </Link>

                                            <h4>Foodie Health Score: {recipe.healthScore}</h4>

                                        </Card>





                                    </Slide>

                                </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

`;

const Card = styled.div`

  display: flex;
  flex-direction: column;
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin-top: 30px;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 20%;
    display: flex;
    justify-content: center;
    align-content: center;
    max-width: 200px;

  }
  
  h3 {
    position: absolute;
    z-index: 10;
    left: 15%;
    top: 8%;
    transform: translate(-50%, 0%);
    color: #313131;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 20%;
    display: flex;
    justify-content: center;
    align-content: center;
    
  }
  
  h4 {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  Link {
    cursor: pointer;
  }
;

`;

const Gradient = styled.div`
  z-index: 11;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0,0,0,0.5), rgba(0,0,0,1.0);
`;


export default Popular;