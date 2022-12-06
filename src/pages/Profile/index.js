import { useState, useContext } from 'react';
import './profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import avatar from '../../assets/avatar.png';
import { FiSettings, FiUpload } from 'react-icons/fi'

import { AuthContext } from '../../contexts/auth'

export default function Profile(){

    const { user, signOut } = useContext(AuthContext);

    const [ nome, SetNome] = useState(user && user.nome);
    const [ email, SetEmail] = useState(user && user.email);
    const [ prof, setProf] = useState(user && user.prof);
    const [ celular, SetCelular] = useState(user && user.celular); 
    const [ cpf, SetCpf] = useState(user && user.cpf);

    const [ cep, SetCep] = useState(user && user.cep);
    const [ endereco, SetEndereco] = useState(user && user.end);
    const [ numero, SetNumero] = useState(user && user.numero);
    const [ bairro, SetBairro] = useState(user && user.bairro);
    const [ cidade, SetCidade] = useState(user && user.cidade);
    const [ estado, SetEstado] = useState(user && user.estado);

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar ] = useState(null)

   async function handleSave(e){
        e.preventDefault();

        // if (imageAvatar === null && nome !== ' '){
        //     await firabase.firestore().collection('users')
        //     .doc(user.uid)  <--Função de alterar dados. Falta finalizar -->
        //     .update({
        //         nome:nome
        //     })
        //     .then(()=>{})
        // }
    }

    return(
        <div>
          <Header/>

            <div className="content">
            <Title name="Meu perfil">
                <FiSettings size={25} />
            </Title>


            <div className="container">
                <form className="form-profile" onSubmit={handleSave}>

                <label>Nome</label>   
                    <input type="text" value={nome} onChange={ (e) => SetNome (e.target.value) } />

                    <label>Email</label>   
                    <input type="text" value={email} disabled={false}/>

                    <label>Profissão</label>   
                    <input type="text" value={prof} onChange={ (e) => setProf (e.target.value) }/>
                    
                    <label>Celular</label>   
                    <input type="text" value={celular} onChange={ (e) => SetCelular (e.target.value) } />

                    <label>CPF</label>   
                    <input type="text" value={cpf} disabled={true} />

                    <label>CEP</label>   
                    <input type="text" value={cep} onChange={ (e) => SetCep (e.target.value) } />

                    <label>Endereço</label>   
                    <input type="text" value={endereco} onChange={ (e) => SetEndereco (e.target.value) } />

                    <label>Numero</label>   
                    <input type="text" value={numero} onChange={ (e) => SetNumero (e.target.value) } />

                    <label>Bairro</label>   
                    <input type="text" value={bairro} onChange={ (e) => SetBairro (e.target.value) } />

                    <label>Cidade</label>   
                    <input type="text" value={cidade} onChange={ (e) => SetCidade (e.target.value) } />

                    <label>Estado</label>   
                    <input type="text" value={estado} onChange={ (e) => SetEstado (e.target.value) } />


                <button type="submit">Salvar</button>       

                </form>
            </div>

            <div className="container">
                <button className="logout-btn" onClick={ () => signOut()}>
                    Sair
                </button>
            </div>

            </div>           
        </div>
    )
}