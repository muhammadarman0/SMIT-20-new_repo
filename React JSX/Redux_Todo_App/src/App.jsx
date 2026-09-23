import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodo, updateTodos } from "./App/slice/TodoSlice.js";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  const todos = useSelector((state) => state.todo.todos);

  const updateTodo = () => {
    dispatch(
      updateTodos({
        id: isEdit,
        title: input,
      }),
    );

    setIsEdit(null);
    setInput("");

    toast.success("Task updated successfully!");
  };

  const addTodoHandler = () => {
    if (input.trim() === "") {
      toast.error("Please enter a task");
      return;
    }

    if (isEdit !== null) {
      return updateTodo();
    }

    dispatch(
      addTodos({
        title: input,
        id: new Date().getTime(),
      }),
    );

    setInput("");

    toast.success("Task added successfully!");
  };

  const editTodoHandler = (todo) => {
    setIsEdit(todo.id);
    setInput(todo.title);
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
    toast.success("Task deleted!");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Main Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600">
              <span className="text-3xl">✓</span>
            </div>

            <h1 className="text-3xl font-bold text-white">My Todo List</h1>

            <p className="mt-2 text-sm text-slate-400">
              Manage your daily tasks
            </p>
          </div>

          {/* Input */}
          <div className="mb-7 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Enter a new task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodoHandler();
                }
              }}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500"
            />

            <button
              onClick={addTodoHandler}
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500 active:scale-95"
            >
              {isEdit !== null ? "Update" : "Add"}
            </button>
          </div>

          {/* Divider */}
          <div className="mb-5 h-px bg-slate-800" />

          {/* Task Header */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Your Tasks</h2>

            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-400">
              {todos.length} {todos.length === 1 ? "Task" : "Tasks"}
            </span>
          </div>

          {/* Tasks */}
          {todos.length > 0 ? (
            <div className="space-y-3">
              {todos.map((todo) => (
                <TodoItems
                  key={todo.id}
                  todo={todo}
                  editTodoHandler={editTodoHandler}
                  deleteHandler={deleteHandler}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-700 py-12 text-center">
              <p className="text-lg font-medium text-slate-400">
                No tasks found
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Add your first task above
              </p>
            </div>
          )}
        </div>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

const TodoItems = ({ todo, deleteHandler, editTodoHandler }) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-indigo-500">
      {/* Todo text */}
      <p className="break-words font-medium text-slate-200">{todo.title}</p>

      {/* Buttons */}
      <div className="flex shrink-0 gap-2">
        <button
          onClick={() => editTodoHandler(todo)}
          className="rounded-lg bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/20"
        >
          Edit
        </button>

        <button
          onClick={() => deleteHandler(todo.id)}
          className="rounded-lg bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default App;
