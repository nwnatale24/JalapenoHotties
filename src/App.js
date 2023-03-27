import { Route, Routes } from "react-router-dom"
import { Account } from "./pages/Account"
import { Home } from "./pages/Home"
import { TabsLinks } from "./pages/TabsLinks"

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Account" element={<Account />} />
    <Route path="/TabsLinks" element={<TabsLinks />} />
  </Routes>
}

export default App

