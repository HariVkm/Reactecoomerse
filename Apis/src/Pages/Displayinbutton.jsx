import React, { useEffect } from 'react'
import { useState } from 'react'
import { Apifetching } from './Api'

const Displayinbutton = () => {
    const [state, setstate] = useState(0)
    const [apidata, setapidata] = useState([])
    async function display() {
      //  const apidata=await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      //   console.log("Fetching Apidata",apidata.data.categories)
      //   setapidata(apidata.data.categories)
      const returndata = await Apifetching()
      console.log("Fetching Api data", returndata)
      setapidata(returndata)
    }
    useEffect(() => {
        display()
      }, [state])
      console.log("***********", apidata)
  return (
    <>
     {apidata.map((li)=>{
        return (
            <>
            <button className="mybtn mybtn2"> 
            <h1>{li.strCategory}</h1>
              {/* <h1>{li.email}</h1> */}
            {/* </div> */}
            </button>
            </>
        )
     })}
    </>
  )
}

export default Displayinbutton