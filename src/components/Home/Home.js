import React, { useEffect, useState } from 'react';
import groceryData from '../../groceryData.json';
import GroceryCard from '../GroceryCard/GroceryCard';
import Transaction from '../Transaction/Transaction';
import './Home.css'
const Home = () => {
    const groceries = groceryData;
    const [ item,setItem] = useState([]);
    const handleAddGrocery = (grocery) =>{
        const newItem = [...item,grocery]
        setItem(newItem);
    }
    useEffect(() => {
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])
    return (
        <section className="home">
            <div className="container">
                <div className="groceries">
                {
                    groceries.map(grocery => <GroceryCard grocery={grocery} key={grocery.id} handleAddGrocery={handleAddGrocery}></GroceryCard>)
                }
               
                
                </div>
              
            </div>
        </section>
    );
};

export default Home;