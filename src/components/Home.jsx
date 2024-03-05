import React, { useState } from "react";
import Modal from "./Modal";

const Home = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "IPhone 11",
      description: "IPhone 11",
      quantity: 1,
      price: 1000,
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (entry)=>{
    if(entry?.id===0){
        const newId = Math.max(...data.map(item=>item?.id),0)+1;
        setData(data=>[...data,{...entry,id:newId}])
    }else{
        setData(data?.map(item=>{
            if(item?.id===entry?.id){
                return entry;
            }
            return item;
        }))

    }
    setShowModal(false)
  }

  const addMore = ()=>{
    setShowModal({id:0,name:'',quantity:'',price:'',description:''})
  }
  const handleEdit = (entry)=>{
    setShowModal(entry)
  }
  const handleDelete = (id)=>{
    setData(data?.filter(item=>item?.id!==id))
  }
  const handleCancel = ()=>{
    setShowModal(false);
  }
  
  return (
    <div>
      {showModal && <Modal modalItem={showModal} handleSubmit={handleSubmit} handleCancel={handleCancel}/>}
      <button onClick={addMore}>Add More</button>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          {data &&
            data?.map((product) => (
              <tr key={product?.id}>
                <td>{product?.id}</td>
                <td>{product?.name}</td>
                <td>{product?.description}</td>
                <td>{product?.quantity}</td>
                <td>{product?.price}</td>
                <td><button onClick={()=>handleEdit(product)}>Edit</button><button onClick={()=>handleDelete(product?.id)}>Delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
