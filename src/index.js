import React from "react"
import PropTypes from "prop-types"
import { render } from "react-dom"
import { 
  BrowserRouter as Router, 
  Route,
  Redirect,
} from "react-router-dom"
import { Switch } from "react-router"

import { Provider } from "react-redux"

import store from "./store"

import "./style.css"

import GameContainer from "./containers/GameContainer"
import WelcomePage from "./components/pages/WelcomePage"
import Page404 from "./components/pages/404"


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

const App = () => (
  <div style={styles}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/game" component={GameContainer} />
          <Route path="/404" component={Page404} />
          <Redirect from="/*" to="/404" />
        </Switch>
      </Router>
    </Provider>
  </div>
)


render(<App />, document.getElementById("root"))
