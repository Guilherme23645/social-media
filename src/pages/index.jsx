import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import SignUp from "./SignUp"
import Login from "./Login"

const Pages = () => {
  return (
    <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="login" element={<Login />}/>
    </Routes>
  )
}

export default Pages