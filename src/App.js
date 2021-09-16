import './App.css';
import React, { Component } from 'react'
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

class App extends Component {
  state = {
    title: 'Cypto Junkies'
  }
  render() {
    return (
      <Router basename="/cryptojunkies">
        <main>
            <Header title={this.state.title} />
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
            <Footer  title={this.state.title} />
        </main>
    </Router>
  );
  }
}

export default App;
