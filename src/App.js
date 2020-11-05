import './App.css';
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";


function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <LeftSidebar />
        <RightSidebar />
      </main>
    </div>
  );
}

export default App;
