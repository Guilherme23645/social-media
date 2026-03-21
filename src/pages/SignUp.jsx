const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email@exemplo.com"/>
        <input type="password" placeholder="Senha"/>
        <button type="submit"/>
      </form>
    </div>
  )
}

export default SignUp