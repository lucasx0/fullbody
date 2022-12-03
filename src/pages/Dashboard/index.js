import './dashboard.css'
import { useState } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title'
import { FiMessageSquare, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Dashboard(){
  const [alunos, setAlunos] = useState([])

  return(
    
    <div>
      <Header/>

      <div className="content">
      <Title name="Atendimentos">
      <FiMessageSquare size={25}/>
      </Title>

      {alunos.length === 0 ? (
        
      <div className="container dashboard">
        <span>Nenhum aluno Registrado...</span>
          <Link to="/new" className="new">
            <FiPlus size={25} color="#FFF" />
          Novo Aluno
          </Link>
      </div>
      ): (
        <>
         <Link to="/new" className="new">
            <FiPlus size={25} color="#FFF" />
          Novo Aluno
          </Link>
        </>
      )}


      </div>
      
    </div>
  )
}