import { useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const [cuisine, setCuisine] = useState("");

    const cuisineOptions = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European",
                            "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese",
                            "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern",
                            "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]


    const submitHandler = ( e )  => {
        e.preventDefault();
        navigate("/SearchedRecipePage/" + input);

    }

    return (
        <div>
            <Wrapper>
                <h3>Search Recipes</h3>

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

                    <select onChange={( e ) => setCuisine(e.target.value)} defaultValue={cuisine}>
                        {cuisineOptions.map((option, idx) => (
                            <option key={idx}>{option}</option>
                        ))}

                    </select>
                </FormStyle>

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
;

`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0,0,0,0), rgba(0,0,0,1.0);
`;

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

`

export default Search;