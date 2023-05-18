import { appRouter } from "./Router/AppRouter";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
