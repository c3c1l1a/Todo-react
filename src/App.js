/* eslint-disable */

import { BrowserRouter as Router } from "react-router-dom";
import TodoContainer from './components/TodoContainer';
import "./App.css";

const App = () => {

  return (
    <Router>
      <TodoContainer />
    </Router>
  );
}

export default App;
