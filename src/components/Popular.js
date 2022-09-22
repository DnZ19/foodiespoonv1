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
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link
                                        to={"/recipe/" + recipe.id}
                                    >
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title}/>
                                        <Gradient />
                                    </Link>
                                </Card>

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

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

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

  }
  
  Link {
    cursor: pointer;
  }
;

`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0,0,0,0), rgba(0,0,0,1.0);
`;

export default Popular;