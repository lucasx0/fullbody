import Header from "../../components/Header"
import Title from "../../components/Title"
import { FiPlusCircle } from "react-icons/fi";
import { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";
import './AvaliacaoFisica.css';

export default function AvaliacaoFisica(){

  const { user, signOut } = useContext(AuthContext);
  const [ nome, SetNome] = useState(user);
  const [ dateAvaliacao, SetDateAvaliacao] = useState(user);
  const [ instrutor, SetInstrutor] = useState(user);

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
        <label>Aluno</label>   
        <input type="text" value={user} disabled={false}/>
        <label>Data</label>   
        <input type="text" value={user} disabled={false}/>
        <label>Professor</label>   
        <input type="text" value={user} disabled={false}/>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>


        {/*Perguntas avaliação fisica */}
    <div className="container">
      <form className="form-profile">
        <div>
          <h4>Par-Q</h4>
        </div>
        
      <div className="card">
        <p>Seu médico já disse que você possui um problema cardíaco e recomendou atividades físicas apenas sob supervisão médica? </p>
        <div class="radio">
        <input type="radio" name="1" id="1" value="S" required=""/>
          <label for="1">Sim</label>
         <input type="radio" name="1" id="2" value="N"/>
         <label for="2" class="ml-2">Não</label>
         <label for="1" class="error"></label>
        </div>
       </div>

       <div className="card">
        <p>Você tem dor no peito provocada por atividades físicas? * </p>
        <div class="radio">
        <input type="radio" name="1" id="1" value="S" required=""/>
          <label for="1">Sim</label>
         <input type="radio" name="1" id="2" value="N"/>
         <label for="2" class="ml-2">Não</label>
         <label for="1" class="error"></label>
        </div>
       </div>

       <div className="card">
        <p>Você sentiu dor no peito no último mês? </p>
        <div class="radio">
        <input type="radio" name="1" id="1" value="S" required=""/>
          <label for="1">Sim</label>
         <input type="radio" name="1" id="2" value="N"/>
         <label for="2" class="ml-2">Não</label>
         <label for="1" class="error"></label>
        </div>
       </div>

       <div className="card">
        <p>Você já perdeu a consciência em alguma ocasião ou sofreu alguma queda em virtude de tontura? </p>
        <div class="radio">
        <input type="radio" name="1" id="1" value="S" required=""/>
          <label for="1">Sim</label>
         <input type="radio" name="1" id="2" value="N"/>
         <label for="2" class="ml-2">Não</label>
         <label for="1" class="error"></label>
        </div>
       </div>

       <div className="card">
        <p>Você tem algum problema ósseo ou articular que poderia agravar-se com a prática de atividades físicas? </p>
        <div class="radio">
        <input type="radio" name="1" id="1" value="S" required=""/>
          <label for="1">Sim</label>
         <input type="radio" name="1" id="2" value="N"/>
         <label for="2" class="ml-2">Não</label>
         <label for="1" class="error"></label>
        </div>
       </div>

       <div className="card">
        <p>Algum médico já lhe prescreveu medicamento para pressão arterial ou para o coração? </p>
        <div class="radio">
        <input type="radio" name="1" id="1" value="S" required=""/>
          <label for="1">Sim</label>
         <input type="radio" name="1" id="2" value="N"/>
         <label for="2" class="ml-2">Não</label>
         <label for="1" class="error"></label>
        </div>
       </div>

       <div className="card">
        <p>Você tem conhecimento, por informação médica ou pela própria experiência, de algum motivo que poderia impedí-lo de participar de atividades fisicas sem supervisão médica?  </p>
        <div class="radio">
        <input type="radio" name="1" id="1" value="S" required=""/>
          <label for="1">Sim</label>
         <input type="radio" name="1" id="2" value="N"/>
         <label for="2" class="ml-2">Não</label>
         <label for="1" class="error"></label>
        </div>
       </div>

      </form>
    </div>

    

 </div>
</div>









    </div>
  )
}
