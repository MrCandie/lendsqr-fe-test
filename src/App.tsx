import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import ReusableSpinner from "./components/reusables/ReusableSpinner";

const Login = lazy(() => import("./components/auth/Login"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const ViewUser = lazy(() => import("./components/view-user/ViewUser"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <Login />
          </Suspense>
        }
        path="/login"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <Dashboard />
          </Suspense>
        }
        path="/"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <ViewUser />
          </Suspense>
        }
        path="/user/:id"
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
