import {  useState, type FormEvent } from "react";
import Input from "./Input";
import Button from "./Button";
import { addExpense, type NewExpense } from "../expense/expenseService";

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const numericAmount = Number(amount);

    if (
      !title.trim() ||
      !amount ||
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      setError("Please enter a valid title and amount.");
      return;
    }

    const expense: NewExpense = {
      title: title.trim(),
      amount: numericAmount,
      category,
      type,
      date,
    };

    try {
      setLoading(true);
      await addExpense(expense);

      setTitle("");
      setAmount("");
      setCategory("Food");
      setType("expense");
      setDate(new Date().toISOString().slice(0, 10));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save transaction.",
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-lg sm:p-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Add Transaction</h2>
        <p className="mt-1 text-sm text-slate-500">
          Record your income and expenses.
        </p>
      </div>

      <Input
        label="Title"
        name="title"
        placeholder="e.g. Grocery shopping"
        value={title}
        onChange={setTitle}
        required
      />

      <Input
        label="Amount"
        name="amount"
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={setAmount}
        required
      />

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={inputClass}
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Salary">Salary</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Transaction Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "income" | "expense")}
          className={inputClass}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className={inputClass}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600"
        >
          {error}
        </p>
      )}

      <Button
        text={loading ? "Saving..." : "Add Transaction"}
        type="submit"
        disabled={loading}
      />
    </form>
  );
};

export default AddExpense;
