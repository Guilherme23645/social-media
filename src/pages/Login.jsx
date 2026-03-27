import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert("Preencha todos os campos!")
      return 
    }
    
    // handle API call

    navigate("/")
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                placeholder="email@exemplo.com"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
              Enviar
            </button>
            <p>
                Não tem conta?
                <Link to="signup">Cadastre-se</Link>
            </p>
        </form>
    </div>
  )
}

export default Login