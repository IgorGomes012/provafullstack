import './index.css'

function Registration() {
  return (
    <div className="Registration">
      <form action="">
        <label for="name">
          <span>Nome</span>
          <input type="text" id="name" name="name"/>
        </label>

        <label for="E-mail">
          <span>E-mail</span>
          <input type="email" id="email" name="email"/>
        </label>

        <label for="Nascimento">
          <span>Nascimento</span>
          <input type="date" id="password" name="password"/>
        </label>

        <label for="Telefone">
          <span>Telefone</span>
          <input type="tel" id="password" name="password"/>
        </label>

        <input className='button' type="submit" value="Cadastrar" id="button"/>
      </form>
    </div>
  );
}

export default Registration;