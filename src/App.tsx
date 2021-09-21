import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Main } from "./components/main/Main";
import { RepoDetails } from "./components/repoDetails/RepoDetails";
import s from './App.module.css';
import "antd/dist/antd.css";

export const App = () =>
    <Router>
        <div className={s.container}>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/repo/:username/:reponame" component={RepoDetails} />
                <Redirect to="/"/>
            </Switch>
        </div>
    </Router>
