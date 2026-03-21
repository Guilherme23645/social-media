import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import SignUp from "./SignUp"

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="signup" element={<SignUp />}/>
    </Routes>
  )
}

export default Pages