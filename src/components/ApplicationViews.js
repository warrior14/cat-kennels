import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home.js";
import { AnimalCard } from "./animal/AnimalCard.js";

export const ApplicationViews = () => {
    return (
        <Routes>
                {/* render the location list when http://locahost:3000/ */}
                <Route exact path="/" element={<Home />}/>
                        
                {/* render the animal list when http:localhost:3000/animals */}
                <Route path="/animals" element={<AnimalCard />}/>               
         </Routes>
    )
}