import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
const Main = styled.div`
    width:120%;
    height:40px;
    background-color:green;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Sub = styled.div`
    width:40%;
    height:150px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin-left:150px;
   `
const Ul = styled.div`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: relative;
    right: 178px;
    
`
const Li = styled.div`
  min-width: 10em;
  color: red;
  border-right: thin solid white;
  text-align: center;
  display: inline-block;
  justify-content: space-between;
  position: relative;
   right: 88px;
   `
  
const Demo = () => {
  return (
    <Main>
      <Sub>
        <Ul>
          <Li>
            <Link style={{ color: 'white' }} to={''}> 91-9496128842</Link>
          </Li>
          <Li style={{ marginLeft: "30px" }}>
            <Link style={{ color: 'white' }} to={''}> harivkm2018@gmail.com </Link>
          </Li>
        </Ul>
      </Sub>
      <Sub>
        <Ul >
          <Li >
            <Link style={{ color: 'white' }} to={''}> Certificates</Link>
          </Li>
          <Li>
            <Link style={{ color: 'white' }} to={''}> Why-us </Link>
          </Li>
          <Li>
            <Link style={{ color: 'white' }} to={''}> News-Room </Link>
          </Li>
          <Li>
            <Link style={{ color: 'white' }} to={''}> Sell with us </Link>
          </Li>

        </Ul>

      </Sub>

    </Main>
  )
}

export default Demo
