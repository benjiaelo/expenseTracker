import { store, persistor } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
