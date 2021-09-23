import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsJustify } from "react-icons/bs"
import Menu from './menu'
const Navbar = () => {

    const Nav=styled.div`
    color:#fff;
    position: relative;
    display: flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    background-color: #232f3e;
    height:7vh;
    @media(max-width:768px){
        padding-left:2%;
        flex-flow:column wrap;
    }
    `
    const Sec=styled.ul`
    text-decoration: none;
    margin-top:1%;
    display: flex;
    justify-content: flex-end;
    padding:.3% 1%;
    &:last-child{
        position: absolute;
        right:3%;
        @media(max-width:768px){
            position: static;
        }
    }
    &:hover{
        border:1px solid #fff;
        color:#333;
    }
    `

    const Li=styled.li`
    display:flex;
    justify-content: flex-end;
    align-items:center;

    `


    const Links=styled(Link)`
    color:#fff;
    text-decoration: none;
    &:hover{
        color:#fff;
    }
    `
    const [show,setShow]=useState(false)
    

    return (
        <Nav className="">
            <Sec>
              <Li>
              {show && <Menu/>}
              <BsJustify onClick={()=>setShow(!show)}
               style={show?{
                position:"relative",
                transform:"translateX(28vw)",
                background:"#000",
                height:"4vh",
                width:"100%",
                marginBottom:"15vh",
            }
                :null}
                 />
              </Li>
            </Sec>
            <Sec>
                <Li>
                    <Links>
                    Today`s deal
                    </Links>
                </Li>
            </Sec>
            <Sec>
                <Li>
                   <Links>
                   Customer Service
                   </Links>
                </Li>
                </Sec>
            <Sec>
                <Li>
                    <Links> 
                    Registry
                    </Links>
                </Li>
            </Sec>
            <Sec>
                <Li>
                    <Links>
                    Gift Card
                    </Links>
                </Li>
            </Sec>
            <Sec>
                <Li>
                    <Links>
                    Sell
                    </Links>
               </Li>
            </Sec>
            <Sec>
                <Li>
                    <Links >
                    Amazon Response To Covid-19
                    </Links>
               </Li>
            </Sec>
        </Nav>
    )
}

export default Navbar
