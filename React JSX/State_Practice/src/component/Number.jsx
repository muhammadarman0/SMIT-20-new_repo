import React, { useState } from 'react'

const Number = () => {
    const [count, setCount] = useState(0)
    const increamnet = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">

            <div className="bg-white p-8 rounded-2xl shadow-xl text-center">

                <h1 className="text-3xl font-bold text-slate-800 mb-6">
                    Counter
                </h1>

                <div className="text-5xl font-bold text-indigo-600 mb-7">
                    {count}
                </div>

                <div className="flex gap-4">

                    <button
                        onClick={decrement}
                        className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 active:scale-95 transition"
                    >
                        Decrement
                    </button>
                    <button onClick={reset} className="px-5 py-3 rounded-xl bg-slate-500 text-white font-semibold hover:bg-slate-600 active:scale-95 transition">Reset</button>
                    <button
                        onClick={increamnet}
                        className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 active:scale-95 transition"
                    >
                        Increment
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Number