import React from 'react'
import styled from 'styled-components';

function Menu() {
    const Side=styled.div`
    padding:1% 0 0 2%;
    color: #333;
    height:100vh;
    width:380px;
    display: block;
    position:fixed;
    overflow-y:scroll;
    top:0;
    transform-origin:left center;
    left:${({show})=>(show?"-100%":"0")};
    transition:ease 3s;
    background:#fff;
    z-index:10;
    div b{
        font-weight: 800;
    }
    `
    
    
    return (
           
            <Side>
          <div>
              <h2>hello, sign in</h2>
              <hr />
              <b>
              Digital Content & Devices
              </b>
              <p>Amazon Music</p>
              <p>Kindle E-readers & Books</p>
              <p>Appstore for Android</p>
              <hr />
          </div>
          <div>
              <b>
              Shop By Department
              </b>
              <p>Electronics</p>
              <p>Computers</p>
              <p>Smart Home</p>
              <p>Arts & Crafts</p>
              <p>See All</p>
              <hr />
          </div>
          <div>
              <b>
              Programs & Features
              </b>
              <p>Gift Cards</p>
              <p>#FoundItOnAmazon</p>
              <p>Amazon Live</p>
              <p>International Shopping</p>
              <p>See All</p>
              <hr />
          </div>
          <div>
              <b>Help & Settings</b>
              <p>Your Account</p>
              <p>English</p>
              <p>United States</p>
              <p>Customer Service</p>
              <p>Sign In</p>
          </div>
        </Side>
    )
}

export default Menu
