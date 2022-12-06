
import { useState, useEffect } from 'react';
import './alunos.css';
import Title from '../../components/Title';
import Header from '../../components/Header';

import { FiUsers } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from "../../services/api";

export default function Alunos(){
  const [customer, setCustomer] = useState([]);
  const [user, setUser] = useState([]);
  const [nameInstructor, setNameInstructor] = useState('');

  const history = useHistory();
  const id = localStorage.getItem("SistemaUser");
  let obj = JSON.parse(id);

  const token = obj.jwt;
  const instructorID = obj.id

  function handleAdd(e){
    e.preventDefault();
    alert('TESTE')
  }

  useEffect(() => {
    api
      .get("/customer/instructor/" + instructorID , {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(res => {
        setCustomer(res.data);
        console.log(res.data);
      });
    
    api
      .get("/instructor/" + instructorID , {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(res => {
        setNameInstructor(res.data.name);
      });
  }, [instructorID]);

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
        {customer.map(customer => (
          <li key={customer.id}>
            <button
              onClick={() => {
                history.push("/");
              }}
              type="button"
            >
              <strong>Nome</strong>
              <p>{customer.name}</p>

              <strong>Instrutor:</strong>
              <p>{nameInstructor}</p>
                  
            </button>
          </li>
        ))}
      </div>
    </div>
    </div>

    </div>
  )
}