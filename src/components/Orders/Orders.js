import React from 'react';
import groceryData from '../../groceryData.json';


const Orders = () => {
    
    const handleAddFood =()=>{
        fetch('http://localhost:5000/addFood',{
         method: 'POST',
         headers: {
             'Content-Type' : 'application/json'
         },
         body: JSON.stringify(groceryData)
        })
    }
    return (
        <div>
            
           <input type="text" placeholder='Food Name'/>
           <br/>
           <input type="text" placeholder='Add Price'/>
           <br/>
           <input type="text" placeholder='Weight'/>
           <br/>
           <input type="file"/>
           <button onClick={handleAddFood} className='btn-success'>Save</button>
        </div>
    );
};

export default Orders;