import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ResetStyle from './components/ResetStyle'
import TodoPage from './pages/Todo'
import ErrorPage from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Switch>
        <Route exact path="/">
          <TodoPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
