import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import TechEra from './components/TechEra'
import NotFount from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TechEra} />
      <Route path="/not-found" component={NotFount} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
