import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import CryptoIndex from './pages/CryptoIndex';
import News from './pages/News';
import DeFi from './pages/DeFi';
import Nft from './pages/Nft';
import Metrics from './pages/Metrics';
import BuyCrypto from './pages/BuyCrypto';
import NotFound from './pages/NotFound';
import Learn from './pages/Learn';
import { Component } from 'react';

class App extends Component{
  state = {
    title : 'Crypto Junkies',
  };
  
  componentDidMount() {
       console.log('componentDidMount')
      this.checkTitle();
  }

  checkTitle = () => {
    const newTitle   = new URLSearchParams(window.location.search).get('title');
    if (newTitle) this.setTitle(newTitle);

  }
  setTitle = newTitle => {
    this.setState({
      title : newTitle,
    });
  }
  
  render(){
    
     
      return(
        <Router basename="/crypto-site">
              {  console.log('App is a class component')}
           
            <main>
                <Header title={this.state.title} />
                <Switch>
                  <Route path="/" component={CryptoIndex}  exact/>
                  <Route path="/news" component={News} />
                  <Route path="/defi" component={DeFi} />
                  <Route path="/nft" component={Nft} />
                  <Route path="/metrics" component={Metrics} />
                  <Route path="/learn" component={Learn} />
                  <Route path="/buycrypto" component={BuyCrypto} />
                  <Route  component={NotFound} />
                </Switch>
            </main>
        </Router>
      )}
}

export default App;
