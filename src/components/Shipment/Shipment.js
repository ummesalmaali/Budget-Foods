import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import UserContext from '../../UserContext';
import './Shipment.css'

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Shipment = () => {
    const [user,setUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('Shipment is in your way',data)
    };
  
    console.log(watch("example")); 
    const [selectedDate, setSelectedDate] = useState({
      OrderDate: new Date(),
      DeliveryDate: new Date(),
    });

  const handleOrder = (date) => {
    const newDates = {...selectedDate}
    newDates.OrderDate = date;
    setSelectedDate(newDates);
  };
  const handleDelivery = (date) => {
    const newDates = {...selectedDate}
    newDates.DeliveryDate = date;
    setSelectedDate(newDates);
  };
   
  const handleBooking = () =>{
   const newOrder = {...selectedDate, ...user}
   fetch('http://localhost:5000/addOrder',{
     method: 'POST',
     headers: {'Content-type': 'application/json'},
     body:JSON.stringify(newOrder)
   })
   .then(res => res.json())
   .then(data =>{
     console.log(data);
   })
  }
  
    return (
        
     <div>
        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
        
        
        <input name='name' defaultValue={user.name}  {...register("exampleRequired", { required: true })} placeholder='Your Name' />
        {errors.name  && <span className='error' >Name is required</span>}
        
        <input name='email' defaultValue={user.email}  {...register("exampleRequired", { required: true })} placeholder='Your Address' />
        {errors.name && <span className='error' >Address is required</span>}
        
        <input name='phone'  {...register("exampleRequired", { required: true })} placeholder='Your Cell phone no' />
        {errors.name && <span className='error' >Phone is required</span>}
        <br/>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Order Date"
          value={selectedDate.OrderDate}
          onChange={handleOrder}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Probable Delivery Date"
          format="dd/MM/yyyy"
          value={selectedDate.DeliveryDate}
          onChange={handleDelivery}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
        <button onClick={handleBooking()} className="btn btn-primary 'text-center'">Place Order</button>
      </form>
     

     </div>
      
    );
};

export default Shipment;