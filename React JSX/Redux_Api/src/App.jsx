import React, { useEffect } from "react";
import UserCard from "./component/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { allUserThunk } from "./feauter/users";

const App = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(allUserThunk());
  }, []);
  return (
    <>
      <div>App</div>
      <div className="flex flex-wrap gap-20 justify-center">
        {" "}
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </>
  );
};

export default App;
