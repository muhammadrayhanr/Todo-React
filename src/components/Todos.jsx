/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { connect } from 'react-redux';
// import { GoPlus } from 'react-icons/go';
import { addTodos } from '../redux/reducer';
import { motion } from 'framer-motion';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (object) => dispatch(addTodos(object)),
    // removeTodo: (id) => dispatch(removeTodos(id)),
    // updateTodo: (object) => dispatch(updateTodos(object)),
    // completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //   console.log('props from store', props);

  const add = () => {
    if (todo === '') {
      alert('Input is Empty');
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo('');
    }
  };

  return (
    <div className="addTodos">
      <input type="text" onChange={(e) => handleChange(e)} className="todo-input" value={todo} placeholder="What to do" />

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="add-btn" onClick={() => add()}>
        {/* <GoPlus /> */}
        Add
      </motion.button>
      <br />
    </div>
  );
};
// connect method untuk connect dengan redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
