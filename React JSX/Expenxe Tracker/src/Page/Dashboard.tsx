import { useEffect, useRef, useState } from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  LayoutDashboard,
  ArrowLeftRight,
  ChartNoAxesCombined,
  Settings,
  Menu,
  X,
  Plus,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  BriefcaseBusiness,
  Utensils,
  Zap,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import AddExpense from "../component/AddExpense";
import type { Expense } from "../expense/expense";
import { subscribeToExpenses } from "../expense/expenseService";

const transactions = [
  {
    id: 1,
    title: "Monthly Salary",
    category: "Income",
    date: "Oct 14, 2026",
    amount: 5000,
    type: "income",
  },
  {
    id: 2,
    title: "Grocery Shopping",
    category: "Food",
    date: "Oct 13, 2026",
    amount: 120,
    type: "expense",
  },
  {
    id: 3,
    title: "Internet Bill",
    category: "Utilities",
    date: "Oct 12, 2026",
    amount: 60,
    type: "expense",
  },
  {
    id: 4,
    title: "Freelance Project",
    category: "Income",
    date: "Oct 11, 2026",
    amount: 2500,
    type: "income",
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: "Total Balance",
      amount: "$5,240.00",
      change: "+8.2% this month",
      icon: Wallet,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
    {
      title: "Total Income",
      amount: "$7,500.00",
      change: "This month",
      icon: TrendingUp,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      title: "Total Expenses",
      amount: "$2,260.00",
      change: "This month",
      icon: TrendingDown,
      color: "text-rose-400",
      bg: "bg-rose-400/10",
    },
    {
      title: "Savings Rate",
      amount: "69.9%",
      change: "Income saved",
      icon: PiggyBank,
      color: "text-violet-400",
      bg: "bg-violet-400/10",
    },
  ];

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true, url: "/" },
    {
      label: "Transactions",
      icon: ArrowLeftRight,
      active: false,
      url: "/transaction",
    },
    {
      label: "Analytics",
      icon: ChartNoAxesCombined,
      active: false,
      url: "/analytics",
    },
    { label: "Settings", icon: Settings, active: false, url: "setting" },
  ];
  const [transactions, setTransactions] = useState<Expense[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState(true);
  const [transactionError, setTransactionError] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToExpenses(
      (expenses) => {
        setTransactions(expenses);
        setLoadingTransactions(false);
        setTransactionError("");
      },
      (error) => {
        setTransactionError(error.message);
        setLoadingTransactions(false);
      },
    );

    return unsubscribe;
  }, []);

  //   console.log();

  const navigate = useNavigate();

  const logOutUser = async () => {
    try {
      await signOut(auth);
      console.log("Sign-out successful.");
      navigate("/");
      // Redirect or update UI here
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const AddExpenseRef = useRef<HTMLDivElement>(null);

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

          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mb-3 mt-10 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Workspace
        </p>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link to={item.url}>
                {" "}
                <button
                  key={item.label}
                  type="button"
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    item.active
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  {item.label}
                </button>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-4">
          {/* <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <PiggyBank size={22} />
          </div> */}

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
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open sidebar"
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-white/10 p-2 text-slate-300 lg:hidden"
            >
              <Menu size={20} />
            </button>

            <div>
              <h2 className="text-lg font-bold sm:text-xl">Dashboard</h2>
              <p className="hidden text-xs text-slate-500 sm:block">
                Here's your financial overview.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
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
            <button onClick={logOutUser} className="cursor-pointer">
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
                Welcome back, Arman 👋
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Here's what's happening with your money today.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                AddExpenseRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <Plus size={19} />
              Add Transaction
            </button>
          </section>

          {/* Summary Cards */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-white/[0.07] bg-[#101B30] p-5 transition hover:-translate-y-1 hover:border-cyan-400/20"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">{stat.title}</p>

                    <div className={`rounded-xl p-3 ${stat.bg} ${stat.color}`}>
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                    {stat.amount}
                  </h3>

                  <p className="mt-3 text-xs text-slate-500">{stat.change}</p>
                </div>
              );
            })}
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
                {[
                  { month: "May", income: 65, expense: 35 },
                  { month: "Jun", income: 85, expense: 45 },
                  { month: "Jul", income: 55, expense: 30 },
                  { month: "Aug", income: 75, expense: 50 },
                  { month: "Sep", income: 90, expense: 40 },
                  { month: "Oct", income: 70, expense: 35 },
                ].map((bar) => (
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
                  <p className="text-2xl font-bold">$2,260</p>
                  <p className="mt-1 text-xs text-slate-500">Total spent</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Food",
                    amount: "$820",
                    color: "bg-cyan-400",
                    icon: Utensils,
                  },
                  {
                    name: "Shopping",
                    amount: "$640",
                    color: "bg-indigo-500",
                    icon: ShoppingCart,
                  },
                  {
                    name: "Bills",
                    amount: "$500",
                    color: "bg-violet-500",
                    icon: Zap,
                  },
                  {
                    name: "Other",
                    amount: "$300",
                    color: "bg-emerald-400",
                    icon: BriefcaseBusiness,
                  },
                ].map((category) => {
                  const Icon = category.icon;

                  return (
                    <div
                      key={category.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={17} className="text-slate-400" />
                        <span className="text-sm text-slate-300">
                          {category.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${category.color}`}
                        />
                        <span className="text-sm font-medium">
                          {category.amount}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Transactions */}
          <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101B30]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] p-5 sm:p-6">
              <div>
                <h3 className="font-bold">Recent Transactions</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Your latest financial activity
                </p>
              </div>

              <button
                type="button"
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                View all →
              </button>
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
                  {loadingTransactions ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-8 text-center text-slate-400"
                      >
                        Loading transactions...
                      </td>
                    </tr>
                  ) : transactionError ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-8 text-center text-rose-400"
                      >
                        {transactionError}
                      </td>
                    </tr>
                  ) : transactions.length === 0 ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-8 text-center text-slate-400"
                      >
                        No transactions yet. Add your first transaction.
                      </td>
                    </tr>
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
          <div ref={AddExpenseRef} className="scroll-mt-24">
            <AddExpense />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
