const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onEmailChange = (value) => {
    setEmail(value)
  }

  const onPasswordChange = (value) => {
    setPassword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle API call
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email@exemplo.com" onChange={(e) => onEmailChange(e.target.value)}/>
      <input type="password" placeholder="Senha" onChange={(e) => onPasswordChange(e.target.value)}/>
      <button type="submit"/>
    </form>
  )
}

export default SignUp