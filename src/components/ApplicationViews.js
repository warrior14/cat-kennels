import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home.js";
import { AnimalCard } from "./animal/AnimalCard.js";
import { CustomerCard } from "./customer/CustomerCard.js";
import { LocationCard } from "./location/LocationCard.js";
import { EmployeeCard } from "./employee/EmployeeCard.js";
import { AnimalProvider } from "./animal/AnimalProvider.js";
import { AnimalList } from "./animal/AnimalList.js";
import { CustomerProvider } from "./customer/CustomerProvider.js";
import { CustomerList } from "./customer/CustomerList.js";




// every component must be inside 


export const ApplicationViews = () => {
    return (
        <Routes>
                {/* render the location list when http://locahost:3000/ */}
                <Route exact path="/" element={<Home />}/>

                {/* render the animal list when http:localhost:3000/animals */}
                <Route path="/animals" element={
                    <AnimalProvider>
                        <AnimalList />
                    </AnimalProvider>
                }/>         
                 {/* render the animal list when http:localhost:3000/animals */}
                 <Route path="/customers" element={
                     <CustomerProvider>
                        <CustomerList />
                        </CustomerProvider>  
                }/>   
                    
                  {/* render the animal list when http:localhost:3000/animals */}
                <Route path="/locations" element={<LocationCard />}/>   

                 {/* render the animal list when http:localhost:3000/animals */}
                 <Route path="/employees" element={<EmployeeCard />}/>   

         </Routes>
    )
}


// since i am not hard coding data anymore i have to change <AnimalCard /> to <AnimalList /> because it is now dynamic, animal list is the parent
// animal card, invoking animalist will invoke animal card as well