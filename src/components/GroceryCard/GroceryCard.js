import React from 'react';
import { Link } from 'react-router-dom';
import './GroceryCard.css';
const GroceryCard = (props) => {
    console.log(props);
     const {_id,name,imageURL,price} = props.grocery
    return (
       <div className='grocery-card'>
           <img src={imageURL} alt={name} className="grocery-img"/>
           <h4 className='grocery-name'>{name}</h4>
           <div className="price-btn">
               <h2>Price: $ {price}</h2>
               <Link to={`/groceryItem/${_id}`} ><button className='btn-primary' >Buy Now</button></Link>
           </div>
           
       </div>
    );
};

export default GroceryCard;
