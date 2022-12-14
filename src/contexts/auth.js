
import axios from 'axios';
import { useState, createContext, useEffect } from 'react';


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

  async function createCustomer(name, email, birthDate, genero, id, token){
    setLoading(true);
    const createUrl = `http://localhost:8081/customer/instructor/${id}`
    axios.post(createUrl, {
      name: name,
      email: email,
      birthDate: birthDate,
      gender: genero
    }, {
      headers: {
        "Authorization": `Bearer ${token}`
    }})
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      setLoading(false)
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }

  async function signIn(email, password){
    setLoadingAuth(true);
    const loginUrl = 'http://localhost:8081/signin'
    axios.post(loginUrl, {
      email: email,
      password: password
    })
    .then((response) => {
      let data = {
        email: email,
        password: password,
      }
      localStorage.setItem("INSTRUCTORID", response.data.id);
      localStorage.setItem("TOKEN", response.data.jwt);

      setUser(data);
      storageUser(response.data);
      setLoadingAuth(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoadingAuth(false);
    })
  }

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
    }
    ).then((response) => {
      let data = {
      name: nome,
      email: email,
      password: password,
      birthDate: birthDate
      }
      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
      console.log(data)
      console.log('olá')
      console.log(user)
      console.log('olá 2')
    })
    .catch((error)=>{
      console.log(error);
      setLoadingAuth(false);
    })
  }
  
  function storageUser(data){
    localStorage.setItem('SistemaUser', JSON.stringify(data));
    console.log(localStorage)
  }

  async function signOut(){
    localStorage.removeItem('SistemaUser')
    setUser(null)
  }

  return(
    <AuthContext.Provider value={{ signed: !!user,  user, loading, signUp, signOut, signIn, createCustomer}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
