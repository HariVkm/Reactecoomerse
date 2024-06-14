import React from 'react'
import { Link } from 'react-router-dom'
import {styled} from 'styled-components'


const Main=styled.div`
width:100px;
height: 110px;
background-color:white;
display:flex;

 `
 const Image=styled.div`
   margin-top: -20px;
    margin-left:120px;
    height:220px;
    width:120px
 `
 const Search=styled.div`
    margin-top: 18px;
    margin-left:120px;
    height:220px;
    width:420px
 `
 const Cont=styled.div`
  display:flex;
    background-color: white;
    margin-top:-20px;
    width: 70px;
    height: 140px;
    border:1px solid black;
    
 `
 const Link1=styled.div`
 height:60px;
    margin-top: 2px;
    margin-left:300px;
 `
 const Link2=styled.div`
 height:60px;
    margin-top: 2px;
    margin-left:50px;
 `
 const Link3=styled.div`
 height:60px;
    margin-top: 2px;
    margin-left:50px;
 `
 const Link4=styled.div`
 height:60px;
    margin-top: 2px;
    margin-left:50px;
 `
 const Container1=styled.div`
 display:flex;
    background-color: violet;
    width: 100%;
    height:300px;
 `
 const Image1=styled.div`
  height:100px;
  width:300px;
 `
const Sidebar = () => {
  return (
    <>
      
   <Main>
   <Image>
    <img class="image" width={120} height={70} src='./images/logo-medium.png' alt="" />
    </Image>
    <Search>
    <input  type="text" placeholder="Search For 100% Fresh Products" name="name" ></input>
    </Search>
    </Main>
   <Cont>
    <Link1>
    <Link To={''}>Fish & Seaafood</Link>
    </Link1>
    <Link2><Link To={''}>Poultry</Link></Link2>
    <Link3><Link To={''}>Mutton</Link></Link3>
    <Link4><Link To={''}>Steaks & Fillet</Link></Link4>
   </Cont>
   <Container1>
   <Image1>
   <img  src="./images/imagenew.png"/> 
   </Image1>
   </Container1>
  
   </>
  )
}
export default Sidebar