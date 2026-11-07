import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Arman",
    age: 18,
  });

  const updateAge = () => {
    setUser({
      ...user,
      age: 20,
    });
  };



  return (
    <div>
      <h1>{user.age}</h1>

      <button onClick={updateAge}>
        Update Age
      </button>
    </div>
  );
}

// export default App;


export default App;