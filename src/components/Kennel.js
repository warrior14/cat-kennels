import React from "react";
import "./Kennel.css";
import { AnimalCard } from "./animal/AnimalCard.js";
import "./animal/Animal.css";
import { EmployeeCard } from "./employee/EmployeeCard";
import { LocationCard } from "./location/LocationCard";
import { CustomerCard } from "./customer/CustomerCard";

export const Kennel = () => {
    return <>
        <h2>Nashville Kennels</h2>
            <small>Loving care when you're not there!</small>
                <address>
                    <div>Visit us at the Nashville North Location</div>
                    <div>500 Puppy Way</div>
                </address>


        <h2>Animals</h2>
            <article className="animals">
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
            </article>


        <h2>Employees</h2>
            <artilce className="animals">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
            </artilce>




        <h2>Customers</h2>
            <article className="animals">
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </article>




        <h2>Locations</h2>
            <article className="animals">
                <LocationCard />
                <LocationCard />
            </article>




    </>
}