import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div``

const CheckButton = styled.div`
  width: 60px;
  font-size: 0;
  position: absolute;
  top: 0;
  left: -32px;
  transform: rotate(90deg);
  height: 65px;
  width: 65px;

  &::before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;

    ${({ checked }) =>
      checked &&
      `
      color: #737373;
    `}
  }
`

const Input = styled.input`
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  box-sizing: border-box;
`

function EditInput({ onAddTodo }) {
  const [keyword, setKeyword] = useState('')

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      onAddTodo(keyword)
    }
  }

  const handleUpdateKeyword = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <Container>
      <Input onKeyPress={handleEnter} onChange={handleUpdateKeyword} />
      <CheckButton checked={false} />
    </Container>
  )
}

export default EditInput
