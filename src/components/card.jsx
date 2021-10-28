import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import styled from 'styled-components';
import Data from './product'
const Card = () => {

const Cards=styled.div`
background:#eaeded;
width:100%;
padding:1%;
z-index:5;
@media (max-width:768px){
    width:auto;
    height:70%;
}
`

const Gr=styled.div`
display:grid; 
grid-template-columns: 50% 50%;
grid-gap:1%;
img{
    width:5vw;
    height:5vh;
}
`

const Ul=styled.ul`
display:flex;
flex-flow:row wrap;
padding:1%;
justify-content:space-between;
width:100%;
height:50%;

@media (max-width:768px){
    width:100%;
    float:none;
    display: flex;
    justify-content:center;
    align-items:center;
}
`

const Li=styled.li`
background:#fff;
border-radius:3px;
font-size:1em;
border:0;
display: flex;
padding:1%;
justify-content:space-between;
align-items:flex-start;
flex-flow:column wrap;
overflow:hidden;
width:20%;
height:auto;
h2{
    font-size: 21px;
    font-weight:bold;
}
@media (max-width:768px){
    width:70vw;
    margin-top:6%;
}
img{
    width:100%;
        height:auto;
        min-height:30%;
object-fit:cover;
@media (max-width:768px){
    height:80%;
}
}
p{
    font-size:13px;
cursor:pointer;
text-decoration: none;
color:#5d55ff;
width:auto;
@media (max-width:768px){
    margin:1% 40%;
    background:orange;
    width:9vw;
    text-align: center;
    height:4vh;
}
}
`
const Links=styled(Link)`

`

const Sign=styled.button`
background:orange;
color:#222;
width:10vw;
padding:.5% 1%;
border:none;
margin-bottom: 2%;
`

    return (
        <Cards>
           <Ul>
                
                <Li>
                <h2>AMAZON BASICS</h2>
                <img src={Data.product1.img1} alt=""/>
                <Links ><p>see more</p></Links>
                </Li>
                
                <Li>
                <h2>SHOP BY CATEGORY</h2>
                <Gr>
                <img src={Data.product1.cardbox1.img1} alt="1" />
                <img src={Data.product1.cardbox1.img2} alt="2" />
                <img src={Data.product1.cardbox1.img3} alt="3" />
                <img src={Data.product1.cardbox1.img4} alt="4" />
                </Gr>
                <Links ><p>see more</p></Links>
                
                </Li>
                
                <Li >
                <h2>Deals & Promotions</h2>
                <img src={Data.product1.img3} alt="" />
                <Links><p>shop now</p></Links>
                </Li>

                <Li style={{background:"fff",alignItems:'center',margin:'2vh 0'}}>
                <h2>Sign in for the best experience</h2>
                <Links><Sign type="submit" >sign in securely</Sign></Links>
                <img src={Data.product1.img4} alt="" style={{background:"#eee"}} />
                </Li>
            </Ul>
            <hr />

            <Ul>
                <Li>
                    <h2>Oculus</h2>
                    <img src={Data.product2.img1} alt="" />
                    <Links><p>shop now</p></Links>
                </Li>
                <Li>
                    <h2>Find your ideal TV</h2>
                    <img src={Data.product2.img2} alt="" />
                    <Links><p>see more</p></Links>
                </Li>
                <Li>
                    <h2>Gaming accessories</h2>
                    <Gr>
                <img src={Data.product2.cardbox2.img1} alt="1" />
                <img src={Data.product2.cardbox2.img2} alt="2" />
                <img src={Data.product2.cardbox2.img3} alt="3" />
                <img src={Data.product2.cardbox2.img4} alt="4" />
                </Gr>
                    <Links><p>see more</p></Links>
                </Li>
                <Li>
                    <h2>Computers & Accessories</h2>
                    <img src={Data.product2.img4} alt="" />
                    <Links ><p>shop now</p></Links>
                </Li>
            </Ul>
            <hr />
           <Ul>
                <Li>
                    <h2>Comfy styles for her</h2>
                    <Gr>
                        <img src={Data.product3.cardbox3.img1} alt="1" />
                <img src={Data.product3.cardbox3.img2} alt="2" />
                <img src={Data.product3.cardbox3.img3} alt="3" />
                <img src={Data.product3.cardbox3.img4} alt="4" />
                </Gr>
                    <Links ><p>see more</p></Links>
                </Li>
                <Li>
                    <h2>Shop Laptops & Tablets</h2>
                    <img src={Data.product3.img2} alt="" />
                    <Links><p>see more</p></Links>
                </Li>
                <Li>
                    <h2>Explore home bedding</h2>
                    <img src={Data.product3.img3} alt="" />
                    <Links><p>see more</p></Links>
                </Li>
                <Li>
                    <h2>Gaming merchandise</h2>
                    <Gr> 
                    <img src={Data.product3.cardbox4.img1} alt="1" />
                <img src={Data.product3.cardbox4.img3} alt="2" />
                <img src={Data.product3.cardbox4.img3} alt="3" />
                <img src={Data.product3.cardbox4.img4} alt="4" />
                </Gr>
                    <Links><p>see more</p></Links>
                </Li>
            </Ul>
        </Cards>
    )
}

export default Card
