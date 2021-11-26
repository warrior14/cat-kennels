import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home.js";
import { AnimalCard } from "./animal/AnimalCard.js";
import { CustomerCard } from "./customer/CustomerCard.js";
import { LocationCard } from "./location/LocationCard.js";
import { EmployeeCard } from "./employee/EmployeeCard.js";
import { AnimalProvider } from "./animal/AnimalProvider.js";
import { AnimalList } from "./animal/AnimalList.js";

// every component must be inside 


export const ApplicationViews = () => {
    return (
        <Routes>
                {/* render the location list when http://locahost:3000/ */}
                <Route exact path="/" element={<Home />}/>

                {/* render the animal list when http:localhost:3000/animals */}
                <Route path="/animals" element={
                    <AnimalProvider>
                        <AnimalCard />
                    </AnimalProvider>
                }/>         
                 {/* render the animal list when http:localhost:3000/animals */}
                 <Route path="/customers" element={<CustomerCard />}/>   

                  {/* render the animal list when http:localhost:3000/animals */}
                <Route path="/locations" element={<LocationCard />}/>   

                 {/* render the animal list when http:localhost:3000/animals */}
                 <Route path="/employees" element={<EmployeeCard />}/>   

         </Routes>
    )
}
