import './css/App.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.h1 initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.1 }}>
        What&apos;s the plan for today?
      </motion.h1>
      <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 1.2 }}>
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
