import React from "react";
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="home1">
                <h1 className="quote">Order your favorite food<br/> from your favorite restaurant,<br/>  sit at HOME</h1>
                <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg" alt="Delicious food" className="background-image" />
            </div>
            <div className="home2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzo9WYIaUUzk9c657yYFXWZweUUsExZeWAMq-UQcD3eRyB_etO2suvntmEeGHry78BRQ&usqp=CAU" alt=""  className="background-image"/>
                <h1 className="quote">Order food any time any where <br/> just click to <span>Order</span></h1>
            </div>
     </>
    )
}
