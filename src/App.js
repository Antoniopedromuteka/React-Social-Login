import Navbar from "./pages/Components/Navbar";

 import "./app.css"
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
        <h2>
           <Navbar/>
           <Home/>
        </h2>
    </div>  
  );
}

export default App;
