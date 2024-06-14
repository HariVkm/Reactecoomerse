import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Fulldesc from '../Pages/Fulldesc'

import './side.css'
const Main = styled.div`
width:100px;
height: 110px;
background-color:white;
display:flex;
justify-content: space-between;
    `
const Sub = styled.div`
width:40%;
height:150px;
display:flex;
align-items: center;
justify-content: space-around;
margin-left:300px;
`

const Ul = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  list-style-type: none;
  position: relative;
    right:58px;
margin-top:-80px;
    
`
const Li = styled.div`
display: flex;
  flex-direction:row;
  min-width: 10em;
  color: red;
  border-right: thin solid white;
  text-align: center;
  display: inline-block;
  justify-content: space-between;
  position: relative;
   right: 88px;
   `
const Searchbar = styled.div`
 margin: 10px;
padding: 10px;
border-radius: 5px;
width: 150px;
box-sizing: border-box;
`
const Liright = styled.div`
   min-width: 10em;
  color: red;
  border-right: thin solid white;
  text-align: center;
  display: inline-block;
  justify-content: space-between;
  position: relative;
   right: -200px;  
`
const Container = styled.div`
    width:120%;
height:70px;
display:flex;
align-items: center;
justify-content: space-around;
border:1px solid black;
margin-top:-40px;
`
const Ul1 = styled.div`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  position: relative;   
  right:100px;
    
`
const Li1 = styled.div`
   min-width: 10em;
  color: red;
  border-right: thin solid white;
  text-align: center;
  display: inline-block;
  justify-content: space-between;
  position: relative;  
`
const Sidebarnew = (props) => {

   const count=useSelector((state)=>state.cartInfo.cartStorage)


   console.log("length----------",count.length);
    return (
        <>
            <Main>
                <Sub>
                    <Ul>
                        <Li>
                            <img class="image" width={120} height={30} src='./images/logo-medium.png' alt="" />
                        </Li>
                        <Li>
                            <Searchbar>
                                <input style={{ marginLeft: "30px" }} type="text" placeholder="Search for  Products" name="search" />
                            </Searchbar>
                        </Li>
                    </Ul>
                </Sub>
                <Sub>
                    <Ul >
                        <Liright>
                            <Link to={''}><img className="image" width={30} height={30} src='./images/Person.png' alt="" /></Link>
                        </Liright>
                        <Liright>
                            <Link to={'/cart'}><img class="image" width={30} height={30} src='./images/cart.png' alt="" /></Link>
                          {count.length}
                            <div>
      
    </div>
                        </Liright>
                    </Ul>
                </Sub>
            </Main>
            <Container>
                <Ul1>
                    <Li1>
                        <Link To={''}>Fish & Seaafood</Link>
                    </Li1>
                    <Li1>
                        <Link To={''}>Poultry</Link>
                    </Li1>
                    <Li1>
                        <Link To={''}>Mutton</Link>
                    </Li1>
                    <Li1>
                        <Link To={''}>Steaks & Fillet</Link>
                    </Li1>
                    <Li1>
                        <Link To={''}>Ready To Cook</Link>
                    </Li1>
                    <Li1>
                        <Link To={''}>Vegeterian</Link>
                    </Li1>
                </Ul1>
            </Container>
        </>

    )
}

export default Sidebarnew