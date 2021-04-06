import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [foods,setFoods] = useState([])
    useEffect(() => {
        const url = `https://warm-bayou-77500.herokuapp.com/foods`

        fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            setFoods(data)
        })
    },[])
    const handleClick = (id) => {
        console.log('clicked');
        console.log(id);

        fetch(`https://warm-bayou-77500.herokuapp.com/delete/${id}`,{
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then(data =>console.log(data));

    }
    return (
     <div className='container'>
            <div>
        {
            foods.map(food => <li>{food._id} Name: {food.name} Price:{food.price} <button onClick={()=>handleClick(food._id)} className='btn-danger'>Delete</button></li>)
        }
        </div>
     </div>
    );
};

export default Admin;