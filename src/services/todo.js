export async function fetchTodos() {
  const response = await fetch('http://localhost:3000/todos')
  const data = await response.json()

  return data
}

export async function updateTodo(todo) {
  const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })

  return response.ok
}
