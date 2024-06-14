import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Useeffect1 = () => {
  const [state, setstate] = useState(0)
  const [ate1, setstate1] = useState(0)
  const [apistate, setapistate] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((Apidata) => {
      console.log(Apidata.data)
      setapistate(Apidata.data)

    }
    )

  }, [state])

  console.log("****", apistate)
  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => setstate(state + 1)}>Click-Me</button>
      <h1>---Fetching Data From Api---</h1>
      <div className='item-container'>
        {apistate.map((li) => (
          <>

          
            <Link to={`/disp/${li.id}`}> 
            {/* <div className='card'> */}
            <button className="mybtn mybtn2"> 
              <h1>{li.name}</h1>
              {/* <h1>{li.email}</h1> */}
            {/* </div> */}
            </button>
            </Link>
          </>
          
        ))}
      </div>
    </>
  )

}

export default Useeffect1