import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { removeProduct } from '../Redux/Cartslice';

const Main = styled.div`
width:100%;
height:700px;
background-color:purple;
display:flex;
align-items:center;
justify-content:space-around;
flex-wrap:wrap;
overflow:scroll;
`
const Image = styled.img`
  width:280px;
  height:280px;
  margin:15px;
`
const Name = styled.h3`
 color:blue;
 font-size:18px;
 margin:10px;

`
const Cartnew = () => {
    const [state, setState] = useState([])
    const [quantity,setQuantity]=useState(0)
  const dispatch=useDispatch()
  const getvalues = useSelector((state) => state.cartInfo.cartStorage)
  console.log("===Loading Cart Data", getvalues);
console.log("state values",state);
  useEffect(() => {
    setState(getvalues)
  },[])
  function remove(Id) {
    console.log("Removing Id is:", Id)
    dispatch(removeProduct(Id))
    window.location.reload()
  }
  return (
    <>
      <Main>
        {state && state.map((li) => (
          
           <div>
          
            <Image src={li.image} />
            <button className="mybtn mybtn2">
              <Name>{li.name}</Name>
              <h1>{li.id}</h1>
              <h1>{li.qty}</h1>
            </button>
           <button style={{backgroundColor:'Red',marginLeft: "230px",height:"30px",width:"100px"}} 
            onClick={()=>remove(li.id)}>Delete</button>
          </div>
        
        ))}
        
      </Main>
      
    </>
  )
}

export default Cartnew