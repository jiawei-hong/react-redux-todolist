import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import UpdateTodo from './components/UpdateTodo';


export default function AppRouter() {
    return (
        <Router>
            <Header/>

            <Switch>
                <Route path="/" exact>
                    <TodoList/>
                </Route>

                <Route path="/createTodo" exact>
                    <CreateTodo/>
                </Route>

                <Route path="/updateTodo/:index" exact>
                    <UpdateTodo/>
                </Route>

                <Route path="*">Not Found</Route>
            </Switch>
        </Router>
    );
}