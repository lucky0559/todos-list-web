import { useReducer, useState, KeyboardEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { Action } from "../lib/enum/todoAction";
import { FiPlusCircle } from "react-icons/fi";
import TodoCard from "../components/TodoCard";
import { Todo } from "../types/TodoType";

type TodoAction = {
  type: Action;
  payload: Todo;
};

const todosReducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case Action.ADD_TODO:
      return [action.payload, ...state];
    case Action.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const [error, setError] = useState("");

  const [todo, setTodo] = useState("");

  const onAddTodo = () => {
    setError("");
    if (!todo.trim().length) {
      setTodo("");
      setError("Please enter todo");
    } else {
      dispatch({
        type: Action.ADD_TODO,
        payload: { id: uuidv4(), text: todo.trim() }
      });
      setTodo("");
    }
  };

  const onRemoveTodo = (id: string) => {
    dispatch({
      type: Action.REMOVE_TODO,
      payload: { id }
    });
  };

  const onEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAddTodo();
    }
  };

  return (
    <div className="flex-1 flex-col bg-primary min-h-screen p-10">
      <div>
        <span className="text-yellow text-7xl">Todo's</span>
      </div>
      <div className="flex flex-row justify-center items-center mt-5">
        <input
          placeholder="Enter Todo..."
          style={{ padding: 10, width: 380 }}
          className="p-3 mr-4 rounded-md drop-shadow-md"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          onKeyDown={onEnterPress}
        />
        <FiPlusCircle
          size={30}
          onClick={onAddTodo}
          className="hover:opacity-70 hover:cursor-pointer text-yellow"
        />
      </div>
      {error && <span className="text-red-500">{error}</span>}
      <div>
        {todos.map(todo => (
          <TodoCard todo={todo} onRemoveTodo={onRemoveTodo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
