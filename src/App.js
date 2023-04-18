import { Route, Routes } from "react-router-dom"
import { Account } from "./pages/Account"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { TabsLinks } from "./pages/TabsLinks"
import React, { useState } from 'react';
 
function App() {

  return <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Account" element={<Account />} />
    <Route path="/TabsLinks" element={<TabsLinks />} />
  </Routes>
}

export default App

