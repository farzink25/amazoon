import React from 'react'
import Header from "./components/header"
import Navbar from"./components/navbar"
import Main from "./components/main"
import Footer from "./components/footer"
import {buy,CardContext} from "./components/dataContext"
function App() {
  return (
  
    <CardContext.Provider value={buy.count}>
      <Header />
      <Navbar/>
      <Main/>
      <Footer />
    </CardContext.Provider>
  );
}

export default App;
