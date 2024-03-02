import React from "react";
import { BiLogoHtml5 } from "react-icons/bi";

const Card = () => {
    const couse = [
        {
            title: "Noi that",
            icon: <BiLogoHtml5 />
        },
        {
            title: "Noi that",
            icon: <BiLogoHtml5 />
        },
        {
            title: "Noi that",
            icon: <BiLogoHtml5 />
        }
    ]
    return (
        <div className="card--container">
            {couse.map((item) => (
                <div className="card">
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;