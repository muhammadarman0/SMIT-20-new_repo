import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  ArrowDownRight,
  ArrowUpRight,
  ReceiptText,
} from "lucide-react";
import { subscribeToExpenses } from "../expense/expenseService";
import type { Expense } from "../expense/expense";

type FilterType = "all" | "income" | "expense";

const Transactions = () => {
  const [transactions, setTransactions] = useState<Expense[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToExpenses(
      (expenses) => {
        setTransactions(expenses);
        setLoading(false);
        setError("");
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        transaction.title.toLowerCase().includes(search.toLowerCase()) ||
        transaction.category.toLowerCase().includes(search.toLowerCase());

      const matchesFilter = filter === "all" || transaction.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [transactions, search, filter]);

  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <main className="min-h-screen bg-[#080F1F] p-4 text-slate-100 sm:p-8">
      <div className="mx-auto max-w-7xl space-y-7">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              aria-label="Back to dashboard"
              className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:bg-white/10"
            >
              <ArrowLeft size={20} />
            </Link>

            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">Transactions</h1>
              <p className="mt-1 text-sm text-slate-400">
                Manage your income and expenses.
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            + Add Transaction
          </Link>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#101B30] p-5">
            <div className="flex items-center gap-3 text-emerald-400">
              <ArrowUpRight size={22} />
              <span className="text-sm">Total Income</span>
            </div>
            <p className="mt-4 text-2xl font-bold">
              {totalIncome.toLocaleString()}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#101B30] p-5">
            <div className="flex items-center gap-3 text-rose-400">
              <ArrowDownRight size={22} />
              <span className="text-sm">Total Expenses</span>
            </div>
            <p className="mt-4 text-2xl font-bold">
              {totalExpenses.toLocaleString()}
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#101B30] p-4 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search title or category..."
                className="w-full rounded-xl border border-white/10 bg-[#080F1F] py-3 pl-10 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {(["all", "income", "expense"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${
                    filter === item
                      ? "bg-cyan-400 text-slate-950"
                      : "bg-white/5 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  {item === "all" ? "All" : item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="border-b border-white/10 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-4">Transaction</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4">Date</th>
                  <th className="px-4 py-4 text-right">Amount</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-12 text-center text-slate-400"
                    >
                      Loading transactions...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-12 text-center text-rose-400"
                    >
                      {error}
                    </td>
                  </tr>
                ) : filteredTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-12 text-center">
                      <ReceiptText
                        className="mx-auto mb-3 text-slate-500"
                        size={30}
                      />
                      <p className="font-medium text-slate-300">
                        No transactions found
                      </p>
                      <p className="mt-1 text-slate-500">
                        Try another search or filter.
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredTransactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="transition hover:bg-white/[0.03]"
                    >
                      <td className="px-4 py-4 font-medium text-slate-200">
                        {transaction.title}
                      </td>
                      <td className="px-4 py-4 text-slate-400">
                        {transaction.category}
                      </td>
                      <td className="px-4 py-4 text-slate-400">
                        {transaction.date}
                      </td>
                      <td
                        className={`px-4 py-4 text-right font-semibold ${
                          transaction.type === "income"
                            ? "text-emerald-400"
                            : "text-rose-400"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "−"}
                        {transaction.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {!loading && !error && filteredTransactions.length > 0 && (
            <p className="mt-4 text-xs text-slate-500">
              Showing {filteredTransactions.length} of {transactions.length}{" "}
              transactions
            </p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Transactions;
