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
                <h3>Most popular recipes</h3>

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
                                                <img src={recipe.image} alt={recipe.title}/>
                                                {/*<Gradient />*/}

                                            </Link>



                                        </Card>

                                    </Slide>

                                    <TitleBar><h4>{recipe.title}</h4></TitleBar>

                                    <InfoBar>
                                        <div key={recipe.id}>
                                            <p>Type of dish: </p>
                                            {recipe.dishTypes.map((dishType) => {
                                                return (
                                                        <h5>{dishType}</h5>
                                                )
                                            })}

                                        </div>
                                        <div>
                                            <p>Source: </p>
                                            <h5>{recipe.sourceName}</h5>
                                            {recipe.vegan === true ? <h6>Vegan!</h6> : <h6></h6>}
                                            {recipe.vegetarian === true ? <h6>Vegetarian!</h6> : <h6></h6>}
                                        </div>
                                        <div>
                                            <p>Health Score:</p>
                                            <h5>{recipe.healthScore}</h5>
                                            <p>Ready in:</p>
                                            <h5>{recipe.readyInMinutes} min.</h5>
                                        </div>

                                    </InfoBar>

                                </SplideSlide>



                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
  //border: 1px solid black;
  height: 535px;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 110px;
  
  h3 {
    color: white;
  }
  
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

`;

const Card = styled.div`

  display: flex;
  flex-direction: column;
  min-height: 400px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin-top: 5px;
  margin-bottom: 2px;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const TitleBar = styled.div`
  width: 100%;
  height: 50px;
  max-height: 50px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  
  h4 {
    color: white;
    font-size: 20px;
  }
  
  

`;

const InfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-top: 10px;
  background: #5b5454;
  width: 100%;
  height: 100%;
  z-index: 12;
  border-radius: 5px;
  
  div{
    width: 150px;
    height: 100px;
    max-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border: 1px solid #1C1E20;
    
  }
  
  h4 {
    color: #1C1E20;
    padding: 2px;
    margin-bottom: 5px;
    
  }

  h5 {
    color: #1C1E20;
    font-size: 10px;
    padding: 2px;
  }
  
  h6 {
    margin-top: 5px;
    color: var(--main-style-element-color);
    font-size: 12px;
    
  }
  
  p {
    margin-top: 2px;
    color: white;
    font-size: 15px;
  }


`;


export default Popular;