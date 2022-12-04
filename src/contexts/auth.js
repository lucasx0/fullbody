
import axios from 'axios';
import { useState, createContext, useEffect } from 'react';
// import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState({id:1, nome: 'Gabriel'}); // -> set para forçar um usuario logado
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

  async function signUp(email, password, nome){ 
    setLoadingAuth(true);
    const baseURL = 'http://localhost:8081/customer/instructor/1';
    axios.post(baseURL, {
          //   .doc(uid).set({
    //     nome: nome,
    //     avatarUrl: null,
    //   })
    //   .then(()=>{
    //     let data = {
    //       uid: uid,
    //       nome: nome,
    //       email: value.user.email,
    //       avatarUrl: null
    //     };

    //     setUser(data);
    })
   
    //   .doc(uid).set({
    //     nome: nome,
    //     avatarUrl: null,
    //   })
    //   .then(()=>{
    //     let data = {
    //       uid: uid,
    //       nome: nome,
    //       email: value.user.email,
    //       avatarUrl: null
    //     };

    //     setUser(data);
    //   })
    // })

  }


  return(
    <AuthContext.Provider value={{ signed: !!user,  user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
