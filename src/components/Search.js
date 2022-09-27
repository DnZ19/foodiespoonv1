import { useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { FaSearch } from "react-icons/fa";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import React, {useEffect} from "react";

function Search() {

    const [input, setInput] = useState("");
    const [query, setQuery] = useState([]);

    let params = useParams();

    const navigate = useNavigate();

    // const [cuisine, setCuisine] = useState("European");
    //
    // const cuisineOptions = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European",
    //     "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese",
    //     "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern",
    //     "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]


    async function getRecipe( name ) {

        try {

            const api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${ name }&addRecipeInformation=true&addRecipeNutrition=true&number=6`);
            setQuery(api.data.results);




        } catch (e) {
            console.error(e)
        }
    };

    useEffect(( ) => {
        getRecipe(params.search);


    }, [params.search])

    const submitHandler = ( e )  => {
        e.preventDefault();
        navigate("/Search/" + input);

    }

    return (

        <div>

            <Wrapper>
                <FormStyle
                    onSubmit={submitHandler}
                >
                    <div>
                        <FaSearch></FaSearch>
                        <input
                            type="text"
                            placeholder="Food search..."
                            onChange={(e) => setInput(e.target.value)}
                            value={input}

                        />
                    </div>

                    {/*<select onChange={( e ) => setCuisine(e.target.value)} defaultValue={cuisine}>*/}
                    {/*    {cuisineOptions.map((option, idx) => (*/}
                    {/*        <option key={idx}>{option}</option>*/}
                    {/*    ))}*/}

                    {/*</select>*/}
                </FormStyle>

                <SearchBox>
                    <Splide
                        options={{
                            type: "loop",
                            perPage: 1,
                        }}
                    >
                        {query.map((item) => {
                            return (


                                <SplideSlide
                                    key={item.id}>
                                    <Card>
                                    <Link
                                        to={"/recipe/" + item.id}
                                    >
                                            <img src={item.image} alt={item.title}/>
                                            {/*<Gradient />*/}

                                    </Link>
                                    </Card>

                                    <TitleBar><h4>{item.title}</h4></TitleBar>

                                    <InfoBar>
                                        <div>
                                            <ul>
                                                {/*<h4>{item.cuisines[0]}</h4>*/}
                                                <li>{item.nutrition.nutrients[0].amount} Kcal</li>
                                                <li>{item.nutrition.nutrients[1].amount}  g Fat</li>
                                                <li>{item.diets[0]}</li>
                                            </ul>

                                        </div>

                                        <div>
                                            <h4>{item.sourceName}</h4>
                                        </div>
                                        <div>
                                            <h4>Health Score:</h4>
                                            <p>{item.healthScore}</p>
                                        </div>
                                        {console.log(item)}

                                    </InfoBar>

                                </SplideSlide>
                            );
                        })}
                    </Splide>

                </SearchBox>


            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;

  h3 {
    margin-bottom: 10px;
  }

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
  //  height: 20%;
  //  display: flex;
  //  justify-content: center;
  //  align-content: center;
  //
  //}
;

`;

// const Gradient = styled.div`
//   z-index: 3;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(0,0,0,0), rgba(0,0,0,1.0);
// `;

const FormStyle = styled.form`
  //margin: 0rem 1rem;

  div {
    position: relative;
    width: 100%;
  }



    input {
      border: none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size: 1.5rem;
      color: white;
      padding: 1rem 3rem;
      border-radius: 1rem;
      outline: none;
      width: 100%;

    }
    svg {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: white;
    }
`;

const SearchBox = styled.div`
  //border: 1px solid black;
  height: 535px;
  width: 100%;
  
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
    padding: 10px 10px 10px 5px;
    
    
  }
  
  p {
    margin-top: 0;
    color: white;
    font-size: 25px;
  }
  
  ul {
    color: white;
    padding: 10px 10px 10px 18px;
    max-width: 150px;
    
    
  }


`;


export default Search;