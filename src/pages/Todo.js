import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Input from '../components/todo/Input'
import List from '../components/todo/List'
import Footer from '../components/todo/Footer'

const Container = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

function TodoPage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch('http://localhost:3000/todos')
      const data = await response.json()

      setTodos(data)
    }

    fetchTodos()
  }, [])

  return (
    <Container>
      <Input />
      <List todos={todos} />
      <Footer />
    </Container>
  )
}

export default TodoPage
