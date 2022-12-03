import Header from "../../components/Header"
import Title from "../../components/Title"
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";
import './new.css';



export default function New(){

  const [assunto, setAssunto] = useState('Suporte')
  const [status, setStatus] = useState('atendido')
  const [complemento, setComplemento] = useState('')

  function handleRegister(e){
    e.preventDefault()
    alert('TESTE')
  }
//chama quando troca o assunto
  function handleChangeSelect(e){
    setAssunto(e.target.value)
  }
//chama quando troca o status
  function handleOptionChange(e){
  setStatus(e.target.value)
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
        <select value={assunto} onChange={handleChangeSelect}>
          <option value="Perca de Peso">Perca de Peso</option>
          <option value="Avaliacao">Avaliação Fisica</option>
          <option value="FTreinos">Ficha de Treinos</option>
          <option value="GanhodeM">Hipertrofia</option>
          <option value="Acompanhamento">Personal Trainer</option>
          <option value="Financeiro">Financeiro</option>
        </select>

        <label>Status</label>
        <div className="status">
          <input type="radio" name="radio" value="Aberto" onChange={handleOptionChange} checked={status === 'Aberto'}/>
          <span>Em Aberto</span>

          <input type="radio" name="radio" value="Progresso" onChange={handleOptionChange} checked={status === 'Progresso'}/>
          <span>Em Progresso</span>

          <input type="radio" name="radio" value="atendido" onChange={handleOptionChange} checked={status === 'atendido'}/>
          <span>Atendido</span>
        </div>
         
         <label>Complemento</label>
         <textarea type="text" placeholder="Orientações" value={complemento}
         onChange={(e) => setComplemento(e.target.value)}/>

         <button type="submit">Registrar</button>

      </form>
      </div>
      </div>
    </div>
  )
}