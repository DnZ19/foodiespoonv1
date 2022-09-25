import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";
import {useParams} from "react-router-dom";
import React from 'react';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        getRecipeDetails();
    }, [params.id]);

    async function getRecipeDetails() {
        try {
            const data = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
            setDetails(data.data);
        } catch
            (e) {
            console.error(e);
        }
    }


    return (



            <DetailWrapper>
                <Header>
                    <h3>{details.title}</h3>
                    <img src={details.image} alt={details.title}/>
                </Header>
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
                                    <li
                                        key={ingredient.id}
                                        className={checked === true ? "bold" : ""}

                                    >
                                        <input
                                            type="checkbox"

                                            onChange={() => setChecked(!checked)}
                                        />
                                        {ingredient.original}
                                    </li>
                                ))}
                            </ul>

                        </ArticleIngredients>

                    )}



                </Info>

            </DetailWrapper>

    );
}

export default Recipe;

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  //border: 1px solid black;
  width: 400px;
  .active {
    background: linear-gradient(5deg, #494949, #313131);
    color: white;
  }
  
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  
`;

const Header = styled.header`
  
    display: flex;
    flex-direction: column;
    width: 400px;
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
  padding: 0.1rem 0.5rem;
  color: #313131;
  background: white;
  font-weight: 600;
  height: 45px;
  width: 150px;
  margin: 0 15px;
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
      margin-left: 605px;
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
  //margin-top: 1px;
  width: 95%;
  max-width: 400px;
  max-height: 500px;
  height: 500px;
  //margin-bottom: 170px;
  //border: 1px solid black;
  //

  h4 {
    font-size: 16px;
    margin-top: 1px;
  }
  
  
`;

const ArticleInstructions = styled.div`

  margin-left: 1px;
  margin-top: 19px;
  width: 95%;
  max-width: 400px;
  max-height: 700px;
  height: 700px;
  //margin-bottom: 100px;
  //border: 1px solid black;
  

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
  }
  
`;

const ArticleIngredients = styled.div`

  margin-left: 1px;
  margin-top: 0;
  width: 95%;
  max-width: 400px;
  max-height: 700px;
  height: 700px;
  //margin-bottom: 100px;
  //border: 1px solid black;
  
  ul  {
    margin: 0;
    max-height: 800px;
  }
  
  input {
    margin-right: 20px;
    width: 15px;
    height: 15px;
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
    //margin-top: -10px;
  } .bold
    {
      font-size: medium;
      font-weight: bolder;
    }
  
`;