import Home from './Pages/Home'
import Formulario from './Pages/Form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/formulario' component={Formulario} />
      </Switch>
    </Router>
  );
}


export default App;
