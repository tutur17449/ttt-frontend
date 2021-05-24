import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Game from "./pages/Game";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/game/:id" component={Game} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
