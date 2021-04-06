import React, { useEffect, useState } from 'react';
import GroceryCard from '../GroceryCard/GroceryCard';
import Transaction from '../Transaction/Transaction';
import './Home.css'
const Home = () => {
    // const groceries = groceryData;
    const [ item,setItem] = useState([]);
    // const handleAddGrocery = (grocery) =>{
    //     const newItem = [...item,grocery]
    //     setItem(newItem);
    // }
    useEffect(() => {
        fetch('https://warm-bayou-77500.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])
    return (
        <section className="home">
            <div className="container">
                <div className="groceries">
                {
                    item.map(grocery => <GroceryCard grocery={grocery} key={Math.random()}></GroceryCard>)
                }
               
                
                </div>
              
            </div>
        </section>
    );
};

export default Home;