import { Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </>
  );
}

export default App;
