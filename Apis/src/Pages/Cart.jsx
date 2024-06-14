import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { removeProduct } from '../Redux/Cartslice';
const Name = styled.h3`
 color:blue;
 font-size:18px;
 margin:10px;

`
const Cart = () => {
  const [state, setState] = useState([])
 const dispatch=useDispatch()
  const getvalues = useSelector((state) => state.cartInfo.cartStorage)
  console.log("===Loading Cart Data", getvalues);
  useEffect(() => {
    setState(getvalues)
  },[])
  function remove(Id) {
    console.log("Removing Id is++++++++++++++++++++:", Id)
    dispatch(removeProduct(Id))
  }
  return (
    <>
      {state && state.map((li) => {
        return (
          <>
            <h1>{li.name}</h1>
            
            <div className='card'>
              <img src={li.image} />
            
         
           </div>
            <button style={{backgroundColor:'Red',marginLeft: "530px",height:"30px",width:"100px"}} 
            onClick={() => remove(li.idCategory)}>Deleted</button>
          </>
        )
      })}

    </>
  )
}

export default Cart
