import {useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {FaSearch} from "react-icons/fa";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import React, {useEffect} from "react";
import { GiKnifeFork } from "react-icons/gi";
import '../App.css';

function Search() {

    const [input, setInput] = useState("");
    const [query, setQuery] = useState([]);
    const [error, toggleError] = useState(false);

    let params = useParams();

    const navigate = useNavigate();

    // const [cuisine, setCuisine] = useState("European");
    //
    // const cuisineOptions = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European",
    //     "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese",
    //     "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern",
    //     "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]


    async function getRecipe(name) {

        try {

            const api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&addRecipeInformation=true&addRecipeNutrition=true&number=6`);
            setQuery(api.data.results);


        } catch (e) {
            console.error(e)
            toggleError(true);
        }
    };

    useEffect(() => {
        getRecipe(params.search);
        setInput("");


    }, [params.search])

    const submitHandler = (e) => {
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

                    {error && <ErrorMessage>something went wrong...please try again.</ErrorMessage>}


                    {/*<select onChange={( e ) => setCuisine(e.target.value)} defaultValue={cuisine}>*/}
                    {/*    {cuisineOptions.map((option, idx) => (*/}
                    {/*        <option key={idx}>{option}</option>*/}
                    {/*    ))}*/}

                    {/*</select>*/}
                </FormStyle>

                <SearchBox>

                    {query.length === 0 &&
                        <>
                            <Message>No search results...</Message>
                            <Image><GiKnifeFork className="background-icon-search" /></Image>

                        </>


                    }

                    {query.length > 0 &&
                        <Splide
                            options={{
                                type: "loop",
                                perPage: 1,
                                arrows: true,
                                pagination: false,
                                drag: "free",
                                gap: "1px",
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

                                            </Link>
                                        </Card>

                                        <TitleBar><h4>{item.title}</h4></TitleBar>

                                        <InfoBar>
                                            <div>
                                                <p>Nutrients: </p>
                                                <ul>
                                                    <li>{item.nutrition.nutrients[0].amount} Kcal</li>
                                                    <li>{item.nutrition.nutrients[1].amount} g Fat</li>
                                                    <li>{item.diets[0]}</li>
                                                </ul>

                                            </div>

                                            <div>
                                                <p>Source: </p>
                                                <h5>{item.sourceName}</h5>
                                            </div>
                                            <div>
                                                <p>Health Score:</p>
                                                <h5>{item.healthScore}</h5>
                                            </div>

                                        </InfoBar>

                                    </SplideSlide>
                                );
                            })}
                        </Splide>
                    }

                </SearchBox>


            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
  margin: 4rem 0;

  h3 {
    margin-bottom: 10px;
  }

`;

const Card = styled.div`
  min-height: 25rem;
  height: 250px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 300px;
    object-fit: cover;
    box-shadow: none;
  }

;

`;

const FormStyle = styled.form`


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
  margin-top: -50px;
  margin-bottom: 20px;

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

  width: 100%;
  height: 150px;
  z-index: 12;
  border-radius: 5px;

  div {
    width: 150px;
    height: 120px;
    max-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border: 1px solid #1C1E20;
    background: #5b5454;

  }

  h4 {
    color: white;
    padding: 2px;

  }

  h5 {
    color: #1C1E20;
    font-size: 10px;
    padding-top: 10px;
  }

  p {
    margin-top: 2px;
    color: white;
    font-size: 15px;
  }

  ul {
    color: #1C1E20;
    padding: 10px;
    max-width: 150px;
    list-style: none;
    font-size: 10px;
    font-weight: bold;
  }

`;

const Message = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  position: absolute;
  color: red;

`;

const ErrorMessage = styled.div`
  margin-left: 50px;
  margin-top: 10px;
  margin-bottom: -20px;
  position: relative;
  color: red;

`;


const Image = styled.div`
  position: absolute;
  margin-top: 150px;
  margin-left: 80px;

`;


export default Search;