import './App.css'

function App() {
const todos = [
  {id: 1, title:"review assignment"},
  {id: 1, title:"study content"},
  {id: 1, title:"submit assignment"},
]
  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default App
