import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  LayoutDashboard,
  ArrowLeftRight,
  Menu,
  Plus,
  Search,
  Bell,
  ShoppingCart,
  BriefcaseBusiness,
  Utensils,
  Zap,
  Icon,
  TrendingDownIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, Links } from "react-router-dom";
import type { Expense } from "../expense/expense";
import { subscribeToExpenses } from "../expense/expenseService";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase/auth";

const stats = [
  {
    title: "Total Balance",
    amount: "$5,240.00",
    change: "+8.2% this month",
    icon: Wallet,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  // {
  //   title: "Total Income",
  //   amount: "$7,500.00",
  //   change: "This month",
  //   icon: TrendingUp,
  //   color: "text-emerald-400",
  //   bg: "bg-emerald-400/10",
  // },
  // {
  //   title: "Total Expenses",
  //   amount: "$2,260.00",
  //   change: "This month",
  //   icon: TrendingDown,
  //   color: "text-rose-400",
  //   bg: "bg-rose-400/10",
  // },
  // {
  //   title: "Savings Rate",
  //   amount: "69.9%",
  //   change: "Income saved",
  //   icon: PiggyBank,
  //   color: "text-violet-400",
  //   bg: "bg-violet-400/10",
  // },
];

const chartBars = [
  { month: "May", income: 65, expense: 35 },
  { month: "Jun", income: 85, expense: 45 },
  { month: "Jul", income: 55, expense: 30 },
  { month: "Aug", income: 75, expense: 50 },
  { month: "Sep", income: 90, expense: 40 },
  { month: "Oct", income: 70, expense: 35 },
];

const categories = [
  {
    icon: Utensils,
  },
  {
    icon: ShoppingCart,
  },
  {
    icon: Zap,
  },
  {
    icon: BriefcaseBusiness,
  },
];

const Dashboard = () => {
  const [transactions, setTransactions] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = subscribeToExpenses(
      (expense) => {
        setTransactions(expense);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      },
    );
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logOutHandler = async () => {
    try {
      await signOut(auth);
      console.log("Sign-out successful.");
      // Redirect or update UI state here
    } catch (error) {
      console.error("Error signing out:", error);
      // Handle error (e.g., show a toast/message to the user)
    }
  };

  const totalAmount = 50500;
  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const savingsRate = totalIncome > 0 ? (totalAmount / totalIncome) * 100 : 0;

  const totalSpent = totalExpense + totalIncome;

  return (
    <div className="min-h-screen bg-[#080F1F] text-slate-100">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/10 bg-[#0D172B] p-5 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-2 py-3">
          <h1 className="text-xl font-bold">
            Expense<span className="text-cyan-400">Tracker</span>
          </h1>
          <Menu
            onClick={() => setSidebarOpen(false)}
            size={20}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 lg:hidden"
          />
        </div>

        <p className="mb-3 mt-6 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500 lg:mt-10">
          Workspace
        </p>

        <nav className="flex flex-wrap gap-2 lg:flex-col">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-300"
          >
            <LayoutDashboard size={19} />
            Dashboard
          </Link>

          <Link
            to="/transaction"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <ArrowLeftRight size={19} />
            Transactions
          </Link>
        </nav>

        <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-4 lg:mt-auto">
          <h3 className="font-semibold">Save more, stress less</h3>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Keep track of your money and work toward your financial goals.
          </p>
        </div>
      </aside>
      {/* Main Content */}
      <main className="min-h-screen lg:ml-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/10 bg-[#080F1F]/90 px-4 py-4 backdrop-blur-xl sm:px-8">
          <div>
            <h2 className="text-lg font-bold sm:text-xl">Dashboard</h2>
            <p className="hidden text-xs text-slate-500 sm:block">
              Here's your financial overview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSidebarOpen(true)}
              className="hidden rounded-xl border border-white/10 p-2.5 text-slate-400 hover:bg-white/5 sm:block"
            >
              <Search size={19} />
            </button>

            <button
              type="button"
              aria-label="Notifications"
              className="relative rounded-xl border border-white/10 p-2.5 text-slate-400 hover:bg-white/5"
            >
              <Bell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400" />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 font-bold text-slate-950">
              A
            </div>
            <button
              onClick={logOutHandler}
              type="button"
              className="cursor-pointer text-sm text-slate-300"
            >
              Log Out
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-8 p-4 sm:p-8">
          {/* Welcome */}
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-cyan-400">Wednesday, October 14</p>
              <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
                Welcome back,{" "}
                {user?.displayName || user?.email?.split("@")[0] || "User"}👋
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Here's what's happening with your money today.
              </p>
            </div>

            <Link to={"/addtransaction"}>
              {" "}
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <Plus size={19} />
                Add Transaction
              </button>
            </Link>
          </section>

          {/* Summary Cards */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div
              // key={stat.title}
              className="rounded-2xl border border-white/[0.07] bg-[#101B30] p-5 transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="flex items-center justify-between ">
                <p className="text-sm text-slate-400">Total Balance</p>
                <div className={`rounded-xl p-3 bg-cyan-400/10 text-cyan-400`}>
                  <Wallet />
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                {totalAmount}
              </h3>
              {/* <p className="mt-3 text-xs text-slate-500"></p> */}
            </div>

            {/* Saving Rate  */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#101B30] p-5 transition hover:-translate-y-1 hover:border-cyan-400/20">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">Savings Rate</p>
                <div
                  className={`rounded-xl p-3 text-violet-400 bg-violet-400/10`}
                >
                  <PiggyBank />
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                {savingsRate.toFixed(1).toLocaleString()}%
              </h3>
              <p className="mt-3 text-xs text-slate-500"></p>
            </div>
            {/* Total income  */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#101B30] p-5 transition hover:-translate-y-1 hover:border-cyan-400/20">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">Total Income</p>
                <div
                  className={`rounded-xl p-3 bg-emerald-400/10 text-green-400`}
                >
                  <TrendingUp />
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                {totalIncome.toLocaleString()}
              </h3>
              <p className="mt-3 text-xs text-slate-500"></p>
            </div>
            {/* Total Expense  */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#101B30] p-5 transition hover:-translate-y-1 hover:border-cyan-400/20">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">Total Expense</p>
                <div className={`rounded-xl p-3 bg-rose-400/10 text-rose-400`}>
                  <TrendingDownIcon />
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                {totalExpense.toLocaleString()}
              </h3>
              <p className="mt-3 text-xs text-slate-500"></p>
            </div>
          </section>

          {/* Overview */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.07] bg-[#101B30] p-5 sm:p-6 xl:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold">Income vs Expenses</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Your monthly financial overview
                  </p>
                </div>
                <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300">
                  This month
                </span>
              </div>

              <div className="mt-8 flex h-48 items-end justify-around gap-3 border-b border-l border-white/10 px-3 sm:px-8">
                {chartBars.map((bar) => (
                  <div
                    key={bar.month}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                  >
                    <div className="flex h-full w-full items-end justify-center gap-1">
                      <div
                        style={{ height: `${bar.income}%` }}
                        className="w-3 rounded-t-md bg-cyan-400 sm:w-5"
                      />
                      <div
                        style={{ height: `${bar.expense}%` }}
                        className="w-3 rounded-t-md bg-indigo-500 sm:w-5"
                      />
                    </div>
                    <span className="mb-2 text-xs text-slate-500">
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-center gap-6">
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-sm bg-cyan-400" />
                  Income
                </span>
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-sm bg-indigo-500" />
                  Expenses
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-[#101B30] p-5 sm:p-6">
              <h3 className="font-bold">Expense Breakdown</h3>
              <p className="mt-1 text-xs text-slate-500">
                Spending by category
              </p>

              <div className="mx-auto my-8 flex h-40 w-40 items-center justify-center rounded-full border-[16px] border-cyan-400 border-r-indigo-500 border-b-violet-500 border-l-emerald-400">
                <div className="text-center">
                  <p className="text-2xl font-bold">${totalSpent}</p>
                  <p className="mt-1 text-xs text-slate-500">Total spent</p>
                </div>
              </div>

              <div className="space-y-4">
                {transactions.map((transaction) => {
                  // const Icon = transaction.icon;

                  return (
                    <div
                      key={transaction.title}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-300">
                          {transaction.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full`} />
                        <span className="text-sm font-medium">
                          {transaction.amount}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Recent Transactions */}
          <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101B30]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] p-5 sm:p-6">
              <div>
                <h3 className="font-bold">Recent Transactions</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Your latest financial activity
                </p>
              </div>
              <Link
                to="/transaction"
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                View all →
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[550px] text-left text-sm">
                <thead className="bg-white/[0.02] text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-medium">Transaction</th>
                    <th className="px-6 py-4 font-medium">Category</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 text-right font-medium">Amount</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/[0.06]">
                  {transactions.length === 0 ? (
                    <p className="font-medium text-slate-300">
                      No transactions found
                    </p>
                  ) : (
                    transactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="transition hover:bg-white/[0.02]"
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-200">
                            {transaction.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-400">
                          {transaction.category}
                        </td>
                        <td className="px-6 py-4 text-slate-500">
                          {transaction.date}
                        </td>
                        <td
                          className={`px-6 py-4 text-right font-semibold ${
                            transaction.type === "income"
                              ? "text-emerald-400"
                              : "text-rose-400"
                          }`}
                        >
                          {transaction.type === "income" ? "+" : "−"}$
                          {transaction.amount.toLocaleString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
