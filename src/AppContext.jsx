import React, { createContext, useReducer, useEffect } from "react";

const DATA = {
  totalNumberOfInterns: 0,
  totalNumberInAccra: 0,
  totalNumberInTakoradi: 0,
  interns: [],
};

export const AppContext = createContext({
  data: DATA,
});

const AppContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newIntern = {
          name: action.payload.name,
          startDate: action.payload.internshipStartDate,
          endDate: action.payload.intershipEndDate,
        };
        const newInterns = [...state.data.interns, newIntern];
        const newTotalNumberOfInterns = state.data.totalNumberOfInterns + 1;
        const newTotalNumberInAccra =
          action.payload.location === "Accra"
            ? state.data.totalNumberInAccra + 1
            : state.data.totalNumberInAccra;
        const newTotalNumberInTakoradi =
          action.payload.location === "Takoradi"
            ? state.data.totalNumberInTakoradi + 1
            : state.data.totalNumberInTakoradi;
        console.log({
          newIntern,
          newInterns,
          newTotalNumberInAccra,
          newTotalNumberInTakoradi,
          newTotalNumberOfInterns,
        });
        return {
          ...state,
          data: {
            ...state.data,
            interns: newInterns,
            totalNumberOfInterns: newTotalNumberOfInterns,
            totalNumberInAccra: newTotalNumberInAccra,
            totalNumberInTakoradi: newTotalNumberInTakoradi,
          },
        };
      default:
        return state;
    }
  };

  const [appState, setAppState] = useReducer(reducer, {
    data: DATA,
  });

  return (
    <AppContext.Provider value={{ ...appState, dispatch: setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
