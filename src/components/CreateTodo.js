import {useState} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {addTodo} from "../redux/actions";

function CreateTodo(props) {
    let [todo, setTodo] = useState({
        name: '',
        description: '',
        completed: false
    });
    let history = useHistory();

    function createTodo() {
        if (todo.name.length === 0 || todo.description.length === 0) {
            alert('Not Pass Validation');
        } else {
            props.addTodo(todo);
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            id="name" type="text" placeholder="Name"/>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <input
                            onChange={e => setTodo({...todo, description: e.target.value})}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            id="description" type="text" placeholder="Description"/>
                    </div>

                    <button
                        onClick={() => createTodo()}
                        className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="button">
                        Create Todo
                    </button>
                </form>

            </div>
        </>
    );
}

const mapDispatchToProps = {
    addTodo,
}

export default connect(null, mapDispatchToProps)(CreateTodo);