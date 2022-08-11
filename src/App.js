import Navbar from "./pages/Components/Navbar";

 import "./app.css"
import Home from "./pages/Home";
import Post from "./pages/Post";


function App() {
  return (
    <div className="App">
        <h2>
           <Navbar/>
           <Post/>
        </h2>
    </div>  
  );
}

export default App;
