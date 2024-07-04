import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </ContextProvider>
    </>
  );
}
export default App;
