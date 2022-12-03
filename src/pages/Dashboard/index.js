import './dashboard.css'
import { useState } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title'
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Dashboard(){
  const [alunos, setAlunos] = useState([1])

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
          <table>
            <thead>
              <tr>
                <th scope="col">Alunos</th>
                <th scope="col">Status</th>
                <th scope="col">Avaliação</th>
                <th scope="col">Cadastro</th>
                <th scope="col">#</th>
              </tr>
            </thead>

           <tbody>
            <tr>
              <td data-label="Alunos">Sujeito</td>
              <td data-label="Assunto">Suporte</td>
              <td data-label="Status">
                <span className="badge" style={{backgroundColor: '#5cb85c'}}>Não atendido</span>
              </td>
              <td data-label="Cadastrado">20/06/2021</td>
              <td data-label="#">
                <button style={{backgroundColor: '#3583f6'}} className="action">
                  <FiSearch color="#FFF" size={17} />
                </button>

                <button style={{backgroundColor: '#F6A935'}} className="action">
                  <FiEdit2 color="#FFF" size={17} />
                </button>
              </td>
             
            </tr>
            </tbody> 
          </table>
        </>
      )}


      </div>
      
    </div>
  )
}