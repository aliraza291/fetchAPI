import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import Post from "./components/Post";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Router>
          <Navbar
            className=" w-100  "
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <div className="container">
              <Navbar.Brand href="#home">User Posts</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto  ">
                  <Link className="link" to={"/"}>
                    Home
                  </Link>
                  <Link className="link" to={"/post"}>
                    Post
                  </Link>
                  <Link className="link" to={"/about"}>
                    About
                  </Link>
                  <Link className="link" to={"/contact"}>
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>

          <Switch>
            <Route path="/post" component={Post}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/TodoList/:id" component={TodoList}></Route>
            <Route path="/" exact component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>

          {/* <Link to="/post">post</Link>
        <Link to="/TodoList/2">to do list</Link> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
