import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SearchPage from './components/search_page/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
