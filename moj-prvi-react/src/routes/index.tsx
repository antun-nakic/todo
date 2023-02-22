import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import JosJednaKomponenta from "../components/JosJednaKomponenta";
import DemoFlowOfData from "../components/DemoFlowOfData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/demonstracijaTokaPodataka",
    element: <DemoFlowOfData />,
  },
  {
    path: "/nasaKomponenta",
    element: <JosJednaKomponenta />,
  },
]);

export default router;
