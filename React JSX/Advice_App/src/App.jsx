import React, { useState } from 'react'

import './App.css'

let advices = [
  "Believe in yourself and keep learning.",
  "Practice every day, even if you learn something small.",
  "Don't compare your journey with others.",
  "Mistakes are part of learning.",
  "Stay consistent and keep moving forward.",
]


const App = React.memo(() => {
  const [step, setStep] = useState(1)

  // return(<>
  // <h1>Hello World</h1>
  // </>)
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-5">

      {/* Main Card */}
      <div className="w-full max-w-xl">

        {/* Heading */}
        <div className="text-center mb-8 animate-bounce">
          <div className="text-5xl mb-3">💡</div>

          <h1 className="text-4xl font-extrabold text-white">
            Advice App
          </h1>

          <p className="text-purple-100 mt-2">
            A little advice can change your day ✨
          </p>
        </div>


        {/* Card */}
        <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">

          {/* Decorative circles */}
          <div className="absolute -top-5 -right-5 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>

          <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-cyan-400 rounded-full blur-xl opacity-60 animate-pulse"></div>


          {/* Steps */}
          <ul className="relative flex justify-center items-center gap-5 mb-10">

            <li onClick={() => setStep(1)} className={`${step == 1 ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white" : " bg-white/20 border border-white/40 text-white"} w-14 h-14 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-orange-500/40 hover:scale-110 transition duration-300 cursor-pointer`}>
              1
            </li>

            <div className="w-12 h-1 bg-white/40 rounded-full"></div>

            <li onClick={() => setStep(2)} className={`${step == 2 ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white" : " bg-white/20 border border-white/40 text-white"} w-14 h-14 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-orange-500/40 hover:scale-110 transition duration-300 cursor-pointer`}>
              2
            </li>

            <div className="w-12 h-1 bg-white/40 rounded-full"></div>

            <li onClick={() => setStep(3)} className={`${step == 3 ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white" : " bg-white/20 border border-white/40 text-white"} w-14 h-14 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-orange-500/40 hover:scale-110 transition duration-300 cursor-pointer`}>
              3
            </li>
            <li onClick={() => setStep(4)} className={`${step == 4 ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white" : " bg-white/20 border border-white/40 text-white"} w-14 h-14 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-orange-500/40 hover:scale-110 transition duration-300 cursor-pointer`}>
              4
            </li>

            <div className="w-12 h-1 bg-white/40 rounded-full"></div>

            <li onClick={() => setStep(5)} className={`${step == 5 ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white" : " bg-white/20 border border-white/40 text-white"} w-14 h-14 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-orange-500/40 hover:scale-110 transition duration-300 cursor-pointer`}>
              5
            </li>



          </ul>


          {/* Advice Box */}
          <div className="relative bg-white rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition-all duration-500">

            {/* Quote */}
            <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/40 animate-pulse">
              <span className="text-3xl">💭</span>
            </div>

            <p className="text-sm font-bold tracking-[5px] text-purple-500 mb-4">
              ADVICE
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              {advices[step - 1]}
            </h2>

            <p className="text-gray-400 mt-4 text-sm">
              Keep learning • Keep practicing • Keep growing 🚀
            </p>

          </div>


          {/* Buttons */}
          <div className="relative flex justify-between items-center mt-8">

            <button onClick={() => step > 1 ? setStep(step - 1) : setStep(5)} className="group px-6 py-3 rounded-xl bg-white/20 border border-white/30 text-white font-bold backdrop-blur-md hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300">
              <span className="group-hover:-translate-x-1 inline-block transition">
                ←
              </span>

              Previous{" "}
            </button>


            <button onClick={() => step != 5 ? setStep(step + 1) : setStep(1)} className="group px-7 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-lg shadow-orange-500/30 hover:scale-105 hover:shadow-orange-500/50 transition-all duration-300">

              {" "}Next

              <span className="group-hover:translate-x-1 inline-block transition">
                →
              </span>

            </button>

          </div>

        </div>


        {/* Footer */}
        <p className="text-center text-white/70 text-sm mt-6">
          ✨ Believe in yourself and keep moving forward ✨
        </p>

      </div>

    </div>
  )



})

export default App