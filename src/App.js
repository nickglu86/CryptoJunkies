import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import CryptoIndex from './pages/CryptoIndex';
import News from './pages/News';
import DeFi from './pages/DeFi';
import Nft from './pages/Nft';
import Metrics from './pages/Metrics';
import Invest from './pages/Invest';
import NotFound from './pages/NotFound';
import Learn from './pages/Learn';
import Footer from './components/Footer';

function App() {
  return (
      <Router basename="/cryptojunkies">
        <main>
            <Header />
            <Switch>
              <Route path="/" component={CryptoIndex}  exact/>
              <Route path="/news" component={News} />
              <Route path="/defi" component={DeFi} />
              <Route path="/nft" component={Nft} />
              <Route path="/metrics" component={Metrics} />
              <Route path="/learn" component={Learn} />
              <Route path="/invest" component={Invest} />
              <Route  component={NotFound} />
            </Switch>
            <Footer />
        </main>
    </Router>
  );
}

export default App;
