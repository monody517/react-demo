import React, { createContext, useContext, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";

const store = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.user };
    default:
      throw new Error();
  }
};

const Context = createContext(null);

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <User></User>
      <hr></hr>
    </Context.Provider>
  );
};

const User = (props) => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax("/user").then((user) => {
      dispatch({ type: "setUser", user: user });
    });
  }, []);
  return (
    <div>
      <h3>个人信息</h3>
      <div>name:{state.user ? state.user.name : ""}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
