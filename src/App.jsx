import "./App.css";
import Router from "./router/Router";
import AppContextProvider from "./AppContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </>
  );
}

export default App;
