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

export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE',
  })

  return response.ok
}

export async function insertTodo(label) {
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      label,
      isDone: false,
    }),
  })

  return response.ok
}
