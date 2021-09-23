import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import Card from './card'
import Data from "./product"

const Main = () => {
    const Main=styled.div`
    text-decoration:none;
    margin:0;
    flex-direction: column;
    `

    const Sec=styled.ul`

    `

    const Li=styled.li`
    
    `

    const Links=styled(Link)`
    
    `
const Customer=styled.ul`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
button{
  background:orange;
color:#222;
width:10vw;
height:5vh;
padding:.5% 1%;
border:none;
@media(max-width:768px){
  width:15vw;
  height:10vh;
}
}


/*  */
Li{
    
  }
`

    return (
        <Main>
                <Carousel 
                style={{maxHeight:"30vh",background:"#000",zIndex:"-1"}}>
  <Carousel.Item style={{maxHeight:"30vh",listStyleType:"none"}}>
    <img
      className="d-block w-100"
      src={Data.carousel.img1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Data.carousel.img2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Data.carousel.img3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={Data.carousel.img4}
      alt="fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={Data.carousel.img5}
      alt="fifth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={Data.carousel.img6}
      alt="sixth slide"
    />
  </Carousel.Item>
</Carousel>
            <Sec>
                <Li style={{margin:"0"}}>
                    <Card/>
                </Li>
                </Sec>
            <Sec><hr/>
                <Customer >
                    <p>See personalized recommendations</p>
                    <button type="submit" ><b>Sign In</b></button>
                    <span>new customer? <Links style={{textDecoration:"none",color:"#007185"}}>register</Links></span>
                </Customer>
                </Sec>
            <Sec >
                <Li >
                    <hr />
                    <a href="#top" style={{background:"#37475a",display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",color:"#fff",width:"100%",padding:"1% 3%"}}><b>back to top</b></a>
                </Li>
                </Sec>
        </Main>
    )
}

export default Main
