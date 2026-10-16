
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowDownRight,
  ArrowUpRight,
  Wallet,
  ReceiptText,
  TrendingUp,
  TrendingDown,
  ChartNoAxesCombined,
  LoaderCircle,
  CalendarDays,
} from "lucide-react";
import type { Expense } from "../expense/expense";
import { subscribeToExpenses } from "../expense/expenseService";



const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);

const Analytics = () => {
  const [transactions, setTransactions] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("all");

  useEffect(() => {
    const unsubscribe = subscribeToExpenses();

    // If your service uses a callback, use the callback signature
    // already implemented in your expenseService.ts.
    // See the note below this component.

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);

  const currentMonth = new Date().toISOString().slice(0, 7);

  const monthOptions = useMemo(() => {
    const options: { value: string; label: string }[] = [];

    for (let i = 0; i < 12; i++) {
      const date = new Date();
      date.setDate(1);
      date.setMonth(date.getMonth() - i);

      options.push({
        value: date.toISOString().slice(0, 7),
        label: date.toLocaleDateString("en", {
          month: "long",
          year: "numeric",
        }),
      });
    }

    return options;
  }, []);

  const filteredTransactions = useMemo(() => {
    if (selectedMonth === "all") return transactions;

    return transactions.filter((transaction) =>
      transaction.date?.startsWith(selectedMonth)
    );
  }, [transactions, selectedMonth]);

  const totalIncome = filteredTransactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const totalExpenses = filteredTransactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const balance = totalIncome - totalExpenses;

  const categoryData = useMemo(() => {
    const totals: Record<string, number> = {};

    filteredTransactions
      .filter((item) => item.type === "expense")
      .forEach((item) => {
        const category = item.category || "Other";
        totals[category] =
          (totals[category] || 0) + Number(item.amount || 0);
      });

    return Object.entries(totals)
      .map(([category, amount]) => ({ category, amount }))
      .sort((a, b) => b.amount - a.amount);
  }, [filteredTransactions]);

  const monthlyData = useMemo(() => {
    return [...monthOptions].reverse().slice(-6).map((month) => {
      const monthTransactions = transactions.filter((item) =>
        item.date?.startsWith(month.value)
      );

      const income = monthTransactions
        .filter((item) => item.type === "income")
        .reduce((sum, item) => sum + Number(item.amount || 0), 0);

      const expenses = monthTransactions
        .filter((item) => item.type === "expense")
        .reduce((sum, item) => sum + Number(item.amount || 0), 0);

      return {
        ...month,
        income,
        expenses,
      };
    });
  }, [transactions, monthOptions]);

  const maxMonthlyValue = Math.max(
    1,
    ...monthlyData.flatMap((item) => [item.income, item.expenses])
  );

  const maxCategoryValue = Math.max(
    1,
    ...categoryData.map((item) => item.amount)
  );

  const stats = [
    {
      label: "Total Income",
      value: totalIncome,
      icon: ArrowDownRight,
      color: "text-emerald-400",
      background: "bg-emerald-400/10",
    },
    {
      label: "Total Expenses",
      value: totalExpenses,
      icon: ArrowUpRight,
      color: "text-rose-400",
      background: "bg-rose-400/10",
    },
    {
      label: "Net Balance",
      value: balance,
      icon: Wallet,
      color: "text-cyan-400",
      background: "bg-cyan-400/10",
    },
    {
      label: "Transactions",
      value: filteredTransactions.length,
      icon: ReceiptText,
      color: "text-violet-400",
      background: "bg-violet-400/10",
      isCount: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] px-4 py-6 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Financial Analytics
            </h1>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Understand your income, spending and financial trends.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#111827] px-3 py-2.5">
            <CalendarDays className="text-cyan-400" size={19} />
            <select
              value={selectedMonth}
              onChange={(event) => setSelectedMonth(event.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none"
            >
              <option value="all" className="bg-[#111827]">
                All time
              </option>
              {monthOptions.map((month) => (
                <option
                  key={month.value}
                  value={month.value}
                  className="bg-[#111827]"
                >
                  {month.label}
                </option>
              ))}
            </select>
          </div>
        </header>

        {loading ? (
          <div className="flex min-h-64 items-center justify-center gap-3 text-slate-400">
            <LoaderCircle className="animate-spin" size={24} />
            Loading analytics...
          </div>
        ) : error ? (
          <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-5 text-rose-300">
            {error}
          </div>
        ) : (
          <>
            {/* Summary Cards */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800 bg-[#111827] p-5 transition hover:border-slate-600"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-400">{stat.label}</p>
                      <div className={`rounded-xl p-3 ${stat.background}`}>
                        <Icon className={stat.color} size={21} />
                      </div>
                    </div>

                    <h2 className="mt-5 break-words text-2xl font-bold sm:text-3xl">
                      {stat.isCount
                        ? stat.value
                        : formatCurrency(stat.value)}
                    </h2>

                    <p className="mt-2 text-xs text-slate-500">
                      {selectedMonth === "all"
                        ? "Across all recorded transactions"
                        : "For the selected month"}
                    </p>
                  </div>
                );
              })}
            </section>

            {/* Monthly Chart */}
            <section className="rounded-2xl border border-slate-800 bg-[#111827] p-5 sm:p-7">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/10 p-3">
                  <ChartNoAxesCombined
                    className="text-cyan-400"
                    size={23}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    Monthly Overview
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Income versus expenses over the last six months
                  </p>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-5 text-sm">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="h-3 w-3 rounded-sm bg-emerald-400" />
                  Income
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="h-3 w-3 rounded-sm bg-rose-400" />
                  Expenses
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-5">
                {monthlyData.map((month) => (
                  <div
                    key={month.value}
                    className="flex min-w-0 flex-col items-center"
                  >
                    <div className="flex h-48 w-full items-end justify-center gap-1.5 border-b border-slate-700 px-1 sm:gap-2">
                      <div
                        title={`Income: ${formatCurrency(month.income)}`}
                        className="w-1/3 max-w-8 rounded-t-md bg-emerald-400 transition-all"
                        style={{
                          height: `${Math.max(
                            month.income > 0 ? 4 : 0,
                            (month.income / maxMonthlyValue) * 100
                          )}%`,
                        }}
                      />
                      <div
                        title={`Expenses: ${formatCurrency(month.expenses)}`}
                        className="w-1/3 max-w-8 rounded-t-md bg-rose-400 transition-all"
                        style={{
                          height: `${Math.max(
                            month.expenses > 0 ? 4 : 0,
                            (month.expenses / maxMonthlyValue) * 100
                          )}%`,
                        }}
                      />
                    </div>

                    <p className="mt-3 text-center text-xs text-slate-400">
                      {month.label.split(" ")[0].slice(0, 3)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Category Breakdown and Insights */}
            <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5 sm:p-7">
                <h2 className="text-xl font-semibold">
                  Spending by Category
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Where your money is going
                </p>

                {categoryData.length === 0 ? (
                  <div className="py-12 text-center text-sm text-slate-500">
                    No expense categories available for this period.
                  </div>
                ) : (
                  <div className="mt-7 space-y-6">
                    {categoryData.map((item) => (
                      <div key={item.category}>
                        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                          <span className="truncate text-slate-300">
                            {item.category}
                          </span>
                          <span className="shrink-0 font-medium text-white">
                            {formatCurrency(item.amount)}
                          </span>
                        </div>

                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className="h-full rounded-full bg-cyan-400 transition-all"
                            style={{
                              width: `${(item.amount / maxCategoryValue) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#111827] p-5 sm:p-7">
                <h2 className="text-xl font-semibold">Financial Insights</h2>
                <p className="mt-1 text-sm text-slate-400">
                  A quick summary of your selected period
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex gap-3 rounded-xl bg-slate-800/60 p-4">
                    <TrendingUp
                      className="mt-1 shrink-0 text-emerald-400"
                      size={21}
                    />
                    <div>
                      <p className="font-medium text-white">
                        Income overview
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        You recorded {formatCurrency(totalIncome)} in income.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-xl bg-slate-800/60 p-4">
                    <TrendingDown
                      className="mt-1 shrink-0 text-rose-400"
                      size={21}
                    />
                    <div>
                      <p className="font-medium text-white">
                        Spending overview
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        Your recorded expenses total{" "}
                        {formatCurrency(totalExpenses)}.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-xl bg-slate-800/60 p-4">
                    <Wallet
                      className="mt-1 shrink-0 text-cyan-400"
                      size={21}
                    />
                    <div>
                      <p className="font-medium text-white">
                        {balance >= 0 ? "Positive balance" : "Negative balance"}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        Your net balance is {formatCurrency(balance)} for this
                        period.
                      </p>
                    </div>
                  </div>

                  {categoryData.length > 0 && (
                    <div className="rounded-xl border border-slate-700 p-4">
                      <p className="text-sm text-slate-400">
                        Highest spending category
                      </p>
                      <p className="mt-2 text-lg font-semibold text-cyan-400">
                        {categoryData[0].category}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        {formatCurrency(categoryData[0].amount)} recorded in
                        this category.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {filteredTransactions.length === 0 && (
              <div className="rounded-xl border border-slate-800 p-5 text-center text-sm text-slate-400">
                No transactions found for this period. Add transactions to see
                your analytics.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Analytics;
