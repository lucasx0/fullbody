import Header from "../../components/Header"
import Title from "../../components/Title"
import { FiPlusCircle } from "react-icons/fi";
import './new.css';



export default function New(){

  function handleRegister(e){
    e.preventDefault()
    alert('TESTE')
  }
  return(
    <div>
      <Header />

      <div className="content">
      <Title name="Novo aluno">
        <FiPlusCircle size={25} />
      </Title>

      <div className="container">
      <form className="form-profile" onSubmit={handleRegister}>
        <label>Aluno</label>
        <select>
          <option>Lucas</option>
        </select>
        <label>Assunto</label>
        <select>
          <option value="Perca de Peso">Perca de Peso</option>
          <option value="Avaliacao">Avaliação Fisica</option>
          <option value="FTreinos">Ficha de Treinos</option>
          <option value="GanhodeM">Hipertrofia</option>
          <option value="Acompanhamento">Personal Trainer</option>
          <option value="Financeiro">Financeiro</option>
        </select>

        <label>Status</label>
        <div className="status">
          <input type="radio" name="radio" value="Aberto" />
          <span>Em Aberto</span>

          <input type="radio" name="radio" value="Progresso" />
          <span>Em Progresso</span>

          <input type="radio" name="radio" value="atendido" />
          <span>Atendido</span>
        </div>
         
         <label>Complemento</label>
         <textarea type="text" placeholder="Orientações" />

         <button type="submit">Registrar</button>

      </form>
      </div>
      </div>
    </div>
  )
}