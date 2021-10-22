import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {updateTodo, deleteTodo, setSearchText} from "../redux/actions";
import {XCircleIcon, PencilIcon, CheckCircleIcon as UnCompletedCheckCircleIcon} from "@heroicons/react/outline";
import {CheckCircleIcon as CompletedCheckCircleIcon} from "@heroicons/react/solid";

function TodoList(props) {
    let history = useHistory();

    function switchCompletedStatus(i) {
        const todo = {...props.todos[i], completed: !props.todos[i].completed};
        props.updateTodo(i, todo);
    }

    return (
        <div>
            {
                props.todos.length > 0 ? (
                    <>
                        <div className="todo-list max-w-4xl mx-auto">
                            <input type="text" className="rounded border w-full mt-2 px-3 py-1 focus:outline-none"
                                   onChange={e => props.setSearchText(e.target.value)}
                                   placeholder="Input Search Todo Text"/>
                            {
                                props.todos.map((todo, index) => (
                                    todo.name.includes(props.searchText) && (
                                        <div
                                            className="rounded-lg select-none relative px-3 py-4 mt-5 max-w-full border"
                                            key={index}>
                                            <p className="px-2">
                                                代辦事項名稱:{todo.name}
                                            </p>

                                            <p className="px-2">
                                                代辦事項描述:{todo.description}
                                            </p>

                                            <div className="absolute top-7 right-2 flex">
                                                <XCircleIcon onClick={() => props.deleteTodo(index)}
                                                             className="w-5 h-5 text-gray-700 cursor-pointer"/>
                                                <PencilIcon onClick={() => history.push('updateTodo/' + index)}
                                                            className="w-5 h-5 text-gray-700 cursor-pointer"/>
                                                {(todo.completed) ?
                                                    <CompletedCheckCircleIcon
                                                        onClick={e => switchCompletedStatus(index)}
                                                        className="w-5 h-5 text-gray-700 cursor-pointer"/> :
                                                    <UnCompletedCheckCircleIcon
                                                        onClick={e => switchCompletedStatus(index)}
                                                        className="w-5 h-5 text-gray-700 cursor-pointer"/>}
                                            </div>
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <div className="text-center font-semibold text-3xl text-gray-700">Not Found Any Todos...</div>
                )
            }
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos,
    searchText: state.searchText
});

const mapDispatchToProps = {
    updateTodo,
    deleteTodo,
    setSearchText,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);