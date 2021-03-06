import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Game from "./pages/Game";
import { AuthProvider } from "./hooks/useAuth";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <AuthProvider>
        <Provider store={store}>
          <Router>
            <main>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/game/:id" component={Game} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </Router>
        </Provider>
      </AuthProvider>
    </AnimatePresence>
  );
}

export default App;
