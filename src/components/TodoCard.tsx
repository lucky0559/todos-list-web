import React from "react";
import { Todo } from "../types/TodoType";
import { MdDelete } from "react-icons/md";

type TodoCardProps = {
  todo: Todo;
  onRemoveTodo: (id: string) => void;
};

function TodoCard({ todo, onRemoveTodo }: TodoCardProps) {
  return (
    <div className="m-3 p-2 rounded-md drop-shadow-md bg-darkMintGreen h-16 justify-center items-center flex relative">
      <span className="text-white">{todo.text}</span>
      <MdDelete
        size={30}
        className="hover:opacity-70 hover:cursor-pointer text-red-600 absolute right-10"
        onClick={() => onRemoveTodo(todo.id)}
      />
    </div>
  );
}

export default TodoCard;
