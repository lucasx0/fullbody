
import { useState } from 'react';
import './alunos.css';
import Title from '../../components/Title';
import Header from '../../components/Header';

import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Alunos(){
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [user, setUser] = useState('');
  const [endereco, setEndereco] = useState('');



  function handleAdd(e){
    e.preventDefault();
    alert('TESTE')
  }

  return(
    <div>
      <Header/>

    <div className="content">
      <Title name="Alunos">
        <FiUsers size={25} />
      </Title>

    <div className='container-grid'>
      <div className="nav-left">
        <form className="form-pesquisar-alunos" onSubmit={handleAdd}>
          <label>Pesquisar Aluno</label>
          <label>Aluno</label>
          <input type="text" placeholder="Pesquisar aluno" value={user} onChange={ (e) => setUser(e.target.value) } />
          <button type="submit centralizado">Pesquisar</button> <br/>
          <Link to="/new" className="new">
          Novo Aluno
          </Link>
        </form>
      </div>
      <div className='nav-right'>
        <div>
          <h4>Ultimas Avaliações</h4>
        </div>
      <div className='card'> 
        <table>
        <tr>
          <td>Nome</td>
          <td>Professor</td>
          <td>Data</td>
        </tr>
        <tr>
          <td>Gabriel</td>
          <td>Gleyce souza</td>
          <td>2 dias atras</td>
        </tr>
        </table>
      </div>
      
      <div className='card'> 
        <table>
        <tr>
          <td>Nome</td>
          <td>Professor</td>
          <td>Data</td>
        </tr>
        <tr>
          <td>Gabriel</td>
          <td>Gleyce souza</td>
          <td>2 dias atras</td>
        </tr>
        </table>
      </div>


      </div>
    </div>
    </div>

    </div>
  )
}