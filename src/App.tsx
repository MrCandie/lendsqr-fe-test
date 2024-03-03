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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <Login />
          </Suspense>
        }
        path="/"
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
