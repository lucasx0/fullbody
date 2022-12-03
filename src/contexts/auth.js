
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

  /*async function signUp(email, password, nome){ 
    função pra cadastrar o usuario
    setLoadingAuth(true);
    await firebase.auth().createUserWIthEmailAndPassowrd(email, password)
    .then(async (value) =>{
      let uid = value.user.uid;
      await firebase.firestore().collection('users')
      .doc(uid).set({
        nome: nome,
        avatarUrl: null,
      })
      .then(()=>{
        let data = {
          uid: uid,
          nome: nome,
          email: value.user.email,
          avatarUrl: null
        };

        setUser(data);
      })
    })

  }*/


  return(
    <AuthContext.Provider value={{ signed: !!user,  user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
