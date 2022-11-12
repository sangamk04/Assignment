import React from "react";
import data from '../data.json'
import "./Rent.css"
const Rent= ()=>{
    return(
<div className="container">
    {data.map(item => (
    <div className="card" key={item.id}>
    <img className="img" src={item.imgURL} alt={item.name} />
    <div className="maindiv">   <h3 className="price">{item.price}</h3>
    <h3 className="title">{item.title}</h3>  
    <p className="content">{item.content}</p>    </div>                      
    <div className="line"></div>
    <p> 🛌🏻3 Beds  |  🛁2 Bathrooms  | 🔷5*7 m2</p>
    </div>
    ))};
</div>
    )
}
export default Rent
