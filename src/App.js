import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CryptoIndex from './pages/CryptoIndex';
import News from './pages/News';
import DeFi from './pages/DeFi';
import Nft from './pages/Nft';
import Metrics from './pages/Metrics';
import BuyCrypto from './pages/BuyCrypto';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Router >
        <main>
            <Header />
            <Switch>
              <Route path="/" component={CryptoIndex}  exact/>
              <Route path="/news" component={News} />
              <Route path="/defi" component={DeFi} />
              <Route path="/nft" component={Nft} />
              <Route path="/metrics" component={Metrics} />
              <Route path="/buycrypto" component={BuyCrypto} />
              <Route  component={NotFound} />
            </Switch>
        </main>
    </Router>
  );
}

export default App;
