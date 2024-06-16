import Navigation from "./components/Navigation"
import Login from "./components/Login"
import Main from "./pages/Main"
import RegisterPage from "./pages/RegisterPage"
import { Route, Routes } from "react-router-dom"
import PaymentPage from "./pages/PaymentPage"
import RequireAuth from "./components/RequireAuth"
function App() {
  return (
    <>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>

          {/* protected route   */}
          <Route element={<RequireAuth />}>
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
