import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import Layout from "../src/components/Layout";
import routes from "./routes";
import { NotFound } from "./allPagesPaths";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: routes
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
