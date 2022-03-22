import React, { useState } from 'react'
import { GroceryInput } from './GroceryInput';
import {v4 as uuid} from 'uuid';
import { GroceryList } from './GroceryList';

const Grocery = () => {
    const [data, setData] = useState([]);

    const handleAdd = (grocery) =>{
        if(grocery.length){
            const payload = {
                grocery,
                id: uuid()
            }


            setData([...data, payload]);
        }
        
    }
    console.log(data)

    const handleDelete = (id) => {
        const updatedData = data.filter((item) => {
            return item.id!==id;
        });
        setData(updatedData);
    }

  return (
    <div>
        <h1>Grocery List Management Application</h1>
        <GroceryInput handleAdd={handleAdd} />
        <GroceryList data={data} handleDelete={handleDelete}/>
    </div>
  )
}

export { Grocery };