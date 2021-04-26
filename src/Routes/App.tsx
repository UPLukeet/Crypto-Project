import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HomePage } from '../Pages/HomePage'
import { BASE_ROUTE, HOME_PAGE_ROUTE } from './config'

function App() {
  return (
    <Switch>
      <Route path={HOME_PAGE_ROUTE} component={HomePage} />
      <Redirect from={BASE_ROUTE} to={HOME_PAGE_ROUTE} exact />
    </Switch>
  )
}

export default App
