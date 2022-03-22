import React from 'react'

const GroceryItem = ({grocery, id, handleDelete}) => {
  return (
    <div>
        <h1>{grocery}</h1>
        <button onClick={() => handleDelete(id)}>Delete Grocery</button>
    </div>
  )
}

export { GroceryItem };