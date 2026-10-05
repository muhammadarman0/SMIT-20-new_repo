import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodos,
  deleteTodo,
  toggleComplete,
  updateTodos,
} from "./App/slice/TodoSlice.js";
import { toast, ToastContainer } from "react-toastify";
import {
  CheckCircle2,
  Circle,
  ClipboardList,
  Clock3,
  ListTodo,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";

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
        complete: false,
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
        complete: false,
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

  const completeTask = todos.filter((item) => item.complete);
  const pendingTask = todos.filter((item) => !item.complete);

  return (
    <div className="min-h-screen bg-[#f5f7fb] px-3 py-5 sm:px-5 sm:py-7 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* ================= HEADER ================= */}
        <header className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:mb-7 sm:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 shadow-md shadow-indigo-200 sm:h-12 sm:w-12">
                <ClipboardList
                  size={22}
                  strokeWidth={2}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[2px] text-indigo-600 sm:text-xs">
                  Task Manager
                </p>

                <h1 className="mt-1 text-[26px] font-bold tracking-tight text-slate-900 sm:text-3xl">
                  My Tasks
                </h1>

                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  Organize your day and stay productive.
                </p>
              </div>
            </div>

            <div className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 md:w-auto md:min-w-[150px]">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  Total
                </p>

                <p className="mt-0.5 text-xl font-bold text-slate-900">
                  {todos.length}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <ListTodo size={19} />
              </div>
            </div>
          </div>
        </header>

        {/* ================= STAT CARDS ================= */}
        <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {/* Total */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Total Tasks
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {todos.length}
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  All your tasks
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 sm:h-12 sm:w-12">
                <ListTodo size={21} />
              </div>
            </div>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">Completed</p>

                <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {completeTask.length}
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  Tasks completed
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-12 sm:w-12">
                <CheckCircle2 size={21} />
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">Pending</p>

                <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {pendingTask.length}
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  Tasks remaining
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 sm:h-12 sm:w-12">
                <Clock3 size={21} />
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <main className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          {/* ================= TASK SECTION ================= */}
          <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-7">
            {/* Section Header */}
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                  Your Tasks
                </h2>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Keep track of everything you need to do.
                </p>
              </div>

              <div className="flex h-9 min-w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 px-2.5">
                <span className="text-xs font-bold text-indigo-600 sm:text-sm">
                  {todos.length}
                </span>
              </div>
            </div>

            {/* ================= INPUT ================= */}
            <div
              className={`mb-6 rounded-xl border p-2.5 transition sm:p-3 ${
                isEdit !== null
                  ? "border-indigo-200 bg-indigo-50/40"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <div className="min-w-0 flex-1">
                  <input
                    type="text"
                    placeholder={
                      isEdit !== null
                        ? "Update your task..."
                        : "What needs to be done?"
                    }
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addTodoHandler();
                      }
                    }}
                    className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 sm:h-12 sm:px-4"
                  />
                </div>

                <button
                  onClick={addTodoHandler}
                  className="flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98] sm:h-12 sm:w-auto"
                >
                  {isEdit !== null ? (
                    <>
                      <Pencil size={16} />
                      Update Task
                    </>
                  ) : (
                    <>
                      <Plus size={17} />
                      Add Task
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* ================= TASK LIST ================= */}
            {todos.length > 0 ? (
              <div className="space-y-2.5 sm:space-y-3">
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
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 px-5 text-center sm:min-h-[300px]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm sm:h-14 sm:w-14">
                  <ClipboardList size={23} className="text-slate-400" />
                </div>

                <h3 className="text-sm font-semibold text-slate-700 sm:text-base">
                  No tasks yet
                </h3>

                <p className="mt-1 max-w-[260px] text-xs leading-5 text-slate-400 sm:text-sm">
                  Add your first task using the input above.
                </p>
              </div>
            )}
          </section>

          {/* ================= SIDEBAR ================= */}
          <aside className="space-y-4 xl:space-y-5">
            {/* Overview */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">
                Task Overview
              </h3>

              <div className="mt-4 space-y-2.5">
                <div className="flex items-center justify-between rounded-xl bg-indigo-50 px-3.5 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    <span className="text-xs font-medium text-slate-600">
                      Total Tasks
                    </span>
                  </div>

                  <span className="text-sm font-bold text-slate-900">
                    {todos.length}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-3.5 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-slate-600">
                      Completed
                    </span>
                  </div>

                  <span className="text-sm font-bold text-emerald-600">
                    {completeTask.length}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-amber-50 px-3.5 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-medium text-slate-600">
                      Pending
                    </span>
                  </div>

                  <span className="text-sm font-bold text-amber-600">
                    {pendingTask.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Productivity */}
            <div className="rounded-2xl bg-slate-900 p-5 shadow-lg sm:p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <CheckCircle2 size={19} className="text-white" />
              </div>

              <h3 className="text-base font-bold text-white sm:text-lg">
                Stay productive
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                Add your daily tasks and keep everything organized in one place.
              </p>
            </div>
          </aside>
        </main>
      </div>

      <ToastContainer
        position="bottom-right"
        theme="light"
        toastClassName="text-sm"
      />
    </div>
  );
};

/* =========================================================
   TODO ITEM
========================================================= */

const TodoItems = ({ todo, deleteHandler, editTodoHandler }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`rounded-xl border p-3.5 transition sm:p-4 ${
        todo.complete
          ? "border-emerald-200 bg-emerald-50/40"
          : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-sm"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Task Information */}
        <div className="flex min-w-0 items-start gap-3">
          <div
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9 ${
              todo.complete
                ? "bg-emerald-100 text-emerald-600"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            {todo.complete ? <CheckCircle2 size={18} /> : <Circle size={18} />}
          </div>

          <div className="min-w-0 flex-1">
            <p
              className={`break-words text-sm font-semibold leading-5 sm:text-[15px] ${
                todo.complete ? "text-slate-400 line-through" : "text-slate-800"
              }`}
            >
              {todo.title}
            </p>

            <p
              className={`mt-1 text-[10px] font-medium uppercase tracking-wide sm:text-[11px] ${
                todo.complete ? "text-emerald-600" : "text-slate-400"
              }`}
            >
              {todo.complete ? "Completed task" : "Pending task"}
            </p>
          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="grid grid-cols-3 gap-2 sm:flex sm:shrink-0">
          <button
            onClick={() => dispatch(toggleComplete(todo.id))}
            className={`flex h-9 items-center justify-center rounded-lg px-2.5 text-[11px] font-semibold transition sm:h-10 sm:px-3 sm:text-xs ${
              todo.complete
                ? "border border-amber-200 bg-amber-50 text-amber-600 hover:bg-amber-100"
                : "border border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
            }`}
          >
            {todo.complete ? "Pending" : "Complete"}
          </button>

          <button
            onClick={() => editTodoHandler(todo)}
            className={`flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-[11px] font-semibold transition sm:h-10 sm:px-3 sm:text-xs
    ${
      todo.complete
        ? "cursor-not-allowed opacity-50"
        : "text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
    }`}
            disabled={todo.complete}
          >
            <Pencil size={13} />
            Edit
          </button>

          <button
            onClick={() => deleteHandler(todo.id)}
            className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-red-100 bg-red-50 px-2.5 text-[11px] font-semibold text-red-500 transition hover:bg-red-100 sm:h-10 sm:px-3 sm:text-xs"
          >
            <Trash2 size={13} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
