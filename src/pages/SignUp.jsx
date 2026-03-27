import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert("Preencha todos os campos")
      return
    }

    // handle API call

    navigate("/login")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} placeholder="email@exemplo.com" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" value={password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
      <p>Já tem uma conta? <Link to="/login">Faça login aqui</Link></p>
    </div>
  )
}

export default SignUp