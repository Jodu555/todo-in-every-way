import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([{ ID: 1212121, todo: 'Clean the table', checked: false }, { ID: 121223122, todo: 'Go out for a walk', checked: false }]);
    console.log('Call');
  }, []);


  return (
    <div className="App">

      <table>
        <tr>
          <th>ID</th>
          <th>Todo</th>
          <th>Checked</th>
        </tr>
        {todos.map((todo, idx) => {
          return <tr>
            <td>{todo.ID}</td>
            <td>{todo.todo}</td>
            <td>{todo.checked}</td>
          </tr>;
        })}
      </table>

    </div>
  );
}

export default App;
