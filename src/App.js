import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-center py-8">
     <a href="/products"> 
     <img src="/assets/raffinato.jpg" alt="b/w logo" className="max-w-2xl w-full"></img>
      </a> 
      </div>
    </div>
  );
}

export default App;
