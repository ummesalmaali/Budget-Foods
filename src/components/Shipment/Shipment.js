import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import UserContext from '../../UserContext';
import './Shipment.css'

const Shipment = () => {
    const [user,setUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('Shipment is in your way',data)
    };
  
    console.log(watch("example")); 
  
    return (
        
      <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
        
        
        <input name='name' defaultValue={user.name}  {...register("exampleRequired", { required: true })} placeholder='Your Name' />
        {errors.name  && <span className='error' >Name is required</span>}
        
        <input name='email' defaultValue={user.email}  {...register("exampleRequired", { required: true })} placeholder='Your Address' />
        {errors.name && <span className='error' >Address is required</span>}
        
        <input name='phone'  {...register("exampleRequired", { required: true })} placeholder='Your Cell phone no' />
        {errors.name && <span className='error' >Phone is required</span>}
        <br/>
        <button className="btn btn-success">Place Order</button>
      </form>
    );
};

export default Shipment;