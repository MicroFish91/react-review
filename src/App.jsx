import { Route, Switch } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dogs from "./pages/Dogs";
import Home from "./pages/Home";
import Phonebook from "./pages/Phonebook";

const App = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <DashboardLayout>
              <Home />
            </DashboardLayout>
          )}
        />
        <Route
          exact
          path="/phonebook"
          render={() => (
            <DashboardLayout>
              <Phonebook />
            </DashboardLayout>
          )}
        />
        <Route
          exact
          path="/dogs"
          render={() => (
            <DashboardLayout>
              <Dogs />
            </DashboardLayout>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
