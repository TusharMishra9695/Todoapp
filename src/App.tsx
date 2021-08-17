import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos/DisplayTodos";
import Todos from "./components/Todos/Todos";
import Header from './Header/Header'
import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
<Header />
      <Todos />
      <DisplayTodos />
    </div>
  );
}
export default App;
