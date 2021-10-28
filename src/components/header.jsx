import {React , useState ,useContext} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {CardContext} from "./dataContext"
import logo from "./images/logo.jpg"
import usa from "./images/usa.png"
import {Col} from 'react-bootstrap'

const Header = () => {
  
  const Head=styled.div`
  color:#fff;
  background-color: #131921;
  width:100%;
  padding:0 2%;
  font-size: .9em;
  display:flex;
  position: relative;
  align-items:center;
  align-content: flex-end;
  flex-flow: row wrap;
  font-size:.9em;
    @media(max-width:768px){
      flex-direction: column;
      max-width:100%;
      align-items:center ;
      height:100%;
      padding:0 5% ;
      border-bottom: 1px solid #fff;
    }
  `

  const Ul=styled.div`
  color:#000;
  `

    const Logo=styled(Link)`
    width:10vw;
    padding:1% 0;
    text-decoration: none;
    color:#fff;
    border:none;
    img
    {
      height:8vh;
      width:100%;
    }
    `

    const Sec=styled.div`
    position:relative;
    display:flex;
    margin:0 1%;
    flex-flow:row wrap;
    align-content:center;
    justify-content:space-between;
    &:hover{
        border:1px solid #fff;
    }
    @media(max-width:768px){
      justify-content: center;
      align-items: center;
      width:100%;
      height:auto;
      margin:1% 0;
      padding:2%;
      border-bottom: 1px solid #eee;
    }

    `
    const P=styled.p`
    line-height: 1;
    margin-top:1%;
    font-size: 12px;
    color: #767676;
    font-weight: 400;
    z-index: 2;
    position: relative;
    background-color: #fff;
    padding: 0 8px 0 7px;
    
    `
const formstyle={
  display:"flex",flexDirection:"column",
  justifyContent:"center",alignItems:"center",width:"auto"
}
const Links=styled(Link)`
text-decoration: none;
color:#000;
`

const Search=styled.div`
display:flex;
flex-direction:row;
justify-content: center;
width:100%;
height:auto;
text-decoration:none;
`

const Input=styled.input`
width:25vw;
`
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const cart=useContext(CardContext)
    return (
          <Head>
            
            <Col>
            <Sec >
               <Logo  >
               <img src={logo} alt="amazon" style={{objectFit:"cover",margin:"0 5%"}}/>
               </Logo>
              
          </Sec>
            </Col>
               <Sec>
                 
       <Button variant="primary" onClick={handleShow} style={{background:"inherit",border:"none"}}>
       deliver to :
       </Button>
   
       <Modal show={show} onHide={handleClose}>
         <Modal.Header  >
           <Modal.Title >Choose your location </Modal.Title>
         </Modal.Header>
   
   <Form style={formstyle}>
   <p>Delivery options and delivery speeds may vary for different locations</p>
         <Button variant="primary"
          type="submit" 
          style=
          {{
           background:"orange",color:"#222",border:"none"}}>
       Sign-in to see your addresses
     </Button>
     
     <P>or enter a US zip code</P>
     <div style={{display:"flex"}}>
       <Form.Control type="password"
        placeholder="Password" />
     <Button variant="primary" 
     type="submit"
      style={{
        background:"orange"
        ,color:"#333",border:"none"
        }}> 
       apply
     </Button>
     </div>
     <p >or</p>
     <DropdownButton id="dropdown-basic" title="ship outside of us" >
     <Dropdown.Item href="#/action-1">Europe</Dropdown.Item>
     <Dropdown.Item href="#/action-2">Australia</Dropdown.Item>
     <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
   </DropdownButton>
     </Form>
         <Modal.Footer>
         <Button variant="primary" type="submit" style={{background:"orange",color:"#333",border:"none"}}>
       Done
     </Button>
         </Modal.Footer>
       </Modal>
   
               </Sec>
               <Sec>
          <Search>
          <Dropdown >
     <Dropdown.Toggle variant="success" id="dropdown-basic" style={{height:"5vh",backgroundColor:"#fff",color:"#000"}}>
     All
     </Dropdown.Toggle>
   
     <Dropdown.Menu >
       <Dropdown.Item href="#/action-1">All</Dropdown.Item>
       <Dropdown.Item href="#/action-2">All departments</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Art crafts</Dropdown.Item>
       <Dropdown.Item href="#/action-2">automotive</Dropdown.Item>
       <Dropdown.Item href="#/action-3">baby</Dropdown.Item>
       <Dropdown.Item href="#/action-2">beauty</Dropdown.Item>
       <Dropdown.Item href="#/action-3">books</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown>
   
   <Input >
   </Input>
     <Links>
     <BsSearch style={{background:"#febd69",color:"#000",width:"100%",height:"5vh"}} />
     </Links>
          </Search>
   
          </Sec>
               <Sec>
   
          <Dropdown>
     <Dropdown.Toggle variant="success" id="dropdown-basic"  style={{color:"#fff",background:"inherit",border:"none"}}>
       <img src={usa} alt="usa" style={{maxWidth:"3vw"}} />
     </Dropdown.Toggle>
   
     <Dropdown.Menu >
       <Dropdown.Item href="#/action-1" >eng</Dropdown.Item>
       <Dropdown.Item href="#/action-2">fra</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Spaniol</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown>
         
   </Sec>
               <Sec>
          <Dropdown>
     <Dropdown.Toggle variant="success" id="dropdown-basic" style={{fontSize:".8rem",maxHeight:"9vh",color:"#fff",background:"inherit",border:"none"}}>
   
       <span>hello sign in</span><br />
       <span> Accounts & Lists</span>
     </Dropdown.Toggle>
     <Dropdown.Menu >
       <Dropdown.Item style={{display:"flex",margin:"0 5%",padding:"2%",flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
         <Button>sign in</Button>
         <p> New customer? Start here.</p>
        <div style={{display:"flex",width:"30vw"}}>
        <Ul>
           <li><b>Your Lists</b></li>
           <li><Links>Create a List</Links></li>
           <li><Links>Find a List or Registry</Links></li>
           <li><Links>AmazonSmile Charity Lists</Links></li>
         </Ul>
         <hr />
         <Ul>
           <li><b>Your Account</b></li>
           <li><Links>Account</Links></li>
           <li><Links>Orders</Links></li>
           <li><Links>Recommendations</Links></li>
           <li><Links>Browsing History</Links></li>
           <li><Links>Watchlist</Links></li>
           <li><Links>Video Purchases & Rentals</Links></li>
           <li><Links>Kindle Unlimited</Links></li>
           <li><Links>Content & Devices</Links></li>
           <li><Links>Subscribe & Save Items</Links></li>
           <li><Links>Memberships & Subscriptions</Links></li>
           <li><Links>Music Library</Links></li>
         </Ul>
        </div>
         </Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown>
   </Sec>
           <Sec>
              <span> return </span>
              <br />
              <span> & orders</span>
              </Sec>
              <Sec>
                <h4> Cart is {cart}</h4>
   
              
         </Sec>
           </Head>
    )
}

export default Header
