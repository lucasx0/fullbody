
import { useContext } from 'react';
import './header.css';
import { AuthContext } from '../../contexts/auth';
import avatar from '../../assets/avatar.png';

import { Link } from 'react-router-dom';
import { FiHome, FiUsers, FiFileText, FiSettings, FiLogOut } from "react-icons/fi";

export default function Header(){
  const { user } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);

  return(
    <div className="sidebar">
      <div>
        <img src={user.avatarUrl === null ? avatar : user.avatarUrl } alt="Foto avatar" />
      </div>

      <Link to="/dashboard">
        <FiHome color="#FFF" size={24} />
        Painel
      </Link>

      <Link to="/dashboard">
        <FiFileText color="#FFF" size={24} />
        Avaliações Fisica
      </Link>

      <Link to="/alunos">
        <FiUsers color="#FFF" size={24} />
        Alunos
      </Link>   

      <Link to="/profile">
        <FiSettings color="#FFF" size={24} />
        Configurações
      </Link>
      <Link to="/" onClick={ () => signOut() }>
        <FiLogOut color="#FFF" size={24} />
        Sair
      </Link>
               
    </div>
  )
}