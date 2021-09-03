import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

import Input from '../components/todo/Input'
import List from '../components/todo/List'
import Footer from '../components/todo/Footer'

import {
  fetchTodos,
  updateTodo,
  deleteTodo,
  insertTodo,
} from '../services/todo'

const Container = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

function TodoPage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchAndSetTodos()
  }, [])

  const isAllCompleted = useMemo(
    () => todos.filter(({ isDone }) => isDone).length === todos.length,
    [todos],
  )

  async function fetchAndSetTodos() {
    setTodos(await fetchTodos())
  }

  const handleAddTodo = async (label) => {
    const success = await insertTodo(label)

    if (success) {
      fetchAndSetTodos()
    }
  }

  const handleUpdateDone = async (todo) => {
    const success = await updateTodo({
      ...todo,
      isDone: !todo.isDone,
    })

    if (success) {
      fetchAndSetTodos()
    }
  }

  const handleDeleteTodo = async (id) => {
    const success = deleteTodo(id)

    if (success) {
      fetchAndSetTodos()
    }
  }

  const handleUpdateAllDone = async () => {
    // 하나라도 false 라면 false 를 true 로

    // 모두 true 라면 false
    if (isAllCompleted) {
      Promise.all(
        todos.map(async (todo) => {
          await updateTodo({
            ...todo,
            isDone: false,
          })
        }),
      )

      fetchAndSetTodos()

      return
    }

    const activeTodos = todos.filter(({ isDone }) => !isDone)

    Promise.all(
      activeTodos.map(async (todo) => {
        await updateTodo({
          ...todo,
          isDone: true,
        })
      }),
    )

    fetchAndSetTodos()
  }

  return (
    <Container>
      <Input
        onAddTodo={handleAddTodo}
        onUpdateAllDone={handleUpdateAllDone}
        isAllCompleted={isAllCompleted}
      />
      <List
        todos={todos}
        onUpdateDone={handleUpdateDone}
        onDeleteTodo={handleDeleteTodo}
      />
      <Footer />
    </Container>
  )
}

export default TodoPage
