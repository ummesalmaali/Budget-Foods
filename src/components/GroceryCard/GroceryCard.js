import React from 'react';
import { Link } from 'react-router-dom';
import './GroceryCard.css';
const GroceryCard = (props) => {
     const {id,name,image,price} = props.grocery
    return (
       <div className='grocery-card'>
           <img src={image} alt={name} className="grocery-img"/>
           <h4 className='grocery-name'>{name}</h4>
           <div className="price-btn">
               <h2>Price: $ {price}</h2>
               <Link to={`/groceryItem/${id}`} ><button className='btn-primary' onClick={()=>props.handleAddGrocery(id)}>Buy Now</button></Link>
           </div>
           
       </div>
    );
};

export default GroceryCard;
