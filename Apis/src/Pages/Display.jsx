
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Apifetching } from './Api'
import { styled } from 'styled-components'
import './Full.css'
const Name = styled.h3`
 color:blue;
 font-size:18px;
margin:10px;
`

const Display = () => {
  const urlid = useParams()
  console.log(urlid)
  const [apidata, setapidata] = useState([])
  async function display() {

    const returndata = await Apifetching()
    setapidata(returndata)

  }
  useEffect(() => {
    display()
  }, [])
  const filtereddata = apidata.filter((li) => {
    return li.idCategory == urlid.id

  })
  console.log("Filtered Data", filtereddata)
  return (
    <>

      {filtereddata.map((li) => (
        <>
          <img src={li.strCategoryThumb} />
          <Name>{li.strCategory}</Name>

          <br>
          </br>
          <Link to={`/fdesc/${li.idCategory}`}><button className='btn'>View Description</button></Link>
        </>

      )

      )}


    </>
  )
}

export default Display