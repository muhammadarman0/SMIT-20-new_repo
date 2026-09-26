import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "./app/slice/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "35px",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            color: "#222",
          }}
        >
          Redux Counter
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginBottom: "25px",
          }}
        >
          <button
            onClick={() => dispatch(decrement())}
            style={{
              width: "50px",
              height: "50px",
              border: "none",
              borderRadius: "10px",
              background: "#e53935",
              color: "#fff",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            −
          </button>

          <span
            style={{
              minWidth: "80px",
              fontSize: "40px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {count}
          </span>

          <button
            onClick={() => dispatch(increment())}
            style={{
              width: "50px",
              height: "50px",
              border: "none",
              borderRadius: "10px",
              background: "#2e7d32",
              color: "#fff",
              fontSize: "25px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;















// 18317653330