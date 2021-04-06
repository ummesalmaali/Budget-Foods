import React from 'react';

const Admin = () => {
    const handleDelete = () =>{
        
    }
    return (
        <div className='row'>
            <div className="col-md-3">
               <h3>Product Id</h3>
            </div>
            <div className="col-md-3">
            <h3>Product Name</h3>
            </div>
            <div className="col-md-3">
            <h3>Product Price</h3>
            </div>
            <div>
            <button className="btn btn-danger" >DELETE</button>
        </div>
        </div>
    );
};

export default Admin;