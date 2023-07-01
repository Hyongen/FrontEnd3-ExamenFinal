import { createContext, useState, useMemo, useEffect, useReducer} from "react";


export const initialState = {theme: "light", data: []}
export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};


export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  //Llamada a la API
  useMemo(async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatch({ type: "SET_DATA", payload: data });
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  }, []);

  //Consulta el tema actual
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch({ type: "SET_THEME", payload: storedTheme });
    }
  }, []);

  //Cambio del tema
  const changeTheme = () => {
    let temp;
    if (state.theme == "light"){
      temp = "dark"
    } else { 
      temp = "light"
    }
    localStorage.setItem("theme", temp);
    dispatch({ type: "SET_THEME", payload: temp });
    console.log(temp)
    console.log(state.theme)
  }

  //Guardar datos
  const newData = useMemo(() => (
    { theme: state.theme, data: state.data, changeTheme }), 
    [
      state.theme,
      state.data, 
    ]
  );


  return (
    <ContextGlobal.Provider value={{newData}}>
      {children}
    </ContextGlobal.Provider>
  );
};
