import React from "react";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./SearchPage";
import SearchedRecipePage from "./SearchedRecipePage";
import Recipe from "./Recipe";

function Pages()    {
    return  (

        <Routes>

            <Route path="/home" element={<Home />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/searchedRecipePage/:search" element={<SearchedRecipePage />}/>
            <Route path="/recipe/:name" element={<Recipe />}/>

        </Routes>
    )
}

export default Pages;