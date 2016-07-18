import React from 'react';
import TitleApp from './TitleApp';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import '../css/greeter.css';

const App = () => (
  <div>
  	<TitleApp />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
