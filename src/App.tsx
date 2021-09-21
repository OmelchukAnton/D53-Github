import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Main } from "./components/main/Main";
import { RepoDetails } from "./components/repoDetails/RepoDetails";
import { Container } from "./styles";
import "antd/dist/antd.css";

export const App: FC = () => (
  <Router>
    <Container>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/repo/:username/:reponame" component={RepoDetails} />
        <Redirect to="/" />
      </Switch>
    </Container>
  </Router>
);
