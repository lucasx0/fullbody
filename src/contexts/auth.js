
import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null); // -> set para forçar um usuario logado
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    function loadStorage(){
      const storageUser = localStorage.getItem('SistemaUser');

      if(storageUser){
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
  
      setLoading(false);
    }
    
    loadStorage();

  }, [])

  async function signUp(email, password, nome, birthDate){
    setLoading(true);
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      }
  }
    const baseUrl = 'http://localhost:8081/instructor';
    axios.post(baseUrl, {
      name: nome,
      email: email,
      password: password,
      birthDate: birthDate
    }, config
    ).then((response) => {
      setUser(response.data);
      storageUser(response.data);
      setLoadingAuth(false);
      console.log('olá')
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error);
      setLoadingAuth(false);
    })
    
    function storageUser(data){
      localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

  }


  return(
    <AuthContext.Provider value={{ signed: !!user,  user, loading, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
