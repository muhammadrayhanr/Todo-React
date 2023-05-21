import { useState } from 'react';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //   console.log('todo-text', todo);

  return (
    <div className="addTodos">
      <input type="text" onChange={(e) => handleChange(e)} className="todo-input" />
      <button className="add-btn">Submit</button>
    </div>
  );
};

export default Todos;
