import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

export default function App(){
  return(
    <Switch>
      <Route exact path="/" component= {HomePage} />
      <Route exact path="/:id" component= {UserPage} />
    </Switch>
  )
}