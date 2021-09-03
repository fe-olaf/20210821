import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Input from '../components/todo/Input'
import List from '../components/todo/List'
import Footer from '../components/todo/Footer'

import { fetchTodos, updateTodo } from '../services/todo'

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

  async function fetchAndSetTodos() {
    setTodos(await fetchTodos())
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

  return (
    <Container>
      <Input />
      <List todos={todos} onUpdateDone={handleUpdateDone} />
      <Footer />
    </Container>
  )
}

export default TodoPage
