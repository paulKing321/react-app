import Todo from "../components/Todo";

function MyTodos() {
  return (
    <div>
      <h1 className='padding'>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Vue" />
      <Todo text="Learn Angular" />
    </div>
  )
}

export default MyTodos;