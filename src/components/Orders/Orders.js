import React from "react";
import groceryData from "../../groceryData.json";
import { useForm } from "react-hook-form";

const Orders = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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
                                        <input name="name" className="form-control" defaultValue="Product Name" {...register('exampleRequired')} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="weight" className="form-label text-white">Weight</label>
                                        <input name="weight" type="text" className="form-control" defaultValue="1 KG" {...register('exampleRequired')}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="price" className="form-label text-white">Add Price</label>
                                        <input name="price" type="number" className="form-control" defaultValue="20" {...register('exampleRequired')} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleRequired" className="form-label text-white">Choose a Picture</label>
                                        <input name="exampleRequired"  className="form-control" type="file" />
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
