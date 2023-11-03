import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"


const App = () => {
  return <div>
    <Header />
    <div className='md:min-h-[calc(100vh-157px)] px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <Outlet />
    </div>
    <Footer />
  </div>
}

export default App
