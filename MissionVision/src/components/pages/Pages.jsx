import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "../about/About"
import About from "../home/Home"


const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </>
  )
}

export default Pages
