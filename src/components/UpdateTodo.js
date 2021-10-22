import {useState} from "react";
import {connect} from "react-redux";
import {useParams,useHistory} from "react-router-dom";
import {updateTodo} from "../redux/actions";

function UpdateTodo(props) {
    let id = useParams().index
    let [todo, setTodo] = useState(props.todos[id]);
    let history = useHistory();

    function updateTodo() {
        if (todo.name.length === 0 || todo.description.length === 0) {
            alert('Not Pass Validation');
        } else {
            props.updateTodo(id, todo);
            history.push('/');
        }
    }

    return (
        <>
            <div className="w-full max-w-2xl mx-auto mt-5">
                <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            onChange={e => setTodo({...todo, name: e.target.value})}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={todo.name}
                            id="name" type="text" placeholder="Name"/>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <input
                            onChange={e => setTodo({...todo, description: e.target.value})}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            value={todo.description}
                            id="description" type="text" placeholder="Description"/>
                    </div>

                    <button
                        onClick={() => updateTodo()}
                        className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="button">
                        Create Todo
                    </button>
                </form>

            </div>
        </>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = {
    updateTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodo);