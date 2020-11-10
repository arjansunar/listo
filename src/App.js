import './App.css';
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import Anime from "./pages/Anime"
// import Search from './pages/Search';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/anime/:mal_id" component={Anime} />
        <Route path="/" component={Home} />
      </Switch>

    </div>
  );
}

export default App;
