import React, { useState } from "react";
import groceryData from "../../groceryData.json";
import { useForm } from "react-hook-form";
import axios from "axios";

const Orders = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL,setImageURL] = useState(null)
  const onSubmit = (data) =>{
      console.log(data);
      const eventData = {
          name: data.name,
          imageURL: imageURL
      };
      console.log(eventData)
      const url = `http://localhost:5000/addFood`
       console.log(eventData);
       fetch(url,{
           method:'POST',
           headers:{
               'Content-type' : 'application/json'
           },
           body:JSON.stringify(eventData)
       })
       .then(res => console.log('sever'))
    };
  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '9163cc026e85aceb2cdb220b580cc7ca')
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',
     imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

//   const handleAddFood = () => {
//     // fetch("http://localhost:5000/addFood", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(groceryData),
//     // });
//   };
  return (
    <div>
        <h1>add your desired products here</h1>
        
         <form className=" justify-content-center align-item-center d-flex mt-5 bg-primary rounded" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-5">
                                    <div className="mb-3">
                                        <label for="name" className="form-label text-white">Product Name</label>
                                        <input name="name" className="form-control" placeholder="add New Product" {...register('name')} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="weight" className="form-label text-white">Weight</label>
                                        <input name="weight" type="text" className="form-control" placeholder="1 KG" {...register('weight')}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="price" className="form-label text-white">Add Price</label>
                                        <input name="price" type="number" className="form-control" placeholder="20" {...register('price')} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="img" className="form-label text-white">Choose a Picture</label>
                                        <input name="img"  className="form-control" type="file" onChange={handleImageUpload} />
                                    </div>

                                    <div className="mb-3 justify-content-center align-item-center d-flex">
                                        <input className="btn btn-warning" type="submit" />
                                    </div>
                                </div>

                            </form>
     
    </div>
  );
};

export default Orders;
