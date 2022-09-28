import React from "react";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./SearchPage";
// import SearchedRecipePage from "./SearchedRecipePage";
import Recipe from "./Recipe";
import Healthy from "./Healthy";
import Account from "./Account";
import About from "./About";
// import HealthyFood from "../components/HealthyFood";

function Pages()    {
    return  (

        <Routes>

            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/search/:search/" element={<SearchPage />}/>
            {/*<Route path="/searchedRecipePage/:search" element={<SearchedRecipePage />}/>*/}
            <Route path="/recipe/:id" element={<Recipe />}/>
            <Route path="/healthy" element={<Healthy />}/>
            <Route path="/healthy/:diet" element={<Healthy />}/>
            <Route path="/account" element={<Account />}/>
            <Route path="/about" element={<About />}/>

        </Routes>
    )
}

export default Pages;