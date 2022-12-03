
import { useState } from 'react';
import './alunos.css';
import Title from '../../components/Title';
import Header from '../../components/Header';

import { FiUsers } from 'react-icons/fi';

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
        <form className="form-profile alunos" onSubmit={handleAdd}>
          <label>Pesquisar Aluno</label>
          <label>Aluno <span>*</span></label>
          <input type="text" placeholder="Pesquisar aluno" value={user} onChange={ (e) => setUser(e.target.value) } />
          <button type="submit">Pesquisar</button>
          <button type="submit">Novo Aluno</button>
        </form>
      </div>
      <div className='nav-right'>
        lista de alunos
        erik
        gabriel
        cleber
        joao
        igor
        lucas

      </div>
    </div>
    </div>

    </div>
  )
}