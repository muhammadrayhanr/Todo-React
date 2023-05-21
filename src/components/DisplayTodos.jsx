/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';
// import img from '../assets/empty.png';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (object) => dispatch(addTodos(object)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (object) => dispatch(updateTodos(object)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState('active');
  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort('all')}>
          All
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort('active')}>
          Active
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort('completed')}>
          Completed
        </motion.button>
      </div>
      <ul>
        {/* untuk menampilkan todos yang active */}
        {props.todos.length > 0 && sort === 'active'
          ? props.todos.map((item) => {
              return item.completed === false && <TodoItem key={item.id} item={item} removeTodo={props.removeTodo} updateTodo={props.updateTodo} completeTodo={props.completeTodo} />;
            })
          : null}
        {/* untuk menampilkan todos yang completed */}
        {props.todos.length > 0 && sort === 'completed'
          ? props.todos.map((item) => {
              return item.completed === true && <TodoItem key={item.id} item={item} removeTodo={props.removeTodo} updateTodo={props.updateTodo} completeTodo={props.completeTodo} />;
            })
          : null}
        {/* untuk menampilkan semua todos */}
        {props.todos.length > 0 && sort === 'all'
          ? props.todos.map((item) => {
              return <TodoItem key={item.id} item={item} removeTodo={props.removeTodo} updateTodo={props.updateTodo} completeTodo={props.completeTodo} />;
            })
          : null}
        {/* {props.todos.length == 0 && sort === 'active' ? <img className="image" src={img} /> : null}
        {props.todos.length == 0 && sort === 'completed' ? <img className="image" src={img} /> : null}
        {props.todos.length == 0 && sort === 'all' ? <img className="image" src={img} /> : null} */}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
