import { Route, Routes } from "react-router-dom"
import { Account } from "./pages/Account"
import { Home } from "./pages/Home"
import { Reviews } from "./pages/Reviews"
import { TabsLinks } from "./pages/TabsLinks"

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Account" element={<Account />} />
    <Route path="/TabsLinks" element={<TabsLinks />} />
    <Route path="/Reviews" element={<Reviews />} />
  </Routes>
}

export default App

