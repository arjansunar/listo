import './App.css';
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import Anime from "./pages/Anime"
// import Search from './pages/Search';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/anime" component={Anime} />
        <Route path="/" component={Home} />
      </Switch>
      <main className="app__main">
        <LeftSidebar />
        <RightSidebar />
      </main>
    </div>
  );
}

export default App;
