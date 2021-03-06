import React from "react";
import "./Kennel.css";
import { AnimalCard } from "./animal/AnimalCard.js";
import "./animal/Animal.css";
import { EmployeeCard } from "./employee/EmployeeCard";
import { LocationCard } from "./location/LocationCard";
import { CustomerCard } from "./customer/CustomerCard";
import { PropsAndState } from "./PropsAndState.js";
import { NavBar } from "./nav/Navbar.js";
import { ApplicationViews } from "./ApplicationViews.js";
import { Home } from "./Home.js";
import { Route, Routes } from "react-router-dom";





// export const Kennel = () => (
//     <>
//         <Routes>
//             <h1>hello world</h1>
//         </Routes>
//     </>
        
// );


export const Kennel = () => (
    <Routes>
         <Route path="/*" element={
            <>
                <NavBar />
                <ApplicationViews />
            </>
         }
        />
    </Routes>
        
);






// export const Kennel = () => {
//     return <>
//         <h2>Nashville Kennels</h2>
//             <small>Loving care when you're not there!</small>
//                 <address>
//                     <div>Visit us at the Nashville North Location</div>
//                     <div>500 Puppy Way</div>
//                 </address>


//         {/* here is where I invoke the prop card  */}
//         <PropsAndState myName="Luke Madrazo" />
//         <h2>Animals</h2>
//             <article className="animals">
//                 <AnimalCard />
//                 <AnimalCard />
//                 <AnimalCard />
//             </article>


//         <h2>Employees</h2>
//             <artilce className="animals">
//                 <EmployeeCard />
//                 <EmployeeCard />
//                 <EmployeeCard />
//             </artilce>




//         <h2>Customers</h2>
//             <article className="animals">
//                 <CustomerCard />
//                 <CustomerCard />
//                 <CustomerCard />
//             </article>




//         <h2>Locations</h2>
//             <article className="animals">
//                 <LocationCard />
//                 <LocationCard />
//             </article>




//     </>
// }