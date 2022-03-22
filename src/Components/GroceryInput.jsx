import React, { useState } from 'react'

const GroceryInput = ({handleAdd}) => {
    const [grocery, setGrocery] = useState("");

  return (
    <div>
        <input 
        placeholder='Write Grocery Name' 
        onChange={(e)=> setGrocery(e.target.value)}
        value={grocery}
        />
        <button onClick={() => {
            handleAdd(grocery);
            setGrocery("");
        }}>Add Grocery</button>
    </div>
  )
}

export { GroceryInput };