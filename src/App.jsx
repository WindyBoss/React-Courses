import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import Todos from 'pages/Todos';
// import TodoForm from 'pages/TodoForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Todos />} />
          {/* <Route path="addTodo" element={<TodoForm />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
