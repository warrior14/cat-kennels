import React from "react";
import { PropsAndState } from './PropsAndState.js';
import "./Home.css";


export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>The best loving care when you're not there.</small>


        <address>
            <div>Make sure to visit us at the Nashville North Location</div>
            <div>300 Kitty Drive</div>
        </address>
    
        <PropsAndState myName={"Luke Madrazo"}/>
    </>
)