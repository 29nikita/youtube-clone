import { useState } from "react";
import Header from "./components/Header/Header.js";
import SideBar from "./components/SideBar/SideBar.js";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/HomeScreen.js";
import LoginScreen from "./screens/loginScreen/LoginScreen.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./_app.scss";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleSetSidebar = () =>
    setSidebar((value) => {
      return !value;
    });

  return (
    <>
      <Header handleSetSidebar={handleSetSidebar} />
      <div className="app__container">
        <SideBar sidebar={sidebar} handleSetSidebar={handleSetSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        <Route path="/login">
          <LoginScreen />
        </Route>

        <Route path="/search">
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
