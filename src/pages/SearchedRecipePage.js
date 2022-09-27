// import React from 'react';
// import {useEffect, useState} from "react";
// import axios from "axios";
// import styled from "styled-components";
// import {Splide, SplideSlide} from '@splidejs/react-splide';
// import "@splidejs/splide/dist/css/splide.min.css";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// // import Search from "../components/Search";
//
//
// function SearchedRecipePage() {
//
//     const [query, setQuery] = useState([]);
//     const [cuisine, setCuisine] = useState("");
//
//     let params = useParams();
//
//     async function getRecipe(name) {
//
//         try {
//
//             const api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&cuisine=${cuisine}&number=6`);
//             setQuery(api.data.results);
//
//
//
//         } catch (e) {
//             console.error(e)
//         }
//     };
//
//     useEffect(( ) => {
//         getRecipe(params.search);
//
//
//     }, [params.search])
//
//
//     return (
//         <Wrapper>
//
//             <h2>Searched Recipes</h2>
//
//             <Splide
//                 options={{
//                     type: "loop",
//                     perPage: 1,
//                 }}
//             >
//                 {query.map((item) => {
//                     return (
//                         <SplideSlide key={item.id}>
//                             <Link
//                                 to={"/recipe/" + item.id}
//                             >
//                                 <Card>
//                                     <p>{item.title}</p>
//                                     <img src={item.image} alt={item.title}/>
//                                     <Gradient />
//                                 </Card>
//                             </Link>
//
//
//                         </SplideSlide>
//                     );
//                 })}
//             </Splide>
//
//         </Wrapper>
//
//
//
//
//     );
// }
//
// export default SearchedRecipePage;
//
// const Wrapper = styled.div`
//   margin: 4rem 0rem;
//
//   h3 {
//     margin-bottom: 10px;
//   }
//
// `;
//
// const Card = styled.div`
//   min-height: 25rem;
//   border-radius: 2rem;
//   overflow: hidden;
//   position: relative;
//
//   img {
//     border-radius: 1rem;
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
//
//   p {
//     position: absolute;
//     z-index: 10;
//     left: 50%;
//     bottom: 0%;
//     transform: translate(-50%, 0%);
//     color: white;
//     width: 100%;
//     text-align: center;
//     font-weight: 600;
//     font-size: 1rem;
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     max-width: 200px;
//     background: rgba(91, 84, 84, 0.73);
//     margin-bottom: 25px;
//     border-radius: 5px;
//     height: 80px;
//     padding: 5px;
//
//   }
//   Link {
//     cursor: pointer;
//   }
// ;
//
// `;
//
// const Gradient = styled.div`
//   z-index: 3;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(0,0,0,0), rgba(0,0,0,1.0);
// `;
//
// const FormStyle = styled.form`
//   //margin: 0rem 1rem;
//
//   div {
//     position: relative;
//     width: 100%;
//   }
//
//
//
//     input {
//       border: none;
//       background: linear-gradient(35deg, #494949, #313131);
//       font-size: 1.5rem;
//       color: white;
//       padding: 1rem 3rem;
//       border-radius: 1rem;
//       outline: none;
//       width: 100%;
//
//     }
//     svg {
//       position: absolute;
//       top: 50%;
//       left: 0%;
//       transform: translate(100%, -50%);
//       color: white;
//     }
//
// `;