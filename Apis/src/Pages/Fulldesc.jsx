import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebarnew from '../Component/Sidebarnew'
import 'react-simple-toasts/dist/theme/dark.css'; // choose your theme
import { Apifetching } from './Api'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, removeProduct } from '../Redux/Cartslice';
const Fulldesc = () => {
  const dispatch=useDispatch()
  const [counter=0, setCounter] = useState();



  const handleClick2 = () => {
    setCounter(counter - 1);
    toast(counter - 1 + ':' + 'Item Removed From Cart... ')
  };
  const urlid = useParams()
  console.log(urlid)

  const [apidata, setapidata] = useState([])
  async function display() {
    const returndata = await Apifetching()
    setapidata(returndata)
  }

  const filtereddatas = apidata.filter((li) => {
    return li.idCategory == urlid.id
  })




  useEffect(() => {
    display()
   
  }, [])
  const handleClick1 = () => {
    setCounter(counter + 1);
    toast(counter + 1 + ':' + 'Item Added To Cart... ')
    // setCart([...cart,li])
    // alert('Added $ {li.strCategoryDescription} to cart')
  filtereddatas.map((li)=>{
    console.log("***************++++++++++++++++++++++++",li.idCategory);
    dispatch(addTocart({name:li.strCategory,image:li.strCategoryThumb,id:li.idCategory,qty:counter+1}))
  })

   

  };
  console.log("Filtered Data", filtereddatas)
  function remove(id){
    dispatch(removeProduct(id))
  }
  
  
  return (
    <>
      {filtereddatas && filtereddatas.map((li) => {
        return (
          <>
            <div className='item-container'>
              <h1>{li.strCategoryDescription}</h1>
            </div>
            <div className='card'>
              <img src={li.strCategoryThumb} />
            </div>
            <button className='Delete' onClick={remove}>Delete All</button>
            <div className="number" >
              <span className="minus" onClick={handleClick2}>-</span>
              <input type="text" value={counter} />
             <span className="plus" onClick={handleClick1} >+</span>
              <ToastContainer />
              <div>
              </div>
            </div>
            {/* <Sidebarnew globalaccess={globalaccess}></Sidebarnew> */}
            {/* <Sidebarnew message={co}></Sidebarnew> */}
          </>
        )

      })}

    </>

  )

}

export default Fulldesc