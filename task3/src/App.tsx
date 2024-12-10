import { Provider } from "react-redux";
import "./App.css";
import ListUserPage from "./pages/ListUserPage";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ListUserPage />
    </Provider>
  );
}

export default App;
