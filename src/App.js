import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <h1 className>
        Todo App
      </h1>
   
        <Todos />
        <DisplayTodos />
    </div>
  );
}

export default App;
