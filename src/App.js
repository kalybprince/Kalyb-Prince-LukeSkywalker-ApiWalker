import React, { useState } from "react";
import Form from "./components/Form"
import Display from "./components/Display";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useParams,
  useHistory
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Form />
      <Switch>
        <Route path="/:category/:id">
          <Display />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;