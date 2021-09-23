import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import logo from "./images/logo.jpg"
const Footer = () => {
    const Foot=styled.div`
    padding:3%;
    height:60vh;
    width:100%;
    background:#232f3e;
    color:#fff;
    @media(max-width:768px){
        height:auto;
    }
    `
 const Ul=styled.ul`
 display: inline-flex;
 justify-content: center;
 `
 const Li=styled.li`
display:flex;
flex-direction:column;
 `
 const Links=styled(Link)`
 text-decoration: none;
 color:#fff;
 &:hover{
 text-decoration: underline;
 color:#fff;
 }
 `

const Buttons=styled.div`
display:flex;
flex-direction:row;
margin:0 50vh;
button{
    border-radius: 3px;
    width:15vw;
    margin:0 1vw;
    color:#fff;
    background:inherit;
}
img{
    height:5vh;
}
@media(max-width:768px){
 display: block;
 width:100%;
 padding:5% 0; 
}
`

    return (
        <Foot>
            <Ul>
            <Li>
                <h3>Get to Know Us</h3>
                <Links>Careers</Links>
                <Links>blog</Links>
                <Links>about amazon</Links>
                <Links>Investor Relations</Links>
                <Links>Amazon Devices</Links>
            </Li>
            </Ul>
            <Ul>
            <Li>
            <h3>Make Money with Us</h3>
                <Links>Sell products on Amazon</Links>
                <Links>Sell on Amazon Business</Links>
                <Links>Sell apps on Amazon</Links>
                <Links>Become an Affiliate</Links>
                <Links>Advertise Your Products</Links>
                <Links>Self-Publish with Us</Links>
                <Links>Host an Amazon Hub</Links>
                <Links>See More Make Money with Us</Links>
            </Li>
            </Ul>
            <Ul>
            <Li>
            <h3>Amazon Payment Products</h3>
                <Links>Amazon Business Card</Links>
                <Links>Shop with Points</Links>
                <Links>Reload Your Balance</Links>
                <Links>Amazon Currency Converter</Links>
            </Li>
            </Ul>
            <Ul>
            <Li>
            <h3>Let Us Help You</h3>
                <Links>Amazon and COVID-19</Links>
                <Links>Your Account</Links>
                <Links>Your Orders</Links>
                <Links>Shipping Rates & Policies</Links>
                <Links>Returns & Replacements</Links>
                <Links>Manage Your Content and Devices</Links>
                <Links>Amazon Assistant</Links>
                <Links>Help</Links>
            </Li> 
            </Ul><hr />
            <Ul style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                <Buttons >
                    <img src={logo} alt="amazon" />
                    <button type="submit">english</button>
                    <button type="submit">usd</button>
                    <button type="submit">united states</button>
                </Buttons>
            </Ul>
        </Foot>
    )
}

export default Footer
