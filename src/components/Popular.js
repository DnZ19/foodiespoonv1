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
                                                <img src={recipe.image} alt={recipe.title}/>
                                                {/*<Gradient />*/}

                                            </Link>



                                        </Card>

                                    </Slide>

                                    <TitleBar><h4>{recipe.title}</h4></TitleBar>

                                    <InfoBar>
                                        <div>
                                            <h4>{recipe.dishTypes[0]}</h4>
                                        </div>
                                        <div>
                                            <h4>{recipe.sourceName}</h4>
                                        </div>
                                        <div>
                                            <h4>Health Score:</h4>
                                            <p>{recipe.healthScore}</p>
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
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin-top: 5px;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  //p {
  //  position: absolute;
  //  z-index: 10;
  //  left: 50%;
  //  bottom: 0%;
  //  transform: translate(-50%, 0%);
  //  color: white;
  //  width: 100%;
  //  text-align: center;
  //  font-weight: 600;
  //  font-size: 1rem;
  //
  //  display: flex;
  //  justify-content: center;
  //  align-content: center;
  //  max-width: 200px;
  //  background: rgba(91, 84, 84, 0.73);
  //  margin-bottom: 25px;
  //  border-radius: 5px;
  //  height: 80px;
  //  padding: 5px;
  //  border: 0.1px solid black;
  //
  //}
  //
  //h3 {
  //  position: absolute;
  //  z-index: 10;
  //  left: 18%;
  //  top: 20%;
  //  transform: translate(-50%, 0%);
  //  background: rgba(91, 84, 84, 0.63);
  //  border-radius: 5px;
  //  color: white;
  //  width: 40%;
  //  text-align: center;
  //  font-weight: 600;
  //  font-size: 1rem;
  //  height: 40px;
  //  display: flex;
  //  justify-content: center;
  //  align-content: center;
  //  border: 0.1px solid black;
  //
  //}

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
    height: 90px;
    max-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border: 1px solid black;
    
  }
  
  h4 {
    color: white;
    padding: 2px;
    
  }
  
  p {
    margin-top: 12px;
    color: white;
    font-size: 25px;
  }


`;

// const Gradient = styled.div`
//   z-index: 11;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(0,0,0,0.5), rgba(0,0,0,1.0);
// `;


export default Popular;