import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";


// export const AnimalCard = () => {
//     return <>
//             <section className="animal">
//                 <h3 className="animal_name">Doodles</h3>
//                 <div className="animal_breed">Breed: Poodle</div>
//             </section>

//             </>

// }


export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <address className="location__address">{animal.location.name}</address>
    </section>
)