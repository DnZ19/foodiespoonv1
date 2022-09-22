import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {useParams} from "react-router-dom";


import React from 'react';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        getRecipeDetails();
    }, [params.name]);


    async function getRecipeDetails() {
        try {
            const data = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
            setDetails(data);
        } catch
            (e) {
            console.error(e);
        }
    }


    return (
        <div>
            {details.title}

        </div>
    );
}

export default Recipe;