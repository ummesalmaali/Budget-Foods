import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Transaction.css'
import groceryData from '../../groceryData.json'
import Home from '../Home/Home';
import UserContext from '../../UserContext';
import { Link } from 'react-router-dom';

const Transaction = () => {
    const [ item,setItem] = useState([]);

  const {id} = useParams();
  console.log(id);

  const [user,setUser] = useContext(UserContext)
  useEffect(() => {
    fetch(`http://localhost:5000/foods/${id}`)
    .then(res => res.json())
    .then(data => setItem(data[0]))
}, [])
console.log(item);
  const handleAddFood = () =>{
    const newProduct = {...user}
  }

    return (
        
        <div className="container">
                <div><h2>Check Out</h2></div>
               
            <div className='row'>
            <div className='col-md-6'>
            <h4 style={{color:'grey'}}>Description</h4>
            <h3>{item.name} purchased by :{user.name}</h3>
            </div>
            <div className='col-md-3'>
            <h4 style={{color:'grey'}}>Quantity</h4>
            <h3>1</h3>
            </div>
            <div className='col-md-3'>
            <h4 style={{color:'grey'}}>Price</h4>
            <h3>{item.price}</h3>
            <h2>Total = $50</h2>
             <Link to='/orders'><button onClick={handleAddFood} className='btn-success'>Check Out</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Transaction;