import React from 'react';

const Admin = () => {
    return (
        <div className='d-flex ms 5 mt 5 mr 5' >
            <div>
            <button className="btn btn-primary" >EDIT</button>
        </div>
            <div>
            <button className="btn btn-danger" >DELETE</button>
        </div>
        </div>
    );
};

export default Admin;