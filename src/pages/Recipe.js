import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";
import {useParams} from "react-router-dom";
import React from 'react';
// import { GiKnifeFork } from "react-icons/gi";
// import {logDOM} from "@testing-library/react";

function Recipe() {

    let params = useParams();

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("summary");
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        getRecipeDetails();
    }, [params.id]);

    async function getRecipeDetails() {
        try {
            const data = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&addRecipeNutrition=true`);
            setDetails(data.data);
            console.log(data.data);
        } catch
            (e) {
            console.error(e);
        }
    }


    return (
            <DetailWrapper>
                <Header>

                    <img src={details.image} alt={details.title}/>
                </Header>
                <div>
                    <h3>{details.title}</h3>
                </div>
                <Info>
                    <section>
                        <Button
                            className={activeTab === "summary" ? "active" : ""}
                            onClick={() => setActiveTab("summary")}
                        >Summary
                        </Button>
                        <Button
                            className={activeTab === "instructions" ? "active" : ""}
                            onClick={() => setActiveTab("instructions")}
                        >Instructions
                        </Button>
                        <Button
                            className={activeTab === "ingredients" ? "active" : ""}
                            onClick={() => setActiveTab("ingredients")}
                        >Ingredients
                        </Button>
                        <Button
                            className={activeTab === "information" ? "active" : ""}
                            onClick={() => setActiveTab("information")}
                        >Information
                        </Button>
                    </section>
                    {activeTab === "instructions" && (
                        <ArticleInstructions>
                            <h4 dangerouslySetInnerHTML={{ __html: details.instructions}}></h4>
                        </ArticleInstructions>

                    )}

                    {activeTab === "summary" && (
                        <ArticleSummary>
                            <h4 dangerouslySetInnerHTML={{ __html: details.summary}}></h4>
                        </ArticleSummary>

                    )}

                    {activeTab === "ingredients" && (
                        <ArticleIngredients>
                            <ul>
                                {details.extendedIngredients.map((ingredient) => (
                                    <Ingredient
                                        key={ingredient.id}

                                    >
                                        <input
                                            type="checkbox"
                                            // checked={checked}
                                            onChange={() => setChecked(!checked)}

                                        />
                                            <li>
                                               <p className={checked === true ? "checked" : ""}>{ingredient.original}</p>
                                            </li>



                                    </Ingredient>

                                ))}
                            </ul>

                        </ArticleIngredients>

                    )}

                    {activeTab === "information" && (
                        <ArticleInformation>
                            <div>
                                <h3>Cuisines:</h3>
                                    {details.cuisines.map((cuisine) => {
                                        return (
                                            <p>{cuisine}</p>
                                        )
                                    })}
                            </div>
                            <div>
                                <h3>Diets:</h3>

                                {details.diets.map((diet) => {

                                    return (
                                    <p>{diet}</p>
                                    )
                                 })}


                            </div>
                            <div>
                                <h3>Health Score:</h3>
                                <p>{details.healthScore}</p>


                            </div>
                            <div>
                                <h3>Dish type:</h3>
                                {details.dishTypes.map((dishType) => {
                                    return (
                                       <p>{dishType}</p>
                                    )
                                })}
                            </div>
                            <div>
                                <h3>Ready in: </h3>
                                <p>{details.readyInMinutes} min.</p>

                            </div>
                            <div>
                                <h3>Servings:</h3>
                                <p>{details.servings}</p>
                            </div>
                        </ArticleInformation>

                    )}



                </Info>

            </DetailWrapper>

    );
}

export default Recipe;

const DetailWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  //border: 1px solid black;
  width: 410px;
  height: 600px;
  .active {
    background: linear-gradient(5deg, #494949, #313131);
    color: white;
    width: 105px;
  }
  
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  h3 {
    color: white;
  }
  
  
  
`;

const Header = styled.header`
  
    display: flex;
    flex-direction: column;
    width: 410px;
    height: 120px;
  
    img {
      width: 100%;
      height: 100px;
      margin-top: -0.5px;
      object-fit: cover;
      position: relative;
  }
    h3 {
      font-size: 1.2rem;
      line-height: 1.2rem;
      margin-bottom: 10px;
      position: absolute;
      z-index: 3;
      color: white;
      margin-left: 70px;
      margin-top: 5px;
      max-width: 200px;
  }
  

`;

const Button = styled.button`
  
  color: #313131;
  background: white;
  font-weight: 600;
  height: 45px;
  width: 100px;
  margin: 1px;
  margin-left: -7px;
  text-align: left;
  padding-left: 5px;
  border: none;
  
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  word-wrap: break-word;
  height: 500px;
  //border: 1px solid blue;
  max-height: 500px;
  overflow: auto;
  
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 560px;
      margin-bottom: 250px ;
      position: absolute;
    }
    //article {
    //  margin-left: 15px;
    //  //margin-top: 1px;
    //  width: 100%;
    //  
    //}
  
  input {
        margin-right: 5px;
      }
    `;

const ArticleSummary = styled.div`
  margin-left: 1px;
  margin-top: 15px;
  width: 100%;
  max-width: 400px;
  max-height: 500px;
  height: 500px;
  overflow: scroll;
  border: 1px solid #494949;
  padding: 5px;

  //margin-bottom: 170px;
  //border: 1px solid black;
  //

  h4 {
    font-size: 16px;
    line-height: 1.7rem;
    margin-top: 1px;
    color: white;
  }
  
  
`;

const ArticleInstructions = styled.div`

  margin-left: 1px;
  margin-top: 19px;
  width: 100%;
  max-width: 400px;
  max-height: 700px;
  height: 700px;
  overflow: scroll;
  //margin-bottom: 100px;
  padding: 5px;
  border: 1px solid #494949;
  

  li  {
    list-style-type: circle;
    font-size: 16px;
    line-height: 1.7rem;
    margin-top: 2px;
    max-height: 500px;
    margin-left: 3px;

  }

  h4 {
    font-size: 0.9rem;
    margin-top: 1px;
    color: white;
  }
  
`;

const ArticleIngredients = styled.div`

  margin-left: 1px;
  margin-top: 15px;
  padding: 5px;
  width: 100%;
  max-width: 400px;
  max-height: 700px;
  height: 700px;
  //margin-bottom: 100px;
  //border: 1px solid black;
  overflow: scroll;
  border: 1px solid #494949;


  ul  {
    margin: 0;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: baseline;
  }
  
  input {
    margin-right: 20px;
    width: 15px;
    min-width: 15px;
    height: 15px;
    min-height: 15px;
    margin-top:2px;
    
  }
  
  li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    list-style-type: none;
    font-size: 16px;
    line-height: 1.7rem;
    //color: white;
    //margin-top: -10px;
    
  } 
  
  p {
    color: white;
  } .checked {
        color: darkorange;
      }
  
  
  
`;

const Ingredient = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  list-style-type: none;
  
`;

const ArticleInformation = styled.div`
  display: grid;
  grid-template-columns: 180px 180px;
  max-width: 450px;
  height: 400px;
  gap: 10px 30px;
  //border: 1px solid #494949;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border: 1px solid #494949;
    width: 180px;
    height: 130px;
    background: #5b5454;
    overflow: scroll;
    
    h1 {
      color: white;
    }
    h2 {
      color: white;
    }
    h3 {
      color: white;
      padding: 3px;
    }
    h4 {
      color: #1C1E20;
    }
    p {
      color: #1C1E20;
      padding: 3px;
      
    }
    
  }

`;

// const NoResultIcon = styled.div`
//
//   position: absolute;
//
//
// `;
