import { Switch } from "react-router-dom";
import Route  from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Alunos from "../pages/Alunos";
import New from "../pages/New";
import AvaliacaoFisica from "../pages/AvaliacaoFisica";

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate/> 
      <Route exact path="/profile" component={Profile} isPrivate/>
      <Route exact path="/alunos" component={Alunos} isPrivate/> 
      <Route exact path="/new" component={New} isPrivate/> 
      <Route exact path="/avaliacaofisica" component={AvaliacaoFisica} isPrivate/> 
    </Switch>
  )
}