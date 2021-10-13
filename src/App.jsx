import { Route, Switch } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          render={() => (
            <DashboardLayout>
              <Home />
            </DashboardLayout>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
