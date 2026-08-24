import React from 'react'

const Btn = ({ btn, Handler }) => {
    return (
        <button onClick={Handler}
            className=" cursor-pointer
              group relative w-full overflow-hidden
              rounded-xl
              bg-gradient-to-r from-purple-600 to-pink-600
              py-3 font-semibold text-white
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-xl hover:shadow-purple-500/30
              active:scale-95
            "
        >
            {/* <span className="relative z-10"> */}
            {btn}
            {/* </span> */}

            <div
                className="
                absolute inset-0
                -translate-x-full
                bg-white/20
                transition-transform duration-500
                group-hover:translate-x-full
              "
            ></div>
        </button>
    )
}

export default Btn