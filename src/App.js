import Navbar from "./pages/Components/Navbar";

 import "./app.css"
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
        <h2>
           <Navbar/>
           <Login/>
        </h2>
    </div>  
  );
}

export default App;
