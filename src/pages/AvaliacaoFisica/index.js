import Header from "../../components/Header"
import Title from "../../components/Title"
import ListaSuspensa from "../../components/listaSuspensa";
import { FiPlusCircle } from "react-icons/fi";
import { useState, useContext, useEffect } from "react";

import api from "../../services/api";
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from "../../contexts/auth";
import './AvaliacaoFisica.css';

export default function AvaliacaoFisica(){

  const [customer, setCustomer] = useState([]);
  const [nameInstructor, setNameInstructor] = useState('');
  const { user, signOut } = useContext(AuthContext);
  const [ nome, SetNome] = useState(null);
  const [ dateAvaliacao, SetDateAvaliacao] = useState(user);
  const [ instrutor, SetInstrutor] = useState(user);

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
      <Header />

      <div className="content">
      <Title name="Avaliação Fisica">
        <FiPlusCircle size={25} />
      </Title>
    <div className="container-grid">
        {/* Cadastro avaliação fisica */}
        <div className="container">  
        <div className="nav-left">
        <form className="form-pesquisar-alunos">
          <div className="card">
          <label>Aluno</label>
        </div>
        <input type="text" value={customer.nome} disabled={false}/>
        <br/>
        <div className="card">
        <br/>
        <label>Agendar avaliação</label>
        </div>
        <input type="text" placeholder=" 00/00/0000" texvalue={nome} disabled={false}/>
        <br/>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
    <div className="container">
    <div className="nav-left">
      <div className="card">
        <p>Avaliações</p>
      <br/>
      <br/>
    <div className="card">
      {customer.length === 0 ?(
        <span>nenhuma avaliação registrada</span>
      ) : (
        customer.name
      )}
      <br/>
    </div>
      </div>
    </div>
    </div>
 </div>
</div>









    </div>
  )
}
