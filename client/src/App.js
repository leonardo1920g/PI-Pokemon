import './App.css';
import { Route, useLocation } from "react-router-dom";

import Landing from './views/Landing/Landing';
import Home from "./views/Home/Home";
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';

function App() {

  const location = useLocation(); 

  return (
    <div className="App">
      {location.pathname !=="/" && <NavBar />}
      <Route exact path ="/" component={Landing} />       
      <Route path ="/home" render={() => <Home/>} />
      <Route path ="/create" component={Form} />
      <Route path ="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
