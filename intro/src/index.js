import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";

const App = () => {
  return (
    <Fragment>
      <Header />
      <h3>Content list</h3>
      <ul>
        <li>
          <Content />
        </li>
        <li>
          <Content />
        </li>
        <li>
          <Content />
        </li>
      </ul>
      <Footer />
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
