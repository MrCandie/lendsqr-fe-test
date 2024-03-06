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
const NotFound = lazy(() => import("./components/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <Suspense fallback={<ReusableSpinner />}>
            <Login />
          </Suspense>
        }
        path="/login"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner />}>
            <Dashboard />
          </Suspense>
        }
        path="/"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner />}>
            <ViewUser />
          </Suspense>
        }
        path="/:id"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner />}>
            <NotFound />
          </Suspense>
        }
        path="*"
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
