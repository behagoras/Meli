import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Detail from './components/detail/Detail';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path={"/main"} component={Main}/>
          <Route path={"/detail"} component={Detail}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
