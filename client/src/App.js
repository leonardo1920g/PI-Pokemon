import './App.css';
import Landing from './views/Landing/Landing';
import Home from "./views/Home/Home";
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import { Route, useLocation } from "react-router-dom";




function App() {
  const location = useLocation(); 

  return (
    <div className="App">
      {/* este hook "location" solo muestra la NavBar en home create y detail */}
      {location.pathname !=="/" && <NavBar />}
      <Route exact path ="/" component={Landing} />       
      <Route path ="/home" render={() => <Home/>} />
      <Route path ="/create" component={Form} />
      <Route path ="/detail" component={Detail} />

    </div>
  );
}

export default App;
