import React from 'react'

import {useState} from 'react'
import ItemList from './ItemList'


const Content = ({items, handleCheck, handleDelete}) => {


  return (
    <main>  
      {items.length?(
         <ItemList
         items={items}
         handleCheck = {handleCheck}
         handleDelete = {handleDelete}
         />    ):
        (<h5 style = {{marginTop: '2rem'}}>Your list is emty</h5>)}
  </main>
  )
}


export default Content