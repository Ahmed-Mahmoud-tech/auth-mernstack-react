import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";


import Registration from './components/Registration';
import Login from './components/Login';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Registration} exact />
          <Route path="/post" component={Post} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
