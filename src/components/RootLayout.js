import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './navbar/Navbar'

function RootLayout() {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route
          path="/myprofile"
          element={<PrivateRoute element={<MyProfile />} />}
        /> */}
        {/* <Route
          path="/barber-profile/:barberName"
          element={<PrivateRoute element={<BarberProfile />} />}
        /> */}
        {/* <Route path="/shops" element={<Shops />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default RootLayout