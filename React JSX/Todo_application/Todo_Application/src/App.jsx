import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodoItem = () => {
    if (!input.trim()) {
      return toast("Enter a Task");
    }

    const todoItem = {
      title: input,
      id: Date.now(),
    };

    if (todos) {
      const sameTodosExit = todos.some(
        (items) => items.title.toLowerCase() === input.trim().toLowerCase(),
      );

      if (sameTodosExit) {
        return toast("This task is already list");
      }
    }

    if (editTodo) {
      const updateTodoList = todos.map((todo) =>
        todo.id == editTodo ? { ...todo, title: input } : todo,
      );

      setTodos(updateTodoList);
      setEditTodo(null);
      setInput("");
      return;
    }

    setTodos((prev) => [...prev, todoItem]);
    setInput("");
  };

  const editHandler = (id) => {
    const editItem = todos.find((item) => item.id == id);
    setEditTodo(editItem.id);
    setInput(editItem.title);
  };

  const deleteHandler = (id) => {
    let deleteItem = todos.filter((item) => item.id !== id);
    setTodos(deleteItem);
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-white px-4 py-8 sm:py-14 overflow-hidden">
      {/* Background Glow */}
      <div className="fixed top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-2xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.12)] animate-bounce-slow">
            <span className="text-3xl">✓</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Todo
            </span>
          </h1>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Plan it. Do it. Complete it.
          </p>
        </div>

        {/* INPUT CARD */}
        <div className="group relative mb-8">
          {/* Glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/30 via-fuchsia-500/20 to-purple-600/30 rounded-2xl blur opacity-40 group-focus-within:opacity-100 transition duration-500" />

          <div className="relative bg-[#11141c]/95 backdrop-blur-xl border border-gray-800 rounded-2xl p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="What do you need to do?"
                className="flex-1 bg-[#090b10] border border-gray-800 rounded-xl px-4 py-3.5 outline-none text-sm sm:text-base text-white placeholder-gray-600 focus:border-purple-500/70 focus:ring-4 focus:ring-purple-500/5 transition-all duration-300"
              />

              <button
                onClick={() => addTodoItem()}
                className={`relative overflow-hidden px-7 py-3.5 rounded-xl font-semibold cursor-pointer transition-all duration-300 active:scale-95 ${
                  editTodo
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500"
                }`}
              >
                <span className="relative z-10">
                  {editTodo ? "Update Todo" : "+ Add Todo"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* TASK COUNT */}
        {todos.length > 0 && (
          <div className="flex items-center justify-between mb-4 px-1 animate-fade-in">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
              Your Tasks
            </p>

            <span className="text-xs bg-purple-500/10 border border-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
              {todos.length} {todos.length === 1 ? "Task" : "Tasks"}
            </span>
          </div>
        )}

        {/* TODO LIST */}
        <div className="space-y-3">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <TodoList
                key={todo.id}
                todo={todo}
                index={index}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
              />
            ))
          ) : (
            /* EMPTY STATE */
            <div className="text-center py-16 px-5 rounded-2xl bg-[#11141c] border border-gray-800 animate-fade-in">
              <div className="mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-500/10 flex items-center justify-center mb-5">
                <span className="text-4xl">📝</span>
              </div>

              <h2 className="text-xl font-bold text-gray-300">No tasks yet</h2>

              <p className="text-sm text-gray-600 mt-2">
                Add a task above and let's get productive.
              </p>
            </div>
          )}
        </div>

        <ToastContainer theme="dark" position="top-right" autoClose={2000} />
      </div>
    </div>
  );
}

export default App;

/* TODO COMPONENT */

const TodoList = ({ todo, deleteHandler, editHandler, index }) => {
  return (
    <div
      className="todo-card group relative bg-[#11141c] border border-gray-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-purple-500/30 hover:bg-[#141720] hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(0,0,0,0.25)] transition-all duration-300"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Left */}
      <div className="flex items-start gap-3 min-w-0">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <span className="text-purple-400 text-lg">✓</span>
        </div>

        <div className="min-w-0">
          <h2 className="text-base sm:text-lg font-semibold text-gray-200 break-words">
            {todo.title}
          </h2>

          <p className="text-xs text-gray-600 mt-1">Added to your task list</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 w-full sm:w-auto">
        <button
          onClick={() => editHandler(todo.id)}
          className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-sm font-medium"
        >
          Edit
        </button>

        <button
          onClick={() => deleteHandler(todo.id)}
          className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/10 text-red-400 hover:bg-red-500/20 hover:border-red-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
