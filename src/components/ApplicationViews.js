import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./animal/AnimalCard.js";
import { AnimalCard } from "./animal/AnimalCard.js";

export const ApplicationViews = () => {
    return (
        <>
        
                {/* render the location list when http://locahost:3000/ */}
                <Route exact path = "/">
                    <Home />
                </Route>

                {/* render the animal list when http:localhost:3000/animals */}
                <Route path="/animals">
                    <AnimalCard />
                </Route>
        
        
         </>
    )
}