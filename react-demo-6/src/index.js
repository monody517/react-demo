import React, { createContext, useContext, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";

const store = {
  user: null,
  books: null,
  movies: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.user };
    case "setBooks":
      return { ...state, books: action.books };
    case "setMovies":
      return { ...state, movies: action.movies };
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
      <Movies></Movies>
      <Books></Books>
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

const Movies = (props) => {
  return (
    <div>
      <h3>电影</h3>
    </div>
  );
};

const Books = (props) => {
  return (
    <div>
      <h3>书</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === "/user") {
        resolve({
          id: 1,
          name: "Frank",
        });
      } else if (path === "/books") {
        resolve([
          {
            id: 1,
            name: "JavaScript 高级程序设计",
          },
          {
            id: 2,
            name: "JavaScript 精粹",
          },
        ]);
      } else if (path === "/movies") {
        resolve([
          {
            id: 1,
            name: "爱在黎明破晓前",
          },
          {
            id: 2,
            name: "恋恋笔记本",
          },
        ]);
      }
    }, 2000);
  });
}
