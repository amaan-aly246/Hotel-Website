import Navigation from "./components/Navigation"
import Login from "./components/Login"
import Main from "./pages/Main"
import RegisterPage from "./pages/RegisterPage"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
